# Repository

If you need to customize a repository, you can inherit from the base repository, which provides all the data interfaces required by `resource`. If the requested method is not implemented, an exception will be thrown.

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

## Base Repository Function Table

You can view the [base repository source code](https://github.com/easeadmin/core/blob/main/src/repositories/repository.ts) for more information.

| Method | Description |
| :---------- | :----------------- |
| paginate(qs, filters) | Pagination data |
| export(qs, filters) | Export data |
| options(qs, filters) | Option data |
| edit(id) | Edit data |
| show(id) | Detail data |
| store(data) | Create data |
| update(id,data) | Update data |
| delete(id) | Delete data |
| restore(id) | Restore deleted data |
| forceDelete(id) | Force delete data |

## Resource Repository

If your repository needs to handle CRUD operations for resources, you can inherit from the resource repository, which includes all the methods of the base repository. It also additionally implements the interfaces required for `crud`.

```typescript
import ResourceRepository from 'easeadmin/repositories/resource_repository'
import User from '#models/user'

export default class MyRepository extends ResourceRepository {
    protected model = User
}
```

## Resource Repository Function Table

You can view the [resource repository source code](https://github.com/easeadmin/core/blob/main/src/repositories/resource_repository.ts) for more information.

| Method | Description |
| :---------- | :----------------- |
| only() | Get secure input data |
| scope() | Global query scope control |
| getModel() | Get model |
| setModel() | Set model |
| getOptionsValue() | Get option data ID for saving |
| getRelationValues() | Get relation data ID for saving |
| queryBuilder(query,params,filters) | Build query |

## Resource Repository Properties Table

| Name | Default Value | Description |
| :---------- | :----------------- | :----------------- |
| pk | id | Primary key name |
| fields | None | Allowed operation fields |
| model | None | Repository model |
| filters | { id: eq, orderBy: orderBy} | Allowed filter fields |

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