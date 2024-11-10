<template>
  <div
    class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
  >
    <!-- Game Thumbnail -->
    <div class="relative">
      <img :src="game.thumb" :alt="game.title" class="w-full h-36 object-cover" />
      <a
        :href="game.url"
        target="_blank"
        class="absolute bottom-2 right-2 bg-custom-500 text-white px-2 py-1 rounded-full text-xs font-semibold hover:bg-custom-600 transition-colors"
      >
        Play Now
      </a>
    </div>
    <!-- Game Details -->
    <div class="p-3 flex flex-col space-y-2">
      <h2 class="text-sm font-semibold">{{ game.title }}</h2>
      <p
        class="text-xs text-gray-600 overflow-hidden overflow-ellipsis"
        style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical"
      >
        {{ game.description }}
      </p>
      <div class="flex flex-wrap gap-1">
        <span
          v-for="tag in game.tags.split(', ')"
          :key="tag"
          class="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  game: {
    type: Object,
    required: true,
  },
});
</script>
