<script setup></script>

<template>
  <div id="app">
    <div class="wrapper">
      <div class="sidebar-menu">
        <div class="title">WUI</div>
        <nav>
          <router-link to="/">Button 按钮</router-link>
          <router-link to="/card">Card 卡片</router-link>
        </nav>
      </div>
      <div class="content-page">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background-color: #f3f6f8;
}

.sidebar-menu {
  display: flex;
  flex-direction: column;
  overflow: auto;
  background: #fff;
  width: 220px;
  .title {
    text-align: center;
    padding: 10px;
    font-size: 20px;
    color: #333;
    position: relative;
    right: 10%;
  }
}

.content-page {
  height: 100vh;
  min-height: 100%;
  // max-width: 800px;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow: auto;
  padding: 35px;
  div {
    max-width: 800px;
  }
}

nav {
  display: flex;
  flex-direction: column;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  font-size: 12px;
  position: relative;
  cursor: auto;
  /* color: #ccc; */
  padding: 8px 20px;
}

nav a:hover {
  cursor: pointer;
  background-color: hsla(160, 100%, 37%, 0.2);
}

a,
.green {
  text-decoration: none;
  color: var(--color-text);
  transition: 0.4s;
}

nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
  font-weight: 700;
}
</style>
