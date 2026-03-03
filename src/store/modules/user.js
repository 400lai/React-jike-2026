// 和用户相关的状态管理（Redux Toolkit）

import { createSlice } from '@reduxjs/toolkit'

// 创建 user 切片（slice），包含状态和修改方法
const userStore = createSlice({
  name: "user", // 切片名称，用于生成 action 的 type
  // 初始状态数据
  initialState: {
    token: '' // 用户登录凭证 token
  },
  // 同步修改方法（reducer 函数），用于更新状态
  reducers: {
    // 设置 token 的方法
    // state: 当前状态对象（RTK 使用 Immer，可以直接修改 state）
    // action: 包含 payload 数据的对象
    setToken (state, action) {
      state.token = action.payload // 将传入的 token 值赋给状态
    }
  }
})

// 解构出 action creator（用于 dispatch 触发状态更新）
const { setToken } = userStore.actions

// 获取 reducer 函数（用于注册到 store）
const userReducer = userStore.reducer

// 导出 action creator，供组件调用
export { setToken }

// 默认导出 reducer，用于配置 store
export default userReducer