/*
 * @Author: lin.zehong
 * @Date: 2018-11-26 09:23:59
 * @Last Modified by: lin.zehong
 * @Last Modified time: 2018-11-26 09:24:59
 * @Desc: 用户入口文件
 */

import UserList from './components/UserList';
import UserSearch from './components/UserSearch';
import UserModal from './components/UserModal';
import PropTypes from 'prop-types';
// 引入 connect 工具函数
import { connect } from 'dva';

// 引入对应的样式
// 可以暂时新建一个空的
import styles from './UserPage.less';

function UserPage({ location, dispatch, users }) {

  const {
    loading, list, total, current,
    currentItem, modalVisible, modalType, isShowFooter
  } = users;

  const userSearchProps = {
    dispatch
  };
  const userListProps = {
    dataSource: list,
    total,
    loading,
    current,
    dispatch
  };
  const userModalProps = {
    currentItem,
    dispatch,
    isShowFooter,
    modalType,
    visible: modalVisible
  };

  return (
    <div className={styles.normal}>
      {/* 用户筛选搜索框 */}
      <UserSearch {...userSearchProps} />
      {/* 用户信息展示列表 */}
      <UserList {...userListProps} />
      {/* 添加用户 & 修改用户弹出的浮层 */}
      <UserModal {...userModalProps} />
    </div>
  );
}

UserPage.propTypes = {
  user: PropTypes.object,
};

// 指定订阅数据，这里关联了 users
function mapStateToProps({ user }) {
  return {
    users: user
  };
}

export default connect(mapStateToProps)(UserPage);
