<template>
  <div class="min-h-screen bg-custom-900 py-12 text-white">
    <main class="container mx-auto px-6 py-10 bg-custom-800 shadow-lg rounded-lg">
      <h1 class="text-4xl font-extrabold text-flame-500 text-center mb-10">About Us</h1>

      <section class="mb-8">
        <p class="text-gray-300 text-lg leading-relaxed">
          Welcome to <span class="font-semibold text-flame-500">InfernoQuest</span>, the
          ultimate destination where passion, adventure, and achievement ignite.
          InfernoQuest is more than just a platform—it’s a realm where gamers embark on
          epic journeys, forge unforgettable memories, and shape their own legacies.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-flame-400 mb-4">Embark on the Quest</h2>
        <p class="text-gray-300 text-lg leading-relaxed">
          At InfernoQuest, every adventure is a story waiting to be told. Whether you're
          conquering challenges, exploring uncharted territories, or mastering your
          skills, every step fuels your growth and unlocks new horizons. Join us on a
          transformative journey where ambition meets possibility, and every player
          becomes a hero.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-flame-400 mb-4">
          Fueling the Fire of Community
        </h2>
        <p class="text-gray-300 text-lg leading-relaxed">
          <span class="font-semibold text-flame-500"
            >Community is the heartbeat of InfernoQuest.</span
          >
          Here, you’ll find a thriving network of like-minded adventurers who share your
          passion for gaming, exploration, and achievement. Together, we celebrate
          victories, share ideas, and inspire each other to push boundaries. Every
          contribution enriches our shared journey.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-flame-400 mb-4">Forge Your Legacy</h2>
        <p class="text-gray-300 text-lg leading-relaxed">
          InfernoQuest is your stage to shine. With powerful tools, an inspiring
          community, and endless opportunities, this is where you unleash your creativity,
          challenge your limits, and leave your mark. Step into the arena, write your
          story, and let the flames of adventure guide your path.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-flame-400 mb-4">Contact Us</h2>
        <p class="text-gray-300 text-lg leading-relaxed">
          Have questions, feedback, or ready to begin your InfernoQuest journey? Reach out
          to us at
          <a href="mailto:contact@infernoquest.com" class="text-flame-500 hover:underline"
            >contact@infernoquest.com</a
          >. We’re here to support and celebrate your success!
        </p>
      </section>
    </main>
  </div>
</template>

<script setup>
// No specific logic needed for this static page
import { useGameAboutSeo } from "@/common/seo";
useGameAboutSeo();
</script>

<style scoped>
/* Optional: Add any additional custom styles if needed */
</style>
