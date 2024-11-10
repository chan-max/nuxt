<template>
  <div class="flex flex-col min-h-screen">
    <!-- 头部菜单 -->
    <Header />

    <!-- 主内容区 -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
</script>
