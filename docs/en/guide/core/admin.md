# Context

`admin` is bound to the `context` object as a request context, which is a core feature of the `EaseAdmin` framework. It runs through the entire request lifecycle of the admin backend and provides key functions such as user authentication, permission checking, and internationalization.

## Get Logged-in User Information

```typescript
// Get current logged-in user
const user = ctx.admin.user

// Get user information (JSON format)
const userInfo = ctx.admin.userinfo
```

## Current Backend Configuration Information

```typescript
// Get admin configuration
const config = ctx.admin.config

// Access configuration items
const theme = config.client.theme
```

## Array Flattening

```typescript
// Convert array to flat object
// {1:{id:1,name:'a'},2:{id:2,name:'b'}}
const items = [{id:1,name:'a'},{id:2,name:'b'}]
const flatItems = ctx.admin.flatArray(items)

// Custom primary key
// {a:{id:1,name:'a'},b:{id:2,name:'b'}}
const flatItems = ctx.admin.flatArray(items, 'name')
```

## Tree Structure Generation

```typescript
// Convert array to tree structure
// [{id:1,name:'a',children:[{id:2,name:'b'}]}]
const items = [{id:1,name:'a',parentId:0},{id:2,name:'b',parentId:1}]
const tree = ctx.admin.makeTree(items)

// Clean primary key and parent key after conversion
const cleanTree = admin.makeTree(items, true)
```

## Internationalization

```typescript
// Get current language
const currentLang = ctx.admin.lang

// Switch language
ctx.admin.switchLocale('zh')

// Translate text
const translated = ctx.admin.t('welcome', {name: 'user'})

// Translation with default value
const translated = ctx.admin.t('not_found', undefined, 'Not found')
```

## Route Construction

```typescript
// Generate route URL
const url = ctx.admin.url('dashboard.index')

// Route with parameters
const url = ctx.admin.url('users.show', {params: {id: 1}})

// Route with query string
const url = ctx.admin.url('users.index', {qs: {page: 1}})
```

## API Request Header Construction

```typescript
// Generate API request configuration
const apiConfig = ctx.admin.api('paginate');

// Custom URL
const apiConfig = ctx.admin.api('store', '/api/users');

// Request configuration includes url, method and headers
console.log(apiConfig);

{
  url: '/api/users',
  method: 'post',
  headers: {'x-action': 'store', 'x-csrf-token': '...'}
}
```

## API Request Types

```typescript
ctx.admin.isApiAction('paginate')   // Whether it's a pagination request
ctx.admin.isApiAction('options')    // Whether it's an options request
ctx.admin.isApiAction('export')     // Whether it's an export request
ctx.admin.isApiAction('create')     // Whether it's a create request
ctx.admin.isApiAction('edit')       // Whether it's an edit request
ctx.admin.isApiAction('show')       // Whether it's a detail request
ctx.admin.isApiAction('store')      // Whether it's a store data request
ctx.admin.isApiAction('update')     // Whether it's an update data request
ctx.admin.isApiAction('delete')     // Whether it's a delete data request
ctx.admin.isApiAction('restore')    // Whether it's a restore data request
ctx.admin.isApiAction('schema')     // Whether it's a page building request
```

## Authentication and Permissions

```typescript
// Authenticate user
await ctx.admin.authenticate();

// Check permissions
await ctx.admin.permission();

// Check if has permission
const canAccess = await ctx.admin.can('users.store');

// Check if is administrator
const isAdmin = await ctx.admin.isAdministrator();

// Check if has specific role
const isEditor = await ctx.admin.isRole('editor');
```

## Menus and Roles

```typescript
// Get user roles
const roles = await ctx.admin.getRoles();

// Get user menus
const menus = await ctx.admin.getMenus();

// Get user permissions
const permissions = await ctx.admin.getPermissions();

// Logout
ctx.admin.logout()
```

## Get System Models

```typescript
const userModel = ctx.admin.model('User')
const roleModel = ctx.admin.model('Role')
const menuModel = ctx.admin.model('Menu')
const permissionModel = ctx.admin.model('Permission')
```