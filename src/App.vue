<script></script>

<template>
  <div id="app">
    <div class="wrapper">
      <div class="sidebar-menu">
        <nav>
          <router-link to="/button">Button 按钮</router-link>
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
  // height: 100vh;
  overflow: auto;
  background: #fff;
  width: 220px;
}

.content-page {
  height: 100vh;
  min-height: 100%;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow: auto;
  padding: 35px;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}




@media (min-width: 1024px) {

  nav {
    text-align: left;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
