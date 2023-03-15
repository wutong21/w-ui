<template>
  <div class="button">
    <div>
      <el-badge :value="14"> <el-button>default</el-button></el-badge>
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
            <td>type</td>
            <td>设置按钮类型，可选值为 primary success info danger warning</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>plain</td>
            <td>设置按钮镂空状态</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>按钮失效状态</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>size</td>
            <td>设置按钮尺寸, 可选值为 sm lg</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <!-- <tr>
            <td><span>icon</span></td>
            <td>设置按钮的图标类型</td>
            <td>string</td>
            <td>-</td>
          </tr> -->
        </tbody>
      </table>
      <div class="document-title">
        <h4>事件</h4>
      </div>
      <table class="document-event">
        <thead>
          <th>事件名称</th>
          <th>说明</th>
          <th>回调函数</th>
        </thead>
        <tbody>
          <tr>
            <td>click</td>
            <td>点击按钮时的回调</td>
            <td>(event) => void</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'button-doc',
  data() {
    return {
      code: `<template>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
</template>`
    }
  }
}
</script>
