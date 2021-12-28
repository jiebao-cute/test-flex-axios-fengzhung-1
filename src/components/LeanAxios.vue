<template>
  <div class="container">
    <div style="display: flex ;margin-top: 30px">
      <Button color="pink" @click="Get">get请求</Button>
      <Button color="purple" @click="Post">post请求</Button>
      <Button color="yellow" @click="Put">put请求</Button>
      <Button color="pink"  @click="Delete">delete请求</Button>
    </div>
  </div>
</template>
<script>
import Button from "@/components/Button";
import axios from "axios";
axios.defaults.method='GET'
axios.defaults.baseURL='http://localhost:3000'
axios.defaults.params={id:100}
export default {
  methods:{//使用上面设置的default
    Get(){
      axios({
        url:'/posts'
      }).then(
          res=>{
            console.log(res)
          }
      )
    },
    Post(){//没有设置默认地址
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
  },
  components: {
    Button
  },

}
</script>
<style scoped>

</style>