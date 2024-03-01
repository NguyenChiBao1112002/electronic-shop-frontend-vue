<script setup lang="ts"></script>

<template>
    <section class="banner-block">
        <div class="banner-block__wrapper">
            <a href="#" class="d-block w-100">
                <img src="https://media.coolmate.me/cdn-cgi/image/width=1800,height=1200,quality=80,format=auto/uploads/December2023/mceclip2_67.png"
                    alt="" class="w-100">
            </a>
            <div class="banner-block__content">
                <h2 class="banner-block__heading">
                    BST
                    <br>
                    THU ĐÔNG
                </h2>
                <div class="banner-block__button">
                    <a href="" class="button button--black">KHÁM PHÁ NGAY</a>
                </div>
            </div>
        </div>

    </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@500&display=swap');

.banner-block {
    margin: 40px 0;
}

.banner-block__wrapper {
    position: relative;
}

.banner-block__content {
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

.banner-block__content h2 {
    text-transform: uppercase;
    position: relative;
    font-family: 'Prompt', sans-serif;
    font-weight: 500;
    font-size: 80px;
}

.banner-block__content.black {
    color: #000;
}
</style>
