# 筛选器

过滤器允许你使用自定义条件来限制数据查询查询的范围。

## 常规使用

筛选器的使用与定义表单项相同，只需要在表单组件中定义过滤条件即可。

```typescript
amis('input_text').name('id').label('ID').filter(QueryType.eq),
amis('input_text').name('name').label('名称').filter(QueryType.like),
```

## 过滤字段

除了在表单项中定义过滤字段外，你还可以在仓库中额外定义过滤字段，用于快速搜索和筛选。

```typescript
import Repository from 'easeadmin/repositories/resource_repository'
import { QueryType } from 'easeadmin/types'

export default class userRepository extends Repository {
    protected filters: Record<string, QueryType> = {
        id: QueryType.eq,
        time: QueryType.lt,
        name: QueryType.like,
        orderBy: QueryType.orderBy, // 排序字段，如果没有定义则无法使用排序功能
    }
}
```

## 过滤条件

| 条件 | 说明 |
| --- | --- |
| eq | 等于 |
| gt | 大于 |
| lt | 小于 |
| orderBy | 排序字段 |
| between | 范围查询 |
| like | 模糊查询 |
| llike | 左模糊查询 |
| rlike | 右模糊查询 |