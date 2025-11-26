<template>
  <UHeader
    class="h-[7vh]"
    mode="slideover"
    :ui="{ root: 'border-1 border-accent-100' }"
    :toggle="{
      variant: 'link',
      class: 'text-main-950 bg-transparent hover:text-main-900',
    }"
  >
    <template #title>
      <span
        ><NuxtImg src="/images/logo-red.png" alt="" class="w-16 lg:w-25"
      /></span>
    </template>

    <div class="hidden lg:flex lg:gap-10">
      <ULink
        class="text-lg text-main-950 hover:text-main-900 font-semibold"
        to="#"
        >Home</ULink
      >
      <ULink
        class="text-lg text-main-950 hover:text-main-900 font-semibold"
        to="#products"
        >Products</ULink
      >
      <ULink
        class="text-lg text-main-950 hover:text-main-900 font-semibold"
        to="#menu"
        >Menu</ULink
      >
      <ULink
        class="text-lg text-main-950 hover:text-main-900 font-semibold"
        to="#dates"
        >Available Dates</ULink
      >
      <ULink
        class="text-lg text-main-950 hover:text-main-900 font-semibold"
        to="#contact"
        >Contact Us</ULink
      >
    </div>

    <template #right>
      <UButton class="hidden lg:block" size="lg" @click="goToFacebook">
        Order Now
      </UButton>
    </template>

    <template #body>
      <div class="flex flex-col gap-4">
        <ULink
          class="text-lg text-main-950 hover:text-main-900 font-semibold"
          to="#"
          >Home</ULink
        >
        <ULink
          class="text-lg text-main-950 hover:text-main-900 font-semibold"
          to="#products"
          >Products</ULink
        >
        <ULink
          class="text-lg text-main-950 hover:text-main-900 font-semibold"
          to="#menu"
          >Menu</ULink
        >
        <ULink
          class="text-lg text-main-950 hover:text-main-900 font-semibold"
          to="#dates"
          >Available Dates</ULink
        >
        <ULink
          class="text-lg text-main-950 hover:text-main-900 font-semibold"
          to="#contact"
          >Contact Us</ULink
        >
      </div>
    </template>
  </UHeader>

  <UMain class="relative">
    <section id="home">
      <div
        class="flex flex-col items-center justify-center bg-main-950 xl:h-[80vh] xl:flex-row-reverse xl:px-10"
      >
        <div class="p-10 max-w-2xl">
          <UCarousel
            v-slot="{ item }"
            loop
            dots
            :autoplay="{ delay: 2000 }"
            :items="items"
            :ui="{
              dot: 'size-1 bg-accent-200 data-[state=active]:bg-accent-700',
            }"
            class="w-full h-full mx-auto"
          >
            <img :src="item" class="rounded-xl" />
          </UCarousel>
        </div>
        <div class="px-10 pb-10 pt-4 space-y-2 xl:w-[40vw] xl:space-y-4">
          <p
            class="text-2xl font-bold text-white text-center font-script xl:text-left xl:text-6xl"
          >
            Sweet Haven by A3
          </p>
          <p class="text-center text-white xl:text-left xl:text-xl">
            A sweet haven for you to enjoy heavenly good homemade custom cakes
            for all celebrations!
          </p>
          <div class="space-x-2 text-center xl:text-left">
            <UButton
              color="secondary"
              class="text-main-900 font-bold xl:text-lg"
              @click="goToFacebook"
              >Order Now</UButton
            >
            <UButton
              variant="outline"
              color="secondary"
              class="font-bold xl:text-lg"
              @click="navigateTo('#products')"
              >View Gallery</UButton
            >
          </div>
        </div>
      </div>
    </section>

    <section id="products" class="scroll-mt-[8vh]">
      <UContainer class="py-10 space-y-4 mt-4">
        <div class="flex justify-center">
          <p class="text-2xl font-bold text-main-900 font-script-2 xl:text-3xl">
            What We Offer
          </p>
        </div>
        <div class="flex flex-wrap justify-center gap-2 w-full">
          <UButton
            v-for="cat in categories"
            :key="cat"
            color="primary"
            variant="link"
            @click="switchGallery(cat)"
            :class="[
              'rounded-full text-main-900 md:text-lg font-bold border cursor-pointer',
              selectedGallery === cat
                ? 'border-main-900'
                : 'border-transparent',
            ]"
          >
            {{ cat }}</UButton
          >
        </div>
      </UContainer>

      <UContainer class="flex flex-wrap gap-4 justify-center">
        <UCard
          v-for="item in filteredGallery"
          variant="soft"
          class="w-60 md:w-95 p-1 bg-accent-100 rounded-xl"
        >
          <NuxtImg :src="item.cakeUrl" preload />
          <div class="flex justify-between mt-2">
            <p class="font-bold text-accent-950 text-sm">{{ item.name }}</p>
            <UBadge
              v-if="item.bestSeller"
              variant="subtle"
              class="rounded-full text-center"
              ><UIcon name="i-lucide-heart" />Best Seller</UBadge
            >
          </div>

          <p class="text-sm text-accent-950">{{ item?.description }}</p>
          <p class="text-sm text-accent-950">{{ item.price }}</p>
        </UCard>
        <UCard class="flex items-center w-60 justify-center md:w-95">
          <!-- <UButton class="rounded-full" variant="subtle" size="xl"
            >View All <UIcon name="i-lucide-arrow-right"
          /></UButton> -->
        </UCard>
      </UContainer>
    </section>

    <section id="menu" class="scroll-mt-[7vh]">
      <UContainer class="space-y-4 p-10">
        <p
          class="text-2xl font-bold w-full text-center text-main-900 font-script-2 xl:text-3xl"
        >
          Menu
        </p>
        <USeparator
          label="Full Price List"
          type="solid"
          color="primary"
          :ui="{ label: 'text-xl font-bold text-main-900' }"
        />
        <div class="px-6 md:px-20 lg:px-40">
          <UAccordion
            :items="priceList"
            :ui="{
              label: 'font-bold text-main-900',
              content: 'text-gray-900 text-sm ml-2 lg:text-md',
              trailingIcon: 'text-main-900',
              item: 'border-gray-200',
            }"
            class="max-w-300"
          >
            <template #content="{ item }">
              <div
                v-for="(cake, index) in item.content"
                :key="index"
                class="mb-1"
              >
                <p v-if="cake.note" class="font-semibold">
                  <br />{{ cake.note }}
                </p>
                <p>{{ cake.size }} - {{ cake.price }}</p>
              </div>
            </template>
          </UAccordion>
        </div>
      </UContainer>

      <UContainer class="space-y-4 p-10">
        <USeparator
          label="Flavors"
          type="solid"
          color="primary"
          :ui="{ label: 'text-xl font-bold text-main-900' }"
        />
        <div class="flex flex-wrap gap-4 justify-center relative">
          <UCard v-for="item in flavors" class="w-30 md:w-50 rounded-xl">
            <div class="relative">
              <NuxtImg :src="item.imgUrl" class="bg-transparent mb-2" />

              <UIcon
                v-if="item.favorite"
                name="i-mdi-star"
                class="text-3xl absolute top-1 text-yellow-500"
              />
            </div>

            <p class="font-bold text-main-900 text-center text-sm md:text-md">
              {{ item.name }}
            </p>
          </UCard>
        </div>
      </UContainer>
    </section>

    <section id="dates" class="scroll-mt-[7vh]">
      <UContainer class="pt-10 pb-20">
        <div class="w-[70vw] max-w-180 flex flex-col justify-center mx-auto">
          <p class="font-bold text-2xl text-main-900 text-center font-script-2">
            Available Dates for Orders
          </p>
          <p class="text-main-900 text-sm italic text-center">
            Dates marked with a circle are either fully booked or closed.
          </p>
          <UCalendar
            v-model="unavailableDates"
            variant="subtle"
            readonly
            size="xl"
            class="mt-8"
            :year-controls="false"
            :number-of-months="2"
            :ui="{
              heading: 'text-main-900 font-bold',
              body: 'text-accent-950',
              cellTrigger: 'data-[outside-view]:hidden',
            }"
          />
        </div>
      </UContainer>
    </section>

    <section id="contact" class="scroll-mt-[7vh]">
      <div class="bg-main-950">
        <UContainer
          class="flex flex-col lg:flex-row justify-between text-white text-center gap-8 py-8 lg:py-16"
        >
          <div class="w-full flex justify-center h-20 xl:w-auto">
            <NuxtImg src="/images/full-logo.png" width="150" height="80" />
          </div>
          <div
            class="flex flex-col items-center md:flex-row md:justify-around md:items-start"
          >
            <div class="px-8 space-y-1 w-80">
              <p class="text-xl font-bold">Contact Us!</p>
              <ULink
                to="https://www.facebook.com/A3sweethaven"
                target="_blank"
                class="text-white hover:text-accent-100 text-sm lg:text-md cursor-pointer"
              >
                <UIcon name="i-lucide-facebook" class="size-5" />
                Sweet Haven by A3
              </ULink>
              <p class="text-sm">
                <UIcon name="i-lucide-phone" class="size-4 mr-1" />
                0997-842-9897
              </p>

              <div class="mt-4">
                <p class="font-bold">Google Maps Pin</p>
                <ULink
                  to="https://www.google.com/maps/place/A3+Sweet+Haven/@14.3974294,120.8424442,17z/data=!3m1!4b1!4m6!3m5!1s0x33962df777040509:0xa25e80dbd0065804!8m2!3d14.3974294!4d120.8450245!16s%2Fg%2F11pv9h68js?entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  class="text-white hover:text-accent-100 text-sm lg:text-md cursor-pointer"
                >
                  <UIcon name="i-lucide-map-pin" /> Tanza, Cavite
                </ULink>
              </div>
            </div>
            <div class="px-8 space-y-4 w-80">
              <div class="space-y-1">
                <p class="font-bold">Order Hours</p>
                <p class="text-sm">Mon-Sun 9:00 AM - 9:OO PM</p>
              </div>
              <div class="space-y-1">
                <p class="font-bold">Ordering Method</p>
                <p class="text-sm">Send us a message on Messenger.</p>
                <p class="text-sm">
                  We confirm within few minutes to a few hours
                </p>
              </div>
              <div class="space-y-1">
                <p class="font-bold">Cancellation Rules</p>
                <p class="text-sm">
                  Cancellations must be made at least one week before the booked
                  date.
                </p>
              </div>
            </div>
          </div>
          <div class="px-8 space-y-4 text-sm">
            <p>
              © {{ new Date().getFullYear() }} Sweet Haven by A3. All rights
              reserved.
            </p>
          </div>
        </UContainer>
      </div>
    </section>

    <UButton
      class="fixed rounded-full bottom-6 right-6 w-14 h-14 shadow-md shadow-gray-900 transition-transform duration-200 lg:hidden"
      size="sm"
      @click="goToFacebook"
    >
      Order Now
    </UButton>
  </UMain>
