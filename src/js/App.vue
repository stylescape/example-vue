<script setup>
import Header from '../components/AppHeader.vue'
import Guides from '../components/AppGuides.vue'
import Footer from '../components/AppFooter.vue'
</script>

<template>
    <div class="">
        <Header />

        <h1>Build Stylescape with Vue</h1>

        <div class="">
            <p class="">You've successfully loaded the Stylescape + Vue example! It's loaded up with <a href="https://scape.style/"></a> and uses Vue and Vite to compile and bundle our Sass and JavaScript. It also features a handful of custom Vue components.</p>
        </div>


        <hr class="col-1 my-5 mx-0">

        <Guides />

        <Footer />
    </div>
</template>
