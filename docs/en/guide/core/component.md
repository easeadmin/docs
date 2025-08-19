# Component

The component library is developed based on `amis`, which uses JSON configuration to generate pages, reducing page development workload and greatly improving efficiency. However, a large number of JSON configurations can lead to poor code readability and high maintenance costs. Therefore, `EaseAdmin` has encapsulated `Amis`' `150+` components, making `Amis` page construction more concise and efficient.

All `Amis` components are located in the `easeadmin/builder` directory. The calling method is the same as the `property name` in the `Amis` component library property table, and the parameters correspond to the `property values`. You can find detailed information about the components in the [amis documentation](https://baidu.github.io/amis/zh-CN/components).

## Component Usage

The following is the property table of a `Container` component. You can create a component object through the `make` method to chain call all the properties in the `Container` component property table.

| Property Name | Type | Default Value | Description |
| :--------------- | :--------- | :---------: | :---------------------- |
| type | string | "container" | Specify as container renderer |
| className | string | | CSS class name of the outer Dom |
| bodyClassName | string | | CSS class name of the container content area |
| wrapperComponent | string | "div" | Container tag name |
| style | object | | Custom style |
| body | SchemaNode | | Container content |

```typescript
import { Container } from 'easeadmin/builder'
Container.make()
  .className('my-container')
  .bodyClassName('my-body')
  .style({ color: 'red' })
  .body('Hello World')
```

Or use the built-in amis method to create component objects.

```typescript
import amis from 'easeadmin/builder/amis'
amis('container')
  .className('my-container')
  .bodyClassName('my-body')
  .style({ color: 'red' })
  .body('Hello World')
  
```

The above example will output `Amis` `JSON`

```json
{"type":"container", "className":"my-container", "bodyClassName":"my-body", "style":{"color":"red"}, "body":"Hello World"}
```

## Basic Components

You can find almost all `amis` components in `EaseAdmin`, which all inherit from the `Schema` class and have the following public methods.

| Method Name | Parameters | Description |
| :---------- | :----------------- | :--------------: |
| make | None | Create a component instance |
| id | string | Set component id |
| find | string | Find component by ID |
| type | string | Set component type |
| attr | string,any,string? | Set custom property |
| style | object | Set component style |
| className | string | Set component class name |
| definitions | object | Set component definitions |
| permission | boolean | Set whether to render the component |
| onEvent | object | Set component events |
| remove | string? | Remove component property |

If you cannot find the component or property you need, you can set the property you need through the `attr` method of `Schema`.

```typescript
import amis from 'easeadmin/builder/amis'

// Set custom property
// Output: {myKey:['myValue']}
amis('schema').attr('myKey', ['myValue'])

// Append a value to the end of the array
// Output: {myKey:['myValue','myValue2']}
amis('schema').attr('myKey', 'myValue2', 'push')

// Append a value to the beginning of the array
// Output: {myKey:['myValue3','myValue','myValue2']}
amis('schema').attr('myKey', 'myValue3', 'unshift')

// Replace the entire key value
// Output: {myKey:{test:1}}
amis('schema').attr('myKey', { test: 1 }, 'replace')

// Merge an object into the key value
// Output: {myKey:{test:1,test2:2}}
amis('schema').attr('myKey', { test2: 2 }, 'merge')
```

## Building Pages

With `EaseAdmin`, you will find that building pages with `AdonisJS` backend code is so simple.

```typescript
import amis from 'easeadmin/builder/amis'
import html from 'easeadmin/builder/html'

// Set page title
let page = amis('page').title('Welcome')

// In page body place a button
page.body(amis('button').label('Hello World').level('primary'))

// In page body place multiple buttons
page.body([
  amis('button').label('First Button').level('primary'),
  amis('button').label('Second Button').level('info').id('second'),
])

// Find component
let second = page.find('second')

// Remove component's level attribute
second.remove('level')

// Remove component
second.remove()

// Don't render component
second.permission(false)

// Render as HTML
html(page, {
    title: string // Page title
    host?: string // Domain name for static files
    inject?: string // Custom HTML injected into the page
    props?: Record<string, any> // amis properties
    env?: Record<string, any> // amis environment variables
  })
```

## Code Conversion

`EaseAdmin` provides a `parser` method to convert `json` to `amis` code. This feature is also built into the `Developer` tool in the backend.

```typescript
import parser from 'easeadmin/builder/parser'
const result = parser({"type":"container", "body":"Hello World"})
console.log(result)
```

Converted Code

```typescript
amis('container').body('Hello World')
```