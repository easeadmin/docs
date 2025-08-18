# 路由

`app/admin/routes.ts` 文件是后台程序的入口，所有的后台路由都必须在 `start.group` 路由组中定义。

## 资源路由表

|     方法      |    Uri    |    Method    |    功能描述    |    路由名    |
| :---------- | :----------------- | :--------------: | :--------------: | :--------------: |
| index() | /resource | GET | 列表页面构建 & 分页数据获取 & 页面渲染 | resource.index |
| create() | /resource | GET | 新增页面构建 | resource.create |
| store() | /resource | POST  | 新增数据 | resource.store |
| show() | /resource/:id | GET  | 详情页面构建 & 数据获取 | resource.show |
| edit() | /resource/:id | GET  | 编辑页面构建 | resource.edit |
| update() | /resource/:id | PUT  | 更新数据 | resource.update |
| destroy() | /resource/:id | DELETE  | 删除数据 | resource.destroy |

## 覆写系统路由

如果系统自带功能无法满足你的需求时，只需要在 `start.override` 路由组中覆盖系统的路由即可。

```typescript
start.override({
  auth_home: () => router.resource('auth/home', AdminController).as('auth_home'),
  auth_user: () => router.resource('auth/user', UserController).as('auth_user'),
  auth_role: () => router.resource('auth/role', RoleController).as('auth_role'),
  auth_menu: () => router.resource('auth/menu', MenuController).as('auth_menu'),
  auth_login: () => router.resource('auth/login', LoginController).as('auth_login').only(['index', 'show', 'store']),
  auth_permission: () => router.resource('auth/permission', PermissionController).as('auth_permission'),
})
```