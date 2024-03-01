<script setup lang="ts"></script>

<template>
    <header class="header">
        <nav class="navbar navbar-expand-sm">
            <!-- Links -->
            <div class="header_logo">
                <router-link to="/home">
                    <img src="../../assets/images/logo/bt-high-resolution-logo-white-transparent.png" alt="" srcset="" />
                </router-link>
            </div>
            <div class="navbar-nav">
                <div class="nav-item">
                    <a class="nav-link" href="#">
                        SẢN PHẨM
                        <i class="fa-solid fa-chevron-down dropdown-icon"></i>
                    </a>
                    <div class="subnav">
                        <ul class="subnav-list">
                            <li class="subnav-item">
                                <a href=""> Áo </a>
                            </li>
                            <li class="subnav-item">
                                <a href=""> Quần </a>
                            </li>
                            <li class="subnav-item">
                                <a href=""> Áo khoác </a>
                            </li>
                            <li class="subnav-item">
                                <a href=""> Đồ thể thao </a>
                            </li>
                            <li class="subnav-item">
                                <a href=""> Đồ lót </a>
                            </li>
                            <li class="subnav-item">
                                <a href=""> Giày </a>
                            </li>
                            <li class="subnav-item">
                                <a href=""> Phụ kiện </a>
                            </li>
                            <li class="subnav-item">
                                <a href=""> Nước hoa </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="nav-item">
                    <a class="nav-link" href="#">GIỚI THIỆU</a>
                </div>
                <div class="nav-item">
                    <a class="nav-link" href="#">LIÊN HỆ</a>
                </div>
                <div class="nav-item">
                    <a class="nav-link" href="/branch">CHI NHÁNH</a>
                </div>
            </div>
            <div class="header_actions">
                <div class="header_actions_search-box">
                    <label class="header_actions_search-field">
                        <a href="#" class="header_actions_search-icon">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </a>
                        <input class="header_actions_search-control" type="text" name="search" id="search-input"
                            placeholder="Tìm kiếm sản phẩm..." />
                    </label>
                </div>
                <div class="header_actions_button dropdown-center">
                    <div class="header_actions_button-link dropdown" data-bs-toggle="dropdown" aria-expanded="false"
                        type="button">
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <ul class="dropdown-menu">
                        <li><router-link to="/account/info" class="dropdown-item">Thông tin tài khoản</router-link>
                        </li>
                        <li><a class="dropdown-item">Đăng xuất</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><router-link to="/login" class="dropdown-item">Đăng nhập</router-link></li>
                    </ul>
                </div>
                <div class="header_actions_button">
                    <a href="#" class="header_actions_button-link">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </a>
                    <span class="cart-count">0</span>
                </div>
            </div>
        </nav>
    </header>
</template>

<style>
body {
    /* height: 2000px; */
}

/* .grid-row {
    display: flex;
    justify-content: center;
    width: 100%;
}

.grid-col {
    display: flex;
}

.col:has(-) {
    padding: 4px;
} */

.visible {
    visibility: visible;
    opacity: 1;
    transition: opacity 2s linear;
}

.hidden {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 2s, opacity 2s linear;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}

@keyframes fade-in-to-upper-right {
    from {
        opacity: 0;
        top: 350px;
        left: 0px;
        scale: 0;
    }

    to {
        opacity: 1;
        top: 0px;
        left: 350px;
        scale: 1;
    }
}

ul {
    padding-left: 0 !important;
}

header {
    position: fixed;
    top: 0;
    display: flex;
    background-color: #212121;
    height: 83px;
    padding: 0 64px;
    z-index: 9999;
    width: 100% !important;
}

.header_logo {
    width: 100px;
}

.header_logo img {
    max-height: 60px;
    height: auto;
    cursor: pointer;
}

.navbar {
    --bs-navbar-padding-y: 0px !important;
}

.navbar-nav {
    --bs-nav-link-padding-x: 0 !important;
    --bs-nav-link-padding-y: 0 !important;
    --bs-nav-link-color: #fff !important;
    --bs-nav-link-hover-color: #fff;
    height: inherit;
    min-width: 940px;
    padding: 0px;
}

.nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 31px 16px;
    font-size: 16px;
    cursor: pointer;
    position: relative;
}

.nav-item .dropdown-icon {
    padding-left: 2px;
    position: relative;
    top: -2px;
    font-size: 0.7rem;
}

.nav-item:hover {
    background-color: #3c3c3c;
}

.nav-item>.nav-link {
    font-size: 0.875rem;
    font-weight: 500;
}

.nav-item .subnav {
    display: none;
}

.nav-item:hover .subnav {
    display: flex;
    position: absolute;
    top: 100%;
    left: 0;
    padding: 0;
    min-width: 300px;
    background-color: #ededed;
    /* border-top: 2px solid #ee4266; */
    z-index: 9999;
    animation: fadeIn 0.3s;
}

.subnav .subnav-list {
    list-style-type: none;
    width: 100%;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.05);
}

.subnav .subnav-item {
    padding: 10px 30px;
}

.subnav .subnav-item:hover {
    background-color: #212121;
}

.subnav-item a {
    text-decoration: none;
    color: #212121;
}

.subnav-item:hover a {
    color: #ededed;
}

.header_actions {
    display: flex;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    color: #231f20;
    text-align: left;
}

.header_actions_search-field {
    position: relative;
}

.header_actions_search-icon {
    position: absolute;
    top: 13px;
    left: 10px;
    width: unset;
    height: unset;
    z-index: 10;
    text-decoration: none;
}

.header_actions_search-icon i,
.header_actions_button i {
    font-size: 1.4rem;
    vertical-align: middle;
}

.header_actions_search-icon i {
    color: #000;
}

.header_actions_search-icon i:hover,
.header_actions_button i:hover {
    opacity: 0.6;
}

.header_actions_search-control {
    border: 0;
    background-color: #e8e8e8;
    box-shadow: none;
    height: 50px;
    padding: 0 20px 0 40px;
    border-radius: 33px;
}

.header_actions_button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
}

.header_actions_button i {
    color: #fff;
}

.cart-count {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    position: absolute;
    right: 4px;
    top: 4px;
    width: 15px;
    height: 15px;
    background-color: red;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    pointer-events: none;
}

input {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
}

.dropdown-item {
    font-size: 14px;
    font-weight: 500;
}

.dropdown-item:focus,
.dropdown-item:hover {
    color: white;
    background-color: black;
    font-weight: 500;
    transition: all 0.1s;
}
</style>
