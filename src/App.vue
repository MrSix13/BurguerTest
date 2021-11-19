<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/hamburguesas">Hamburguesas</router-link>|
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  background-color: rgba(95, 158, 160, 0.849);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


</style>
