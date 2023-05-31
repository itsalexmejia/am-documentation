
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/ebautistam/am-documentation/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/ebautistam/am-documentation/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/ebautistam/am-documentation/src/pages/index.js"))
}