</template>

<script setup>
useHead({
  title: "Sweet Haven by A3",
});

import { CalendarDate } from "@internationalized/date";

const client = useSupabaseClient();
const unavailableDates = ref([]);

onMounted(async () => {
  await getUnavailableDates();
});

const getUnavailableDates = async () => {
  const { data } = await client.from("dates").select("year, month, day");

  if (data) {
    unavailableDates.value = data.map(
      (date) => new CalendarDate(date.year, date.month, date.day)
    );
  }
};

const items = [
  "/images/black_heart.png",
  "/images/lava_cake.png",
  "/images/beige_wedding.png",
  "/images/butterfly_cake.png",
  "/images/green_wedding.png",
  "/images/red_velvet.png",
];

const categories = [
  "Mini Cakes",
  "Bento Cakes",
  "Customized Cakes",
  "Tiered Cakes",
  "Cupcakes",
  "Number Cakes",
];

const selectedGallery = ref("Mini Cakes");

const switchGallery = (category) => {
  setTimeout(() => {
    selectedGallery.value = category;
  }, 200);
};

const miniCakePrices = [
  { size: "Lava Cake", price: "PHP 180" },
  {
    size: "Chiffon-based Mini Cake",
    price: "PHP 180 ",
  },
  {
    note: "Reseller Price (min. of 20 pcs. per order)",
    size: "Lava Cake",
    price: "PHP 160",
  },
  { size: "Chiffon-based Mini Cake", price: "PHP 160" },
];

