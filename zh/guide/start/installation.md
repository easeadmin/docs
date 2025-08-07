首先，您需要安装 `AdonisJS`。如果您已经安装，可以跳过此步骤。

如果这是您第一次使用 `AdonisJS`，请务必阅读文档 [Adonisjs V6](https://docs.adonisjs.com/guides/preface/introduction)

> 您更喜欢视觉学习吗？ - 观看在 Adocasts 的朋友制作的 [让我们学习 AdonisJS 6](https://adocasts.com/series/lets-learn-adonisjs-6) 视频系列。

执行以下命令，按照提示完成安装，建议选择 `SQLite` 作为开发环境数据库。

```
npm init adonisjs@latest hello-world
```

# 快速开始

将 `EaseAdmin` 扩展包添加到 `AdonisJS`

```
node ace add easeadmin
```

# 发布静态文件。

通常情况下，您无需手动发布，因为 add 命令已自动发布。

```
node ace configure easeadmin
```

# 创建您的管理程序

默认情况下，它是 `admin`，您也可以传递其他名称，例如：`node ace admin:create tenent` 创建多个管理程序

```
node ace admin:create admin --migrate
```

# 启动开发服务器

您可以通过运行以下命令来启动开发服务器。

```
node ace serve --watch
```

访问 `http://localhost:3333/admin` 在浏览器中查看你的应用程序，使用 `admin/admin` 登录。

# 目录结构

```
├── app
│   ├── admin                           # admin 应用目录
│   │   ├── controllers                 # 控制器目录
│   │   ├── repositories                # 模型仓库目录
│   │   └── routes.ts                   # admin 路由文件
├── config
│   └── admin.ts                        # 框架配置文件
│   └── auth.ts                         # 认证配置文件
└── database
    └── migrations                      # 数据库迁移文件目录
    └── seeders                         # 数据库种子文件目录
└── resources
    └── lang                            # 语言包文件目录
└── public
    └── ease                            # 框架静态资源文件目录
└── start
    └── routes.ts                       # 框架路由文件
```