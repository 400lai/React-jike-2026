# React 极客项目

基于 React 19 + Vite 7 构建的现代化 Web 应用模板。

## 技术栈

- **React** 19.2.0 - 最新版本的 React 框架
- **Vite** 7.3.1 - 快速的前端构建工具
- **React Router** 7.13.1 - 路由管理
- **Ant Design** 6.3.1 - UI 组件库
- **Sass** - CSS 预处理器

## 项目结构

```
src/
├── pages/              # 页面组件
│   ├── Layout/         # 布局页面
│   └── Login/          # 登录页面
├── router/             # 路由配置
│   └── index.js        # 路由实例
├── assets/             # 静态资源
├── App.jsx             # 主应用组件
├── main.jsx            # 应用入口
└── index.scss          # 全局样式
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

- `/` - Layout 页面
- `/login` - Login 页面

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

- ✅ 热模块替换（HMR）
- ✅ React Router 路由系统
- ✅ 路径别名配置
- ✅ Ant Design UI 组件库
- ✅ Sass 样式预处理
- ✅ ESLint 代码检查

## 开发建议

1. 使用 `@` 别名简化导入路径
2. 页面组件放在 `src/pages/` 目录
3. 通用组件放在 `src/components/` 目录
4. 使用 Sass 编写样式
5. 遵循 ESLint 规则

## 许可证

MIT
