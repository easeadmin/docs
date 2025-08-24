# Toolbar

The table header has three default operation tools: batch delete, filter, and add. If there are more operation needs, the system provides the function of custom tools.

```typescript
import Controller from 'easeadmin/controllers/resource_controller'

export default class MyController extends Controller {
    protected showFilterToggler = false  // Disable filter tool
    protected showBulkActions = false // Disable bulk operations
    protected showCreateButton = false // Disable create operation
}
```

## Add Custom Operation Buttons

```typescript
import Controller from 'easeadmin/controllers/resource_controller'

export default class MyController extends Controller {
    headerToolbar(){
        let toolbar = super.headerToolbar()
        toolbar.push(
            amis('button').label('Custom Operation').type('primary'),
            amis('schema').type('export-csv').attr('label','Export All to CSV').attr('api',this.ctx.admin.api('export')),
            amis('schema').type('export-excel').attr('label','Export All to Excel').attr('filename','Export File Name'),
            amis('schema').type('export-excel').attr('label','Custom Export Columns').attr('exportColumns',[
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

# Custom Create Button

The create button is a form popup. If you need to customize the behavior of the create button, you can override the `creator` method in the controller.

```typescript
import Controller from 'easeadmin/controllers/resource_controller'

export default class MyController extends Controller {
    protected creator() {
        return super.creator()
        .initApi('/api/initapi') // Reset data source
        .api('/api/postapi') // Reset submission address
        .redirect('/admin/user') // Redirect address after submission
    }
}
```