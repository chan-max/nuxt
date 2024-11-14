<template>
  <div class="min-h-screen bg-gray-100 py-10">
    <main class="container mx-auto px-6 py-10 bg-white shadow-lg rounded-lg">
      <h1 class="text-4xl text-center font-bold text-gray-800 mb-6">Terms of Service</h1>

      <section class="mb-8">
        <p class="text-gray-700">
          Welcome to <span class="font-semibold">NovaRaid</span>! These Terms of Service
          outline the rules and guidelines for navigating our galaxy of features. By
          exploring NovaRaid, you agree to these terms. If you do not accept these terms,
          please disengage and exit the platform.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Definitions</h2>
        <p class="text-gray-700">
          The following definitions apply throughout these Terms of Service:
        </p>
        <ul class="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li>
            "<span class="font-semibold">Explorer</span>," "<span class="font-semibold"
              >You</span
            >," and "<span class="font-semibold">Your</span>" refer to you, the user of
            this platform.
          </li>
          <li>
            "<span class="font-semibold">NovaRaid</span>," "<span class="font-semibold"
              >We</span
            >," "<span class="font-semibold">Our</span>," and "<span class="font-semibold"
              >Us</span
            >" refer to the operators of this platform.
          </li>
          <li>
            "<span class="font-semibold">Galaxy</span>" refers to all features, content,
            and services provided within NovaRaid.
          </li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Cookies</h2>
        <p class="text-gray-700">
          NovaRaid uses cookies to optimize your journey. By navigating our platform, you
          consent to the use of cookies in accordance with our
          <a href="#" class="text-blue-600 hover:underline">Privacy Policy</a>. Adjust
          your browser settings if you prefer to disable cookies.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Intellectual Property</h2>
        <p class="text-gray-700">
          All intellectual property within NovaRaid, including visuals, narratives, and
          interactive experiences, is owned by NovaRaid or its licensors. You agree to:
        </p>
        <ul class="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li>Not republish content from NovaRaid without explicit permission.</li>
          <li>Not sell, rent, or sub-license NovaRaid materials.</li>
          <li>Not reproduce or duplicate content outside the scope of fair use.</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Hyperlinking</h2>
        <p class="text-gray-700">
          External websites, such as search engines, news platforms, and affiliates, may
          link to NovaRaid without prior approval. However, links must not mislead users
          or falsely imply sponsorship or endorsement.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Content Responsibility</h2>
        <p class="text-gray-700">
          You are responsible for ensuring that content shared on NovaRaid does not
          violate intellectual property rights or promote unlawful activities. NovaRaid
          disclaims liability for third-party content and reserves the right to remove
          harmful or infringing materials.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
        <p class="text-gray-700">
          To the fullest extent allowed by law, NovaRaid disclaims responsibility for
          direct, indirect, incidental, or consequential damages arising from the use of
          the platform. Users agree to engage at their own risk.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Governing Law</h2>
        <p class="text-gray-700">
          These terms are governed by and construed in accordance with the laws of the
          jurisdiction in which NovaRaid operates. Disputes will be resolved through
          arbitration or mediation as specified by NovaRaid.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <p class="text-gray-700">
          For inquiries about these terms, please reach out to
          <a href="mailto:support@novaraid.com" class="text-blue-600 hover:underline"
            >support@novaraid.com</a
          >. We are here to guide and assist.
        </p>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Terms of Service - NovaRaid",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Explore the Terms of Service for NovaRaid and learn about your rights and responsibilities within our innovative platform.",
        },
      ],
    };
  },
};
</script>
