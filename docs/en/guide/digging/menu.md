# Dynamic Menu

If you need to dynamically add backend menus, you can override the `developer` method of the [admin_repository.ts](https://github.com/easeadmin/core/blob/main/src/admin/repositories/admin_repository.ts) repository. And associate the new `repostory` with the `admin_controller`.

## Dynamically Add Menu

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

## Associate Controller

Assign the new `AdminRepository` to the `repository` property in the `app/admin/controllers/admin_controller.ts` controller

```typescript
import Controller from 'easeadmin/admin/controllers/admin_controller'
import AdminRepository from '../repositories/admin_repository.js'

export default class AdminController extends Controller {
  protected repository = new AdminRepository
}
```