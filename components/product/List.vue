<template>
    <div class="house-section">
        <div>
            <div class="info-section">
                <span>Best Choices</span>
                <h3>Most Popular Residences<span>.</span></h3>
            </div>
            <div>
                <button @click="next">Next</button>
            </div>
        </div>
        <Carousel v-model="carousel_num" :breakpoints="breakpoints">
            <Slide v-for="slide in locationList" :key="slide.keyVal">
                <ProductCard/>
            </Slide>
        </Carousel>
    </div>
</template>
<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const carousel_num = ref(0);

function next() {
    carousel_num.value += 1
}

interface LocationMap {
    name: string,
    image: string,
    keyVal: number
}

const locationList: LocationMap[] = [
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
        itemsToShow: 2,
        wrapAround: true,
    },
    // 1024 and up
    1024: {
        itemsToShow: 3.95,
        wrapAround: true,
    }
}
</script>

<style scoped>
.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}

.house-section {
    @apply px-8
}
</style>