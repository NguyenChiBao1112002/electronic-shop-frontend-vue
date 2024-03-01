<script setup lang="ts"></script>

<template>
    <section id="demo" class="carousel slide" data-bs-ride="carousel">

        <!-- The slideshow/carousel -->
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/January2024/Banner-Basic_copytet.jpg"
                    alt="" class="d-block">
            </div>
            <div class="carousel-item">
                <img src="https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/February2024/destop_44.png"
                    alt="" class="d-block">
            </div>
        </div>

        <!-- Left and right controls/icons -->
        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
    </section>
</template>

<style>
.carousel {
    margin-top: 82px;
}

.carousel-inner {
    height: 600px;
}

.carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
