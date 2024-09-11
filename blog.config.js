const BLOG = {
  // Notion 页面 ID，如果没有设置环境变量，使用默认值
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '02ab3b8678004aa69e9e415905ef32a5,en:7c1d570661754c8fbc568e00a01fd70e',

  // 是否使用伪静态路径，开启后 URL 以 `.html` 结尾
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC === 'true' || false,

  // 页面重新验证的时间间隔，单位为秒，默认 5 秒
  NEXT_REVALIDATE_SECOND: Number(process.env.NEXT_PUBLIC_REVALIDATE_SECOND) || 5,

  // 当前主题名称，默认 'commerce'
  THEME: process.env.NEXT_PUBLIC_THEME && process.env.NEXT_PUBLIC_THEME !== '' ? process.env.NEXT_PUBLIC_THEME : 'commerce',

  // 是否显示主题切换按钮，默认为 true
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH === 'true' || true,

  // 网站语言，默认为中文简体 'zh-CN'
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN',

  // 网站起始年份，如果未定义则使用当前年份
  SINCE: Number(process.env.NEXT_PUBLIC_SINCE) || new Date().getFullYear(),

  // 外观主题，支持 'light', 'dark', 'auto'，默认为 'light'
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light',

  // 夜间模式的起止时间，默认为 [18, 6]，使用 JSON 解析
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME ? JSON.parse(process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME) : [18, 6],

  // 是否按照文章数量对标签排序，默认启用
  TAG_SORT_BY_COUNT: true,

  // 对于相同名称的标签是否使用不同颜色，默认启用
  IS_TAG_COLOR_DISTINGUISHED: process.env.NEXT_PUBLIC_IS_TAG_COLOR_DISTINGUISHED === 'true',

  // 欢迎语，多条语句以英文逗号隔开
  GREETING_WORDS: process.env.NEXT_PUBLIC_GREETING_WORDS || 'Hi，欢迎来到我的博客🎉',

  // 是否启用自定义菜单功能，默认启用
  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU === 'true' || true,

  // 作者的名字，默认 'Soren'
  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'Soren',

  // 作者简介，默认 '个人博客'
  BIO: process.env.NEXT_PUBLIC_BIO || '个人博客',

  // 网站链接，默认 'sorenskr.vercel.app'
  LINK: process.env.NEXT_PUBLIC_LINK || 'sorenskr.vercel.app',

  // 网站关键词，用英文逗号分隔
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'Notion, 博客',

  // 联系方式配置，可以为空值
  CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'jiemucn@foxmail.com',
  CONTACT_WEIBO: process.env.NEXT_PUBLIC_CONTACT_WEIBO || '',
  CONTACT_TWITTER: process.env.NEXT_PUBLIC_CONTACT_TWITTER || '',
  CONTACT_GITHUB: process.env.NEXT_PUBLIC_CONTACT_GITHUB || 'https://github.com/Sorenskr/',
  CONTACT_TELEGRAM: process.env.NEXT_PUBLIC_CONTACT_TELEGRAM || 'https://t.me/Sorenskys',
  CONTACT_LINKEDIN: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || '',
  CONTACT_INSTAGRAM: process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM || '',
  CONTACT_BILIBILI: process.env.NEXT_PUBLIC_CONTACT_BILIBILI || '',
  CONTACT_YOUTUBE: process.env.NEXT_PUBLIC_CONTACT_YOUTUBE || '',
  CONTACT_XIAOHONGSHU: process.env.NEXT_PUBLIC_CONTACT_XIAOHONGSHU || '',
  CONTACT_ZHISHIXINGQIU: process.env.NEXT_PUBLIC_CONTACT_ZHISHIXINGQIU || '',
  CONTACT_WEHCHAT_PUBLIC: process.env.NEXT_PUBLIC_CONTACT_WEHCHAT_PUBLIC || '',

  // Notion API 域名配置，默认使用官方的 Notion 域名
  NOTION_HOST: process.env.NEXT_PUBLIC_NOTION_HOST || 'https://www.notion.so',

  // 网站的小图标（favicon），默认使用 /public/favicon.ico
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico',

  // 图片压缩配置，默认宽度为 800 像素
  IMAGE_COMPRESS_WIDTH: process.env.NEXT_PUBLIC_IMAGE_COMPRESS_WIDTH || 800,

  // 点击图片后放大的宽度，默认 1200 像素
  IMAGE_ZOOM_IN_WIDTH: process.env.NEXT_PUBLIC_IMAGE_ZOOM_IN_WIDTH || 1200,

  // 随机图片 API，未配置时将使用默认的图片
  RANDOM_IMAGE_URL: process.env.NEXT_PUBLIC_RANDOM_IMAGE_URL || '',

  // 触发图片替换的关键字，默认为 'images.unsplash.com'
  RANDOM_IMAGE_REPLACE_TEXT: process.env.NEXT_PUBLIC_RANDOM_IMAGE_NOT_REPLACE_TEXT || 'images.unsplash.com',

  // 网站字体配置，默认为无衬线字体
  FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || 'font-sans font-light',

  // 字体 URL 列表
  FONT_URL: [
    'https://fonts.googleapis.com/css?family=Bitter&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300&display=swap'
  ],

  // 无衬线字体列表
  FONT_SANS: [
    '"PingFang SC"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Microsoft YaHei"',
    'Arial',
    'sans-serif'
  ],

  // 衬线字体列表
  FONT_SERIF: [
    'Bitter',
    '"Noto Serif SC"',
    'SimSun',
    'Times',
    'serif'
  ],

  // font-awesome 图标库的路径
  FONT_AWESOME: process.env.NEXT_PUBLIC_FONT_AWESOME_PATH || 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',

  // 布局映射，不同路径展示不同的组件
  LAYOUT_MAPPINGS: {
    '-1': 'LayoutBase',
    '/': 'LayoutIndex',
    '/archive': 'LayoutArchive',
    '/page/[page]': 'LayoutPostList',
    '/category/[category]': 'LayoutPostList',
    '/category/[category]/page/[page]': 'LayoutPostList',
    '/tag/[tag]': 'LayoutPostList',
    '/tag/[tag]/page/[page]': 'LayoutPostList',
    '/search': 'LayoutSearch',
    '/search/[keyword]': 'LayoutSearch',
    '/search/[keyword]/page/[page]': 'LayoutSearch',
    '/404': 'Layout404',
    '/tag': 'LayoutTagIndex',
    '/category': 'LayoutCategoryIndex',
    '/[prefix]': 'LayoutSlug',
    '/[prefix]/[slug]': 'LayoutSlug',
    '/[prefix]/[slug]/[...suffix]': 'LayoutSlug',
    '/signin': 'LayoutSignIn',
    '/signup': 'LayoutSignUp'
  },

  // 是否允许复制页面内容，默认允许
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY === 'true' || true,

  // 自定义右键菜单功能的配置
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU: process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU === 'true' || true,
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_THEME_SWITCH: process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_THEME_SWITCH === 'true' || true,
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_DARK_MODE: process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_DARK_MODE === 'true' || true,
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_SHARE_LINK: process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_SHARE_LINK === 'true' || true,
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_RANDOM_POST: process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_RANDOM_POST === 'true' || true,
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_CATEGORY: process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_CATEGORY === 'true' || true,
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_TAG: process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_TAG === 'true' || true,

  // 自定义外部脚本和样式
  CUSTOM_EXTERNAL_JS: process.env.NEXT_PUBLIC_CUSTOM_EXTERNAL_JS ? process.env.NEXT_PUBLIC_CUSTOM_EXTERNAL_JS.split(',') : [''],
  CUSTOM_EXTERNAL_CSS: process.env.NEXT_PUBLIC_CUSTOM_EXTERNAL_CSS ? process.env.NEXT_PUBLIC_CUSTOM_EXTERNAL_CSS.split(',') : [''],

  // 侧边栏是否反转（左右切换）
  LAYOUT_SIDEBAR_REVERSE: process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE === 'true' || false,

  // Facebook 页面的配置
  FACEBOOK_PAGE_TITLE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null,
  FACEBOOK_PAGE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null,
  FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '',
  FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '',

  // 各类动态特效的开关配置
  FIREWORKS: process.env.NEXT_PUBLIC_FIREWORKS === 'true' || false,
  FIREWORKS_COLOR: process.env.NEXT_PUBLIC_FIREWORKS_COLOR ? process.env.NEXT_PUBLIC_FIREWORKS_COLOR.split(',') : [
    '255, 20, 97',
    '24, 255, 146',
    '90, 135, 255',
    '251, 243, 140'
  ],
  MOUSE_FOLLOW: process.env.NEXT_PUBLIC_MOUSE_FOLLOW === 'true' || false,
  SAKURA: process.env.NEXT_PUBLIC_SAKURA === 'true' || false,
  NEST: process.env.NEXT_PUBLIC_NEST === 'true' || false,
  FLUTTERINGRIBBON: process.env.NEXT_PUBLIC_FLUTTERINGRIBBON === 'true' || false,
  RIBBON: process.env.NEXT_PUBLIC_RIBBON === 'true' || false,
  STARRY_SKY: process.env.NEXT_PUBLIC_STARRY_SKY === 'true' || true,

  // 挂件组件的配置
  WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET === 'true' || true,
  WIDGET_PET_LINK: process.env.NEXT_PUBLIC_WIDGET_PET_LINK || 'https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json',
  WIDGET_PET_SWITCH_THEME: process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME === 'true' || true,

  // 音乐播放器的配置
  MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER === 'true' || false,
  MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE === 'true' || false,
  MUSIC_PLAYER_AUTO_PLAY: process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY === 'true' || false,
  MUSIC_PLAYER_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '0',
  MUSIC_PLAYER_CDN_URL: process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL || 'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js',
  MUSIC_PLAYER_ORDER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_ORDER || 'list',
  MUSIC_PLAYER_AUDIO_LIST: [
    {
      name: '风を共に舞う気持ち',
      artist: 'Falcom Sound Team jdk',
      url: 'https://music.163.com/song/media/outer/url?id=731419.mp3',
      cover: 'https://p2.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: '王都グランセル',
      artist: 'Falcom Sound Team jdk',
      url: 'https://music.163.com/song/media/outer/url?id=731355.mp3',
      cover: 'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    }
  ],

  // 网站分析与统计
  ANALYTICS_VERCEL: process.env.NEXT_PUBLIC_ANALYTICS_VERCEL === 'true' || true,
  ANALYTICS_GOOGLE_ID: process.env.NEXT_PUBLIC_ANALYTICS_GOOGLE_ID || '',
  ANALYTICS_BUSUANZI_ENABLE: process.env.NEXT_PUBLIC_ANALYTICS_BUSUANZI_ENABLE === 'true' || true,

  // RSS 订阅功能
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS === 'true' || true,

  // 自定义代码块设置
  PRISM_THEME_SWITCH: process.env.NEXT_PUBLIC_PRISM_THEME_SWITCH === 'true' || true,

  // 版本信息
  VERSION: process.env.NEXT_PUBLIC_VERSION || '1.0.0'
}

module.exports = BLOG
