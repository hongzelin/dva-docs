let variable = '';
if (process.env.API_ENV === 'test') { //测试环境
  variable = 'api';
} else if (process.env.API_ENV === 'prod' || process.env.API_ENV === 'dev') { // 生产和开发环境
  variable = '/prod';
}

export default {
  publicPath: variable // 测试环境和生产环境不一样
};
