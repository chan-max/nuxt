<template>
  <footer class="bg-custom-900 text-white py-8 shadow-md">
    <div class="container mx-auto text-center space-y-6">
      <!-- Tagline -->
      <p class="text-sm text-custom-400 italic">Your Gateway to Epic Adventures</p>

      <!-- Links -->
      <div class="flex justify-center space-x-6">
        <NuxtLink
          to="/privacy"
          class="text-custom-400 hover:text-custom-500 font-medium transition duration-200"
        >
          Privacy Policy
        </NuxtLink>
        <NuxtLink
          to="/terms"
          class="text-custom-400 hover:text-custom-500 font-medium transition duration-200"
        >
          Terms of Service
        </NuxtLink>
      </div>

      <!-- Copyright -->
      <div class="pt-4 border-t border-custom-800">
        <p class="text-sm text-custom-400">&copy; 2024 MyWebsite. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
