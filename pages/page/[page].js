import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { getGlobalData, getPostBlocks } from '@/lib/db/getSiteData'
import { getLayoutByTheme } from '@/themes/theme'
import { useRouter } from 'next/router'

/**
 * 文章列表分页
 * @param {*} props
 * @returns
 */
const Page = (props) => {
  const router = useRouter()

  // 防止 router 未准备好时导致的错误
  if (!router) {
    return <div>Loading...</div> // 或者其他加载中的 UI
  }

  // 根据页面路径加载不同 Layout 文件
  const Layout = getLayoutByTheme({
    theme: siteConfig('THEME'),
    router,
  })

  return <Layout {...props} />
}

export async function getStaticPaths({ locale }) {
  const from = 'page-paths'
  const { postCount, NOTION_CONFIG } = await getGlobalData({ from, locale })
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', 12, NOTION_CONFIG)
  const totalPages = Math.ceil(postCount / POSTS_PER_PAGE)

  return {
    paths: Array.from({ length: totalPages - 1 }, (_, i) => ({
      params: { page: String(i + 2) }, // 确保 page 为字符串
    })),
    fallback: true, // 启用 fallback 模式
  }
}

export async function getStaticProps({ params: { page } }) {
  const pageNumber = parseInt(page, 10)

  // 检查 page 是否为有效数字
  if (isNaN(pageNumber) || pageNumber < 2) {
    return {
      notFound: true, // 如果 page 无效，则返回 404 页面
    }
  }

  const from = `page-${pageNumber}`
  const props = await getGlobalData({ from })
  const { allPages } = props

  const POST_PREVIEW_LINES = siteConfig(
    'POST_PREVIEW_LINES',
    12,
    props?.NOTION_CONFIG
  )

  const allPosts =
    allPages?.filter(
      (page) => page.type === 'Post' && page.status === 'Published'
    ) || [] // 确保 allPosts 不为 undefined

  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', 12, props?.NOTION_CONFIG)

  // 处理分页
  props.posts = allPosts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  props.page = pageNumber

  // 处理预览
  if (siteConfig('POST_LIST_PREVIEW', false, props?.NOTION_CONFIG)) {
    const postPromises = props.posts.map(async (post) => {
      if (post.password && post.password !== '') {
        return post
      }
      post.blockMap = await getPostBlocks(post.id, 'slug', POST_PREVIEW_LINES)
      return post
    })

    // 使用 Promise.all 并行化加载
    props.posts = await Promise.all(postPromises)
  }

  delete props.allPages

  return {
    props,
    revalidate: process.env.EXPORT
      ? false
      : siteConfig(
          'NEXT_REVALIDATE_SECOND',
          BLOG.NEXT_REVALIDATE_SECOND,
          props.NOTION_CONFIG
        ),
  }
}

export default Page
