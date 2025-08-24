# Table Fields

In addition to regular field display, it also supports rich column configurations.

## Basic Usage

```typescript
amis('column_item').name('id').label('ID') // Display ID
amis('column_item').name('role.name').label('role_name') // Display name field of related data
amis('column_item').name('nickname').label(this.ctx.admin.t('nickname')) // Translate label
```

## Sortable

You can configure `sortable` on the column, and a clickable sort icon will be rendered on the right side of the column header, which can switch between ascending and descending order.

```typescript
amis('column_item').name('id').label('ID').sortable(true)
```

## Searchable

You can configure `searchable` on the column, and a clickable search icon will be rendered on the right side of the column header. Click to enter keywords to search for this column.

```typescript
amis('column_item').name('id').label('ID').searchable(true)
```

## Filterable

You can configure the `filterable` property on the column, and a clickable filter icon will be rendered on the right side of the column header. Click to display a drop-down box and select to filter.

```typescript
amis('column_item').name('status').label('Status').filterable(true)
```

Or specify filter parameters

```typescript
amis('column_item').name('status').label('Status').filterable(amis('quick_filter_config').options([0,1,2,3]))
```

## Quick Edit

You can configure `quickEdit` for the column to实现 in-table quick editing and batch saving functions.

```typescript
amis('column_item').name('status').label('Status').quickEdit(true)
```

You also need to implement a `quickSaveApi` interface and configure it for the `crud` component

```typescript
import Controller from 'easeadmin/controllers/resource_controller'

export default class quickEditController extends Controller{
    builder(){
        return super.builder().find('list').quickSaveApi('/api/quick/save')
    }
}
```

## Display Status

```typescript
//status = 0 | 1 | success | pending | queue | schedule | fail
amis('column_item').name('status').type('status').label('Status'),
```

## Mapping Display

```typescript
// visible = 0 | 1
amis('column_item').name('visible').type('mapping').label('Visible').attr('map', { '0': 'No', '1': 'Yes' })
```

## Loop Display

```typescript
// roles = [{name:'admin'},{name:'user'}]
amis('column_item').name('roles').label('Roles').type('each').attr(
  'items', 
  amis('tag').label('${name}').displayMode('rounded').color('#4096ff')
)
```

## More

For more configuration items, please refer to the [amis documentation](https://baidu.github.io/amis/en-US/components/crud)