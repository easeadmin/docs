# 常见问题
如果在使用过程中遇到问题，欢迎在 [issue](https://github.com/easeadmin/core/issues) 中反馈。

## Typescript 无法与 amis 交互

`EaseAdmin` 是前后端分离项目，`builder` 方法只负责构建页面，具体的交互方法请参考 `amis` 表达式的使用说明。

## 如何设置语言

请确保你已经添加 `node ace add i18n` 扩展，当前语言默认以请求头 `Accept-Language` 来设置语言，你可以更改浏览器首选语言设置，或者登录后在页面头部右侧设置中切换语言。

## 如何自定义页面顶部按钮

在后台管理页面的顶部，有一个操作按钮区域，包含刷新、全屏、设置、通知等按钮，你可以在 `app/admin/admin_controller.ts` 文件中设置是否显示这些按钮。

```typescript
import Controller from 'easeadmin/admin/controllers/admin_controller'

export default class AdminController extends Controller {
    protected showCustomButton = false  // 不显示设置按钮
    protected showRefreshButton = false  // 不显示刷新按钮
    protected showFullscreenButton = false  // 不显示全屏按钮
    protected showNotificationButton = false  // 不显示通知按钮
    protected notificationBadge = 1  // 通知数量角标
}
```

添加自定义按钮

```typescript
import Controller from 'easeadmin/admin/controllers/admin_controller'

export default class AdminController extends Controller {
    protected header(){
        const github = amis('button')
        .icon('github')
        .className('text-current text-lg')
        .url('https://github.com/easeadmin/core')

        return super.header().attr('items', github, 'push')
    }
}
```

## 部署配置

要注意 `HOST` 配置，默认是 `localhost` 如果是在服务器上部署，需要将 `HOST` 配置为 0.0.0.0 地址。

```typescript
TZ=UTC
PORT=80
HOST=0.0.0.0
LOG_LEVEL=info
APP_KEY=Dy_9_75ka8PjHhW3mqFn5vouE
NODE_ENV=production
SESSION_DRIVER=cookie
```

## 使用 Cookie 会话

如果你在 `inProduction` 环境中使用 Cookie 会话，那么该会话只能通过 `HTTPS` 协议传输。如果您需要通过 `HTTP` 协议传输，可以将 `secret` 标志设置为 `false` 来解决此问题。

会话包的配置存储在 `config/session.ts` 文件中。

```typescript
export default defineConfig({
  store: env.get('SESSION_DRIVER'),

  cookie: {
    path: '/',
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
  }
})
```