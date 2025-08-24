# Rendering

`EaseAdmin` components can not only be used to develop backend pages, but also as a frontend UI library.

## Create a Controller

```shell
node ace make:controller demo
```

## Build Page

Use amis to build a simple card page and render it as HTML to return

```typescript
import amis from 'easeadmin/builder/amis'
import html from 'easeadmin/builder/html'

export default class DemoController {
  builder(){
    return amis('page').body(
      amis('card')
        .href('https://github.com/baidu/amis')
        .body(['This is some content'])
        .header(
          amis('card_header')
            .title('Title')
            .subTitle('Subtitle')
            .description('This is a description')
            .avatarText('Amis')
        )
    )
  }

  index() {
    return html(this.builder(),{title:'Page Title'})
  }
}
```