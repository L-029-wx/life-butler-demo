import { onRequest as __api___path___js_onRequest } from "D:\\product-learning\\00毕业设计\\05图表图纸\\云端版\\functions\\api\\[[path]].js"

export const routes = [
    {
      routePath: "/api/:path*",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api___path___js_onRequest],
    },
  ]