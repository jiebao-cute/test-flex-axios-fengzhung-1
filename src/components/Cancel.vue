<template>
  <div style="display: flex">
    <Button color="pink" @click.stop="send">发送请求</Button>
    <Button color="yellow" @click="callOff">取消请求</Button>
  </div>
</template>
<script>
import Button from "@/components/Button";
import axios from 'axios'

export default {
  components: {
    Button
  },
  data(){
    return{
      cancel:null,
    }
  },

  methods: {

    send() {
     if (this.cancel !== null){
       this.cancel()
     }
     axios({
       methods: 'GET',
       url:'http://localhost:3000/posts',
       cancelToken: new axios.CancelToken((c)=>{
         this.cancel = c
       })
   }).then(response=>{
     console.log(response)
     this.cancel = null
   })
    },

    callOff() {
       this.cancel()
    }
  }

}
</script>
<style scoped>

</style>