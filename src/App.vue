<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FixedMenu from './components/FixedMenu.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <FixedMenu msg="
        That is the way we convert cash! 
        Using USD as the default currency value. 
        All other values are based on a $1 hate in the 'Currency Value' page. 
        All types can be converted between each other in the 'Currency Exchange' page.
        Feel free to get started!        
      " />

      <nav>
        <RouterLink to="/">Currency Exchange</RouterLink>
        <RouterLink to="/value">Currency Value</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
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

nav a {
  /* color: var(--color-text); */
  color: var(--color-text);
  border: 1px solid black;
  border-radius: 1px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  background-color: #1f1f22;
  box-shadow: 300px;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0.8rem 0.5rem;
  border-radius: 5px;
  margin: 0 0.2rem;
  /* border-left: 1px solid var(--color-border); */
}

/* nav a:first-of-type {
  border: 0;
} */

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 3);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
