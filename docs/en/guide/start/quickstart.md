# Quick Start

Based on the `admin:create` code generation command, you can quickly create a fully functional CRUD page. Below, we'll demonstrate how to quickly create a user management panel.

## Create Data Table

After installing `AdonisJS`, a `app/models/user.ts` model and a `database/migrations/1754734230094_create_users_table.ts` migration file are included by default. You can modify them as needed or skip this step.

```shell
node ace make:model user -m
```

Model file `app/models/user.ts`

```typescript
import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fullName: string | null

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}

```

Migration file `database/migrations/1754734230094_create_users_table.ts`

```typescript
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('full_name').nullable()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

```

## Create CRUD Page

Use the command line to create a CRUD page based on the user model

```shell
node ace admin:create user
```

Repository file `app/admin/repositories/user_repository.ts`

```typescript
import ResourceRepository from 'easeadmin/repositorys/resource_repository'
import User from '#models/user'

export default class UserRepository extends ResourceRepository {
    protected model = User
}
```

Controller file `app/admin/controllers/user_controller.ts`

```typescript
import { HttpContext } from '@adonisjs/core/http'
import amis from 'easeadmin/builder/amis'
import ResourceController from 'easeadmin/controllers/resource_controller'
import UserRepository from '../repositories/user_repository.js'

export default class UsersController extends ResourceController {
  protected repository = new UserRepository

  protected fields() {
    return [
      amis('column_item').name('id').label(this.ctx.admin.t('id')),
      amis('column_item').name('fullName').label(this.ctx.admin.t('full_name')),
      amis('column_item').name('email').label(this.ctx.admin.t('email')),
      amis('column_item').name('password').label(this.ctx.admin.t('password')),
      amis('column_item').name('createdAt').label(this.ctx.admin.t('created_at')),
      amis('column_item').name('updatedAt').label(this.ctx.admin.t('updated_at')),
    ]
  }

  protected forms(isEdit: boolean) {
    return [
      amis('input_text').name('id').label(this.ctx.admin.t('id')).disabled(isEdit).permission(isEdit),
      amis('input_text').name('fullName').label(this.ctx.admin.t('full_name')),
      amis('input_text').name('email').label(this.ctx.admin.t('email')),
      amis('input_text').name('password').label(this.ctx.admin.t('password')),
      amis('input_datetime').name('createdAt').label(this.ctx.admin.t('created_at')).disabled(isEdit).permission(isEdit),
      amis('input_datetime').name('updatedAt').label(this.ctx.admin.t('updated_at')).disabled(isEdit).permission(isEdit),
    ]
  }
}
```

Update translations in language files

* resource/lang/zh/admin/user.json
* resource/lang/en/admin/user.json

## Register Routes

Define routes in the `group` method of `app/admin/routes.ts`

```shell
router.resource('users', UsersController).as('users')
```

Visit `http://localhost:3333/admin/users` to view the user management page

## Add Permissions

Log in as an administrator, go to the permission management page and add the following information. The primary permission includes create, delete, update, and read:

```
Permission Name: User Management
Permission Identifier: admin.users
Permission Sort: 0
Parent Permission: Choose as needed
```

For more granular permissions, configure permission identifiers according to the route table

```
admin.users.index   View page permission
amdin.users.store   Create permission
admin.users.update  Update permission
admin.users.destroy Delete permission
admin.users.create  Create page permission
admin.users.edit    Edit page permission
admin.users.show    Detail page permission
```

## Add Menu

Log in as an administrator, go to the menu management page and add:
```
Menu Name: User Management
Menu Identifier: /admin/users
```

## Complete Development

Assign permissions and menus to administrators or target roles, then refresh the backend.