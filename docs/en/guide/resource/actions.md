# Row Actions

The table header has three default operation tools: bulk delete, filter, and create. If you have more operation needs, the system provides the function to customize tools.

```typescript
import Controller from 'easeadmin/controllers/resource_controller'

export default class MyController extends Controller {
    protected showOperations = false  // Turn off operation column
    protected showDetailOperation = false // Turn off detail operation
    protected showEditOperation = false // Turn off edit operation
    protected showDeleteOperation = false // Turn off delete operation
}
```

Switch the operation button display mode to flat

```typescript
import Controller from 'easeadmin/controllers/resource_controller'

export default class MyController extends Controller {
    operations(){
        return super.operations().buttons(this.actions())
    }
}
```

## Add Custom Action Buttons

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

## Custom Detail Button

The detail button is a static form pop-up window. If you need to customize the behavior of the detail button, you can override the `detail` method in the controller.

```typescript
import Controller from 'easeadmin/controllers/resource_controller'

export default class MyController extends Controller {
    protected detail() {
        return amis('container').body('Overridden detail display content')
    }
}
```

## Custom Edit Button

The edit button is a form pop-up window. If you need to customize the behavior of the edit button, you can override the `editor` method in the controller.

```typescript
import Controller from 'easeadmin/controllers/resource_controller'

export default class MyController extends Controller {
    protected editor() {
        return super.editor()
        .initApi('/api/initapi') // Reset data source
        .api('/api/postapi') // Reset submission address
        .redirect('/admin/user') // Redirect address after submission
    }
}
```