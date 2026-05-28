self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/login": [
    "static/chunks/pages/login.js"
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
    "/checkout",
    "/login",
    "/products/[id]"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()