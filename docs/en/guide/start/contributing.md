# Contributing Code

If you find that `EaseAdmin` lacks features you need, besides creating an `issue` and waiting for updates, the fastest way is to implement it yourself. This article will introduce how to install `EaseAdmin` in a local environment and run debugging.

## Download Code

First, you need to fork the project to your own repository, then download it locally, switch to the development branch, and install dependencies.

```shell
git clone git@github.com:easeadmin/core.git
git checkout -b dev
npm install
```

## Publish Local Package
If you directly use `npm link` to link the package, you will encounter `peerDependencies` issues. In this case, you need to use `yalc` to publish local packages.

```shell
npm install yalc -g
yalc publish
```

## Install AdonisJS

Create a new AdonisJS project, add the local `EaseAdmin` package to the project, and install dependencies again.

```shell
npm init adonisjs@latest demo
yalc add easeadmin
npm install
```

## Install EaseAdmin

After installation, start the service and visit `http://localhost:3333/admin` to log in with `admin/admin`.

```shell
node ace configure easeadmin
node ace admin:install admin --migrate
node ace serve --watch
```

## Other Issues

Every time you modify `EaseAdmin` code, you need to republish the local package.

```shell
npm run format
yalc publish
```

Then update `EaseAdmin` in the `AdonisJS` project.

```shell
yalc update easeadmin
```

Finally, remember to restart the service, otherwise the modified code will not take effect.