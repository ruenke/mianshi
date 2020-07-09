<template>
  <div class='xxx'>
      <router-link to="/child/123"></router-link>
      <ul>
          <li v-for="itemId in 3" :key="itemId" @click="toChild(itemId)">{{itemId}}</li>
      </ul>
      <el-button @click="toChild2">click</el-button>
      <el-button @click="toChild3">click</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        tableData: [

        ]
    };
  },
  methods: {
      toChild(id) {
          this.$router.push({
              path: `/child/${id}`
          })
      },
      toChild2() {
          this.$router.push({
              name: "childView",
              params: {
                  id: 1
              }
          })
      },
      toChild3() {
          this.$router.push({
              path: "/child3",
              query: {
                  id: 1
              }
          })
      }
  },
  created() {
  },
  mounted() {
      
  }
};
</script>
<style lang='less' scoped>
.xxx {
  
}
</style>
