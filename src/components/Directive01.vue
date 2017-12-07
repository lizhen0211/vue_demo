<template>
  <div>
    <h1>指令</h1>
    <!--指令是特殊的带有前缀v-的特性。指令的值限定为绑定表达式，指令的职责就是-->
    <!--当其表达式的值改变时把某些特殊的行为应用到DOM上。-->
    <p>内部指令</p>
    <!--v-if 指令可以完全根据表达式的值在DOM中生成或移除一个元素。-->
    <p v-if="greeting">Hello</p>

    <!--想切换多个元素，可以把<template>元素当作包装元素-->
    <!--最终的渲染结果不会包含template-->
    <template v-if="ok">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
    <hr>

    <!--v-show-->
    <!--显示或隐藏HTML元素-->
    <p v-show="greeting">Hello</p>
    <!--当v-show赋值为false时，元素上多了一个内联样式 style="display: none"-->
    <!--注：v-show 不支持<template>语法-->

    <!--v-if 有更高的切换消耗，v-show 有更高的初始渲染消耗。-->
    <!--如果需要频繁的切换，则使用v-show 较好；如果运行时条件不大可能改变，则使用v-if较好-->

    <!--v-show 用在组件上时，因为指令的优先级v-else会出现问题，所以不要这样做-->
    <!--<custom-component v-show="condition"></custom-component>-->
    <!--<p v-else>这可能也是一个组件</p>-->
    <!--我们可以用另一个v-show 替换v-else-->
    <!--<custom-component v-show="condition"></custom-component>-->
    <!--<p v-show="!condition">这可能也是一个组件</p>-->

    <hr>
    <!--v-model-->
    <form>
      姓名：
      <input type="text" v-model="data.name" placeholder=""/>
      <br/>
      性别：
      <input type="radio" id="man" value="One" v-model="data.sex"/>
      <label for="man">男</label>
      <input type="radio" id="male" value="Two" v-model="data.sex"/>
      <label for="male">女</label>
      <br/>
      兴趣：
      <input type="checkbox" id="book" value="book" v-model="data.insterest">
      <label for="book">阅读</label>
      <input type="checkbox" id="swim" value="swim" v-model="data.insterest">
      <label for="swim">游泳</label>
      <input type="checkbox" id="game" value="game" v-model="data.insterest">
      <label for="book">游戏</label>
      <input type="checkbox" id="song" value="song" v-model="data.insterest">
      <br/>
      <label for="book">唱歌</label>
      身份：
      <select v-model="data.identity">
        <option value="teacher" selected>教师</option>
        <option value="doctor">医生</option>
        <option value="lawyer">律师</option>
      </select>
    </form>
    <hr>
    <!--v-model 指令后面还可以添加多个参数（number、layz、debounce）-->
    <!--vue 2.0 没有生效-->
    <!--<input v-model="msg" debuonce="5000"/>-->
    <!--<input v-model="msg" lazy/>-->
  </div>
</template>
<script>
  export default{
    data () {
      return {
        greeting: false,
        ok: true,
        data: {
          name: 'jack',
          sex: 'One',
          insterest: ['book', 'swim', 'game'],
          identity: 'teacher'
        },
        msg: '内容实在change事件后才改变的'
      }
    }
  }
</script>
<style>
</style>
