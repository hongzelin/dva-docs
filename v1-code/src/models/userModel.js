/*
 * @Author: lin.zehong
 * @Date: 2018-11-26 09:26:21
 * @Last Modified by: lin.zehong
 * @Last Modified time: 2018-11-26 09:26:57
 * @Desc: user model
 */

import { query, toDelete, update, create } from '../services/userService';
import { message } from 'antd';

export default {
  namespace: 'user',

  state: {
    list: [],
    total: null,
    loading: false, // 控制加载状态
    current: 1, // 当前分页信息
    pageSize: 10, // 当前分页信息
    currentItem: {}, // 当前操作的用户对象
    modalVisible: false, // 弹出窗的显示状态
    modalType: 'create', // 弹出窗的类型（添加用户，编辑用户）
    isShowFooter: '', // 弹出窗是否显示footer
  },

  // Quick Start 已经介绍过 subscriptions 的概念，这里不在多说
  subscriptions: {
    setup({ dispatch, history }, state) {
      history.listen(location => {
        if (location.pathname === '/') {
          dispatch({
            type: 'query',
            payload: {}
          });
        }
      });
    },
  },

  effects: {
    *query({ payload }, { select, call, put }) {
      const params = Object.assign({ current: 1, pageSize: 10 }, payload);
      yield put({ type: 'showLoading' });
      let data = yield call(query, params);

      // 模拟查询，实际开发应该是后台直接过滤 begin
      if (params.name && data) {
        const filterData = data['data'].filter(item => item['name'].indexOf(params.name) > 0);
        data['data'] = filterData;
        data['page'].total = filterData.length;
      }
      // 模拟查询，实际开发应该是后台直接过滤 end

      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            total: data.page.total,
            current: data.page.current
          }
        });
      }
    },
    *create({ payload }, { call, put }) {
      yield put({ type: 'showLoading' });
      const result = yield call(create, { ...payload.currentItem });
      if (result.errCode === "0") {
        yield put({ type: 'createSuccess', payload });
      }
    },
    *'delete'({ payload }, { call, put, select }) {
      yield put({ type: 'showLoading' });
      const result = yield call(toDelete, payload);
      const { current } = yield select(state => state.user);
      payload['current'] = current; // 扩展，在哪页删除，应该删除成功后，查询出来的结果，还是哪一页。
      if (result.errCode === "0") {
        yield put({ type: 'deleteSuccess', payload });
      }
    },
    *update({ payload }, { put, call }) {
      yield put({ type: 'showLoading' });
      const result = yield call(update, payload.currentItem);
      if (result.errCode === "0") {
        yield put({ type: 'updateSuccess', payload: payload.currentItem });
      }
    },
  },

  reducers: {
    showLoading(state, action) { // 控制加载状态的 reducer
      return { ...state, loading: true }
    },
    showModal(state, action) { // 控制 Modal 显示状态的 reducer
      return { ...state, ...action.payload, modalVisible: true };
    },
    hideModal(state, action) {
      return { ...state, ...action.payload, modalVisible: false };
    },
    querySuccess(state, action) {
      return { ...state, ...action.payload, loading: false };
    },
    createSuccess(state, { payload }) {
      message.success('新增成功');
      // 界面显示
      const currentItem = payload.currentItem;
      currentItem['id'] = state.list.length + 1;
      state.list.push(currentItem);
      state['total'] = state.list.length + 1;
      // 界面显示 end
      return { ...state, ...payload, loading: false, modalVisible: false };
    },
    deleteSuccess(state, { payload }) {
      message.success('删除成功');
      const list = state.list.filter(item => item.id !== payload.id);
      state['total'] = list.length;
      return { ...state, list, ...payload, loading: false };
    },
    updateSuccess(state, { payload }) {
      message.success('更新成功');
      // 界面显示
      state.list = state.list.map(item => {
        if (item.id === payload.id) {
          item['name'] = payload.name;
          item['age'] = payload.age;
          item['address'] = payload.address;
        }
        return item;
      });
      // 界面显示 end
      return { ...state, loading: false, modalVisible: false };
    },
  }
}
