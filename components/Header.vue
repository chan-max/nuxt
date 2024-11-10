<template>
  <header class="bg-gray-900 text-white">
    <div class="container mx-auto flex items-center justify-between py-4 px-6">
      <!-- Logo -->
      <div class="flex items-center shrink-0">
        <img src="/logo.svg" alt="Logo" class="h-8 w-auto pr-2" />
      </div>

      <!-- 搜索框 -->
      <div class="flex-1 flex justify-center">
        <div
          class="hidden md:flex items-center bg-gray-800 bg-opacity-70 hover:bg-opacity-100 rounded-lg overflow-hidden border-2 border-custom-500/60 focus-within:border-custom-600/90 transition"
        >
          <input
            type="text"
            placeholder="Search..."
            class="px-4 py-2 text-sm text-white bg-transparent border-none focus:outline-none w-64 border-r-2 border-custom-400/70"
          />
          <button
            class="px-4 py-2 text-white text-opacity-50 hover:text-opacity-100 hover:bg-custom-600 focus:outline-none transition"
          >
            Search
          </button>
        </div>
      </div>

      <!-- 导航菜单 -->
      <nav class="hidden md:flex space-x-6">
        <a href="/" class="flex flex-col items-center justify-center space-y-1 group">
          <UIcon
            name="i-heroicons-home"
            class="w-6 h-6 text-gray-400 group-hover:text-custom-600 transition-transform transform group-hover:scale-110"
          />
          <span class="text-sm text-gray-400 group-hover:text-custom-600 transition">
            Home
          </span>
        </a>
        <a
          href="/about"
          class="flex flex-col items-center justify-center space-y-1 group"
        >
          <UIcon
            name="i-heroicons-information-circle"
            class="w-6 h-6 text-gray-400 group-hover:text-custom-600 transition-transform transform group-hover:scale-110"
          />
          <span class="text-sm text-gray-400 group-hover:text-custom-600 transition">
            About
          </span>
        </a>
        <a
          href="/services"
          class="flex flex-col items-center justify-center space-y-1 group"
        >
          <UIcon
            name="i-heroicons-bars-3-16-solid"
            class="w-6 h-6 text-gray-400 group-hover:text-custom-600 transition-transform transform group-hover:scale-110"
          />
          <span class="text-sm text-gray-400 group-hover:text-custom-600 transition">
            Games
          </span>
        </a>
      </nav>

      <!-- 移动菜单按钮 -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>

    <!-- 移动菜单 -->
    <div v-if="isMenuOpen" class="md:hidden bg-gray-700">
      <nav class="flex flex-col space-y-2 p-4">
        <a href="/" class="text-white hover:text-custom-400">Home</a>
        <a href="/about" class="text-white hover:text-custom-400">About</a>
        <a href="/services" class="text-white hover:text-custom-400">Services</a>
      </nav>

      <!-- 移动端搜索框 -->
      <div class="mt-4  px-4 py-4">
        <div
          class="bg-gray-800 bg-opacity-60 rounded-lg overflow-hidden flex border-2 border-custom-500/80 focus-within:border-custom-600/90 transition"
        >
          <input
            type="text"
            placeholder="Search..."
            class="px-4 py-2 text-sm text-white bg-transparent border-none focus:outline-none w-full border-r-2 border-custom-400/70"
          />
          <button
            class="px-4 py-2 text-white bg-custom-500 hover:bg-custom-600 focus:outline-none transition"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

// 控制移动菜单的状态
const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>
