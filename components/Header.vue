<template>
  <header class="bg-white text-gray-900 border-b">
    <div class="mx-auto flex items-center justify-between py-6 px-8">
      <!-- Logo 和 菜单部分 -->
      <div class="flex items-center space-x-8">
        <!-- 增加了间距 -->
        <!-- Logo -->
        <img
          src="/logo.png"
          alt="Logo"
          class="h-8 w-auto pr-2 max-w-[120px] md:max-w-none"
        />

        <!-- 菜单 -->
        <div class="w-0"></div>
        <nav class="flex items-center space-x-6 home-nav">
          <UDropdown
            :items="[items[0]]"
            :ui="ui"
            mode="hover"
            :popper="{ placement: 'bottom-start' }"
          >
            <a
              href="/"
              class="text-gray-900 hover:text-gray-600 transition text-sm flex items-center"
            >
              Home
              <i class="i-heroicons-chevron-down-20-solid ml-2"></i>
            </a>
          </UDropdown>

          <UDropdown
            :ui="ui"
            :items="[items[1]]"
            mode="hover"
            :popper="{ placement: 'bottom-start' }"
          >
            <a
              href="/services"
              class="text-gray-900 hover:text-gray-600 transition text-sm flex items-center"
            >
              Services
              <i class="i-heroicons-chevron-down-20-solid ml-2"></i>
            </a>
          </UDropdown>

          <UDropdown
            :ui="ui"
            :items="[items[2]]"
            mode="hover"
            :popper="{ placement: 'bottom-start' }"
          >
            <a
              href="/about"
              class="text-gray-900 hover:text-gray-600 transition text-sm flex items-center"
            >
              About Us
              <i class="i-heroicons-chevron-down-20-solid ml-2"></i>
            </a>
          </UDropdown>
        </nav>
      </div>

      <!-- 右侧头像 -->
      <div class="flex items-center space-x-4">
        <img
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="User Avatar"
          class="w-12 h-12 rounded-full border-2 border-gray-700"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const ui = {
  padding: "p-2",
  item: {
    padding: "p-2",
  },
};

// 菜单项数据结构
const items = [
  [
    {
      label: "Dashboard",
      to: "/dash",
    },
    {
      label: "Profile",
      to: "/profile",
    },
  ],
  [
    {
      label: "Design",
      to: "/services/design",
    },
    {
      label: "Consulting",
      to: "/services/consulting",
    },
  ],
  [
    {
      label: "Company",
      to: "/about/company",
    },
    {
      label: "Team",
      to: "/about/team",
    },
  ],
];
</script>

<style>
/* 你可以根据需要添加样式 */
.home-nav a {
  font-weight: bold !important;
  font-size: 12px !important;
  color: #555;
}
</style>
