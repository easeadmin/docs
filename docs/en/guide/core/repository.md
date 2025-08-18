# Repository

If you need to customize a repository, you can inherit from the [base repository](https://github.com/easeadmin/core/blob/main/src/repositories/repository.ts), which provides all the data interfaces required by `resource`. If the requested method is not implemented, an exception will be thrown.

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

## Resource Repository

If your repository needs to handle CRUD operations for resources, you can inherit from the [resource repository](https://github.com/easeadmin/core/blob/main/src/repositories/resource_repository.ts), which includes all the methods of the base repository. It also additionally implements the interfaces required for `crud`.

```typescript
import ResourceRepository from 'easeadmin/repositories/resource_repository'
import User from '#models/user'

export default class MyRepository extends ResourceRepository {
    protected model = User
}
```

## Request External Data

If your repository needs to request external data, you can use `axios` or `fetch` to build request configurations.

```shell
npm install axios
```

Using axios to request data

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