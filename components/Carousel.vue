<template>
  <div
    class="w-full max-w-7xl mx-auto overflow-hidden relative group"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <!-- Slider Container -->
    <div
      class="flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <!-- Slide Items -->
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="relative w-full flex-shrink-0"
      >
        <!-- Background Image -->
        <img
          :src="slide.thumb"
          :alt="slide.alt"
          class="w-full h-[300px] sm:h-[500px] object-cover cursor-pointer brightness-90 hover:brightness-100 transition duration-500"
        />
        <!-- Text Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent text-white flex flex-col justify-end p-6 sm:p-12 space-y-4 cursor-pointer"
        >
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div class="flex-1">
              <h2 class="text-lg sm:text-3xl font-bold text-flame-500">
                {{ slide.title }}
              </h2>
              <p class="text-sm sm:text-lg text-gray-300 line-clamp-2">
                {{ slide.description }}
              </p>
              <p class="text-xs sm:text-sm italic opacity-75">
                {{ slide.instructions }}
              </p>
              <div class="flex space-x-2 mt-4">
                <span
                  v-for="(tag, idx) in slide.tags.split(',')"
                  :key="idx"
                  class="bg-gray-800 bg-opacity-80 px-3 py-1 rounded text-xs sm:text-sm text-gray-200 hover:bg-flame-500 transition"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
            <!-- Play Now Button -->
            <div class="mt-4 sm:mt-0 sm:ml-6">
              <button
                @click.stop="$emit('playnow', slide)"
                class="bg-flame-500 text-white px-4 py-2 rounded-lg text-sm sm:text-base font-bold hover:bg-flame-600 shadow-lg transition"
              >
                Play Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <button
      class="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-flame-500 hover:scale-110 transition duration-300"
      @click="prevSlide"
    >
      ◀
    </button>
    <button
      class="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-flame-500 hover:scale-110 transition duration-300"
      @click="nextSlide"
    >
      ▶
    </button>

    <!-- Pagination -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        :class="[
          'w-3 h-3 rounded-full',
          index === currentSlide ? 'bg-flame-500' : 'bg-gray-500',
        ]"
        @click="goToSlide(index)"
        class="transition transform hover:scale-125"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  slides: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const currentSlide = ref(0);
const totalSlides = ref(props.slides.length);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides.value) % totalSlides.value;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

// Auto-play functionality
let autoplayInterval;

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextSlide();
  }, 5000);
};

const stopAutoplay = () => {
  clearInterval(autoplayInterval);
};

// Start autoplay on mounted
onMounted(() => {
  startAutoplay();
});

// Clean up interval when component is destroyed
onUnmounted(() => {
  stopAutoplay();
});
</script>
