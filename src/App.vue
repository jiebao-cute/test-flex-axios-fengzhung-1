<template>
  <div id="app">
   <ElInput v-model="name" clearable @focus="change" @clear="clear">
     <ElInput clearable></ElInput>
   </ElInput>
    <hr/>
    <MyEcharts :height="this.height" :width="this.width" :options="options"></MyEcharts>
    <div style="display: flex">
      <button @click="ChangeWidth" >修改大小</button>
      <button @click="ChangeOptions">修改样式</button>
    </div>
  </div>
</template>

<script>
import MyEcharts from "@/components/MyEcharts";
import ElInput from "@/components/ElInput";
import {options1,options2} from "@/components/options";
export default {
  name: 'App',
  components: {
    ElInput,
    MyEcharts
  },
  data(){
    return{
      name:'',
      options: options1,
      width:'600px',
      height:'400px'
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
    },
    ChangeWidth(){
      if (this.width === '600px' ){
        this.width = '800px'
      }else{
        this.width = '600px'
      }
    },
    ChangeOptions(){
      if (this.options === options1){
        this.options = options2
      }else{
        this.options = options1
      }
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
