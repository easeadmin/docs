# 仪表盘

在 `app/admin/admin_controller.ts` 中包含了一个默认的仪表板。

## 自定义
重写 `builder` 方法来自定义仪表板的布局和内容。

```typescript
import Controller from 'easeadmin/admin/controllers/admin_controller'
import amis from 'easeadmin/builder/amis'

export default class AdminController extends Controller {
  protected builder() {
    // 返回一个 grid 布局，包含 3 列，每列都包含一个 panel 面板
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

    // 返回一个 page 页面，指定初始数据接口为 show
    return amis('page').initApi(this.ctx.admin.api('show')).body(grids)
  }
}
```

重写 `show` 方法，返回 `builder` 方法所需的自定义数据

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