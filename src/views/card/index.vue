<template>
  <div class="card">
    <base-card radius="0" height="auto">
      <div style="width: 400px; height: 300px">
        <div class="card-header">
          <div class="card-header-title">卡片</div>
        </div>
      </div>
    </base-card>
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
    <base-card radius="0" height="auto">
      <div style="width: 400px; height: 300px">
        <div class="card-header">
          <div class="card-header-title">卡片</div>
        </div>
      </div>
    </base-card>
</template>`,
    };
  },
};
</script>
<style>
.card {
  width: 800px;
}
</style>
