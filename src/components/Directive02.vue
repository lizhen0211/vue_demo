<template>
  <div>
    <h1>指令</h1>
    <!--v-for-->
    <li v-for="item in items">
      {{$index}}-{{item.msg}}
    </li>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        items: [{msg: '滴滴顺风车'}, {msg: '滴滴专车'}]
      }
    }
  }
</script>
<style>
</style>
