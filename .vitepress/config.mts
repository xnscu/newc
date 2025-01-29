import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
// import { generateSidebar } from "../sidebar"
import { version } from "../package.json";
import mathjax3 from "markdown-it-mathjax3";

// https://vitepress.dev/reference/site-config
// https://github.com/vuejs/vitepress/blob/main/docs/.vitepress/config/zh.ts
export default defineConfig({
  outDir: "dist",
  base: process.env.GITHUB_ACTIONS ? "/newc/" : "/",
  title: process.env.LOGO || "VitePressX",
  // markdown: {
  //   math: true,
  //   config(md) {
  //     md.use(mathjax3, {
  //       tex: { tags: "ams" },
  //     });
  //   },
  // },
  description: "由create-vitepressx创建的静态站点生成器",
  mpa: false,
  lang: "zh-Hans",
  cleanUrls: true,
  // locales: {
  // root: {
  // label: "English",
  // lang: "en",
  // },
  // zh: { label: "简体中文", lang: "zh" },
  // },
  head: [
    // [
    // "script",
    // {
    // defer: "",
    // src: "https://static.cloudflareinsights.com/beacon.min.js",
    // "data-cf-beacon": '{"token": "2595614415824c6c86cb58b36566cd3d"}',
    // },
    // ],
  ],
  themeConfig: {
    footer: {
      message: `version ${version}`,
    },
    logo: { src: "/vitepress-logo-mini.svg", width: 24, height: 24 },
    outline: {
      label: "页面导航",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    // editLink: {
    // pattern: "https://github.com/xnscu/newc/edit/master/:path",
    // text: "编辑",
    // },
    lastUpdated: {
      text: "更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: version, link: "" },
      // { text: "示例", link: "/markdown-examples" },
    ],
    search: {
      provider: "local",
    },
    // socialLinks: [{ icon: "github", link: "https://github.com/xnscu/newc" }],
    sidebar: generateSidebar({
      /*
       * For detailed instructions, see the links below:
       * https://vitepress-sidebar.cdget.com//guide/api
       */
      // titleCallback: (title) => title,
      documentRootPath: "/",
      // scanStartPath: null, // will trigger ts error
      // resolvePath: null, // will trigger ts error
      // useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      frontmatterTitleFieldName: "title",
      useFolderTitleFromIndexFile: false,
      useFolderLinkFromIndexFile: false,
      hyphenToSpace: true,
      underscoreToSpace: true,
      capitalizeFirst: false,
      capitalizeEachWords: false,
      collapsed: true,
      collapseDepth: 1,
      sortMenusByName: false,
      sortMenusByFrontmatterOrder: false,
      sortMenusByFrontmatterDate: false,
      sortMenusOrderByDescending: false,
      sortMenusOrderNumericallyFromTitle: true,
      sortMenusOrderNumericallyFromLink: false,
      frontmatterOrderDefaultValue: 0,
      manualSortFileNameByPriority: ["first.md", "second", "third.md"],
      removePrefixAfterOrdering: false,
      prefixSeparator: ".",
      excludeFiles: ["README.md"],
      excludeFilesByFrontmatterFieldName: "exclude",
      excludePattern: ["bin/"],
      includeDotFiles: false,
      includeRootIndexFile: false,
      includeFolderIndexFile: false,
      includeEmptyFolder: false,
      // rootGroupText: "目录",
      // rootGroupLink: "https://github.com/xnscu",
      rootGroupCollapsed: false,
      convertSameNameSubFileToGroupIndexPage: false,
      folderLinkNotIncludesFileName: false,
      keepMarkdownSyntaxFromTitle: false,
      debugPrint: false,
    }),
  },
});
