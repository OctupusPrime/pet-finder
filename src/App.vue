<template>
  <PageHeader />

  <main class="main">
    <div class="max-w-screen-2xl w-[95%] mx-auto pt-[6.5vh] md:pt-[20vh] text-center md:text-left">
      <h1 class="text-white text-5xl md:text-8xl font-bold mb-[60px] md:mb-[84px] drop-shadow-xl">
        Find Your New<br>Best Friend
      </h1>
      <a href="#" class="text-white text-2xl md:text-4xl font-bold rounded-3xl bg-orange-600 py-7 px-[100px]">
        Get Started
      </a>
    </div>

  </main>

  <section class="max-w-screen-2xl w-[95%] mx-auto py-[50px] md:py-[110px]">
    <PetCardRow :petsData="petsData" 
                :isLoading="isLoading" 
                :errorMsg="errorMsg"/>
  </section>
</template>

<script>
import { ref } from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import PetCardRow from '@/components/PetCardRow.vue'

import { useFetching } from "@/hooks/useFetching"
import PetService from "@/API/PetService"

export default {
  name: 'App',
  components: {
    PageHeader,
    PetCardRow
  },
  setup() {
    const petsData = ref([])

    const [getData, isLoading, errorMsg] = useFetching(async () => {
      const res = await PetService.getAll()
      petsData.value = res.data.pets
    })
    getData()

    return {
      petsData,
      isLoading,
      errorMsg
    }
  }
}
</script>

<style scoped>
  .main {
    @apply md:mt-[100px] md:h-[calc(100vh-100px)] mt-[62px] h-[calc(100vh-62px)];
    background: no-repeat center url('./assets/img/dog-bg-desktop.jpeg');
    background-size: cover;
  }
  @media screen and (max-width: 767px) {
  .main {
    background: no-repeat center url('./assets/img/dog-bg-mobile.jpeg');
    background-size: cover;
  }
}
</style>