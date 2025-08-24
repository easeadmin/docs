# Dashboard

A default dashboard is included in `app/admin/admin_controller.ts`.

## Customization
Override the `builder` method to customize the dashboard layout and content.

```typescript
import Controller from 'easeadmin/admin/controllers/admin_controller'
import amis from 'easeadmin/builder/amis'

export default class AdminController extends Controller {
  protected builder() {
    // Return a grid layout with 3 columns, each containing a panel
    const grids = amis('grid').columns([
        amis('grid_item').md(4).body(
            amis('panel').body([
               amis('tpl').tpl('column data: ${column1}')
            ])
        ),
        amis('grid_item').md(4).body(
            amis('panel').body([
               amis('tpl').tpl('column data: ${column2}')
            ])
        ),
        amis('grid_item').md(4).body(
            amis('panel').body([
               amis('tpl').tpl('column data: ${column3}')
            ])
        )
    ])

    // Return a page with show as the initial data API
    return amis('page').initApi(this.ctx.admin.api('show')).body(grids)
  }
}
```

Override the `show` method to return custom data required by the `builder` method

```typescript
import Controller from 'easeadmin/admin/controllers/admin_controller'
import amis from 'easeadmin/builder/amis'

export default class AdminController extends Controller {
    async show() {
        return this.ok({
            column1: '1',
            column2: '2',
            column3: '3',
        })
    }
}
```