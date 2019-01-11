<template>
  <div>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
  </el-menu>
  <div class="line"></div>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
  </el-menu>

    <div>
      <el-row>
        <el-button v-text="username" @click="handleClick"/>
      </el-row>
      <el-row>
        <el-button v-text="countvalue" @click="handleClick2"/>
      </el-row>
      <!--<el-row>-->
        <!--<button @click="incrementvalue">+1</button>    &lt;!&ndash; 事件处理函数变为add &ndash;&gt;-->
      <!--</el-row>-->
    </div>

  </div>
</template>

<script>
  // import store from '@/store/store.js'
  import {mapActions} from "vuex";
    export default {
      data() {
        return {
          username:this.$store.getters.getUsername,
          countvalue:this.$store.getters.getCount,
          activeIndex: '1',
          activeIndex2: '1',
          astr:null
        };
      },
      methods: {
        // ...mapActions({
        //   incrementvalue: 'incrementvalue'
        // }),
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClick() {
          // store.commit('setUserName', this.astr.astr)
          // console.info(this.$store)
          // debugger
          this.$store.dispatch('setName',this.astr.astr);
          this.username = this.$store.getters.getUsername
        },
        handleClick2() {
          this.$store.dispatch('incrementvalue');
          this.countvalue = this.$store.getters.getCount
        }
      },
      mounted: function () {
        // GET /someUrl
        this.$http.post(process.env.BASE_API+'/cost/settlement/test',{astr:"aaa"}).then(response => {
          // store.dispatch('commitUserList',response.data);
          this.astr = JSON.parse(response.data.data)
          console.log(this.astr.astr)
          // get body data
          // this.someData = response.body;

        }, response => {
          console.log("error");
        });
      },
    }
</script>

<style scoped>

</style>
