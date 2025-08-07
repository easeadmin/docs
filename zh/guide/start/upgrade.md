`EaseAdmin` 的发布会尽量降低版本升级带来的影响，在升级前请备份您的代码和数据库。

# 通用升级步骤

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

