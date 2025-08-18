# 快速开始

基于 `admin:create` 代码生成命令，你可以很快的创建出一个功能完善的 CRUD 页面，下面为你演示如何快速创建一个用户管理面板。

## 创建数据表

安装完 `AdonisJS` 后会内置一个 `app/models/user.ts` 模型和 `database/migrations/1754734230094_create_users_table.ts` 迁移文件，你可以根据需要修改或跳过该步骤。

```shell
node ace make:model user -m
```

模型文件 `app/models/user.ts`

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

迁移文件 `database/migrations/1754734230094_create_users_table.ts`

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

## 创建 CRUD 页面

使用命令行创建一个基于 user 模型的 CRUD 页面

```shell
node ace admin:create user
```

仓库文件 `app/admin/repositories/user_repository.ts`

```typescript
import ResourceRepository from 'easeadmin/repositorys/resource_repository'
import User from '#models/user'

export default class UserRepository extends ResourceRepository {
    protected model = User
}
```

控制器文件 `app/admin/controllers/user_controller.ts`

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

修改语言文件中的翻译

* resource/lang/zh/admin/user.json
* resource/lang/en/admin/user.json

## 注册路由

在 `app/admin/routes.ts` 的 `group` 方法中定义路由

```shell
router.resource('users', UsersController).as('users')
```

访问 `http://localhost:3333/admin/users` 即可查看用户管理页面

## 添加权限

使用管理员账号登录后台，进入权限管理页面新增并填入以下信息，一级权限为包含增、删、改、查：

```
权限名称：用户管理
权限标识：admin.users
权限排序：0
上级权限：按需选择
```

如需细分权限可按路由表配置权限标识

```
admin.users.index   主页权限
amdin.users.store   新增权限
admin.users.update  更新权限
admin.users.destroy 删除权限
admin.users.create  创建页面权限
admin.users.edit    编辑页面权限
admin.users.show    详情页面权限
```

## 添加菜单

使用管理员账号登录后台，进入菜单管理页面新增并填入：
```
菜单名称：用户管理
菜单标识：/admin/users
```

## 完成开发

将权限和菜单赋值给管理员或目标角色，刷新后台即可