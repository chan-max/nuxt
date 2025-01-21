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

    <!-- 加载中状态 -->
    <GlobalLoading v-if="isLoading" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useConfigStore } from '~/common/store'
import Header from "~/components/Header.vue"
import Footer from "~/components/Footer.vue"
import GlobalLoading from "~/components/GlobalLoading.vue"

// 获取 config 仓库
const configStore = useConfigStore()

// 控制加载状态的变量
const isLoading = ref(true)

// 在组件挂载时初始化配置
onMounted(async () => {
  await configStore.init()  // 初始化配置
  isLoading.value = false   // 加载完成后设置加载状态为 false
})
</script>

<style scoped>
/* 你的样式 */
</style>
