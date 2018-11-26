export default {
  define: {
    "process.env": {},
    "process.env.NODE_ENV": process.env.NODE_ENV,
    "process.env.API_ENV": process.env.API_ENV
  },
  extraBabelPlugins: [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
  ]
}
