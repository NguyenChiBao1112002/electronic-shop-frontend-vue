<script setup lang="ts"></script>

<template>
    <div class="product-card card col-2-4">
        <div class="product-card__thumbnail">
            <div class="product-card__image-container">
                <a href="#">
                    <img class="card-img-top"
                        src="https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/January2024/24CMAW.AT011.1_91.jpg"
                        alt="Card image" style="width:100%">
                </a>
            </div>
            <span class="product-card__tags">New</span>
            <div class="product-card__select"></div>
        </div>
        <div class="product-card__content card-body">
            <div class="product-card__options"></div>
            <h3 class="product-card__title card-title">
                <a href="#">
                    Áo Thun Nam Chạy Bộ Graphic Photic Zone
                </a>
            </h3>
            <p class="product-card__sub-title card-text">Mỏng nhẹ / Xanh dương</p>
            <div class="product-card__prices">
                <div class="product-prices">
                    <span style="color: red;margin-left: 10px;">-10%</span>
                    <del>199.000đ</del>
                    <ins>179.000đ</ins>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.col-2-4 {
    width: 20%;
}

a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
    transition: all .2s;
}

.product-card {
    position: relative;
    padding: 9px;
    padding-bottom: 12px;
    border: none;
}

.product-card > * {
    transition: all .3s;
}

.product-card__thumbnail {
    position: relative;
    margin-bottom: 15px;
    border-radius: 8px;
    overflow: hidden;
}

.product-card__image-container {
    position: relative;
}

.product-card__image-container img {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
    transition: all .2s;
}

.product-card__tags {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0.625rem;
    right: 0.75rem;
    font-size: .625rem;
    height: 21px;
    padding: 0 10px;
    border-radius: 5px;
    font-weight: 500;
    color: #fff;
    background-color: #2f5acf;
    text-transform: capitalize;
    z-index: 2;
}

.product-card__title {
    font-size: 14px;
    line-height: 1.2em;
    font-weight: 400;
    margin-bottom: 0.75rem;
}

.product-card__sub-title {
    font-size: 14px;
    color: #0009;
    margin: -10px 0 5px;
}

.product-prices {
    display: flex;
    justify-content: flex-end;
    flex-flow: row-reverse;
    font-size: 14px;
    font-weight: 400;
}

.product-prices span {
    color: red;
    margin-left: 10px;
}

.product-prices del+ins {
    margin-right: 14px;
}

.product-prices del {
    color: #c4c4c4;
}

.product-prices ins {
    text-decoration: none;
    color: #242424;
    font-weight: 700;
}
</style>
