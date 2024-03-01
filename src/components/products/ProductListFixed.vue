<script setup lang="ts">
import ProductCard from './ProductCard.vue';
</script>

<template>
    <div class="section-container">
        <div class="products__heading d-flex justify-content-between">
            <p>SẢN PHẨM THU ĐÔNG</p>
            <span>Xem thêm</span>
        </div>
        <div class="product-list row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@500&display=swap');

.products__heading {
    font-size: 28px;
    margin-bottom: 0;
    text-transform: uppercase;
    font-weight: 500;
}

.products__heading span {
    text-transform: none;
    font-size: 1rem;
    text-decoration: underline;
    cursor: pointer;
    float: right;
    margin-top: 12px;
    font-weight: 400;
}
</style>
