# Router

The `app/admin/routes.ts` file is the entry point for the backend application. All backend routes must be defined within the `start.group` route group.

## Resource Route Table

| Method | Uri | Method | Description | Route Name |
| :---------- | :----------------- | :--------------: | :--------------: | :--------------: |
| index() | /resource | GET | List page construction & pagination data acquisition & page rendering | resource.index |
| create() | /resource | GET | Create page construction | resource.create |
| store() | /resource | POST  | Create data | resource.store |
| show() | /resource/:id | GET  | Detail page construction & data acquisition | resource.show |
| edit() | /resource/:id | GET  | Edit page construction | resource.edit |
| update() | /resource/:id | PUT  | Update data | resource.update |
| destroy() | /resource/:id | DELETE  | Delete data | resource.destroy |

## Override System Routes

If the built-in functionality cannot meet your needs, you only need to override the system routes in the `start.override` route group.

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