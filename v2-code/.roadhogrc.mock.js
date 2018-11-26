/*
 * @Author: lin.zehong
 * @Date: 2018-11-26 10:04:52
 * @Last Modified by: lin.zehong
 * @Last Modified time: 2018-11-26 10:21:08
 * @Desc: mock，统一返回格式。
 * 统一返回格式，json对象需要按照下面的格式
 * {
 *  errCode：0 成功，-1 失败， 1 右上角提示错误；
 *  errMsg：'后台返回的提示信息'；
 *  data: 真正需要的数据，可以为 object、array。
 *  page: { // 如果有分页信息，需要返回page
 *    total: 总页数
 *    current: 当前页
 *  }
 * }
 *
 */
const ze = require('./.ze.mock.js');
const mockjs = require('mockjs');

export default {
  ...ze,
  'POST /api/users/query': (req, res) => {
    const params = req.body;
    const data = mockjs.mock({
      'data|100': [{
        'id|+1': 1,
        name: '@cname',
        'age|11-99': 1,
        address: '@region'
      }],
      page: {
        total: 100,
        current: params.current
      },
      errCode: '0',
      errMsg: 'SUCCESS',
    });
    res.status(200).json(data)
  },
  'POST /api/users/delete': (req, res) => {
    const params = req.body;
    const data = mockjs.mock({
      errCode: '0',
      errMsg: 'SUCCESS',
    });
    res.status(200).json(data)
  },
  'POST /api/users/update': (req, res) => {
    const params = req.body;
    const data = mockjs.mock({
      errCode: '0',
      errMsg: 'SUCCESS',
    });
    res.status(200).json(data)
  },
  'POST /api/users/create': (req, res) => {
    const params = req.body;
    const data = mockjs.mock({
      errCode: '0',
      errMsg: 'SUCCESS',
    });
    res.status(200).json(data)
  },
};
