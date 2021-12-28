<template>
<div class="container">
  <el-button v-bind="$attrs"
  v-on="$listeners"
  :style="style"
  >
    <slot></slot>
  </el-button>
</div>
</template>
<script>
export default {
created() {

},
  computed:{
  style(){
    return{
     background:this.$attrs.color
    }
  }
}
}
</script>
<style scoped>

</style>