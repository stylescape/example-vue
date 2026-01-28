<script setup>
import { ref } from 'vue';

const accordionItems = ref([
    { id: 1, title: 'Getting Started', content: 'Stylescape is a modern CSS framework with powerful layout components and auto-initialization features.', open: true },
    { id: 2, title: 'Frame Layout', content: 'The frame layout system provides a flexible structure with ribbons and sidebars for complex application layouts.', open: false },
    { id: 3, title: 'Theme Support', content: 'Built-in light and dark theme support with automatic detection and manual toggle capabilities.', open: false }
]);

const toggleAccordion = (item) => {
    item.open = !item.open;
};
</script>

<template>
    <div class="frame_main">
        <!-- Top Ribbon / Header -->
        <header class="ribbon--top">
            <div class="ribbon__content">
                <h1>Stylescape + Vue</h1>
                <nav>
                    <button data-ss="theme-toggle" class="btn btn--primary">
                        Toggle Theme
                    </button>
                </nav>
            </div>
        </header>

        <!-- Left Sidebar -->
        <aside class="sidebar--left" data-ss="aside">
            <div class="sidebar__content">
                <h3>Navigation</h3>
                <ul class="nav nav--vertical">
                    <li class="nav__item"><a href="#" class="nav__link">Home</a></li>
                    <li class="nav__item"><a href="#" class="nav__link">Components</a></li>
                    <li class="nav__item"><a href="#" class="nav__link">Documentation</a></li>
                    <li class="nav__item"><a href="#" class="nav__link">Examples</a></li>
                </ul>
            </div>
        </aside>

        <!-- Main Content Area -->
        <main class="frame__content">
            <section class="content-section">
                <h2>Welcome to Stylescape with Vue 3</h2>
                <p>
                    This example demonstrates the integration of Stylescape CSS framework
                    with Vue 3 and Vite. It showcases the frame layout system, accordion
                    component, and theme toggle functionality.
                </p>

                <!-- Accordion Component -->
                <div class="accordion" data-ss="accordion">
                    <div
                        v-for="item in accordionItems"
                        :key="item.id"
                        class="accordion__item"
                        :class="{ 'accordion__item--open': item.open }"
                    >
                        <button
                            class="accordion__header"
                            @click="toggleAccordion(item)"
                            :aria-expanded="item.open"
                        >
                            {{ item.title }}
                            <span class="accordion__icon"></span>
                        </button>
                        <div class="accordion__content" v-show="item.open">
                            <div class="accordion__body">
                                {{ item.content }}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <!-- Right Sidebar -->
        <aside class="sidebar--right" data-ss="aside">
            <div class="sidebar__content">
                <h3>Quick Links</h3>
                <ul class="nav nav--vertical">
                    <li class="nav__item"><a href="https://scape.style" class="nav__link">Stylescape Docs</a></li>
                    <li class="nav__item"><a href="https://vuejs.org" class="nav__link">Vue.js</a></li>
                    <li class="nav__item"><a href="https://vitejs.dev" class="nav__link">Vite</a></li>
                </ul>
            </div>
        </aside>

        <!-- Bottom Ribbon / Footer -->
        <footer class="ribbon--bottom">
            <div class="ribbon__content">
                <p>&copy; 2026 Stylescape. Built with Vue 3 and Vite.</p>
            </div>
        </footer>
    </div>
</template>

<style scoped>
.content-section {
    padding: 2rem;
}

.content-section h2 {
    margin-bottom: 1rem;
}

.content-section p {
    margin-bottom: 2rem;
}
</style>
