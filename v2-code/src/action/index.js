/*
 * @Author: lin.zehong
 * @Date: 2018-11-26 11:10:54
 * @Last Modified by: lin.zehong
 * @Last Modified time: 2018-11-26 13:50:40
 * @Desc: action
 */

import { createAction } from 'redux-actions';

// user
export const userDelete = createAction('user/delete');
export const userQuery = createAction('user/query');
export const userCreate = createAction('user/create');
export const userUpdate = createAction('user/update');
export const userShowModal = createAction('user/showModal');
export const userHideModal = createAction('user/hideModal');
