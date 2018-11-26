# v1-code

该v1-code的代码是根据 https://github.com/hongzelin/dva-docs/blob/master/v1/zh-cn/tutorial/01-%E6%A6%82%E8%A6%81.md 的教程，进行编写和扩展。

# 扩展
- request.js支持跨域，新增post和get方法，统一返回数据格式。
```bash
统一返回格式，json对象需要按照下面的格式：
{
  errCode：0 成功，-1 失败， 1 右上角提示错误；
  errMsg：'后台返回的提示信息'；
  data: 真正需要的数据，可以为 object、array。
  page: { // 如果有分页信息，需要返回page
    total: 总页数
    current: 当前页
  }
}

```
- mock数据.roadhogrc.mock.js，安装使用mockjs，简化mock数据量；
  具体mock示例，可以参考官方例子：http://mockjs.com/examples.html

- 扩展.roadhogrc.mock.js，通过require，获取外部mock数据文件，各个开发人员独立一个mock文件，避免老是修改.roadhogrc.mock.js文件造成的冲突；

```bash
由于roadhog，配置文件的热更新和自动重启机制目前只支持以下文件：
  .roadhogrc
  .roadhogrc.js
  webpack.config.js
  theme 配置文件

所以，开发人员可以先在.roadhogrc.mock.js进行mock，最后再把mock的数据，
放入自己的mock文件即可，.roadhogrc.mock.js不要提交。

```

- 环境切换变量的实现，process.env.，需要安装cross-env库，需要把.webpackrc改为.webpackrc.js格式，最后在package.json新增相应的参数。参考：https://github.com/sorrycc/roadhog/issues/271
