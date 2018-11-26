/*
 * @Author: lin.zehong
 * @Date: 2018-11-26 09:27:41
 * @Last Modified by:   lin.zehong
 * @Last Modified time: 2018-11-26 09:27:41
 * @Desc: 用户头部搜索
 */

import React from 'react';
import { Input, Button } from 'antd';
import styles from './UserSearch.less';

const Search = Input.Search;

const UserSearch = ({ dispatch }) => {
  function add() {
    dispatch({
      type: 'user/showModal',
      payload: {
        currentItem: {},
        modalType: 'create',
        isShowFooter: ''
      }
    })
  }
  return (
    <div className={styles.root}>
      <Search
        placeholder="请输入名称"
        onSearch={value => {
          dispatch({
            type: 'user/query',
            payload: {
              name: value
            }
          })
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
