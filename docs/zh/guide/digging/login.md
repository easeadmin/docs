# 重写登录

如果默认的登录逻辑不能满足你的需求，你可以重写 [login_controller.ts](https://github.com/easeadmin/core/blob/main/src/admin/controllers/login_controller.ts) 的实现。

## 重写登陆页面和登陆逻辑

```typescript
import LoginController from 'easeadmin/admin/controllers/login_controller'

export default class MyLoginController extends LoginController {
  protected builder() {
    // 登录页面布局
  }

  async index(): Promise<any> {
    // 渲染登录页面
  }

  async show(): Promise<any> {
    // 渲染验证码
  }

  async store(): Promise<any> {
    // 登录逻辑
  }
}
```

## 覆盖登录路由

在 app/admin/routes.ts 路由文件中覆写登录路由

```typescript
start.override({
  auth_login: () => router.resource('/auth/login', MyLoginController).as('auth_login')
})
```