# React 极客项目

基于 **React 19** + **Vite 7** + **Ant Design 6** + **Redux Toolkit** 构建的现代化后台管理系统。

## 📦 技术栈

### 核心框架
- **React** 19.2.0 - 最新版本的 React 框架
- **Vite** 7.3.1 - 极速的前端构建工具
- **React Router** 7.13.1 - 声明式路由管理

### 状态管理
- **Redux Toolkit** 2.11.2 - Redux 官方推荐的状态管理工具
- **React Redux** 9.2.0 - React  bindings for Redux

### UI 组件
- **Ant Design** 6.3.1 - 企业级 UI 组件库
- **@ant-design/icons** 6.1.0 - Ant Design 图标库

### 数据请求与可视化
- **Axios** 1.13.6 - HTTP 请求库
- **ECharts** 6.0.0 - 数据可视化图表库

### 样式与工具
- **Sass** 1.97.3 - CSS 预处理器
- **Normalize.css** 8.0.1 - 浏览器样式重置

## 🚀 快速开始

### 环境要求
- Node.js >= 18
- pnpm >= 8

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

访问 [http://localhost:5173/](http://localhost:5173/) 查看应用。

### 构建生产版本

```bash
pnpm build
```

### 预览生产构建

```bash
pnpm preview
```

### 代码检查

```bash
pnpm lint
```

## 📁 项目结构

```
react-jike/
├── src/
│   ├── apis/               # API 接口模块
│   │   └── user.js         # 用户相关接口
│   ├── assets/             # 静态资源
│   │   ├── login.png
│   │   ├── logo.png
│   │   └── react.svg
│   ├── components/         # 通用组件
│   │   └── AuthRoute.jsx   # 路由守卫组件
│   ├── pages/              # 页面组件
│   │   ├── Article/        # 文章管理页面
│   │   ├── Home/           # 首页
│   │   │   ├── components/ # 首页子组件
│   │   │   │   └── BarChart.jsx
│   │   │   └── index.jsx
│   │   ├── Layout/         # 布局页面
│   │   │   ├── index.jsx
│   │   │   └── index.scss
│   │   ├── Login/          # 登录页面
│   │   │   ├── index.jsx
│   │   │   └── index.scss
│   │   └── Publish/        # 发布文章页面
│   │       └── index.jsx
│   ├── router/             # 路由配置
│   │   └── index.jsx
│   ├── store/              # Redux 状态管理
│   │   ├── modules/        # 状态模块
│   │   │   └── user.js     # 用户状态
│   │   └── index.js        # Store 配置
│   ├── utils/              # 工具函数
│   │   ├── index.js
│   │   ├── request.js      # Axios 封装
│   │   └── token.js        # Token 管理
│   ├── App.jsx             # 主应用组件
│   ├── main.jsx            # 应用入口
│   └── index.scss          # 全局样式
├── public/                 # 公共静态资源
├── index.html              # HTML 入口
├── vite.config.js          # Vite 配置
├── jsconfig.json           # VSCode 路径别名配置
├── package.json            # 项目依赖
└── README.md               # 项目文档
```

## 🛣️ 路由配置

| 路径 | 组件 | 说明 | 权限 |
|------|------|------|------|
| `/` | `<Layout />` | 布局页面 | 需要登录 |
| `/` (首页) | `<Home />` | 数据概览 | 需要登录 |
| `/article` | `<Article />` | 文章管理 | 需要登录 |
| `/publish` | `<Publish />` | 发布文章 | 需要登录 |
| `/login` | `<Login />` | 登录页面 | 公开 |

### 添加新路由

在 `src/router/index.jsx` 中添加新的路由配置：

```javascript
import { createBrowserRouter } from "react-router-dom";
import AuthRoute from "@/components/AuthRoute";
import Layout from "@/pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthRoute><Layout /></AuthRoute>,
    children: [
      {
        index: true,
        element: <Home />
      },
      // 添加新路由
      {
        path: "new-page",
        element: <NewPage />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  }
]);

export default router;
```

## 🔧 配置说明

### 路径别名

项目配置了 `@` 别名指向 `src` 目录：

```javascript
// 使用别名导入
import Layout from "@/pages/Layout";
import request from "@/utils/request";

// 等同于
import Layout from "../pages/Layout";
import request from "../utils/request";
```

### Vite 配置

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
```

## 📚 核心功能模块

### 1. 用户认证

- Token 管理（localStorage 持久化）
- 路由守卫（未登录自动跳转）
- 退出登录（清除 Token 和状态）

### 2. 状态管理

使用 Redux Toolkit 管理全局状态：

```javascript
// src/store/modules/user.js
import { createSlice } from '@reduxjs/toolkit'

const userStore = createSlice({
  name: "user",
  initialState: {
    token: '',
    userInfo: {}
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload
    },
    clearUserInfo(state) {
      state.token = ''
      state.userInfo = {}
    }
  }
})

export const { setToken, setUserInfo, clearUserInfo } = userStore.actions
export default userStore.reducer
```

### 3. HTTP 请求封装

```javascript
// src/utils/request.js
import axios from "axios"
import { getToken, removeToken } from "./token"
import router from "@/router"

const request = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout: 5000
})

// 请求拦截器 - 自动注入 Token
request.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// 响应拦截器 - 处理 401 错误
request.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response.status === 401) {
      removeToken()
      router.navigate('/login')
      window.location.reload()
    }
    return Promise.reject(error)
  }
)

export { request }
```

## 📝 开发规范

### 目录规范

1. **页面组件** - `src/pages/`，按功能模块划分
2. **通用组件** - `src/components/`，可复用组件
3. **API 接口** - `src/apis/`，按业务模块划分
4. **静态资源** - `src/assets/`，图片、字体等
5. **工具函数** - `src/utils/`
6. **状态管理** - `src/store/`

### 代码规范

1. 使用 `@` 别名简化导入路径
2. 页面组件使用 PascalCase 命名
3. 使用 Sass 编写样式，采用 BEM 命名规范
4. 遵循 ESLint 规则
5. 使用 `.jsx` 扩展名编写 JSX 代码

### 命名规范

- **组件文件** - PascalCase (如 `BarChart.jsx`)
- **样式文件** - kebab-case (如 `index.scss`)
- **工具函数** - camelCase (如 `getToken()`)
- **常量** - UPPER_SNAKE_CASE (如 `BASE_URL`)

## ✨ 功能特性

- ✅ 热模块替换（HMR），开发体验流畅
- ✅ React Router v7 路由系统
- ✅ Redux Toolkit 状态管理
- ✅ Axios 请求拦截器（Token 注入、错误处理）
- ✅ 路由守卫（未登录自动跳转）
- ✅ 路径别名 `@` 简化导入
- ✅ Ant Design v6 UI 组件库
- ✅ ECharts 数据可视化
- ✅ Sass 样式预处理
- ✅ ESLint 代码质量检查
- ✅ 响应式布局支持

## 📄 许可证

MIT
