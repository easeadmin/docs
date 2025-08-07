如果发现 `EaseAdmin` 有不满足的功能，除了发 `issue` 等官方升级之外，最快的方法就是自己实现它，本文将介绍如何在本地环境下安装 `EaseAdmin` 并运行调试。

# 下载代码

首先你需要 fork 项目到自己的仓库，然后下载到本地

```
git clone git@github.com:easeadmin/core.git
```

切换到开发分支

```
cd core
git checkout dev
```

安装依赖

```
composer install
```

# 发布本地包
> 如果直接使用 npm link 来链接包，你将会遇到 peerDependencies 问题，这时候你需要使用 yalc 来发布本地包

```
npm install yalc -g
```

发布本地包

```
yalc publish
```

# 安装 AdonisJS

新建一个 AdonisJS 项目

```
npm init adonisjs@latest demo
```

# 添加本地 EaseAdmin

```
cd demo
yalc add easeadmin
npm install
```

# 初始化 EaseAdmin

```
node ace configure easeadmin
node ace admin:install admin --migrate
```
# 安装完成

启动服务并访问 http://localhos:3333/admin

```
node ace serve --watch
```

# 其他问题

每次修改 `EaseAdmin` 代码后，都需要重新发布本地包

```
npm run format
npm run quick:test
yalc publish
```

然后再 `AdonisJS` 项目中更新 `EaseAdmin`

```
yalc update easeadmin
```

最后请记得重启服务，否则修改后的代码不会生效。