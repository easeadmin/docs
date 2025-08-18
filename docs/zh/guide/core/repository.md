# 数据仓库

如果你需要自定义一个仓库，你可以继承 [基础仓库](https://github.com/easeadmin/core/blob/main/src/repositories/repository.ts) ，他提供了 `resource` 所需的所有数据接口，如果请求的方法未实现，会抛出一个异常。

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

## 资源仓库

如果你的仓库需要处理资源的 CRUD 操作，你可以继承 [资源仓库](https://github.com/easeadmin/core/blob/main/src/repositories/resource_repository.ts) 他包含基础仓库的所有方法。并且额外实现了 `crud` 所需的接口。

```typescript
import ResourceRepository from 'easeadmin/repositories/resource_repository'
import User from '#models/user'

export default class MyRepository extends ResourceRepository {
    protected model = User
}
```

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