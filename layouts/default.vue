<template>
  <div class="flex flex-col min-h-screen bg-custom-900 text-white">
    <!-- 头部菜单 -->
    <Header class="bg-custom-800 shadow-lg z-10 sticky top-0" />

    <!-- 主内容区 -->
    <main class="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <slot />
    </main>

    <!-- 页脚 -->
    <Footer class="bg-custom-800 shadow-inner" />

    <!-- 模态框 -->
    <GameModal class="z-50" />
    <GlobalLoading class="z-50" />
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import GameModal from "~/components/GameModal.vue";
import GlobalLoading from "~/components/GlobalLoading.vue";
</script>
