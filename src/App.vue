<template>
  <div id="app">
   <ElInput v-model="name" clearable @focus="change" @clear="clear"></ElInput>
  </div>
</template>

<script>

import ElInput from "@/components/ElInput";
export default {
  name: 'App',
  components: {
    ElInput
  },
  data(){
    return{
      name:''
    }
  },
  watch:{
    name(val){
      console.log(val)
    }
  },
  methods:{
    change(){
      console.log('focus实现了一次')
    },
    clear(){
      console.log('clear实现了一次')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
