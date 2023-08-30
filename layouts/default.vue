<template>
  <div class="bd">
    <Header/>
    <NuxtPage />
    <Footer/>
  </div>
</template>

<style>
html{
    @apply scroll-smooth
}
.flex-items{
    @apply flex
}
.anim{
    @apply transition-all delay-150 ease-in-out
}
.bd{
    @apply relative overflow-x-hidden;
}

.hero {
    @apply min-h-full bg-cover -mt-20 w-full bg-no-repeat relative overflow-hidden;
}
.hero-img{
    @apply absolute -z-10 -top-36 right-0 opacity-90 ;
}
.hero-content{
    @apply grid grid-cols-4 justify-between md:py-[120px] lg:py-[180px] px-10;
}
.content-left{
    @apply col-span-2 lg:col-span-3
}
.content-left h1{
    @apply md:text-4xl lg:text-8xl font-black text-white pb-10 capitalize
}
.btn{
    @apply bg-orange-400 p-3 rounded-md
}
.content-left ul{
    @apply flex pt-10 gap-6 text-white md:text-sm md:font-medium lg:font-semibold
}
.content-left ul li h4{
    @apply md:text-xl lg:text-3xl font-black
}
.search{
    @apply h-fit w-full py-10 col-span-2
}
.search .btn-list{
    @apply bg-white w-fit p-3 flex gap-10 rounded-t-md border-b-2
}
.btn-list .active{
    @apply border-b-4 border-orange-500 rounded
}
.input-items{
    @apply w-fit bg-white px-3 py-5 rounded-b-md min-h-fit grid grid-cols-8 items-center gap-3
}
.input-items .input-body {
    @apply relative col-span-6
}
.input-body .icon{
    @apply absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none
}
.input-body .search-input{
    @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
}
.searchBtn-list{
    @apply flex gap-3 items-center
}
.searchBtn-list .btn-ad{
    @apply flex hover:text-orange-500 text-center anim
}
.searchBtn-list .btn-search{
    @apply bg-black p-2 rounded-full hover:bg-orange-500 anim
}
.location-section{
    @apply py-10 px-8 h-fit;
}
.info-section h3{
    @apply font-bold text-xl
}
.info-section span{
    @apply text-orange-400
}
.dem{
    @apply w-full h-full flex justify-center items-center bg-gray-500/20 backdrop-brightness-75 hover:backdrop-brightness-100 anim cursor-pointer
}
.dem span{
    @apply text-lg font-black text-white
}
</style>
