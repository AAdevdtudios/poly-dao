<template>
    <section class="location-section info-section">
        <span>Best Choices</span>
        <h3>Our Inventory Location</h3>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>

        <Carousel :breakpoints="breakpoints" :transition="500">
            <Slide v-for="slide in locationList" :key="slide.keyVal">
                <a href="/" class="carousel__item" :style="{backgroundImage: `url(/images/${slide.image})` }">
                    <div class="dem">
                        <span>{{ slide.name }}</span>
                    </div>
                </a>
            </Slide>
            <template #addons>
                <Navigation />
                <Pagination />
            </template>
        </Carousel>
    </section>
</template>

<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

interface LocationMap{
    name: string,
    image: string,
    keyVal: number
}

const locationList: LocationMap[]= [
    {
        name: "Lagos",
        image: "obinna-okerekeocha-fGd8paHzN98-unsplash.jpg",
        keyVal: 1
    },
    {
        name: "Ibadan",
        image: "babatunde-olajide-q4ZBGVzJskE-unsplash.jpg",
        keyVal: 2
    },
    {
        name: "Lekki",
        image: "nupo-deyon-daniel-9ySEZ-ugtJA-unsplash.jpg",
        keyVal: 3
    },
]

const breakpoints: Record<string, any> = {
    // 700px and up
    700: {
        itemsToShow: 1,
        wrapAround: false,
        snapAlign: 'center',
    },
    // 1024 and up
    1024: {
        itemsToShow: 3.95,
        wrapAround: true,
    }
}

</script>

<style scoped>
.carousel__item{
    @apply h-[400px] w-full text-red-900 rounded-md justify-center items-center bg-cover bg-center
}
.carousel__slide{
    @apply p-5
}
.carousel__prev,
.carousel__next{
    @apply box-content border-2 border-yellow-500 bg-gray-700 rounded-full
}
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}
.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>