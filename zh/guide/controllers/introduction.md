EaseAdmin 实现了两个控制器基类，他们提供了完整的 CRUD 方法，你只需继承他们，即可实现 CRUD 功能。

# Resource 方法

|     方法      |    Uri    |    Method    |    功能描述    |    路由    |
| :---------- | :----------------- | :--------------: | :--------------: | :--------------: |
| index() | /resource | GET | 列表页面构建 & 分页数据获取 & 页面渲染 | resource.index |
| create() | /resource | GET | 新增页面构建 | resource.create |
| store() | /resource | POST  | 新增数据 | resource.store |
| show() | /resource/:id | GET  | 详情页面构建 & 数据获取 | resource.show |
| edit() | /resource/:id | GET  | 编辑页面构建 | resource.edit |
| update() | /resource/:id | PUT  | 更新数据 | resource.update |
| destroy() | /resource/:id | DELETE  | 删除数据 | resource.destroy |

# 基础控制器

基础 CRUD 控制器，定义了 CRUD 所需的方法，你可以按需实现 CRUD 功能，如果请求了一个未实现的方法会返回一个异常。

```typescript
import amis from 'easeadmin/builder/amis'
import Controller from 'easeadmin/controllers/Controller'
import userModel from '#models/user'
export default class UserController extends Controller{
    index(){
        return this.render(amis('json').api(this.ctx.admin.api('show')),{title:"User"})
    }

    async show(){
        const result = await userModel.find(1)
        return this.ok(result)
    }
}
```

# Resource 控制器
`ResourceController` 实现了完整的 CRUD 方法，并且在 `builder` 方法中为你构造了一个功能完善的 CRUD 表格。

```typescript
import ResourceController from 'easeadmin/controllers/ResourceController'
import UserRepository from '../repositories/user_repository'
export default class UserController extends ResourceController{
    protected repository = new UserRepository

    builder(){
        let columns = this.fields()
        let operations = this.operations()
        if (operations) {
            columns.push(operations)
        }
        let header = this.header()
        let footer = this.footer()
        return amis('page').body([
        ...header,
            amis('crud')
                .id('list')
                .api(this.ctx.admin.api('paginate'))
                .syncLocation(false)
                .filterTogglable(true)
                .filterDefaultVisible(false)
                .defaultParams(this.defaultParams)
                .footerToolbar(this.footerToolbar())
                .bulkActions(this.bulkActions())
                .headerToolbar(this.headerToolbar())
                .filter(this.filter())
                .columns(columns),
            ...footer,
            ])
    }

}
```
