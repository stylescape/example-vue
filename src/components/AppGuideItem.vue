<script>
export default {
    props: {
        href: String,
        text: String
    }
}
</script>

<template>
    <li class="">
        <a :href="href" target="_blank" rel="noopener">{{ text }}</a>
    </li>
</template>
