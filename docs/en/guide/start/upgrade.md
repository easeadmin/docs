# Upgrade

`EaseAdmin` will try to minimize the impact of version upgrades. Please back up your code and database before upgrading.

## Upgrade Steps

Get the latest framework code

```
npm update easeadmin
```

Publish static resources

```
node ace configure easeadmin --force
```

Reinstall the framework code forcefully

```
node ace admin:install admin --force
```

## Upgrade amis
The `amis` version we use is `6.13.0`. If a new version is released in [amis release](https://github.com/baidu/amis/releases), you only need to download the `jssdk.tar.gz` file in the `release`, extract it, and overwrite it to the `public/ease/jssdk` directory.

## Affected Files

```
├── app
│   ├── admin                           # admin application directory
│   │   ├── controllers                 # controllers directory
│   │   ├── repositories                # model repositories directory
│   │   └── routes.ts                   # admin routes file
├── config
│   └── admin.ts                        # framework configuration file
│   └── auth.ts                         # authentication configuration file
└── database
    └── migrations                      # database migrations directory
    └── seeders                         # database seeders directory
└── resources
    └── lang                            # language files directory
└── public
    └── ease                            # framework static resources directory
└── start
    └── routes.ts                       # framework routes file
```