# 数据仓库

如果你需要自定义一个仓库，你可以继承基础仓库 ，他提供了 `resource` 所需的所有数据接口，如果请求的方法未实现，会抛出一个异常。

```typescript
import Repository from 'easeadmin/repositories/repository'
import User from '#models/user'

export default class MyRepository extends Repository {
    public async show(id:any) {
        return await User.findOrFail(id)
    }

    public async update(id:any, data:any) {
        const result = await User.findOrFail(id)
        result.merge(data)
        return await result.save()
    }
}
```

## 基础仓库功能表

你可以查看 [基础仓库源码](https://github.com/easeadmin/core/blob/main/src/repositories/repository.ts) 了解更多信息。

|     方法      |    功能描述    |
| :---------- | :----------------- |
| paginate(qs, filters) | 分页数据 |
| export(qs, filters) | 导出数据 |
| options(qs, filters) | 选项数据 |
| edit(id) | 编辑数据 |
| show(id) | 详情数据 |
| store(data) | 新增数据 |
| update(id,data) | 更新数据 |
| delete(id) | 删除数据 |
| restore(id) | 恢复删除 |
| forceDelete(id) | 强制删除 |

## 资源仓库

如果你的仓库需要处理资源的 CRUD 操作，你可以继承资源仓库，他包含基础仓库的所有方法。并且额外实现了 `crud` 所需的接口。

```typescript
import ResourceRepository from 'easeadmin/repositories/resource_repository'
import User from '#models/user'

export default class MyRepository extends ResourceRepository {
    protected model = User
}
```

## 资源仓库功能表

你可以查看 [资源仓库源码](https://github.com/easeadmin/core/blob/main/src/repositories/resource_repository.ts) 了解更多信息。

|     方法      |    功能描述    |
| :---------- | :----------------- |
| only() | 获取安全的输入数据 |
| scope() | 全局查询范围控制 |
| getModel() | 获取模型 |
| setModel() | 设置模型 |
| getOptionsValue() | 获取用于保存的选项数据ID |
| getRelationValues() | 获取用于保存的关联数据ID |
| queryBuilder(query,params,filters) | 构建查询 |

## 资源仓库属性表

|     名称      |    默认值    |    功能描述    |
| :---------- | :----------------- | :----------------- |
| pk | id | 主键名称 |
| fields | 无 | 允许操作的字段 |
| model | 无 | 仓库模型 |
| filters | { id: eq, orderBy: orderBy} | 允许的筛选器字段 |

## 请求外部数据

如果你的仓库需要请求外部数据，你可以使用 `axios` 或 `fetch` 来构建请求配置。

```shell
npm install axios
```

使用 axios 请求数据

```typescript
import { Repository } from 'easeadmin/repositories/repository'
import axios from 'axios'

export default class MyRepository extends Repository {
    async show(id:any) {
        const response = await axios.get('/users/'+id)
        return response.data
    }
}
```