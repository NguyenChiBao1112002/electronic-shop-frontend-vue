<script setup lang="ts"></script>

<template>
    <section class="care-share section-container my-50">
        <div class="care-share__inner">
            <div class="care-share__image">
                <img loading="lazy" src="https://mcdn.coolmate.me/image/March2023/mceclip0_137.jpg" alt="">
            </div>
            <div class="care-share__content">
                <div class="care-share__button">
                    <a href="" class="button button--white">VỀ CARE & SHARE</a>
                </div>
            </div>

        </div>

    </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@500&display=swap');

.care-share__image img {
    border-style: none;
    max-width: 100%;
    height: auto;
}

.care-share__inner {
    position: relative;
}

.care-share__content {
    top: -14%;
    max-width: 800px;
    position: absolute;
    left: 0;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    max-width: 600px;
    padding: 0 0 0 2rem;
}
</style>
