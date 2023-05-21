<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SolarSystem from './views/SolarSystem.vue';

</script>

<template>
  <header>
    <SolarSystem />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/mobile-apps">Mobile Apps</RouterLink>
        <RouterLink to="/surfacing">Surfacing</RouterLink>
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

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

header {
  display: flex;
  flex-direction: column;
  place-items: center;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
}

nav {
  text-align: center;
  font-size: 1rem;
}
</style>
