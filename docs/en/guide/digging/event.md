# Events

`EaseAdmin` supports event mechanisms on both frontend and backend for triggering and listening to events in applications.

## Frontend Events

Frontend events are supported by `amis` and used to listen to interaction events on the frontend. For more event actions, please refer to [amis Event Actions](https://baidu.github.io/amis/en-US/docs/concepts/event) documentation.

Bind renderer events with response actions through the `onEvent` property. Configure event and action mapping relationships within `onEvent`, where `actions` is a collection of response actions corresponding to events.

```typescript
amis('page').body([
  amis('button')
    .label('Try Clicking, Mouse In/Out')
    .level('primary')
    .onEvent('click', [
      amis('event').actionType('toast').args({ msgType: 'info', msg: 'Click event dispatched' }),
    ])
    .onEvent('mouseenter', [
      amis('event').actionType('toast').args({ msgType: 'info', msg: 'Mouse enter event dispatched' }),
    ])
    .onEvent('mouseleave', [
      amis('event').actionType('toast').args({ msgType: 'info', msg: 'Mouse leave event dispatched' }),
    ]),
])
```

Sending `HTTP` requests

```typescript
amis('page')
  .data({ name: 'lll' })
  .body([
    amis('button')
      .label('Send Ajax Request')
      .level('primary')
      .confirmText('Confirm to send this request?')
      .onEvent('click', [
        amis('event')
          .actionType('ajax')
          .attr('api', {
            url: 'https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm?name=${name}',
            method: 'post',
            responseData: { resId: '${id}' },
            messages: { success: 'Success! Hooray', failed: 'Failed..' },
          })
          .data({ age: 18 }),
        amis('event')
          .actionType('toast')
          .expression('${event.data.responseResult.responseStatus === 0}')
          .args({ msg: '${event.data.responseResult|json}' }),
      ]),
  ])
```

Redirecting links

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

Executing Javascript

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

## Backend Events

Backend events are supported by `adonisjs` and used for listening to and triggering events on the backend. For more events, please refer to [adonisjs Event Mechanism](https://docs.adonisjs.com/guides/references/events) documentation.

Event listeners are defined in the `start/events.ts` file. You can create this file using the `make:preload` command.

```shell
node ace make:preload events
```

You must use `emitter.on` to listen to events. This method accepts the event name as the first parameter and the listener as the second parameter.

```typescript
import emitter from '@adonisjs/core/services/emitter'

emitter.on('user:registered', function (user) {
  console.log(user)
})
```

After defining the event listener, you can use the `emitter.emit` method to trigger the `user:registered` event. This method takes the event name as the first parameter and the event data as the second parameter.

```typescript
import emitter from '@adonisjs/core/services/emitter'

export default class UsersController {
  async store() {
    const user = await User.create(data)
    emitter.emit('user:registered', user)
  }
}
```

You can use `emitter.once` to listen to an event only once.

```typescript
emitter.once('user:registered', function (user) {
  console.log(user)
})
```