# Questions
If you encounter any problems during use, feel free to provide feedback in [issues](https://github.com/easeadmin/core/issues).

## Typescript Cannot Interact with amis

`EaseAdmin` is a separated front-end and back-end project, the `builder` method is only responsible for building pages. For specific interaction methods, please refer to the usage instructions of `amis` expressions.

## How to Set Language

Please ensure that you have added the `node ace add i18n` extension. The current language is set by default using the request header `Accept-Language`. You can change your browser's preferred language settings or switch languages in the settings on the right side of the page header after logging in.

## Override Login Page and Login Logic

If the default login logic cannot meet your needs, you can override the implementation of [login_controller.ts](https://github.com/easeadmin/core/blob/main/src/admin/controllers/login_controller.ts).

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

Override the login route in the app/admin/routes.ts route file

```typescript
start.override({
  auth_login: () => router.resource('/auth/login', MyLoginController).as('auth_login')
})
```

## How to Dynamically Add Menus

Override the `developer` method of the [admin_repository.ts](https://github.com/easeadmin/core/blob/main/src/admin/repositories/admin_repository.ts) repository. And associate the new `repostory` with `admin_controller`.

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
          label: 'Custom Page',
          url: `/${this.ctx.admin.prefix}/custom`,
          schemaApi: this.ctx.admin.api('schema', `/${this.ctx.admin.prefix}/custom`),
        },
        {
          label: 'Add External Link',
          link: 'https://www.adonisjs.com',
        }
      ]
     }
    )
    return menus
  }
}
```

Associate admin_controller

```typescript
// `app/admin/controllers/admin_controller.ts`
import Controller from 'easeadmin/admin/controllers/admin_controller'
import AdminRepository from '../repositories/admin_repository.js'

export default class AdminController extends Controller {
  protected repository = new AdminRepository
}
```