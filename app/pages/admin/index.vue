<template>
  <UHeader
    class="h-[7vh] bg-main-950"
    mode="slideover"
    :ui="{ root: 'border-0 ' }"
    :toggle="{
      variant: 'link',
      class: 'hidden',
    }"
  >
    <template #title>
      <span class="text-white">Admin </span>
    </template>

    <template #right>
      <UButton
        color="secondary"
        class="text-main-900 font-bold"
        @click="handleLogout"
        >Logout</UButton
      >
    </template>
  </UHeader>

  <UMain>
    <UContainer class="py-20 px-10 md:px-30 lg:w-[60%] lg:px-0">
      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Admin Calendar -->
        <div class="flex flex-col gap-4 flex-1">
          <p class="text-center font-bold text-xl text-main-900">
            Select Unavailable Dates
          </p>
          <UCalendar
            v-model="selectedDates"
            multiple
            size="lg"
            :ui="{
              heading: 'text-accent-900 font-bold',
              body: 'text-accent-900',
              cellTrigger: 'data-[outside-view]:hidden',
            }"
          />
          <div class="space-x-2 justify-center flex">
            <UButton size="lg" @click="saveUnavailableDates">
              Update Calendar
            </UButton>
            <UButton size="lg" @click="clearSelectedDates" variant="subtle"
              >Clear</UButton
            >
          </div>
        </div>

        <USeparator
          orientation="vertical"
          class="h-[50vh] hidden lg:inline-flex"
          type="solid"
          color="primary"
        ></USeparator>
        <USeparator class="lg:hidden"></USeparator>
        <!-- Preview Calendar -->
        <div class="flex flex-col gap-4 flex-1">
          <p class="text-center font-bold text-xl text-main-900">
            Customer View Preview
          </p>
          <UCalendar
            v-model="unavailableDates"
            variant="subtle"
            readonly
            size="lg"
            :ui="{
              heading: 'text-accent-900 font-bold',
              body: 'text-accent-900',
              cellTrigger: 'data-[outside-view]:hidden',
            }"
          />
          <UAlert
            icon="i-lucide-info"
            color="primary"
            variant="soft"
            title="Preview"
            description="This shows how customers will see the calendar with unavailable dates."
          />
        </div>
      </div>
    </UContainer>
  </UMain>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});

useHead({
  title: "Admin",
});

import { CalendarDate } from "@internationalized/date";

const client = useSupabaseClient();
const selectedDates = ref([]);
const unavailableDates = ref([]); // For preview

onMounted(async () => {
  await getUnavailableDates();
});

const getUnavailableDates = async () => {
  const { data } = await client.from("dates").select("year, month, day");

  if (data) {
    unavailableDates.value = data.map(
      (date) => new CalendarDate(date.year, date.month, date.day)
    );
    selectedDates.value = [...unavailableDates.value];
  }
};

const saveUnavailableDates = async () => {
  try {
    // Delete all rows - use a condition that matches all rows
    await client.from("dates").delete().neq("year", 0); // This matches all rows (year is never 0)

    if (selectedDates.value.length > 0) {
      const datesToInsert = selectedDates.value.map((date) => ({
        year: date.year,
        month: date.month,
        day: date.day,
        era: "AD",
        calendar: { identifier: "gregory" },
      }));

      await client.from("dates").insert(datesToInsert);
    }

    await getUnavailableDates();

    console.log("Dates saved successfully!");
  } catch (error) {
    console.error("Error saving dates:", error);
  }
};

function clearSelectedDates() {
  selectedDates.value = [...unavailableDates.value];
}

async function handleLogout() {
  await client.auth.signOut();
  navigateTo("/admin/login");
}
</script>
