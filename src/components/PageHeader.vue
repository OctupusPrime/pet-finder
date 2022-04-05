<template>
    <header class="md:py-5 py-3.5 fixed inset-x-0 top-0 bg-white z-50">
        <div class="flex justify-between items-center max-w-screen-2xl w-[95%] mx-auto">
            <img src="../assets/img/logo.svg" alt="logo of pet finder" class="md:h-[60px] h-[30px]">

            <div class="hidden md:flex justify-between w-[50%] max-w-[500px]">
                <a href="#" class="text-3xl font-bold">Find Pets</a>
                <a href="#" class="text-3xl font-bold">About</a>
                <a href="#" class="text-3xl font-bold">Contact</a>
            </div>

            <a href="#" class="md:hidden flex items-center gap-2.5">
                <p class="text-sm font-light">Menu</p>
                <img src="../assets/img/menu.svg" alt="menu icon" >
            </a>
        </div>
    </header>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>