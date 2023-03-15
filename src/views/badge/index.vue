<template>
  <div class="badge">
    <h3 class="page-title">Badge 标记</h3>
    (暂时未完成)
    <div>
      <el-badge :value="14">
        <el-button plain>default</el-button>
      </el-badge>
    </div>
    <div>
      <pre v-highlightjs>
        <code>{{code}}
        </code>
      </pre>
    </div>
    <div class="relax-document">
      <div class="document-title">
        <h4>API</h4>
      </div>
      <table class="document-api">
        <thead>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </thead>
        <tbody>
          <tr>
            <td>value</td>
            <td>-</td>
            <td>number</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'badge-doc',
  data() {
    return {
      code: `<template>
    <el-badge :value="14">
        <el-button plain>default</el-button>
    </el-badge>    
</template>`
    }
  }
}
</script>
