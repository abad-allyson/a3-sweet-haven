<!-- pages/admin/login.vue -->
<template>
  <UContainer class="min-h-screen flex items-center justify-center">
    <UCard class="p-4 shadow-xl w-sm outline-1 outline-gray-200">
      <template #header class="w-full">
        <p class="text-main-900 font-bold text-center text-xl">Admin Login</p>
      </template>
      <UForm @submit="handleLogin" class="space-y-4">
        <UFormField label="Email" name="email" :ui="{ label: 'text-black' }">
          <UInput v-model="email" class="w-full" />
        </UFormField>

        <UFormField
          label="Password"
          name="password"
          :ui="{ label: 'text-black' }"
        >
          <UInput
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            class="w-full"
          >
            <template #trailing>
              <UButton
                color="neutral"
                variant="link"
                size="sm"
                :icon="showPassword ? 'i-lucide-eye' : 'i-lucide-eye-off'"
                aria-label="Copy to clipboard"
                @click="toggleShowPassword"
              />
            </template>
          </UInput>
        </UFormField>

        <p class="text-sm italic text-center">{{ errorMessage }}</p>

        <UButton
          type="submit"
          class="w-full justify-center mt-2"
          @click="handleLogin"
          >Login</UButton
        >
      </UForm>
    </UCard>
  </UContainer>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});

useHead({
  title: "Admin Login",
  link: [{ rel: "icon", type: "image/png", href: "icon.png" }],
});

const supabase = useSupabaseClient();

const email = ref("");
const password = ref("");
const showPassword = ref(false);

function toggleShowPassword() {
  showPassword.value = !showPassword.value;
}

const errorMessage = ref("");

async function handleLogin() {
  errorMessage.value = "";

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    if (error) {
      errorMessage.value = error.message;
    }

    navigateTo("/admin");
    console.log("✅ Login successful!");
  } catch (error) {
    errorMessage.value = error.message;
    console.error("Login error:", error);
  }
}
</script>
