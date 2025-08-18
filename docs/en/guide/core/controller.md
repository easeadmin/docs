# Controller

If you need to customize a page, you can inherit from the base controller. All pages of the backend panel inherit from this object, which provides all the methods required by the `resource` route. You can implement these methods as needed. If an unimplemented method is requested, an exception will be thrown.

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

## Base Controller Function Table

You can view the [base controller source code](https://github.com/easeadmin/core/blob/main/src/controllers/controller.ts) for more information.

| Method | Description |
| :---------- | :----------------- |
| render(data, options) | Render amis object as HTML code |
| ok(data, msg) | Return success response |
| fail(msg, code) | Return failure response |
| index() | Page rendering or list data |
| create() | Create page construction |
| edit() | Edit page construction |
| show() | Detail page construction |
| store() | Create data |
| update() | Update data |
| destroy() | Delete data |

## Resource Controller

If your controller needs to handle CRUD operations for resources, you can inherit from the resource controller, which includes all the methods of the base controller. It also additionally implements the `crud` page and required interfaces.

```typescript
import ResourceController from 'easeadmin/controllers/resource_controller'
import UserRepository from '../repositories/user_repository.js'

export default class MyController extends ResourceController {
    protected repository = new UserRepository
    fields(){
        return [
            amis('text').name('username').label('Username'),
            amis('password').name('password').label('Password'),
        ]
    }

    forms(isEdit: boolean){
        return [
            amis('input_text').name('id').label(this.ctx.admin.t('id')).disabled(isEdit).permission(isEdit),
            amis('input_text').name('username').label('Username'),
            amis('input_text').name('password').label('Password'),
        ]
    }
}
```

## Resource Controller Function Table

You can view the [resource controller source code](https://github.com/easeadmin/core/blob/main/src/controllers/resource_controller.ts) for more information.

| Method | Description |
| :---------- | :----------------- |
| getFilters() | Get filter fields |
| getForms() | Get form fields |
| fields() | Build table fields |
| forms() | Build form fields |
| builder() | Page building method |
| header() | Build page header |
| footer() | Build page footer |
| filters() | Build filter fields |
| detail() | Build detail page |
| creator() | Build create page |
| editor() | Build edit page |
| filter() | Build filter |
| bulkActions() | Build bulk operation tools |
| headerToolbar() | Build header toolbar |
| footerToolbar() | Build footer toolbar |
| actions() | Build row action buttons |
| operations() | Build row operation column |