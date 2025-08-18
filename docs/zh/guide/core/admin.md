# 上下文

`admin` 作为请求上下文绑定在 `context` 对象上，是 `EaseAdmin` 框架中的核心功能，贯穿整个管理后台的请求生命周期，提供用户认证、权限检查、国际化等关键功能。

## 获取登录用户信息

```typescript
// 获取当前登录用户
const user = ctx.admin.user

// 获取用户信息（JSON 格式）
const userInfo = ctx.admin.userinfo
```

## 当前后台的配置信息

```typescript
// 获取管理员配置
const config = ctx.admin.config

// 访问配置项
const theme = config.client.theme
```

## 数组扁平化

```typescript
// 将数组转换为平面对象
// {1:{id:1,name:'a'},2:{id:2,name:'b'}}
const items = [{id:1,name:'a'},{id:2,name:'b'}]
const flatItems = ctx.admin.flatArray(items)

// 自定义主键
// {a:{id:1,name:'a'},b:{id:2,name:'b'}}
const flatItems = ctx.admin.flatArray(items, 'name')
```

## 树形结构生成

```typescript
// 将数组转换为树形结构
// [{id:1,name:'a',children:[{id:2,name:'b'}]}]
const items = [{id:1,name:'a',parentId:0},{id:2,name:'b',parentId:1}]
const tree = ctx.admin.makeTree(items)

// 转换后清理主键和父键
const cleanTree = admin.makeTree(items, true)
```

## 国际化

```typescript
// 获取当前语言
const currentLang = ctx.admin.lang

// 切换语言
ctx.admin.switchLocale('zh')

// 翻译文本
const translated = ctx.admin.t('welcome', {name: '用户'})

// 带默认值的翻译
const translated = ctx.admin.t('not_found', undefined, '未找到')
```

## 路由构建

```typescript
// 生成路由 URL
const url = ctx.admin.url('dashboard.index')

// 带参数的路由
const url = ctx.admin.url('users.show', {params: {id: 1}})

// 带查询字符串的路由
const url = ctx.admin.url('users.index', {qs: {page: 1}})
```

## API 请求头构建

```typescript
// 生成 API 请求配置
const apiConfig = ctx.admin.api('paginate');

// 自定义 URL
const apiConfig = ctx.admin.api('store', '/api/users');

// 请求配置包含 url、method 和 headers
console.log(apiConfig);

{
  url: '/api/users',
  method: 'post',
  headers: {'x-action': 'store', 'x-csrf-token': '...'}
}
```

## Api 请求类型

```typescript
ctx.admin.isApiAction('paginate')   // 是否分页请求
ctx.admin.isApiAction('options')    // 是否获取选项请求
ctx.admin.isApiAction('export')     // 是否导出请求
ctx.admin.isApiAction('create')     // 是否新增请求
ctx.admin.isApiAction('edit')       // 是否编辑请求
ctx.admin.isApiAction('show')       // 是否详情请求
ctx.admin.isApiAction('store')      // 是否新增数据请求
ctx.admin.isApiAction('update')     // 是否更新数据请求
ctx.admin.isApiAction('delete')     // 是否删除数据请求
ctx.admin.isApiAction('restore')    // 是否恢复数据请求
ctx.admin.isApiAction('schema')     // 是否构建页面
```

## 认证与权限

```typescript
// 认证用户
await ctx.admin.authenticate();

// 检查权限
await ctx.admin.permission();

// 检查是否有权限
const canAccess = await ctx.admin.can('users.store');

// 检查是否为管理员
const isAdmin = await ctx.admin.isAdministrator();

// 检查是否有指定角色
const isEditor = await ctx.admin.isRole('editor');
```

## 菜单与角色

```typescript
// 获取用户角色
const roles = await ctx.admin.getRoles();

// 获取用户菜单
const menus = await ctx.admin.getMenus();

// 获取用户权限
const permissions = await ctx.admin.getPermissions();

// 退出登录
ctx.admin.logout()
```

## 获取系统模型

```typescript
const userModel = ctx.admin.model('User')
const roleModel = ctx.admin.model('Role')
const menuModel = ctx.admin.model('Menu')
const permissionModel = ctx.admin.model('Permission')
```