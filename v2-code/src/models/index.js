const context = require.context('./', false, /\.js$/);

// 取出 keys
const keys = context.keys();

// 过滤index.js
const filterIndex = keys.filter(item => item !== './index.js');

// 获取对应的上下文
const result = filterIndex.map(item => context(item));

export default result;
