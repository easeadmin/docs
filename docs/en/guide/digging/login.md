# Override Login

If the default login logic cannot meet your needs, you can override the implementation of [login_controller.ts](https://github.com/easeadmin/core/blob/main/src/admin/controllers/login_controller.ts).

## Override Login Page and Logic

```typescript
import LoginController from 'easeadmin/admin/controllers/login_controller'

export default class MyLoginController extends LoginController {
  protected builder() {
    // Login page layout
  }

  async index(): Promise<any> {
    // Render login page
  }

  async show(): Promise<any> {
    // Render verification code
  }

  async store(): Promise<any> {
    // Login logic
  }
}
```

## Override Login Route

Override the login route in the app/admin/routes.ts routing file

```typescript
start.override({
  auth_login: () => router.resource('/auth/login', MyLoginController).as('auth_login')
})
```