<template>
  <div>
    <!--插值-->
    <span>Text:{{text}}</span>
    <!--表达式-->
    <p>{{cents / 100}}</p>
    <p>{{true ? 1 : 0}}</p>
    <p>{{example.split(",")}}</p>

    <!--无效示例-->
    <!--{{var logo ='DDFE'}} 这是语句-->
    <!--{{if(true) return 'DDFE'}} 条件控制语句是不支持的，可以使用三元表达式-->

    <!--过滤器-->
    <!--过滤器本质就是一个JS函数-->
    <p>{{example | toUpperCase}}</p>
    <!--过滤器允许串联-->
    <p>{{example | toUpperCase | addABC}}</p>
    <!--过滤器传参数-->
    <!--<p>{{example | filterA a b}}</p>-->

    <!--指令-->
    <!--指令是带有v-前缀的特殊特特性,其值限定为 绑定表达式值-->
    <!--当表达式值变化,这个变化也反映到DOM上-->
    <div v-if="show">DDFE</div>
    <!--<div v-on:click="action"></div>-->
  </div>
</template>
<script>
  export default{
    name: 'app',
    data () {
      return {
        text: 'text',
        cents: 5000,
        example: 'a,b,c',
        a: 'pa',
        b: 'pb',
        show: true
      }
    },
    filters: {
      toUpperCase: function (value) {
        return value.toUpperCase()
      },
      addABC: function (value) {
        return value + '+ABC'
      },
      filterA: function (value, a, b) {
        return value + ' ' + a + ' ' + b
      }
    }
  }
</script>
<style>
</style>
