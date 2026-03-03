// 组合redux子模块 + 导出store实例
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './modules/user' // 导入用户模块的 reducer

// 创建并导出 Redux store 实例
export default configureStore({
  reducer: {
    // 注册子模块 reducer
    // key: 'user' - 状态树中的字段名，通过 state.user 访问
    // value: userReducer - 对应的 reducer 函数
    user: userReducer
  }
})