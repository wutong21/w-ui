<template>
  <div class="button">
    <div>
      <el-button>default</el-button>
      <el-button type="primary">primary</el-button>
      <el-button type="success">success</el-button>
      <el-button type="info">info</el-button>
      <el-button type="danger">danger</el-button>
      <el-button type="warning">warning</el-button>
    </div>
    <div>
      <pre v-highlightjs>
      <code>{{code}}
      </code>
    </pre>
    </div>
  </div>
</template>
<script>
export default {
  name: "button-doc",
  data() {
    return {
      code: `<template>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
</template>`,
    };
  },
};
</script>
<style>
.button {
  width: 800px;
}
</style>
