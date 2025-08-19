# 控制器

如果你需要自定义一个页面，你可以继承基础控制器，后台面板的所有页面都继承自该对象，他提供了 `resource` 路由所需的所有方法，你可以按需实现这些方法，如果请求了一个未实现的方法，会抛出一个异常。

```typescript
import Controller from 'easeadmin/controllers/controller'
import User from '#models/user'

export default class MyController extends Controller {
    public async index() {
        return this.render(amis('page').data({id:1}).initApi(this.ctx.admin.api('show')).body('hello ${username}'))
    }

    public async show() {
        return this.ok(await User.findOrFail(this.ctx.request.param('id')))
    }
}
```

## 基础控制器功能表

你可以查看 [基础控制器源码](https://github.com/easeadmin/core/blob/main/src/controllers/controller.ts) 了解更多信息。

|     方法      |    功能描述    |
| :---------- | :----------------- |
| render(data, options) | 将 amis 对象渲染为 HTML 代码 |
| ok(data, msg) | 返回成功响应 |
| fail(msg, code) | 返回失败响应 |
| index() | 页面渲染 或 列表数据 |
| create() | 新增页面构建 |
| edit() | 编辑页面构建 |
| show() | 详情页面构建 |
| store() | 新增数据 |
| update() | 更新数据 |
| destroy() | 删除数据 |

## 资源控制器

如果你的控制器需要处理资源的 CRUD 操作，你可以继承资源控制器，他包含基础控制器的所有方法。并且额外实现了 `crud` 页面以及所需的接口。

```typescript
import ResourceController from 'easeadmin/controllers/resource_controller'
import UserRepository from '../repositories/user_repository.js'

export default class MyController extends ResourceController {
    protected repository = new UserRepository
    fields(){
        return [
            amis('text').name('username').label('用户名'),
            amis('password').name('password').label('密码'),
        ]
    }

    forms(isEdit: boolean){
        return [
            amis('input_text').name('id').label(this.ctx.admin.t('id')).disabled(isEdit).permission(isEdit),
            amis('input_text').name('username').label('用户名'),
            amis('input_text').name('password').label('密码'),
        ]
    }
}
```

## 资源控制器功能表

你可以查看 [资源控制器源码](https://github.com/easeadmin/core/blob/main/src/controllers/resource_controller.ts) 了解更多信息。

|     方法      |    功能描述    |
| :---------- | :----------------- |
| getFilters() | 获取筛选器字段 |
| getForms() | 获取表单字段 |
| fields() | 构建表字段 |
| forms() | 构建表单字段 |
| builder() | 页面构建方法 |
| header() | 构建页头 |
| footer() | 构建页脚 |
| filters() | 构建筛选器字段 |
| detail() | 构建详情页 |
| creator() | 构建新增页 |
| editor() | 构建编辑页 |
| filter() | 构建筛选器 |
| bulkActions() | 构建批量操作工具 |
| headerToolbar() | 构建头部工具栏 |
| footerToolbar() | 构建底部工具栏 |
| actions() | 构建行操作按钮 |
| operations() | 构建行操作列 |

## 资源控制器属性表

|     名称      |    默认值    |    功能描述    |
| :---------- | :----------------- |:----------------- |
| showOperations | true | 显示行操作 |
| showCreateButton | true | 显示新增按钮 |
| showDetailButton | true | 显示详情按钮 |
| showEditButton | true | 显示编辑按钮 |
| showDeleteButton | true | 显示删除按钮 |
| showBulkDeleteButton | true | 显示批量删除按钮 |
| showFilterToggler | true | 显示筛选器切换按钮 |
| showBulkActions | true | 显示批量操作工具栏 |
| repository | 无 | 资源仓库 |
| defaultParams | { orderBy: 'id', orderDir: 'desc' } | 默认请求参数 |
