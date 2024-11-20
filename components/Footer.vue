<template>
  <footer class="bg-custom-900 text-white py-8 shadow-lg">
    <div class="container mx-auto text-center space-y-6">
      <!-- 标语 -->
      <p class="text-sm text-custom-400 italic">"Embark on the Journey of Flames"</p>

      <!-- 链接 -->
      <div class="flex justify-center space-x-8">
        <NuxtLink
          to="/privacy"
          class="text-custom-400 hover:text-flame-400 font-medium transition duration-200"
        >
          Privacy Policy
        </NuxtLink>
        <NuxtLink
          to="/terms"
          class="text-custom-400 hover:text-flame-400 font-medium transition duration-200"
        >
          Terms of Service
        </NuxtLink>
      </div>

      <!-- 版权信息 -->
      <div class="pt-4 border-t border-custom-800">
        <p class="text-sm text-custom-400">
          &copy; 2024 InfernoQuest. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
