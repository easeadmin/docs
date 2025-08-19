# 国际化

国际化依赖于 `i18n` 扩展，如果你没有安装，你需要执行 `ace` 命令添加国际化支持。

```shell
node ace add @adonisjs/i18n
```

## 配置语言

你可以在 `config/admin.ts` 中配置支持的语言。

```typescript
export default defineConfig({
  languages: ['en', 'zh'],
})
```

## 创建新的语言文件

要快速创建新的语言文件，你可以执行 `admin:create` 命令。此命令在创建 crud 页面的同时创建配置中对应的语言文件。

```shell
node ace admin:create test
```

创建的语言文件如下

```typescript
resource/lang/en/admin/test.json
resource/lang/zh/admin/test.json
```

## 翻译语言

你可以通过 `ctx.admin.t` 方法来翻译语言。该方法接受三个参数，分别是 `翻译内容`、`翻译参数`、`默认值` 如果未定义默认值并且未找到翻译内容，则会将第一个参数作为默认值返回。

```typescript
ctx.admin.t('welcome') // 有翻译
// 欢迎

ctx.admin.t('welcome_to') // 无翻译
// Welcome to

ctx.admin.t('welcome_to', {name:'EaseAdmin'}, 'Welcome to Not found') // 无翻译
// Welcome to Not found
```

## 前端国际化

amis 自带中文和英文两个语言包，如果你需要使用其他语言，你需要在 `public/ease/jssdk/locale` 文件夹中配置语言包。并且在渲染成 HTML 页面时将该语言包引入。

```typescript
import amis from 'easeadmin/builder/amis'
import html from 'easeadmin/builder/html'

const langs = ['de-DE.js']
const scripts = langs.map((lang) => `<script src="/ease/jssdk/locale/${lang}"></script>`).join('\n')

html(amis('page').body('test'),{inject:scripts})
```