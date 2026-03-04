// React 应用入口文件

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { Provider } from 'react-redux'
import store from './store'
import 'normalize.css'

// 创建根节点并渲染应用
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Provider 包裹整个应用，使所有组件都能访问 Redux store */}
    <Provider store={store}>
      {/* RouterProvider 提供路由功能，管理页面的导航和渲染 */}
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
