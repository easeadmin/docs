# 常见问题
如果在使用过程中遇到问题，欢迎在 [issue](https://github.com/easeadmin/core/issues) 中反馈。

## Typescript 无法与 amis 交互

`EaseAdmin` 是前后端分离项目，`builder` 方法只负责构建页面，具体的交互方法请参考 `amis` 表达式的使用说明。

## 如何设置语言

请确保你已经添加 `node ace add i18n` 扩展，当前语言默认以请求头 `Accept-Language` 来设置语言，你可以更改浏览器首选语言设置，或者登录后在页面头部右侧设置中切换语言。
