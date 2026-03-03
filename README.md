# React 极客项目

基于 React 19 + Vite 7 + Ant Design 6 构建的现代化 Web 应用模板。

## 技术栈

- **React** 19.2.0 - 最新版本的 React 框架
- **Vite** 7.3.1 - 极速的前端构建工具
- **React Router** 7.13.1 - 声明式路由管理
- **Ant Design** 6.3.1 - 企业级 UI 组件库
- **Sass** 1.97.3 - CSS 预处理器

## 项目结构

```
react-jike/
├── src/
│   ├── pages/              # 页面组件
│   │   ├── Layout/         # 布局页面
│   │   │   ├── index.jsx
│   │   │   └── index.scss
│   │   └── Login/          # 登录页面
│   │       ├── index.jsx
│   │       └── index.scss
│   ├── router/             # 路由配置
│   │   └── index.js        # 路由实例
│   ├── assets/             # 静态资源（图片、字体等）
│   ├── App.jsx             # 主应用组件
│   ├── main.jsx            # 应用入口文件
│   └── index.scss          # 全局样式
├── public/                 # 公共静态资源
├── index.html              # HTML 入口
├── vite.config.js          # Vite 配置文件
├── jsconfig.json           # VSCode 路径别名配置
└── package.json            # 项目依赖配置
```

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

访问 http://localhost:5173/ 查看应用。

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

## 路由配置

项目已配置基础路由：

| 路径 | 组件 | 说明 |
|------|------|------|
| `/` | `<Layout />` | 布局页面 |
| `/login` | `<Login />` | 登录页面 |

### 添加新路由

在 `src/router/index.js` 中添加新的路由配置：

```javascript
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  // 添加新路由
  {
    path: "/about",
    element: <About />,
  },
]);

export default router;
```

## 路径别名

项目配置了 `@` 别名指向 `src` 目录：

```javascript
// 使用别名导入
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";

// 等同于
import Layout from "../pages/Layout";
import Login from "../pages/Login";
```

## 功能特性

- ✅ 热模块替换（HMR），开发体验流畅
- ✅ React Router v7 路由系统
- ✅ 路径别名 `@` 简化导入
- ✅ Ant Design v6 UI 组件库
- ✅ Sass 样式预处理
- ✅ ESLint 代码质量检查
- ✅ 响应式布局支持

## 🎯 开发建议

### 目录规范

1. **页面组件** - 放在 `src/pages/` 目录，按功能模块划分
2. **通用组件** - 放在 `src/components/` 目录，可复用组件
3. **静态资源** - 放在 `src/assets/` 目录，图片、字体等
4. **工具函数** - 放在 `src/utils/` 目录
5. **API 接口** - 放在 `src/api/` 目录

### 代码规范

1. 使用 `@` 别名简化导入路径
2. 页面组件放在 `src/pages/` 目录
3. 通用组件放在 `src/components/` 目录
4. 使用 Sass 编写样式，采用 BEM 命名规范
5. 遵循 ESLint 规则

## 许可证

MIT
