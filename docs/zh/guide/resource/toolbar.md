# 工具栏

表格头部默认有批量删除、筛选、新增三个操作工具，如果有更多的操作需求，系统提供了自定义工具的功能

```typescript
import Controller from 'easeadmin/controllers/resource_controller'

export default class MyController extends Controller {
    protected showFilterToggler = false  // 禁用筛选工具
    protected showBulkActions = false // 禁用批量操作
    protected showCreateButton = false // 禁用创建操作
}
```

## 添加自定义操作按钮

```typescript
import Controller from 'easeadmin/controllers/resource_controller'

export default class MyController extends Controller {
    headerToolbar(){
        let toolbar = super.headerToolbar()
        toolbar.push(
            amis('button').label('自定义操作').type('primary'),
            amis('schema').type('export-csv').attr('label','全量导出 CSV').attr('api',this.ctx.admin.api('export')),
            amis('schema').type('export-excel').attr('label','全量导出 Excel').attr('filename','导出文件名')
            amis('schema').type('export-excel').attr('label','自定义导出列').attr('exportColumns',[
            {
                "name": "id",
                "label": "ID"
            },
            {
                "name": "engine",
                "label": "Rendering engine"
            },
            {
                "name": "browser",
                "label": "Browser"
            }])
        )
        return toolbar
    }
}
```

# 自定义新建按钮

新建按钮为一个 form 表单弹窗，如果你需要自定义新建按钮的行为，你可以在控制器中重写 `creator` 方法。

```typescript
import Controller from 'easeadmin/controllers/resource_controller'

export default class MyController extends Controller {
    protected creator() {
        return super.creator()
        .initApi('/api/initapi') //重置数据源
        .api('/api/postapi') //重置提交地址
        .redirect('/admin/user') //提交后跳转地址
    }
}
```