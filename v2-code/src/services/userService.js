/*
 * @Author: lin.zehong
 * @Date: 2018-11-23 15:37:46
 * @Last Modified by: lin.zehong
 * @Last Modified time: 2018-11-23 16:40:17
 * @Desc: user services
 */

import { post } from '../utils/request';

/**
 * 查询用户
 * @param {object} data - 请求参数
 * @param {number} current - 当前页数
 * @param {string} pageSize - 每页条数
 * @param {string} name - 用户名称
*/
export const query = ({ current, pageSize, name }) =>
  post('/users/query', { current, pageSize, name });

/**
* 删除用户
* @param {object} data - 请求参数
* @param {number} id - 用户id
*/
export const toDelete = ({ id }) =>
  post('/users/delete', { id });

/**
 * 更新用户
 * @param {object} data - 请求参数
 * @param {number} id - 用户id
 * @param {string} name - 用户名称
 * @param {string} age - 用户年龄
 * @param {string} address - 用户地址
*/
export const update = ({ id, name, age, address }) =>
  post('/users/update', { id, name, age, address });

/**
 * 新增用户
 * @param {object} data - 请求参数
 * @param {string} name - 用户名称
 * @param {string} age - 用户年龄
 * @param {string} address - 用户地址
*/
export const create = ({ name, age, address }) =>
  post('/users/create', { name, age, address });
