# 安装

首先，你需要安装 `AdonisJS`。如果你已经安装，可以跳过此步骤。

```shell
npm init adonisjs@latest -- -K=web
```

按照提示完成安装，建议选择 `SQLite` 作为开发环境数据库。

## 安装 EaseAdmin

将 `EaseAdmin` 扩展包添加到 `AdonisJS`

```shell
node ace add easeadmin
```

## 发布静态文件。

通常情况下，你无需手动发布，因为 add 命令已自动发布。

```shell
node ace configure easeadmin
```

## 创建你的后台应用

默认情况下，它是 `admin`，你也可以传递其他名称，例如：`node ace admin:install tenent` 创建多个后台应用

```
node ace admin:install admin --migrate
```

## 启动开发服务器

你可以通过运行以下命令来启动开发服务器。

```shell
node ace serve --watch
```

访问 `http://localhost:3333/admin` 在浏览器中查看你的应用程序，使用 `admin/admin` 登录。