<template>
  <footer class="bg-white text-gray-900 py-6">
    <div class="container mx-auto text-center">
      <p class="text-sm text-gray-800">
        &copy; 2024 MyWebsite. All rights reserved.
      </p>
      <div class="mt-4 space-x-6">
        <a
          href="/privacy"
          class="text-gray-900 hover:text-custom-600 hover:underline underline-offset-4"
        >
          Privacy Policy
        </a>
        <a
          href="/terms"
          class="text-gray-900 hover:text-custom-600 hover:underline underline-offset-4"
        >
          Terms of Service
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* 优化文字颜色和下划线效果 */
a {
  transition: color 0.3s ease, text-decoration-color 0.3s ease;
}

a:hover {
  color: #2c3e50; /* 深色文字 */
  text-decoration-color: #3498db; /* 蓝色下划线 */
}
</style>
