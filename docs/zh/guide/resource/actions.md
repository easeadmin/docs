# 行操作

表格头部默认有批量删除、筛选、新增三个操作工具，如果有更多的操作需求，系统提供了自定义工具的功能

```typescript
import Controller from 'easeadmin/controllers/resource_controller'

export default class MyController extends Controller {
    protected showOperations = false  // 关闭操作列
    protected showDetailOperation = false // 关闭详情操作
    protected showEditOperation = false // 关闭编辑操作
    protected showDeleteOperation = false // 关闭删除操作
}
```

将操作按钮显示方式切换为扁平化

```typescript
import Controller from 'easeadmin/controllers/resource_controller'

export default class MyController extends Controller {
    operations(){
        return super.operations().buttons(this.actions())
    }
}
```

## 添加自定义操作按钮

```typescript
import Controller from 'easeadmin/controllers/resource_controller'

export default class MyController extends Controller {
    actions(){
        return super.actions().push(
            amis('action')
            .label(this.ctx.admin.t('forceDelete'))
            .api(this.ctx.admin.api('delete','?force=1'))
        )
    }
}
```

## 自定义详情按钮

详情按钮为一个静态的 form 表单弹窗，如果你需要自定义详情按钮的行为，你可以在控制器中重写 `detail` 方法。

```typescript
import Controller from 'easeadmin/controllers/resource_controller'

export default class MyController extends Controller {
    protected detail() {
        return amis('container').body('重写了详情展示内容')
    }
}
```

## 自定义编辑按钮

编辑按钮为一个 form 表单弹窗，如果你需要自定义编辑按钮的行为，你可以在控制器中重写 `editor` 方法。

```typescript
import Controller from 'easeadmin/controllers/resource_controller'

export default class MyController extends Controller {
    protected editor() {
        return super.editor()
        .initApi('/api/initapi') //重置数据源
        .api('/api/postapi') //重置提交地址
        .redirect('/admin/user') //提交后跳转地址
    }
}
```
