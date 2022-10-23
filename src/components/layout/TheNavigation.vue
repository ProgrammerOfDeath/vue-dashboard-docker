<template>
  <nav class="navbar bg-base-100 container mx-auto mb-8">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/posts">Posts</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <router-link to="/" class="btn btn-ghost normal-case text-xl"
        >Vue Dashboard App</router-link
      >
    </div>
    <div class="navbar-end">
      <a
        href="http://github.com/ProgrammerOfDeath"
        target="_blank"
        class="btn btn-ghost normal-case text-xl"
      >
        GitHub
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped></style>
