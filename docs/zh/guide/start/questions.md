# 常见问题
如果在使用过程中遇到问题，欢迎在 [issue](https://github.com/easeadmin/core/issues) 中反馈。

## Typescript 无法与 amis 交互

`EaseAdmin` 是前后端分离项目，`builder` 方法只负责构建页面，具体的交互方法请参考 `amis` 表达式的使用说明。

## 如何设置语言

请确保你已经添加 `node ace add i18n` 扩展，当前语言默认以请求头 `Accept-Language` 来设置语言，你可以更改浏览器首选语言设置，或者登录后在页面头部右侧设置中切换语言。

## 重写登陆页面和登陆逻辑

如果默认的登录逻辑不能满足你的需求，你可以重写 [login_controller.ts](https://github.com/easeadmin/core/blob/main/src/admin/controllers/login_controller.ts) 的实现。

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

在 app/admin/routes.ts 路由文件中覆写登录路由

```typescript
start.override({
  auth_login: () => router.resource('/auth/login', MyLoginController).as('auth_login')
})
```

## 如何动态添加菜单

覆写 [admin_repository.ts](https://github.com/easeadmin/core/blob/main/src/admin/repositories/admin_repository.ts) 仓库的 `developer` 方法。并将新的 `repostory` 与 `admin_controller` 关联起来。

```typescript
// `app/admin/repositories/admin_repository.ts`
import Repository from 'easeadmin/admin/repositories/admin_repository'

export default class AdminRepository extends Repository {
  async developer() {
    const menus = await super.developer()
    menus.push({
      label:"custom",
      children:[
        {
          label: '自定义页面',
          url: `/${this.ctx.admin.prefix}/custom`,
          schemaApi: this.ctx.admin.api('schema', `/${this.ctx.admin.prefix}/custom`),
        },
        {
          label: '添加外部链接',
          link: 'https://www.adonisjs.com',
        }
      ]
     }
    )
    return menus
  }
}
```

关联 admin_controller

```typescript
// `app/admin/controllers/admin_controller.ts`
import Controller from 'easeadmin/admin/controllers/admin_controller'
import AdminRepository from '../repositories/admin_repository.js'

export default class AdminController extends Controller {
  protected repository = new AdminRepository
}
```