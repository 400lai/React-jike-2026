import './index.scss'
import { Card, Form, Input, Button } from 'antd'
import logo from '@/assets/logo.png'

const Login = () => {
  // 表单提交成功的回调函数，当所有字段验证通过后触发
  const onFinish = values => {
    console.log('Success:', values); // 打印表单数据，包含 mobile 和 code 字段的值
  }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        {/* validateTrigger="onBlur": 设置表单验证触发时机为失去焦点时，避免输入过程中频繁提示错误 */}
        {/* onFinish={onFinish}: 表单验证通过后的提交处理函数，自动收集所有表单字段的数据 */}
        <Form onFinish={onFinish} validateTrigger="onBlur">
          <Form.Item 
          name="mobile"
          // 多条校验逻辑 先校验第一条 第一条通过之后再校验第二条
          rules={[
            { required: true, message: '请输入手机号' },
            { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' }]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
          name="code"
          rules={[{ required: true, message: '请输入验证码' }]}
          >
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login