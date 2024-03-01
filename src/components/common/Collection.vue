<script setup lang="ts"></script>

<template>
    <div class="collection__wrapper col-6">
        <div class="collection__image">
            <img loading="lazy" src="https://mcdn.coolmate.me/image/January2024/mceclip9.png" alt="">
        </div>
        <div class="collection__content ">
            <p>CM24 - Nước hoa nam</p>
            <h2>
                Quà tặng
                <br>
                Hấp dẫn
            </h2>
            <div class="collection__button">
                <a href="" class="button button--white">KHÁM PHÁ NGAY</a>
            </div>
        </div>

    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@500&display=swap');

.collection__image img {
    border-style: none;
    max-width: 100%;
    height: auto;
}

.collection__wrapper {
    position: relative;
}

.collection__content {
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

.collection__content p {
    font-size: 1rem;
    margin-bottom: 0;
    text-transform: uppercase;
    color: hsla(0,0%,100%,.7098039216);
    letter-spacing: .1em;
}

.collection__content h2 {
    font-size: 3.75rem;
    text-transform: uppercase;
    margin-top: 20px;
    margin-bottom: 40px;
    color: #fff;
}
</style>