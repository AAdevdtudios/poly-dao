<template>
    <div>
        Test
    </div>
</template>

<script setup lang="ts">
const name:string = "Di";

enum Diamond {
    Gold,
    Wild = "",
}

interface User {
    name: string,
    date: string,
    length: number,
    stuff: Diamond
}

const val = reactive<User>({
    name: "",
    date: "",
    length: 1,
    stuff: Diamond.Wild
})

type datas = {
    string: ""
}

const somethings = reactive<User[]>([
    {
        name: "",
        date: "S",
        length: 2,
        stuff: Diamond.Wild
    }
])



// const settings: Record<string, any>= {
//     itemsToShow: 1,
//     snapAlign: 'center',
// };
// const breakpoints: Record<string, any> = {
//     // 700px and up
//     700: {
//         itemsToShow: 3.5,
//         snapAlign: 'center',
//     },
//     // 1024 and up
//     1024: {
//         itemsToShow: 5,
//         snapAlign: 'start',
//     }
// }

</script>