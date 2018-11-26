const mockjs = require('mockjs');

const data = {
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


module.exports = data;
