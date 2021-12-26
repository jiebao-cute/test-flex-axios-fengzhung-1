<template>
  <div :id="this.uuid" :style="style" ></div>
</template>

<script>
//组件名字从外面取到
//组件宽高度从外面取到
//组件的配置项目从外面取到
//组件响应式，当数据和宽高改变时，子组件可以监听到
import * as echarts from 'echarts';

const idGen = ()=> {return new Date().getTime()}
export default {
  props:{
    width:{
      type:String,
      default: '600px'
    },
    height:{
      type:String,
      default: '400px'
    },
    options:{
      type:Object,
      default:null
    }
  },
  data(){
    return{
      uuid:null,
      myChart:null
    }
  },
  computed:{
    style(){
      return {
        width : this.width,
        height: this.height
      }
    }
  },
  watch:{
    width(){
      if(this.myChart){
        this.myChart.resize({
          animation:{
            duration: 500,
            easing: 'bounceOut'
          }
        })
      }
    },
    options(){
      if (this.myChart){
        this.myChart.setOption(this.options,{
          notMerge:false
        })
      }
    }
  },

created() {
  this.uuid = idGen()
},

  mounted(){
    this.myChart = echarts.init(document.getElementById(this.uuid))
    this.myChart.setOption(this.options);
  }
}
</script>
<style scoped>

</style>