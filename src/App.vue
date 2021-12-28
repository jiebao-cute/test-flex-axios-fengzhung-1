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
    <hr>
    <span style="display: flex ; font-size: 50px">练习axios</span>
    <div style="display: flex ;margin-top: 30px">
    <LeanAxios color="pink" @click="Get">get请求</LeanAxios>
      <LeanAxios color="purple" @click="Post">post请求</LeanAxios>
      <LeanAxios color="yellow" @click="Put">put请求</LeanAxios>
      <LeanAxios color="pink"  @click="Delete">delete请求</LeanAxios>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MyEcharts from "@/components/MyEcharts";
import LeanAxios from "@/components/LeanAxios";
import ElInput from "@/components/ElInput";
import {options1,options2} from "@/components/options";
axios.defaults.method='GET'
axios.defaults.baseURL='http://localhost:3000'
axios.defaults.params={id:100}

export default {
  name: 'App',
  components: {
    ElInput,
    MyEcharts,
    LeanAxios
  },
  data(){
    return{
      name:'',
      options: options1,
      width:'600px',
      height:'400px',
    }
  },
  watch:{
    name(val){
      console.log(val)
    }
  },
  methods:{
    Get(){
      axios({
        url:'/posts'
      }).then(
          res=>{
            console.log(res)
          }
      )
    },
    Post(){
      axios({
        methods: "POST",
        url:'http://localhost:3000/posts',
        data:{
          "title": "廖玉洁真可爱",
          "author": "玉洁"
        }
      }).then(res=>console.log(res.data))
    },
    Put(){
      axios({
        methods: "PUT",
        url:'http://localhost:3000/posts/1',
        data:{
          "title": "廖玉洁真可爱",
          "author": "玉洁"
        }
      }).then(res=>console.log(res.data))
    },
    Delete(){

    },
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
    },


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
