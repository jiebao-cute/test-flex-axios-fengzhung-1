<template>
  <div>
    <el-input
        v-bind="$attrs"
        placeholder="请输入内容"
        v-model="innerVal"
        v-on="$listeners"
        @clear="$emit('clear',$event)"
    >
    </el-input>
    {{innerVal}}
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'myInput',
  //v-on="listerner"是用来接收在父组件里声明的事件，直接在子组件里使用v-on就可以接收所有的事件
  //attrs是将未在父组件声明的，子组件就可以批量接收
  //vue 组件会将被传入但是未被声明的props作为HTML属性绑定到组件的根元素上。使用inheritAttrs不让她继承
  inheritAttrs:false,
  data() {
    return {
      innerVal: this.value
    }
  },
  created() {
     //console.log(this.$attrs)
     //console.log(this.$listeners)
    //console.log(this.$slots)
  },
  // props:{
  //   clearable:{
  //     type: Boolean,
  //     default:false
  //   }
  // },
  watch:{
    value(){
      if(this.value !== this.innerVal){
        console.log(this.value)
        console.log(this.innerVal)
        this.innerVal = this.value
      }
    }
  }
}
</script>
<style scoped>

</style>