const rndCakePrices = [
  { size: '4" x 2" Bento Cake', price: "PHP 250" },
  { size: '5" x 2"', price: "PHP 400" },
  { size: '5" x 2"', price: "PHP 400" },
  { size: '5" x 3"', price: "PHP 500" },
  { size: '6" x 2"', price: "PHP 500" },
  { size: '6" x 3"', price: "PHP 650" },
  { size: '6" x 4"', price: "PHP 800" },
  { size: '6" x 5"', price: "PHP 950" },
  { size: '6" x 6"', price: "PHP 1,200" },
  { size: '6" x 7"', price: "PHP 1,500" },
  { size: '7" x 2.5"', price: "PHP 750" },
  { size: '7" x 3"', price: "PHP 900" },
  { size: '7" x 4"', price: "PHP 1,100" },
  { size: '7" x 5"', price: "PHP 1,300" },
  { size: '7" x 6"', price: "PHP 1,700" },
  { size: '7" x 7"', price: "PHP 2,000" },
  { size: '8" x 2.5"', price: "PHP 900" },
  { size: '8" x 3"', price: "PHP 1,100" },
  { size: '8" x 4"', price: "PHP 1,300" },
  { size: '8" x 5"', price: "PHP 1,500" },
  { size: '9" x 2.5"', price: "PHP 1,200" },
  { size: '9" x 3"', price: "PHP 1,500" },
  { size: '9" x 4"', price: "PHP 1,800" },
  { size: '9" x 5"', price: "PHP 2,200" },
  { size: '10" x 2.5"', price: "PHP 1,500" },
  { size: '10" x 3"', price: "PHP 1,800" },
  { size: '10" x 4"', price: "PHP 2,200" },
  { size: '10" x 5"', price: "PHP 2,700" },
];

