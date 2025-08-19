# 事件

`EaseAdmin` 前后端都支持事件机制，用于在应用程序中触发和监听事件。

## 前端事件

前端事件是由 `amis` 提供支持，用于在前端监听交互事件。更多事件动作请参考 [amis 事件动作](https://baidu.github.io/amis/zh-CN/docs/concepts/event) 说明

通过 `onEvent` 属性实现渲染器事件与响应动作的绑定。`onEvent` 内配置事件和动作映射关系，`actions` 是事件对应的响应动作的集合。

```typescript
amis('page').body([
  amis('button')
    .label('尝试点击、鼠标移入/移出')
    .level('primary')
    .onEvent('click', [
      amis('event').actionType('toast').args({ msgType: 'info', msg: '派发点击事件' }),
    ])
    .onEvent('mouseenter', [
      amis('event').actionType('toast').args({ msgType: 'info', msg: '派发鼠标移入事件' }),
    ])
    .onEvent('mouseleave', [
      amis('event').actionType('toast').args({ msgType: 'info', msg: '派发鼠标移出事件' }),
    ]),
])
```

发送 `HTTP` 请求

```typescript
amis('page')
  .data({ name: 'lll' })
  .body([
    amis('button')
      .label('发送 Ajax 请求')
      .level('primary')
      .confirmText('确认要发出这个请求？')
      .onEvent('click', [
        amis('event')
          .actionType('ajax')
          .attr('api', {
            url: 'https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm?name=${name}',
            method: 'post',
            responseData: { resId: '${id}' },
            messages: { success: '成功了！欧耶', failed: '失败了呢。。' },
          })
          .data({ age: 18 }),
        amis('event')
          .actionType('toast')
          .expression('${event.data.responseResult.responseStatus === 0}')
          .args({ msg: '${event.data.responseResult|json}' }),
      ]),
  ])
```

跳转链接

```typescript
amis('page')
  .body([
    amis('button')
      .label('Baidu')
      .level('primary')
      .onEvent('click', [
        amis('event')
          .actionType('url')
          .args({
            url: 'http://www.baidu.com'
          }),
      ]),
  ])
```

执行 Javascript

```typescript
amis('page').body([
  amis('button')
    .label('run js')
    .level('primary')
    .onEvent('click', [
      amis('event')
        .actionType('custom')
        .attr(
          'script',
          "alert('javascript running')"
        ),
    ]),
])
```

## 后端事件

后端事件是由 `adonisjs` 提供支持，用于在后端监听和触发事件。更多事件请参考 [adonisjs 事件机制](https://docs.adonisjs.com/guides/references/events) 说明

事件监听器定义在此 `start/events.ts` 文件中。您可以使用 `make:preload` 命令创建此文件。

```shell
node ace make:preload events
```

您必须使用 `emitter.on` 监听事件。该方法接受事件名称作为第一个参数，监听器作为第二个参数。

```typescript
import emitter from '@adonisjs/core/services/emitter'

emitter.on('user:registered', function (user) {
  console.log(user)
})
```

定义事件监听器后，即可使用 `emitter.emit` 方法来触发 `user:registered` 事件。该方法将事件名称作为第一个参数，将事件数据作为第二个参数。

```typescript
import emitter from '@adonisjs/core/services/emitter'

export default class UsersController {
  async store() {
    const user = await User.create(data)
    emitter.emit('user:registered', user)
  }
}
```

您可以使用 `emitter.once` 来监听一次事件。

```typescript
emitter.once('user:registered', function (user) {
  console.log(user)
})
```