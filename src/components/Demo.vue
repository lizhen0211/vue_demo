<template>
  <div>
    <ul>
      <li v-for="(item, index) in items">
        <router-link v-bind:to="item.path">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        items: [{title: '数据绑定', path: 'databinding'}, {title: '指令01', path: 'Directive01'}, {
          title: '指令02',
          path: 'Directive02'
        }
        ]
      }
    }
  }
</script>
<style>
</style>
