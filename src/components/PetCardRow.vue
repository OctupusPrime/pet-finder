<template>
    <h2 class="text-4xl md:text-5xl font-bold text-center md:text-left">Available Pets</h2>

    <p class="text-3xl font-bold text-center pt-[20px] text-orange-600" v-if="isLoading">
        Loading...
    </p>
    <p class="text-2xl font-bold text-center pt-[20px] text-red-500" v-else-if="errorMsg">
        {{errorMsg}}
    </p>

    <div class="flex justify-between pt-[55px] lg:flex-row flex-col lg:gap-0 gap-[50px] items-center flex-wrap" 
        v-else>
        <PetCard v-for="pet in petsData" 
            :key="pet.id" 
            :petData="pet"/>
    </div>   
</template>

<script>
import PetCard from './PetCard.vue'

export default {
    name: 'PetCardRow',
    components: {
        PetCard
    },
    props: {
        petsData: {
            required: true,
            type: Array
        },
        isLoading: Boolean,
        errorMsg: String
    }
}
</script>