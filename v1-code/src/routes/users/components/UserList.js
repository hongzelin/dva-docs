/*
 * @Author: lin.zehong
 * @Date: 2018-11-26 09:24:35
 * @Last Modified by: lin.zehong
 * @Last Modified time: 2018-11-26 09:26:11
 * @Desc: 用户列表
 */

import React from 'react';
import { Table, Divider, Popconfirm } from 'antd';

// 采用 stateless 的写法
const UserList = ({
  total,
  current,
  loading,
  dataSource,
  dispatch
}) => {

  const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => <a onClick={() => detail(record)}>{text}</a>,
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: '操作',
    key: 'operation',
    render: (text, record) => (
      <div>
        <a onClick={() => edit(record)}>编辑</a>
        <Divider type="vertical" />
        <Popconfirm title="确定要删除吗？" onConfirm={() => toDelete(record.id)}>
          <a>删除</a>
        </Popconfirm>
      </div>
    ),
  }];

  // 定义分页对象
  const pagination = {
    total,
    current,
    pageSize: 10,
    onChange: (page, pageSize) => {
      dispatch({
        type: 'user/query',
        payload: { current: page, pageSize }
      });
    },
  };

  function toDelete(id) {
    dispatch({
      type: 'user/delete',
      payload: { id }
    })
  }

  function edit(record) {
    dispatch({
      type: 'user/showModal',
      payload: {
        currentItem: record,
        modalType: 'update',
        isShowFooter: ''
      }
    })
  }

  function detail(record) {
    dispatch({
      type: 'user/showModal',
      payload: {
        currentItem: record,
        modalType: 'detail',
        isShowFooter: { footer: null }
      }
    })
  }

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        pagination={pagination}
        rowKey={record => record.id}
      />
    </div>
  );
}

export default UserList;
