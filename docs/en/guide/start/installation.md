# Installation

First, you need to install `AdonisJS`. If you have already installed it, you can skip this step.

```shell
npm init adonisjs@latest -- -K=web
```

Follow the prompts to complete the installation, it is recommended to choose `SQLite` as the development environment database.

## Install EaseAdmin

Add the `EaseAdmin` extension package to `AdonisJS`

```shell
node ace add easeadmin
```

## Publish Static Files

Normally, you don't need to publish manually because the add command has already published them automatically.

```shell
node ace configure easeadmin
```

## Create Your Backend Application

By default, it is `admin`, you can also pass other names, for example: `node ace admin:install tenent` to create multiple backend applications

```
node ace admin:install admin --migrate
```

## Start Development Server

You can start the development server by running the following command.

```shell
node ace serve --watch
```

Visit `http://localhost:3333/admin` to view your application in the browser, and log in with `admin/admin`.