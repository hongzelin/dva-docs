/*
 * @Author: lin.zehong
 * @Date: 2018-11-26 09:27:12
 * @Last Modified by: lin.zehong
 * @Last Modified time: 2018-11-26 09:27:37
 * @Desc: 用户新增、修改、详情的弹出窗
 */

import React from 'react';
import { Input, Modal, Form } from 'antd';
import styles from './UserModal.less';

const FormItem = Form.Item;
const modalTypeStr = {
  'create': '新增',
  'update': '更新',
  'detail': '详情',
}

const UserModal = ({ currentItem, dispatch, form, isShowFooter, modalType, visible }) => {

  function handleOk() {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      if (modalType === 'create') {
        delete fieldsValue.id; // 删除id属性
        dispatch({
          type: 'user/create',
          payload: {
            currentItem: fieldsValue
          }
        });
      } else if (modalType === 'update') {
        dispatch({
          type: 'user/update',
          payload: {
            currentItem: fieldsValue
          }
        });
      }
    });
  }

  function handleCancel() {
    dispatch({
      type: 'user/hideModal'
    })
  }

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };

  const { getFieldDecorator } = form;
  return (
    <div className={styles.root}>
      <Modal
        title={modalTypeStr[modalType]}
        visible={visible}
        onOk={() => handleOk()}
        onCancel={() => handleCancel()}
        destroyOnClose={true}
        {...isShowFooter}
      >
        <Form>
          <FormItem
            {...formItemLayout}
            label="id"
            style={{ display: 'none', }}
          >
            {getFieldDecorator('id', {
              initialValue: currentItem.id,
            })(
              <Input placeholder="id" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="用户名"
          >
            {getFieldDecorator('name', {
              initialValue: currentItem.name,
              rules: [{
                required: true, message: 'Please input your name!',
              }],
            })(
              <Input placeholder="请输入用户名" disabled={modalType === 'detail' ? true : false} />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="年龄"
          >
            {getFieldDecorator('age', {
              initialValue: currentItem.age,
              rules: [{
                required: true, message: 'Please input your age!',
              }],
            })(
              <Input placeholder="请输入年龄" disabled={modalType === 'detail' ? true : false} />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="地址"
          >
            {getFieldDecorator('address', {
              initialValue: currentItem.address,
              rules: [{
                required: true, message: 'Please input your address!',
              }],
            })(
              <Input placeholder="请输入地址" disabled={modalType === 'detail' ? true : false} />
            )}
          </FormItem>
        </Form>
      </Modal>
    </div>
  )
}

export default (Form.create({})(UserModal));
