# 命令行

`EaseAdmin` 提供了 `ace` 命令来简化开发和维护工作。你可以使用 `node ace list` 查看所有可用的命令。

如果你想查看命令详情，可以使用 `--help` 后缀，例如 `node ace admin:install --help` 查看 `admin:install` 命令的详情。

## 安装命令

你可以使用 `admin:install [name] [--force] [--migrate]` 命令创建一个后台程序。
后台程序的名称将会作为目录名、配置文件名、模型文件名、以及路由前缀存在且不可更改，建议使用小写字母和下划线命名。

参数说明
| 参数      | 默认值               |       说明       |
| :---------- | :----------------- | :--------------: |
| name | admin | 后台程序名称 |
| --force | false | 是否强制覆盖 |
| --migrate | false | 是否执行数据库迁移 |

创建一个名为 admin 的后台应用，并执行数据库迁移

```shell
node ace admin:install admin --migrate
```

## 卸载命令

你可以使用 `admin:uninstall [name]` 命令删除已创建的后台程序。

参数说明
| 参数      | 默认值               |       说明       |
| :---------- | :----------------- | :--------------: |
| name | admin | 后台程序名称 |


删除一个名为 admin 的后台应用，请谨慎操作，删除后将无法恢复

```shell
node ace admin:uninstall admin
```

## 创建命令

你可以使用 `admin:create [controller] [--repository=] [--model=] [--lang=] [--name=] [--force]` 命令创建一个完整的 CRUD 页面。
该命令依赖于 `model` 模型，建议一个模型对应一个页面。使用该命令前请先使用 `make:model` 命令创建模型。

参数说明：
| 参数      | 默认值               |       说明       |
| :---------- | :----------------- | :--------------: |
| controller | 无 | 控制器名称 |
| --repository | 同 controller | 如果未指定，默认与控制器名称相同 |
| --model | 同 repository | 如果未指定，默认与仓库名称相同 |
| --name | admin | 所属后台程序名称 |
| --force | false | 是否强制覆盖 |

创建一个名为 user 的 CRUD 页面

```shell
node ace admin:create user
```

创建一个名为 user 的 CRUD 页面，并且指定关联数据库仓库

```shell
node ace admin:create user --repository=test_repository
```

创建一个名为 user 的 CRUD 页面，并且指定关联模型

```shell
node ace admin:create user --model=test
```