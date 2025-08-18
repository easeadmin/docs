# 版本升级

`EaseAdmin` 的发布会尽量降低版本升级带来的影响，在升级前请备份您的代码和数据库。

## 通用升级步骤

获取最新框架代码

```
npm update easeadmin
```

发布静态资源 

```
node ace configure easeadmin --force
```

重新强制安装框架代码

```
node ace admin:install admin --force
```

## 升级 amis
我们使用的 `amis` 版本为 `6.13.0` 如果 [amis release](https://github.com/baidu/amis/releases) 有新版本发布，你只需下载 `release` 中 的 `jssdk.tar.gz` 文件解压并覆盖到 `public/ease/jssdk` 目录即可。

## 受影响的文件

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