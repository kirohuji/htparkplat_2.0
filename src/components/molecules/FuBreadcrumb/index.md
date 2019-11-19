```vue
<template>
  <FuBreadcrumb :navigation="navigation"/>
</template>
<script>
export default {
  data(){
    return {
      navigation:[
        {
          label:'Hello'
        },
        {
          label:'World'
        }
      ]
    }
  }
}
</script>
```