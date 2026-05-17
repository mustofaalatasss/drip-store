self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/admin": [
    "static/chunks/pages/admin.js"
  ],
  "/products/[id]": [
    "static/chunks/pages/products/[id].js"
  ],
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/_app",
    "/_error",
    "/admin",
    "/api/newsletter",
    "/api/products",
    "/api/products/[id]",
    "/products/[id]"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()