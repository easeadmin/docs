# 渲染

`EaseAdmin` 的组件不仅可以用来开发后台页面，你也可以将它当成前端 UI 库使用。

## 创建一个控制器

```shell
node ace make:controller demo
```

## 构建页面

使用 amis 构建一个简单的卡片页面，并渲染成 html 返回

```typescript
import amis from 'easeadmin/builder/amis'
import html from 'easeadmin/builder/html'

export default class DemoController {
  builder(){
    return amis('page').body(
      amis('card')
        .href('https://github.com/baidu/amis')
        .body(['这是一段内容'])
        .header(
          amis('card_header')
            .title('标题')
            .subTitle('副标题')
            .description('这是一段描述')
            .avatarText('Amis')
        )
    )
  }

  index() {
    return html(this.builder(),{title:'页面标题'})
  }
}
```
