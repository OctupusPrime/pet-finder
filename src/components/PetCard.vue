<template>
    <div class="w-full lg:w-[30%] rounded-xl overflow-hidden">
        <img :src="petData.image" alt="" class="w-full aspect-[4/3] object-cover">

        <div class="bg-orange-600 py-4 pl-5 pr-2.5 text-white flex justify-between items-end">
            <div>
                <h3 class="text-3xl font-bold">{{petData.name}}</h3>
                <p class="text-xl font-bold">
                  {{petData.age % 12 
                    ? (petData.age / 12).toFixed(1) 
                    : petData.age / 12}} years
                </p>
            </div>
            <div class="flex items-center gap-[12px]">
              <img src="../assets/img/location-marker.svg" alt="location marker icon">
              <a href="#" class="text-xl font-bold">{{petData.city}}, {{petData.state}}</a>
            </div>

        </div>
    </div>
</template>

<script>
export default {
  name: 'PetCard',
  props: {
    petData: {
      required: true,
      type: Object
    }
  }
}
</script>