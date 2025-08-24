# Filters

Filters allow you to limit the scope of data queries using custom conditions.

## Basic Usage

The usage of filters is the same as defining form items; you just need to define filter conditions in the form component.

```typescript
amis('input_text').name('id').label('ID').filter(QueryType.eq),
amis('input_text').name('name').label('Name').filter(QueryType.like),
```

## Filter Fields

In addition to defining filter fields in form items, you can also define additional filter fields in the repository for quick search and filtering.

```typescript
import Repository from 'easeadmin/repositories/resource_repository'
import { QueryType } from 'easeadmin/types'

export default class userRepository extends Repository {
    protected filters: Record<string, QueryType> = {
        id: QueryType.eq,
        time: QueryType.lt,
        name: QueryType.like,
        orderBy: QueryType.orderBy, // Sort field; if not defined, sorting function cannot be used
    }
}
```

## Filter Conditions

| Condition | Description |
| --- | --- |
| eq | Equal to |
| gt | Greater than |
| lt | Less than |
| orderBy | Sort field |
| between | Range query |
| like | Fuzzy query |
| llike | Left fuzzy query |
| rlike | Right fuzzy query |