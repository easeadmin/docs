# 数据表单

数据表单提供了丰富的组件，来帮助你快速的构建 form 表单，更详细的表单组件使用方法请参考 [amis 文档](https://baidu.github.io/amis/zh-CN/components/form/index)

## 基本使用

```typescript
amis('input_text').name('text').label('文字输入')
amis('input_text').name('text').label('禁止编辑').disabled(true)
amis('input_text').name('text').label('设置默认值').value('默认值')
amis('input_text').name('text').label('设置占位符').placeholder('表单项占位说明')
amis('input_text').name('text').label('设置描述').description('表单项说明')
```

## 不同边框风格

```typescript
amis('input_text').name('text').label('全边框').borderMode('full')
amis('input_text').name('text').label('半边框').borderMode('half')
amis('input_text').name('text').label('无边框').borderMode('none')
```

## 附加组件

```typescript
amis('input_text').name('text').label('添加附加组件').addOn(amis('button').label('搜索'))
amis('input_text').name('text').label('设置可清除').clearable(true)
amis('input_text').name('text').label('设置前后缀').prefix('$').suffix('元')
```

## 选择器

```typescript
amis('options').name('opt').label('选择器1').options([1,2,3,4]) // 数组格式
amis('options').name('opt').label('选择器2').options([{label:'ID1',value:1},{label:'ID2',value:2}]) // JSON 格式
amis('options').name('opt').label('选择器3').source(this.ctx.admin.api('options')), //从接口获取选项数据
```

## 文件上传

```typescript
amis('input_image').name('avatar').label('上传头像').receiver('/api/upload/image'),
amis('input_file').name('file').label('上传文件').receiver('/api/upload/file'),
```

要求返回的格式为

```json
{
  "status": 0,
  "msg": "",
  "data": {
    "value": "文件资源地址"
  }
}
```