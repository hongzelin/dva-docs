/*
 * @Author: lin.zehong
 * @Date: 2018-11-26 09:23:59
 * @Last Modified by: lin.zehong
 * @Last Modified time: 2018-11-26 14:54:18
 * @Desc: 用户入口文件
 */

import UserList from './components/UserList';
import UserSearch from './components/UserSearch';
import UserModal from './components/UserModal';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
// 引入 connect 工具函数
import { connect } from 'dva';
import { userDelete, userQuery, userCreate, userUpdate, userShowModal, userHideModal } from '../../action';

// 引入对应的样式
// 可以暂时新建一个空的
import styles from './UserPage.less';

function UserPage({
  location,
  globalLoading,
  users,
  userDelete,
  userQuery,
  userCreate,
  userUpdate,
  userShowModal,
  userHideModal
}) {

  const {
    list,
    total,
    current,
    currentItem,
    modalVisible,
    modalType,
    isShowFooter
  } = users;

  const userSearchProps = {
    userShowModal,
    userQuery
  };
  const userListProps = {
    dataSource: list,
    total,
    current,
    userDelete,
    userShowModal,
    userQuery
  };
  const userModalProps = {
    currentItem,
    isShowFooter,
    modalType,
    visible: modalVisible,
    userCreate,
    userUpdate,
    userHideModal
  };

  return (
    <Spin spinning={globalLoading.global}>
      <div className={styles.normal}>
        {/* 用户筛选搜索框 */}
        <UserSearch {...userSearchProps} />
        {/* 用户信息展示列表 */}
        <UserList {...userListProps} />
        {/* 添加用户 & 修改用户弹出的浮层 */}
        <UserModal {...userModalProps} />
      </div>
    </Spin>
  );
}

UserPage.propTypes = {
  user: PropTypes.object,
};

// 指定订阅数据，这里关联了 users
function mapStateToProps({ user, loading }) {
  return {
    users: user,
    globalLoading: loading
  };
}

export default connect(mapStateToProps, {
  userDelete,
  userQuery,
  userCreate,
  userUpdate,
  userShowModal,
  userHideModal
})(UserPage);
