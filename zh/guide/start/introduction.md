# 简介

`EaseAdmin` 是基于 `AdonisJS` 和 `Amis` 开发的生产级管理面板，可在几分钟内制作出美观易用且功能完整的页面，满足您的所有需求。

如果你是第一次接触 `EaseAdmin`，那么请务必认真阅读 [AdonisJS](https://docs.adonisjs.com/guides/preface/introduction) 和 [Amis](https://baidu.github.io/amis/zh-CN/docs/index) 的官方文档 ，它会让你对 `EaseAdmin` 有个整体的认识。

如果你已经掌握 `EaseAdmin` 基本概念，且有一定的开发经验，那么请移步组件文档。

# 为什么选择 EaseAdmin

基于 `AdonisJS` 框架，采用经典 MVC 设计模式，快速且灵活，对后端开发人员友好。
使用 `Amis` 低代码方案不需要懂前端，就能做出专业且复杂的后台界面，这是所有其他前端 UI 库都无法做到的。
使用 `TypeScript` 构建，类型提示全程护航。丰富的 NPM 生态，可以减少开发工作量，大大提高效率。

# 命令行工具

`EaseAdmin` 提供了丰富的 `ace` 命令来简化开发和维护工作。您可以使用 `node ace list` 查看所有可用的命令。

### 创建后台程序

您可以使用 `node ace admin:install [name] [--force] [--migrate]` 命令创建一个后台程序。
后台程序的名称将会作为目录名、配置文件名、模型文件名、以及路由前缀存在且不可更改，建议使用小写字母和下划线命名。

参数说明：
| 参数      | 默认值               |       说明       |
| :---------- | :----------------- | :--------------: |
| name | admin | 后台程序名称 |
| --force | false | 是否强制覆盖 |
| --migrate | false | 是否执行数据库迁移 |

创建一个名为 admin 的后台应用，并执行数据库迁移：

```shell
node ace admin:install admin --migrate
```

### 卸载后台程序

您可以使用 `node ace admin:uninstall [name]` 命令删除已创建的后台程序。

参数说明：
| 参数      | 默认值               |       说明       |
| :---------- | :----------------- | :--------------: |
| name | admin | 后台程序名称 |


删除一个名为 admin 的后台应用，请谨慎操作，删除后将无法恢复。

```shell
node ace admin:uninstall admin
```

### 创建模型仓库

您可以使用 `node ace admin:repository [repository] [--model=] [--name=] [--force]` 命令创建一个模型仓库。
模型仓库是是为后台程序提供支持的API层，建议一个模型对应一个仓库。

参数说明：
| 参数      | 默认值               |       说明       |
| :---------- | :----------------- | :--------------: |
| repository | 无 | 模型仓库名称 |
| --model | 无 | 如果未指定，默认与仓库名称相同 |
| --name | admin | 所属后台程序名称 |
| --force | false | 是否强制覆盖 |

创建一个名为 user 的模型仓库，并且关联 user 模型：

```shell
node ace admin:repository user
```

### 创建控制器

您可以使用 `node ace admin:controller [controller] [--repository=] [--name=] [--force]` 命令创建一个控制器。

参数说明：
| 参数      | 默认值               |       说明       |
| :---------- | :----------------- | :--------------: |
| controller | 无 | 控制器名称 |
| --repository | 无 | 如果未指定，默认与控制器名称相同 |
| --name | admin | 所属后台程序名称 |
| --force | false | 是否强制覆盖 |


创建一个名为 user 的控制器，并且关联 user 数据仓库：

```shell
node ace admin:repository user
```

# 开发流程

查看完整开发流程示例 [用户管理页面](developcase.md)
1. 创建模型和数据库迁移
2. 创建模型仓库
3. 创建控制器
4. 注册路由
5. 添加权限
6. 添加菜单

# 预览

<a href="http://demo.kmola.com/admin">
<img src="https://github.com/easeadmin/core/blob/main/stubs/public/images/preview.jpg?raw=true" width="100%" alt="easeadmin" />
</a>
