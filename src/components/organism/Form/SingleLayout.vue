<template>
  <el-form label-width="80px"
           :size="size"
           :model="model.result">
    <el-form-item :key="index"
                  label-width="140px"
                  v-for="(field,index) in model.fields"
                  :label="field.label">
      <el-input v-if="field.type=='input'"
                :placeholder=field.placeholder
                v-model="model.result[field.value]" />
      <el-input v-else-if="field.type=='textarea'"
                :rows="2"
                v-model="model.result[field.value]">
      </el-input>

      <el-select v-else-if="field.type=='select'"
                 v-model="model.result[field.value]">
        <el-option :label="option.label"
                   :key="index"
                   v-for="(option,index) in field.options"
                   :value="option.value"></el-option>
      </el-select>
      <el-checkbox-group v-else-if="field.type=='checkbox'"
                         v-model="model.result[field.value]">
        <el-checkbox-button :label="option.label"
                            :key="index"
                            v-for="(option,index) in field.options"
                            :value="option.value"></el-checkbox-button>
      </el-checkbox-group>
      <el-radio-group v-else-if="field.type=='radio'"
                      v-model="model.result[field.value]">
        <el-radio border
                  :label="option.label"
                  :key="index"
                  v-for="(option,index) in field.options"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item v-if="hasButtons">
      <el-button type="primary"
                 @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: 'SingleLayoutForm',
  props: {
    hasButtons: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium'
    },
    model: {
      type: Object,
      default: () => {
        return {
          result: {
            name: 'test',
            region: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },
          fields: [{
            label: '活动名称',
            value: 'name',
            type: 'input'
          },
          {
            label: '活动区域',
            value: 'region',
            type: 'select',
            options: [
              {
                label: '区域一',
                value: 'shanghai'
              },
              {
                label: '区域二',
                value: '北京'
              }]
          },
          {
            label: '活动性质',
            value: 'type',
            type: 'checkbox',
            options: [
              {
                label: '美食/餐厅线上活动',
                value: 'type'
              },
              {
                label: '地推活动',
                value: 'type'
              },
              {
                label: '线下主题活动',
                value: 'type'
              }]
          },
          {
            label: '特殊资源',
            value: 'resource',
            type: 'radio',
            options: [
              {
                label: '线上品牌商赞助'
              },
              {
                label: '线下场地免费'
              }]
          }
          ]
        }
      }
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submit', this.model.result)
    }
  }
}
</script>
