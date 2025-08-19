# 动态菜单

如果你需要动态的添加后台菜单，可以覆写 [admin_repository.ts](https://github.com/easeadmin/core/blob/main/src/admin/repositories/admin_repository.ts) 仓库的 `developer` 方法。并将新的 `repostory` 与 `admin_controller` 关联起来。

## 动态添加菜单

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

## 关联控制器

在 `app/admin/controllers/admin_controller.ts` 控制器中将新的 `AdminRepository` 赋值给 `repository` 属性

```typescript
import Controller from 'easeadmin/admin/controllers/admin_controller'
import AdminRepository from '../repositories/admin_repository.js'

export default class AdminController extends Controller {
  protected repository = new AdminRepository
}
```