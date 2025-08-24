# Internationalization

Internationalization depends on the `i18n` extension. If you haven't installed it, you need to execute the `ace` command to add internationalization support.

```shell
node ace add @adonisjs/i18n
```

## Configure Languages

You can configure supported languages in `config/admin.ts`.

```typescript
export default defineConfig({
  languages: ['en', 'zh'],
})
```

## Create New Language Files

To quickly create new language files, you can execute the `admin:create` command. This command creates corresponding language files in the configuration while creating CRUD pages.

```shell
node ace admin:create test
```

The created language files are as follows:

```typescript
resource/lang/en/admin/test.json
resource/lang/zh/admin/test.json
```

## Translate Languages

You can translate languages using the `ctx.admin.t` method. This method accepts three parameters: `translation content`, `translation parameters`, and `default value`. If no default value is defined and no translation content is found, the first parameter will be returned as the default value.

```typescript
ctx.admin.t('welcome') // With translation
// Welcome

ctx.admin.t('welcome_to') // Without translation
// Welcome to

ctx.admin.t('welcome_to', {name:'EaseAdmin'}, 'Welcome to Not found') // Without translation
// Welcome to Not found
```

## Frontend Internationalization

Amis comes with two language packs: Chinese and English. If you need to use other languages, you need to configure the language pack in the `public/ease/jssdk/locale` folder. And include this language pack when rendering into HTML pages.

```typescript
import amis from 'easeadmin/builder/amis'
import html from 'easeadmin/builder/html'

const langs = ['de-DE.js']
const scripts = langs.map((lang) => `<script src="/ease/jssdk/locale/${lang}"></script>`).join('\n')

html(amis('page').body('test'),{inject:scripts})
```