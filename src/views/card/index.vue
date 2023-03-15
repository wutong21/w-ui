<template>
  <div class="card">
    <h3 class="page-title">Card 卡片</h3>
    <base-card radius="0" height="auto">
      <div style="width: 400px; height: 300px">
        <div class="card-header">
          <div class="card-header-title">卡片</div>
        </div>
      </div>
    </base-card>
    <div>
      <pre v-highlightjs>
        <code>{{ code }}
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
            <td>cursor</td>
            <td>设置鼠标悬停样式</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>bg-color</td>
            <td>设置背景颜色</td>
            <td>string</td>
            <td>#ffffff</td>
          </tr>
          <tr>
            <td>height</td>
            <td>设置高度</td>
            <td>string</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>width</td>
            <td>设置宽度</td>
            <td>string</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>radius</td>
            <td>设置圆角</td>
            <td>string</td>
            <td>12px</td>
          </tr>
          <tr>
            <td>shadow</td>
            <td>设置卡片阴影</td>
            <td>string</td>
            <td>0px 2px 16px 0px #f0f7fd</td>
          </tr>
          <tr>
            <td>min-width</td>
            <td>设置最小宽度</td>
            <td>string</td>
            <td>auto</td>
          </tr>
          <tr>
            <td>min-height</td>
            <td>设置最小高度</td>
            <td>string</td>
            <td>auto</td>
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
    <base-card radius="0" height="auto">
      <div style="width: 400px; height: 300px">
        <div class="card-header">
          <div class="card-header-title">卡片</div>
        </div>
      </div>
    </base-card>
</template>`
    }
  }
}
</script>
