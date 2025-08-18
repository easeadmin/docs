# Command

`EaseAdmin` provides `ace` commands to simplify development and maintenance work. You can use `node ace list` to view all available commands.

If you want to see command details, you can use the `--help` suffix, for example, `node ace admin:install --help` to view details of the `admin:install` command.

## Installation Command

You can use the `admin:install [name] [--force] [--migrate]` command to create a backend application.
The name of the backend application will be used as the directory name, configuration file name, model file name, and route prefix and cannot be changed. It is recommended to use lowercase letters and underscores for naming.

Parameter Description
| Parameter | Default Value | Description |
| :---------- | :----------------- | :--------------: |
| name | admin | Backend application name |
| --force | false | Whether to force overwrite |
| --migrate | false | Whether to run database migrations |

Create a backend application named admin and run database migrations

```shell
node ace admin:install admin --migrate
```

## Uninstallation Command

You can use the `admin:uninstall [name]` command to delete a created backend application.

Parameter Description
| Parameter | Default Value | Description |
| :---------- | :----------------- | :--------------: |
| name | admin | Backend application name |

Delete a backend application named admin, please operate with caution, it cannot be recovered after deletion

```shell
node ace admin:uninstall admin
```

## Creation Command

You can use the `admin:create [controller] [--repository=] [--model=] [--lang=] [--name=] [--force]` command to create a complete CRUD page.
This command depends on the `model` model, and it is recommended that one model corresponds to one page. Before using this command, please use the `make:model` command to create a model.

Parameter Description:
| Parameter | Default Value | Description |
| :---------- | :----------------- | :--------------: |
| controller | None | Controller name |
| --repository | Same as controller | If not specified, defaults to the same as the controller name |
| --model | Same as repository | If not specified, defaults to the same as the repository name |
| --name | admin | Backend application name it belongs to |
| --force | false | Whether to force overwrite |

Create a CRUD page named user

```shell
node ace admin:create user
```

Create a CRUD page named user and specify the associated database repository

```shell
node ace admin:create user --repository=test_repository
```

Create a CRUD page named user and specify the associated model

```shell
node ace admin:create user --model=test
```