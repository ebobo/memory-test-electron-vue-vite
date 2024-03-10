<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Home from './components/Home.vue';
</script>

<template>
  <div class="container">
    <h2>Welcome to Autronica</h2>

    <div class="row">
      <a href="https://vuejs.org/" target="_blank">
        <img
          src="./assets/autronica-logo.png"
          class="logo"
          alt="Autronica logo"
          width="150"
        />
      </a>
    </div>

    <Home />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5f5;
}
.row {
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #249b73);
}
</style>