const sqrCakePrices = [
  { size: '7" x 7" x 2.5"', price: "PHP 800" },
  { size: '8" x 8" x 2.5"', price: "PHP 1,000" },
  { size: '9" x 9" x 2.5"', price: "PHP 1,300" },
];

const twoTieredCakePrices = [
  { size: '7" x 2" & 5" x 2"', price: "PHP 1,000" },
  { size: '7" x 3" & 5" x 3"', price: "PHP 1,400" },
  { size: '7" x 4" & 5" x 4"', price: "PHP 2,000" },
  { size: '8" x 2.5" & 6" x 2.5"', price: "PHP 1,300" },
  { size: '8" x 3" & 6" x 3"', price: "PHP 2,000" },
  { size: '8" x 4" & 6" x 4"', price: "PHP 2,800" },
  { size: '9" x 2.5" & 7" x 2.5"', price: "PHP 1,600" },
  { size: '9" x 3" & 7" x 3"', price: "PHP 2,700" },
  { size: '9" x 4" & 7" x 4"', price: "PHP 3,800" },
  { size: '10" x 4" & 7" x 4"', price: "PHP 4,300" },
];

const threeTieredCakePrices = [
  { size: '8" x 3" & 6" x 3" & 4" x 3"', price: "PHP 2,800" },
  { size: '8" x 4" & 6" x 4" & 4" x 4"', price: "PHP 3,500" },
  { size: '9" x 3" & 7" x 3" & 5" x 3"', price: "PHP 3,800" },
  { size: '9" x 4" & 7" x 4" & 5" x 4"', price: "PHP 5,000" },
  { size: '10" x 3" & 8" x 3" & 6" x 3"', price: "PHP 4,800" },
  { size: '10" x 4" & 8" x 4" & 6" x 4"', price: "PHP 6,000" },
];

const rndMoneyCakePrices = [
  { size: '7" x 3"', price: "PHP 1,100 (max. 20 bills)" },
  { size: '7" x 5"', price: "PHP 1,500 (max. 40 bills)" },
  { size: '8" x 3"', price: "PHP 1,400 (max. 40 bills)" },
  { size: '8" x 5"', price: "PHP 1,800 (max. 50 bills)" },
  { size: '9" x 3"', price: "PHP 1,800 (max. 40 bills)" },
  { size: '9" x 5"', price: "PHP 2,500 (max. 60 bills)" },
];

