<template>
  <header class="bg-custom-900 text-white shadow-md">
    <div class="container mx-auto flex items-center justify-between py-6 px-6">
      <!-- Logo -->
      <div class="flex items-center shrink-0">
        <img
          src="/logo.svg"
          alt="Logo"
          class="h-8 w-auto pr-2 max-w-[120px] md:max-w-none"
        />
      </div>

      <!-- 搜索框 -->
      <div class="flex-1 flex justify-center">
        <div
          class="hidden md:flex items-center bg-custom-800 hover:bg-custom-700 rounded-full overflow-hidden border-2 border-custom-500 focus-within:border-custom-400 transition-shadow"
        >
          <!-- 分类选择下拉框 -->
          <select
            v-model="searchType"
            @change="searchTypeChange"
            class="px-4 py-2 text-sm text-white bg-transparent border-none focus:outline-none sm:w-32 md:w-32 w-24 border-r-2 border-custom-600"
          >
            <option value="title">Title</option>
            <option value="category">Category</option>
            <option value="tags">Tags</option>
          </select>

          <!-- 搜索框输入 -->
          <input
            v-model="searchContent"
            @keyup.enter="searchClick"
            type="text"
            placeholder="Search..."
            class="px-4 py-2 text-sm text-white bg-transparent border-none focus:outline-none sm:w-64 md:w-72 w-48"
          />

          <!-- 搜索按钮 -->
          <button
            @click="searchClick"
            class="px-6 py-2 text-white bg-custom-500 hover:bg-flame-400 rounded-full font-semibold focus:outline-none transition-transform transform hover:scale-110"
          >
            Search
          </button>
        </div>
      </div>

      <!-- 导航菜单 -->
      <nav class="hidden md:flex space-x-8">
        <a href="/" class="flex flex-col items-center justify-center space-y-1 group">
          <UIcon
            name="i-heroicons-home"
            class="w-6 h-6 text-custom-400 group-hover:text-custom-500 transition-transform transform group-hover:scale-110"
          />
          <span class="text-sm text-custom-400 group-hover:text-custom-500 transition">
            Home
          </span>
        </a>
        <a
          href="/games"
          class="flex flex-col items-center justify-center space-y-1 group"
        >
          <UIcon
            name="i-heroicons-bars-3-16-solid"
            class="w-6 h-6 text-custom-400 group-hover:text-custom-500 transition-transform transform group-hover:scale-110"
          />
          <span class="text-sm text-custom-400 group-hover:text-custom-500 transition">
            Games
          </span>
        </a>
        <a
          href="/about"
          class="flex flex-col items-center justify-center space-y-1 group"
        >
          <UIcon
            name="i-heroicons-information-circle"
            class="w-6 h-6 text-custom-400 group-hover:text-custom-500 transition-transform transform group-hover:scale-110"
          />
          <span class="text-sm text-custom-400 group-hover:text-custom-500 transition">
            About
          </span>
        </a>
      </nav>

      <!-- 移动菜单按钮 -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-custom-400"
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
    <div v-if="isMenuOpen" class="md:hidden bg-custom-800">
      <nav class="flex flex-col space-y-4 p-4">
        <a href="/" class="text-custom-400 hover:text-custom-500 transition">Home</a>
        <a href="/games" class="text-custom-400 hover:text-custom-500 transition"
          >Games</a
        >
        <a href="/about" class="text-custom-400 hover:text-custom-500 transition"
          >About</a
        >
      </nav>

      <!-- 移动端搜索框 -->
      <div class="mt-4 px-4 py-4">
        <div
          class="bg-custom-700 rounded-full overflow-hidden flex border-2 border-custom-500 focus-within:border-custom-400 transition-shadow"
        >
          <!-- 移动端的下拉框 -->
          <select
            v-model="searchType"
            class="px-4 py-2 text-sm text-white bg-transparent border-none focus:outline-none w-24 sm:w-32 md:w-40 border-r-2 border-custom-600"
          >
            <option value="title">Title</option>
            <option value="category">Category</option>
            <option value="tags">Tags</option>
          </select>

          <!-- 移动端搜索框输入 -->
          <input
            v-model="searchContent"
            type="text"
            placeholder="Search..."
            class="px-4 py-2 text-sm text-white bg-transparent border-none focus:outline-none w-full"
          />

          <!-- 移动端搜索按钮 -->
          <button
            @click="searchClick"
            class="px-4 py-2 text-white bg-custom-500 hover:bg-flame-400 rounded-full font-semibold focus:outline-none transition"
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
import { useRouter } from "vue-router";
import { searchContent, searchType } from "~/common/search";
import { searchTypeEventBus, searchClickEventBus } from "@/common/eventBus";

// 控制移动菜单的状态
const isMenuOpen = ref(false);

const router = useRouter();

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

// 处理搜索逻辑
function searchClick() {
  router.push({ path: "/search" });
  searchClickEventBus.emit(searchContent.value);
}

function searchTypeChange() {
  searchTypeEventBus.emit(searchType.value);
}
</script>
