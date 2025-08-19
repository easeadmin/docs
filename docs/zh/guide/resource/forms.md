# 数据表单

`amis` 提供了丰富的表单组件，主要用作数据提交和展示数据。

## 基本用法

```typescript
amis('input_text').name('text').label('文字输入'),
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

## 更多

更多的表单组件请参考 [amis 文档](https://baidu.github.io/amis/zh-CN/components/form/index)