const cupcakePrices = [
  { size: "Assorted Cupcake (6 pcs.)", price: "PHP 250" },
  { size: "Smores Cupcake (6 pcs.)", price: "PHP 270" },
  { size: "1/2 Dozen Customized Cupcake (6 pcs.)", price: "PHP 250" },
  { size: "1 Dozen Customized Cupcake(12 pcs.)", price: "PHP 550" },
  { size: "1 Dozen Pull-apart Cupcake(12 pcs.)", price: "PHP 650" },
];

const numCakePrices = [
  { size: "1", price: "PHP 850" },
  { size: "2", price: "PHP 850" },
  { size: "3", price: "PHP 850" },
  { size: "4", price: "PHP 850" },
  { size: "5", price: "PHP 850" },
  { size: "6", price: "PHP 850" },
  { size: "7", price: "PHP 850" },
  { size: "8", price: "PHP 900" },
  { size: "9", price: "PHP 850" },
  { size: "0", price: "PHP 850" },
];

const priceList = ref([
  {
    label: "Mini Cakes",
    content: miniCakePrices,
  },
  {
    label: "Customized Round Cakes",
    content: rndCakePrices,
  },
  {
    label: "Customized Square Cakes",
    content: sqrCakePrices,
  },
  {
    label: "Customized Two-tiered Cakes",
    content: twoTieredCakePrices,
  },
  {
    label: "Customized Three-tiered Cakes",
    content: threeTieredCakePrices,
  },
  {
    label: "Customized Money Cakes",
    content: rndMoneyCakePrices,
  },
  {
    label: "Cupcakes Cakes",
    content: cupcakePrices,
  },
  {
    label: "Number Cakes",
    content: numCakePrices,
  },
]);

const flavors = [
  {
    imgUrl: "/images/moist-choco.png",
    name: "Moist Chocolate Cake",
    favorite: true,
  },
  {
    imgUrl: "/images/dulce-choco.png",
    name: "Dulce de Leche filled Chocolate Cake",
    favorite: true,
  },
  {
    imgUrl: "/images/coffee-caramel.png",
    name: "Coffee Caramel Chiffon Cake",
    favorite: true,
  },
  {
    imgUrl: "/images/dulce-chiffon.png",
    name: "Dulce de Leche Chiffon Cake",
    favorite: true,
  },
  {
    imgUrl: "/images/vanilla-choco.png",
    name: "Vanilla Cream filled Chocolate Cake",
    favorite: false,
  },
  {
    imgUrl: "/images/coffee-choco.png",
    name: "Coffee & Chocolate Cake",
    favorite: false,
  },

  {
    imgUrl: "/images/vanilla-chiffon.png",
    name: "Vanilla Chiffon Cake",
    favorite: false,
  },

  {
    imgUrl: "/images/ube-chiffon.png",
    name: "Ube Chiffon Cake",
    favorite: false,
  },
  {
    imgUrl: "/images/mocha-chiffon.png",
    name: "Mocha Chiffon Cake",
    favorite: false,
  },
];

