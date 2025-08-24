# Data Forms

Data forms provide rich components to help you quickly build forms. For more detailed usage of form components, please refer to the [amis documentation](https://baidu.github.io/amis/en-US/components/form/index)

## Basic Usage

```typescript
amis('input_text').name('text').label('Text Input')
amis('input_text').name('text').label('Disabled').disabled(true)
amis('input_text').name('text').label('Set Default Value').value('Default Value')
amis('input_text').name('text').label('Set Placeholder').placeholder('Form item placeholder description')
amis('input_text').name('text').label('Set Description').description('Form item description')
```

## Different Border Styles

```typescript
amis('input_text').name('text').label('Full Border').borderMode('full')
amis('input_text').name('text').label('Half Border').borderMode('half')
amis('input_text').name('text').label('No Border').borderMode('none')
```

## Additional Components

```typescript
amis('input_text').name('text').label('Add Additional Component').addOn(amis('button').label('Search'))
amis('input_text').name('text').label('Set Clearable').clearable(true)
amis('input_text').name('text').label('Set Prefix and Suffix').prefix('$').suffix('USD')
```

## Selectors

```typescript
amis('options').name('opt').label('Selector 1').options([1,2,3,4]) // Array format
amis('options').name('opt').label('Selector 2').options([{label:'ID1',value:1},{label:'ID2',value:2}]) // JSON format
amis('options').name('opt').label('Selector 3').source(this.ctx.admin.api('options')), // Get option data from interface
```

## File Upload

```typescript
amis('input_image').name('avatar').label('Upload Avatar').receiver('/api/upload/image'),
amis('input_file').name('file').label('Upload File').receiver('/api/upload/file'),
```

The required return format is

```json
{
  "status": 0,
  "msg": "",
  "data": {
    "value": "file resource address"
  }
}
```