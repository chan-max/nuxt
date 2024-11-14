<template>
  <div
    class="relative w-full max-w-7xl mx-auto overflow-hidden"
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
          class="w-full h-[300px] sm:h-[500px] object-cover"
        />
        <!-- Text Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent text-white flex flex-col justify-end p-8 sm:p-14 space-y-6"
        >
          <h2 class="text-3xl sm:text-5xl font-extrabold tracking-wide drop-shadow-lg">
            {{ slide.title }}
          </h2>
          <p class="text-lg sm:text-2xl font-medium opacity-90 drop-shadow-md">
            {{ slide.description }}
          </p>
          <div class="flex space-x-4">
            <span
              v-for="(tag, idx) in slide.tags.split(',')"
              :key="idx"
              class="bg-500 text-white px-4 py-2 rounded-full text-sm sm:text-base font-bold shadow-md border border-white/20"
            >
              {{ tag }}
            </span>
          </div>
          <button
            @click.stop="$emit('playnow', slide)"
            class="mt-6 bg-500 text-white px-6 py-3 rounded-lg text-lg sm:text-xl font-bold hover:bg-400 hover:scale-110 transition-transform transform shadow-xl"
          >
            Play Now
          </button>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <button
      class="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-70 text-white p-4 rounded-full hover:bg-opacity-90 hover:scale-110 transition-transform transform shadow-lg"
      @click="prevSlide"
    >
      ◀
    </button>
    <button
      class="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-70 text-white p-4 rounded-full hover:bg-opacity-90 hover:scale-110 transition-transform transform shadow-lg"
      @click="nextSlide"
    >
      ▶
    </button>

    <!-- Pagination -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-4">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        :class="[
          'w-4 h-4 rounded-full border-2 transition-transform',
          index === currentSlide
            ? 'bg-500 border-500 scale-125'
            : 'bg-gray-400 border-gray-300',
        ]"
        @click="goToSlide(index)"
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
