# 贡献代码

如果发现 `EaseAdmin` 有不满足的功能，除了发 `issue` 等升级之外，最快的方法就是自己实现它，本文将介绍如何在本地环境下安装 `EaseAdmin` 并运行调试。

## 下载代码

首先你需要 fork 项目到自己的仓库，然后下载到本地，切换到开发分支并安装依赖

```shell
git clone git@github.com:easeadmin/core.git
git checkout -b dev
npm install
```

## 发布本地包
如果直接使用 `npm link` 来链接包，你将会遇到 `peerDependencies` 问题，这时候你需要使用 `yalc` 来发布本地包。

```shell
npm install yalc -g
yalc publish
```

## 安装 AdonisJS

新建一个 AdonisJS 项目，并将本地 `EaseAdmin` 包添加到项目中，并再次安装依赖。

```shell
npm init adonisjs@latest demo
yalc add easeadmin
npm install
```

## 安装 EaseAdmin

安装完成后启动服务并访问 `http://localhost:3333/admin` 使用 `admin/admin` 登录

```shell
node ace configure easeadmin
node ace admin:install admin --migrate
node ace serve --watch
```

## 其他问题

每次修改 `EaseAdmin` 代码后，都需要重新发布本地包

```shell
npm run format
yalc publish
```

然后再 `AdonisJS` 项目中更新 `EaseAdmin`

```shell
yalc update easeadmin
```

最后请记得重启服务，否则修改后的代码不会生效。