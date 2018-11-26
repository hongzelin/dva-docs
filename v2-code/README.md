# v2-code

该v2-code的代码是在v1-code的基础上进行扩展和优化代码。

# 扩展
- 新增中文国际化

- 切换HashRouter路由为BrowserRouter路由

- 使用 redux-actions库，统一组织action，更好的维护代码

- 使用webpack require.context 来初始化多个model，优化代码

- 使用antd Spin组件结合dva-loading插件，在项目最上层组件，利用dva-loading插件的global属性，只要发送异步请求，就展示loading状态；
