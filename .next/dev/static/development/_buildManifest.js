self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/admin": [
    "static/chunks/pages/admin.js"
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
    "/api/auth/[...nextauth]",
    "/api/login",
    "/api/newsletter",
    "/api/products",
    "/api/products/[id]",
    "/api/register",
    "/api/upload",
    "/checkout",
    "/login",
    "/products/[id]"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()