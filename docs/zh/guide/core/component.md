# 组件库

组件库基于  `amis` 开发，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。但是大量的 JSON 配置会导致代码可读性差，维护成本高。所以 `EaseAdmin` 对 `Amis` 的 `150+` 组件进行了封装，使 `Amis` 构建页面更加简洁高效。

所有 `Amis` 组件都放在 `easeadmin/builder` 目录。调用方法与 `Amis` 组件库属性表中的 `属性名` 相同，参数对应 `属性值` 你可以在 [amis文档](https://baidu.github.io/amis/zh-CN/components) 中找到组件的详细信息。

## 组件使用

下面是一个 `Container` 组件的属性表，你可以通过 `make` 方法来创建一个组件对象来链式调用 `Container` 组件属性表中的全部属性。

| 属性名           | 类型       |   默认值    | 说明                    |
| :--------------- | :--------- | :---------: | :---------------------- |
| type             | string     | "container" | 指定为 container 渲染器 |
| className        | string     |             | 外层 Dom的类名          |
| bodyClassName    | string     |             | 容器内容区的类名        |
| wrapperComponent | string     |    "div"    | 容器标签名              |
| style            | object     |             | 自定义样式              |
| body             | SchemaNode |             | 容器内容                |

```typescript
import { Container } from 'easeadmin/builder'
Container.make()
  .className('my-container')
  .bodyClassName('my-body')
  .style({ color: 'red' })
  .body('Hello World')
```

或者使用内置的 amis 方法来创建组件对象。

```typescript
import amis from 'easeadmin/builder/amis'
amis('container')
  .className('my-container')
  .bodyClassName('my-body')
  .style({ color: 'red' })
  .body('Hello World')
  
```

以上例子将输出 `Amis` 的 `JSON`

```json
{"type":"container", "className":"my-container", "bodyClassName":"my-body", "style":{"color":"red"}, "body":"Hello World"}
```

## 基础组件

你可以在 `EaseAdmin` 中找到几乎所有的 `amis` 组件，他们都都继承自 `Schema` 类，都拥有以下公共方法。

| 方法名      | 参数               |       说明       |
| :---------- | :----------------- | :--------------: |
| make        | 无                 | 创建一个组件实例 |
| id          | string             |  设置组件的 id   |
| find        | string             |  通过ID查找组件  |
| type        | string             |  设置组件的类型  |
| attr        | string,any,string? |  设置自定义属性  |
| style       | object             |  设置组件的样式  |
| className   | string             |  设置组件的类名  |
| definitions | object             |  设置组件的定义  |
| permission  | boolean            |  设置是否渲染组件 |
| onEvent     | object             |  设置组件的事件  |
| remove      | string?            |  移除组件属性   |

如果你没有找到你需要的组件或属性，你可以通过 `Schema` 的 `attr` 方法来设置你需要的属性。

```typescript
import amis from 'easeadmin/builder/amis'

// 设置自定义属性
// 输出: {myKey:['myValue']}
amis('schema').attr('myKey', ['myValue'])

// 追加一个值到数组最后面
// 输出: {myKey:['myValue','myValue2']}
amis('schema').attr('myKey', 'myValue2', 'push')

// 追加一个值到数组最前面
// 输出: {myKey:['myValue3','myValue','myValue2']}
amis('schema').attr('myKey', 'myValue3', 'unshift')

// 替换整个 key 的值
// 输出: {myKey:{test:1}}
amis('schema').attr('myKey', { test: 1 }, 'replace')

// 合并一个对象到 key 的值
// 输出: {myKey:{test:1,test2:2}}
amis('schema').attr('myKey', { test2: 2 }, 'merge')
```

## 构建页面

使用 `EaseAdmin` 后你会发现原来用 `AdonisJS` 后端代码构建页面这么简单。

```typescript
import amis from 'easeadmin/builder/amis'
import html from 'easeadmin/builder/html'

// 给页面设置标题
let page = amis('page').title('Welcome')

// 在页面上放置一个按钮
page.body(amis('button').label('Hello World').level('primary'))

// 在页面上放置多个按钮
page.body([
  amis('button').label('First Button').level('primary'),
  amis('button').label('Second Button').level('info').id('second'),
])

// 查找组件
let second = page.find('second')

// 移除组件的 level 属性
second.remove('level')

// 移除组件
second.remove()

// 不渲染组件
second.permission(false)

// 渲染为 HTML
html(page, {
    title: string //页面标题
    host?: string //静态文件的域名
    inject?: string //自定义注入到页面的 HTML
    props?: Record<string, any> //amis 属性
    env?: Record<string, any> //amis 环境变量
  })
```

## 代码转换

`EaseAdmin` 提供了一个 `parser` 方法来将 `json` 转换为 `amis` 代码。该功能也内置在了后台的 `开发者` 工具中。

```typescript
import parser from 'easeadmin/builder/parser'
const result = parser({"type":"container", "body":"Hello World"})
console.log(result)
```

转换的代码

```typescript
amis('container').body('Hello World')
```