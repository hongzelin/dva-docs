/*
 * @Author: lin.zehong
 * @Date: 2018-11-26 09:27:41
 * @Last Modified by: lin.zehong
 * @Last Modified time: 2018-11-26 13:40:53
 * @Desc: 用户头部搜索
 */

import React from 'react';
import { Input, Button } from 'antd';
import styles from './UserSearch.less';

const Search = Input.Search;

const UserSearch = ({ userShowModal, userQuery }) => {
  function add() {
    const params = {
      currentItem: {},
      modalType: 'create',
      isShowFooter: ''
    };
    userShowModal(params);
  }
  return (
    <div className={styles.root}>
      <Search
        placeholder="请输入名称"
        onSearch={value => {
          userQuery({ name: value });
        }}
        enterButton
        style={{ width: 260 }}
      />
      &nbsp;&nbsp;
      <Button type="primary" onClick={() => add()}>新增</Button>
    </div>
  )
}

export default UserSearch;
