<script setup>
import GuideItem from "./AppGuideItem.vue"
</script>

<script>
export default {
    data() {
        return {
            resources: [
                { 
                    url: "https://scape.style",
                    title: "Stylescape"
                },

            ]
        }
    }
}
</script>

<template>
    <h2>Guides</h2>
    <p>Read more detailed instructions and documentation on using or contributing to Stylescape.</p>

    <ul class="">
        <GuideItem
        v-for="item in resources"
        :href="item.url"
        :text="item.title"
        />
    </ul>
</template>
