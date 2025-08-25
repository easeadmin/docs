# 表格字段

除了常规的字段展示，还支持丰富的列配置。如需了解更多请参考 [amis crud 组件](https://baidu.github.io/amis/zh-CN/components/crud/)

## 基本用法

```typescript
amis('column_item').name('id').label('ID') //展示ID
amis('column_item').name('role.name').label('role_name') //展示关联数据的name字段
amis('column_item').name('nickname').label(this.ctx.admin.t('nickname')) // 翻译 label
```

## 排序检索

可以在列上配置 `sortable` 该列表头右侧会渲染一个可点击的排序图标，可以切换正序和倒序

```typescript
amis('column_item').name('id').label('ID').sortable(true)
```

## 快速搜索

可以在列上配置 `searchable` 该列表头右侧会渲染一个可点击的搜索图标，点击可以输入关键字进行该列的搜索

```typescript
amis('column_item').name('id').label('ID').searchable(true)
```

## 快速过滤

可以在列上配置 `filterable` 属性，该列表头右侧会渲染一个可点击的过滤图标，点击显示下拉框，选中进行过滤

```typescript
amis('column_item').name('status').label('Status').filterable(true)
```

或者指定过滤参数

```typescript
amis('column_item').name('status').label('Status').filterable(amis('quick_filter_config').options([0,1,2,3]))
```

## 快速编辑

可以通过给列配置 `quickEdit` 可以实现表格内快速编辑并批量保存的功能。

```typescript
amis('column_item').name('status').label('Status').quickEdit(true)
```

同时还要实现一个 `quickSaveApi` 的接口配置给 `crud` 组件

```typescript
import Controller from 'easeadmin/controllers/resource_controller'

export default class quickEditController extends Controller{
    builder(){
        return super.builder().find('list').quickSaveApi('/api/quick/save')
    }
}
```

## 显示状态

```typescript
//status = 0 | 1 | success | pending | queue | schedule | fail
amis('column_item').name('status').type('status').label('Status'),
```

## 映射显示

```typescript
// visible = 0 | 1
amis('column_item').name('visible').type('mapping').label('是否可见').attr('map', { '0': '不显示', '1': '显示' })
```

## 循环显示

```typescript
// roles = [{name:'admin'},{name:'user'}]
amis('column_item').name('roles').label('角色').type('each').attr(
  'items', 
  amis('tag').label('${name}').displayMode('rounded').color('#4096ff')
)
```