const gallery = [
  {
    cakeUrl: "/gallery/mini-choco.jpg",
    category: "Mini Cakes",
    name: "Triple Chocolate Lava Cake",
    description:
      "Moist chocolate cake with chocolate sauce and chocolate toppings",
    price: "PHP 180",
    bestSeller: true,
  },
  {
    cakeUrl: "/gallery/mini-redvelvet.jpg",
    category: "Mini Cakes",
    name: "Red Velvet Mini Cake",
    description: "Red velvet cake with cream cheese flavored frosting",
    price: "PHP 280",
  },
  {
    cakeUrl: "/gallery/mini-dulce.jpg",
    category: "Mini Cakes",
    name: "Dulce de Leche Lava Cake",
    description: "Moist chocolate cake with dulce de leche and nut toppings",
    price: "PHP 180",
    bestSeller: true,
  },
  {
    cakeUrl: "/gallery/mini-ube.jpg",
    category: "Mini Cakes",
    name: "Mini Ube Chiffon Cake",
    description: "Ube chiffon cake with ube frosting",
    price: "PHP 180",
  },
  {
    cakeUrl: "/gallery/mini-coffee.jpg",
    category: "Mini Cakes",
    name: "Mini Coffee Chiffon Cake",
    description: "Chiffon cake with coffee frosting and chocolate toppings",
    price: "PHP 180",
  },
  {
    cakeUrl: "/gallery/mini-chiffondulce.jpg",
    category: "Mini Cakes",
    name: "Mini Dulce de Leche Chiffon Cake",
    description: "Chiffon cake with frosting, dulce de leche, and nut toppings",
    price: "PHP 180",
    bestSeller: true,
  },
  {
    cakeUrl: "/gallery/bento-1.jpg",
    category: "Bento Cakes",
    name: "Sky Blue Dainty Bento Cake",
    description: "",
    price: "PHP 250",
  },
  {
    cakeUrl: "/gallery/bento-2.jpg",
    category: "Bento Cakes",
    name: "Lavender-White Ombre Bento Cake",
    description: "",
    price: "PHP 250",
  },
  {
    cakeUrl: "/gallery/bento-3.jpg",
    category: "Bento Cakes",
    name: "Peach Themed Bento Cake",
    description: "",
    price: "PHP 250",
  },
  {
    cakeUrl: "/gallery/bento-4.jpg",
    category: "Bento Cakes",
    name: "Green Themed Bento Cake",
    description: "",
    price: "PHP 250",
  },
  {
    cakeUrl: "/gallery/bento-5.jpg",
    category: "Bento Cakes",
    name: "Minimalist Line Art Bento Cake",
    description: "Add ons: drawing",
    price: "PHP 300",
  },
  {
    cakeUrl: "/gallery/bento-6.jpg",
    category: "Bento Cakes",
    name: "Customized Blue Bento Cake",
    description: "",
    price: "PHP 250",
  },
  {
    cakeUrl: "/gallery/custom-1.jpg",
    category: "Customized Cakes",
    name: "Cars Themed Cake",
    description: "Add ons: toys, custom toppers",
    price: "PHP 1,400",
  },
  {
    cakeUrl: "/gallery/custom-2.jpg",
    category: "Customized Cakes",
    name: "Spongebob Themed Cake",
    description: "Add ons: crumbs (sand)",
    price: "PHP 1,600",
  },
  {
    cakeUrl: "/gallery/custom-3.jpg",
    category: "Customized Cakes",
    name: "One Piece Themed Cake",
    description: "Add ons: toys",
    price: "PHP 1,500",
  },
  {
    cakeUrl: "/gallery/custom-4.jpg",
    category: "Customized Cakes",
    name: "Sage Watercolor Themed Cake",
    description: "",
    price: "PHP 1,100",
  },
  {
    cakeUrl: "/gallery/custom-5.jpg",
    category: "Customized Cakes",
    name: "White-Blue Ombre Cake",
    description: "",
    price: "PHP 750",
  },
  {
    cakeUrl: "/gallery/custom-6.jpg",
    category: "Customized Cakes",
    name: "Vintage Themed Cake",
    description: "Add ons: toys",
    price: "PHP 1,200",
  },
  {
    cakeUrl: "/gallery/custom-7.jpg",
    category: "Customized Cakes",
    name: "Pink Vintage Themed Cake",
    description: "Add ons: bows, pearl drawing",
    price: "PHP 500",
  },
  {
    cakeUrl: "/gallery/custom-8.jpg",
    category: "Customized Cakes",
    name: "Floral Themed Cake",
    description: "",
    price: "PHP 750",
  },
  {
    cakeUrl: "/gallery/custom-9.jpg",
    category: "Customized Cakes",
    name: "Galaxy Themed Cake",
    description: "",
    price: "PHP 1,000",
  },
  {
    cakeUrl: "/gallery/tiered-1.jpg",
    category: "Tiered Cakes",
    name: "2-Tiered Wedding Cake",
    description: "Add ons: custom toppers, flowers",
    price: "PHP 3,500",
  },
  {
    cakeUrl: "/gallery/tiered-2.jpg",
    category: "Tiered Cakes",
    name: "2-Tiered Naked Birthday Cake",
    description: "Add ons: flowers",
    price: "PHP 3,500",
  },
  {
    cakeUrl: "/gallery/tiered-3.jpg",
    category: "Tiered Cakes",
    name: "2-Tiered Birthday Cake",
    description: "Add ons: gold toppers",
    price: "PHP 3,500",
  },
  {
    cakeUrl: "/gallery/tiered-4.jpg",
    category: "Tiered Cakes",
    name: "2-Tiered Floral Birthday Cake",
    description: "Add ons: flowers, custom toppers",
    price: "PHP 3,500",
  },
  {
    cakeUrl: "/gallery/tiered-5.jpg",
    category: "Tiered Cakes",
    name: "2-Tiered Terracota Wedding Cake",
    description: "Add ons: flowers, custom toppers",
    price: "PHP 3,500",
  },
  {
    cakeUrl: "/gallery/tiered-6.jpg",
    category: "Tiered Cakes",
    name: "3-Tiered Wedding Cake",
    description: "Add ons: flowers",
    price: "PHP 6,000",
  },
  {
    cakeUrl: "/gallery/cupcake-1.jpg",
    category: "Cupcakes",
    name: "Assorted Cupcakes (6 pcs.)",
    description: "",
    price: "PHP 250",
  },
  {
    cakeUrl: "/gallery/cupcake-2.jpg",
    category: "Cupcakes",
    name: "Floral Themed Cupcakes (12 pcs.)",
    description: "",
    price: "PHP 550",
  },
  {
    cakeUrl: "/gallery/cupcake-3.jpg",
    category: "Cupcakes",
    name: "Smores Cupcake (6 pcs.) ",
    description: "",
    price: "PHP 270",
  },
  {
    cakeUrl: "/gallery/cupcake-4.jpg",
    category: "Cupcakes",
    name: "Cocomelon Themed Pull Apart Cupcake",
    description: "",
    price: "PHP 650",
  },
  {
    cakeUrl: "/gallery/cupcake-5.jpg",
    category: "Cupcakes",
    name: "Pink Floral Themed Pull Apart Cupcake",
    description: "",
    price: "PHP 650",
  },
  {
    cakeUrl: "/gallery/cupcake-6.jpg",
    category: "Cupcakes",
    name: "Sofia The First Themed Pull Apart Cake",
    description: "",
    price: "PHP 650",
  },
  {
    cakeUrl: "/gallery/number-1.jpg",
    category: "Number Cakes",
    name: "Pink Butterfly Themed Number Cake",
    description: "Add ons: Butterfly cutouts",
    price: "PHP 900",
  },
  {
    cakeUrl: "/gallery/number-2.jpg",
    category: "Number Cakes",
    name: "Yellow and Black Bee Themed Number Cake",
    description: "",
    price: "PHP 900",
  },
  {
    cakeUrl: "/gallery/number-3.jpg",
    category: "Number Cakes",
    name: "Sunset Rainbow Number Number Cake",
    description: "Add ons: Custom fondant toppers",
    price: "PHP 1,200",
  },
  {
    cakeUrl: "/gallery/number-4.jpg",
    category: "Number Cakes",
    name: "Barbie Themed Number Cake",
    description: "Add ons: Custom fondant toppers",
    price: "PHP 1,500",
  },
  {
    cakeUrl: "/gallery/number-5.jpg",
    category: "Number Cakes",
    name: "Unicorn Themed Number Cake",
    description: "Add ons: Custom fondant toppers",
    price: "PHP 1,500",
  },
  {
    cakeUrl: "/gallery/number-6.jpg",
    category: "Number Cakes",
    name: "Flower Themed White Number Cake",
    description: "Add ons: Custom white chocolate toppers, flowers, fondant",
    price: "PHP 1,300",
  },
];

function goToFacebook() {
  window.open("https://m.me/A3sweethaven", "_blank");
}

const filteredGallery = computed(() => {
  return gallery.filter((item) => item.category === selectedGallery.value);
});
</script>
