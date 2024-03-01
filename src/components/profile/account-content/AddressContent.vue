<template>
    <div class="account-content my-50">
        <div class="account-address">
            <h2 class="account-page-title">
                Địa chỉ của tôi
            </h2>
            <button class="account-page-button">
                Thêm địa chỉ mới
            </button>
        </div>
        <div class="account-address-title">Sổ địa chỉ</div>
        <div class="account-address-content">
            <div class="account-address-item">
                <div class="account-address-content">
                    <div class="account-address-head">
                        Thanh Nguyễn
                        <span>Mặc định</span>
                    </div>
                    <div class="account-address-text">
                        0776537697<br>
                        233/46/1A1 Nguyễn Văn Cừ, An Hòa, Ninh Kiều, Cần Thơ, Quận Ninh Kiều, Cần Thơ
                    </div>
                </div>
                <div class="account-address-action">
                    <div class="account-address-buttons"><button>Cập nhật</button> <button>Xóa</button></div>
                </div>
            </div>
            <div class="account-address-item">
                <div class="account-address-content">
                    <div class="account-address-head">
                        Thanh Nguyễn
                    </div>
                    <div class="account-address-text">
                        0776537697<br>
                        233/46/1A1 Nguyễn Văn Cừ, An Hòa, Ninh Kiều, Cần Thơ, Quận Ninh Kiều, Cần Thơ
                    </div>
                </div>
                <div class="account-address-action">
                    <div class="account-address-buttons"><button>Cập nhật</button> <button>Xóa</button></div>
                    <button class="account-address-button">Đặt làm mặc định</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.account-content {
    position: relative;
    /* display: flex; */
    align-items: center;
    padding: 3rem 3rem;
    transition: all .2s;
    border-radius: 0.5rem;
    font-size: 1rem;
    box-sizing: border-box;
    background-color: white;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.account-page-title {
    font-size: 2.25em;
    font-weight: 400;
}

.account-address .account-page-title {
    margin-bottom: 0;
}

.account-address {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(0, 0, 0, .1333333333);
}

.account-page-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 54px;
    padding: 0 40px;
    border-radius: 100vmax;
    color: #fff;
    text-transform: uppercase;
    border: 0;
    background-color: #000;
    transition: all .3s;
    letter-spacing: .125rem;
    font-size: 1rem;
    cursor: pointer;
}

.account-page-button:hover {
    background-color: #2f5acf;
    color: #fff;
    border: 0;
}

.account-address-title {
    font-size: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.account-address-item {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid rgba(0,0,0,.1333333333);
}

.account-address-content {
    flex: 1;
}

.account-address-text {
    font-size: 1rem;
    color: rgba(0,0,0,.6);
}

.account-address-head {
    display: flex;
    align-items: center;
    font-size: 1rem;
    margin-bottom: 0.5rem;
}

.account-address-action {
    display: flex;
    flex-flow: column;
}

.account-address-buttons {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex: 1;
}

.account-address-buttons button {
    padding: 0;
    background-color: transparent;
    border: 0;
    color: #2f5acf;
}

.account-address-buttons button:hover {
    color: #000;
}

.account-address-buttons button:last-of-type {
    padding-left: 1rem;
    margin-left: 1rem;
    border-left: 1px solid rgba(0,0,0,.1333333333);
}

.account-address-button {
    display: flex;
    align-items: center;
    height: 34px;
    padding-left: 2rem;
    padding-right: 2rem;
    background-color: #fff;
    color: #000;
    border-radius: 100vmax;
    border: 1px solid #000;
    cursor: pointer;
    transition: all .3s;
}

.account-address-button:hover {
    background-color: #000;
    color: #fff;
}

.account-address-head span {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0,0,0,.1333333333);
    border-radius: 100vmax;
    padding: 4px 10px 5px;
    font-size: .75rem;
    margin-left: 0.5rem;
}

.account-address-head span:before {
    content: "";
    width: 0.625rem;
    height: 0.625rem;
    display: block;
    background-image: url(https://mcdn.coolmate.me/image/September2023/mceclip0_65.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
    margin-right: 0.25rem;
}

</style>