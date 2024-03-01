<script setup lang="ts">
import ProductCard from './ProductCard.vue';
</script>

<template>
    <div class="section-container">
        <div class="products__tab">
            <a href="#" class="products__tab-item active">Sản phẩm mới</a>
            <a href="#" class="products__tab-item" @click="">Bán chạy nhất</a>
        </div>
        <div class="product-slider row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@500&display=swap');

.products__tab {
    margin-bottom: 1rem;
    margin-top: 4rem;
    display: flex;
}

/* button {
    overflow: visible;
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
} */

.products__heading {
    font-size: 28px;
    margin-bottom: 0;
    text-transform: uppercase;
    font-weight: 500;
}

.products__heading span {
    text-transform: capitalize;
    font-size: 1rem;
    text-decoration: underline;
    cursor: pointer;
    float: right;
    margin-top: 12px;
    font-weight: 400;
}


.slick-arrow {
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 50%;
    padding: 0;
    border: 0;
    border-radius: 1.5rem;
    width: 40px;
    height: 40px;
    z-index: 1;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    justify-content: center;
    align-items: center;
    background-color: #212121;
    border: none;
    outline: none;
}

.slick-arrow.slick-prev {
    right: 100%;
}

.slick-arrow.slick-next {
    left: 100%;
}

.slick-prev::before {
    content: '←';
}

.slick-next::before {
    content: '→';
}

.slick-prev::before, .slick-next::before {
    position: relative;
    top: -2px;
    font-size: 24px;
    line-height: 1rem;
    opacity: .75;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}


.products__tab-item {
    border-radius: 2.625rem;
    background: #fff;
    color: #212121;
    font-size: 1.125rem;
    padding: 0.5rem 1.5rem;
    opacity: 1;
    border: 1px solid #212121;
    margin-right: 1.5rem;
    white-space: nowrap;
    display: flex;
    cursor: pointer;
    align-items: center;
    font-family: 'Prompt', sans-serif;
    font-weight: 500;
}

.products__tab-item.active {
    background-color: #212121;
    color: #fff;
}

.product-slider {}</style>
