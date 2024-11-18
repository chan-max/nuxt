<template>
  <div class="min-h-screen bg-gray-100 py-12">
    <main class="container mx-auto px-6 py-10 bg-white shadow-lg rounded-lg">
      <h1 class="text-4xl font-extrabold text-gray-800 text-center mb-10">About Us</h1>

      <section class="mb-8">
        <p class="text-gray-700 text-lg leading-relaxed">
          Welcome to <span class="font-semibold">TitanRift</span>, a universe where power,
          strategy, and exploration collide. Designed for adventurers, innovators, and
          gamers, TitanRift empowers you to forge your legacy and conquer the unknown.
          Together, we harness creativity and courage to shape the future.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">A Journey Beyond Limits</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          At TitanRift, gaming transcends entertainment—it’s a bold journey of discovery,
          growth, and transformation. Whether you’re mastering the battlefield, unearthing
          hidden secrets, or forging unbreakable alliances, every action shapes your story
          in the Rift. Join us in celebrating the victories and challenges that define
          greatness.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Community at Its Core</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          <span class="font-semibold">Community drives the heart of TitanRift.</span> Our
          platform unites adventurers who share a passion for exploration and achievement.
          Through collaboration and shared triumphs, every member contributes to a
          thriving network of resilience, innovation, and camaraderie.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          Where Legends Are Forged
        </h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          TitanRift is the crucible where legends are born. With state-of-the-art tools
          and a visionary community by your side, the Rift is your stage to rise, thrive,
          and leave a lasting legacy in an ever-evolving universe of challenges and
          possibilities.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          Have questions, feedback, or ready to embark on your TitanRift journey? Reach
          out to us at
          <a href="mailto:support@titanrift.com" class="text-blue-600 hover:underline"
            >support@titanrift.com</a
          >. Together, let’s conquer the Rift and shape the future!
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
