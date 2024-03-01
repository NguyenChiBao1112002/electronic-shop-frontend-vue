<template>
    <div class="account-content my-50">
        <div id="info-tab" class="account-info">
            <h2 class="account-page-title">
                Thông tin tài khoản
            </h2>
            <div>
                <div class="account-info-form">
                    <div class="account-info-field">
                        <div class="account-info-label">
                            Họ và tên
                        </div>
                        <div class="account-info-value">
                            Nguyễn Ngọc Lam Thanh
                        </div>
                    </div>
                    <div class="account-info-field">
                        <div class="account-info-label">
                            Số điện thoại
                        </div>
                        <div class="account-info-value">
                            <span style="opacity: 0.6; font-size: 0.85em;">
                                <i>Chưa cập nhật!</i>
                            </span>
                        </div>
                    </div>
                    <div class="account-info-field">
                        <div class="account-info-label">
                            Giới tính
                        </div>
                        <div class="account-info-value">

                            <span style="opacity: 0.6; font-size: 0.85em;"><i>Chưa cập
                                    nhật!</i></span>
                        </div>
                    </div>
                    <div class="account-info-field" style="position: relative;">
                        <div class="account-info-label">
                            Ngày sinh <i class="bday-note">(ngày/tháng/năm)</i>
                        </div> 
                    </div>
                    <div class="account-info-field">
                        <div class="account-info-label">
                            Chiều cao
                        </div>
                        <div class="account-info-value">
                            <span
                                style="opacity: 0.6; 
                                font-size: 0.85em;">
                                <i>Chưa cập nhật!</i>
                            </span>
                        </div>
                    </div>
                    <div class="account-info-field">
                        <div class="account-info-label">
                        Cân nặng
                    </div>
                    <div class="account-info-value">
                        <span
                            style="opacity: 0.6; 
                            font-size: 0.85em;">
                            <i>Chưa cập nhật!</i>
                        </span>
                    </div>
                    </div>
                    <div class="account-info-field">
                        <button class="btn account-info-btn">
                            Cập nhật
                        </button>
                    </div>
                </div>
                <h3 class="account-page-title">
                    Thông tin đăng nhập
                </h3>
                <div class="account-info-field">
                    <div class="account-info-label">
                        Email
                    </div>
                    <div class="account-info-value">
                        lamthanh02@gmail.com
                    </div>
                </div>
                <div class="account-info-field">
                    <div class="account-info-label">
                        Mật khẩu
                    </div>
                    <div class="account-info-value">
                        **********************
                    </div>
                </div>
                <div class="account-info-field">
                    <button
                        class="btn account-info-btn">
                        Cập nhật
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.account-content {
    position: relative;
    display: flex;
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
    margin-bottom: 25px;
    font-size: 2.5rem;
}

.account-info-field {
    display: flex;
    align-items: center;
    font-size: 18px;
    margin-bottom: 1.5rem;
}

.account-info-label {
    width: 300px;
    max-width: 50%;
    font-size: 18px;
    color: rgba(0,0,0,.5333333333);
}

.account-info-value {
    text-wrap: wrap;
}

.account-info-btn {
    height: 50px;
    border: 1px solid #000;
    background-color: #fff;
    border-radius: 100vmax;
    color: #000;
    text-transform: uppercase;
    font-weight: 700;
    padding: 0px 30px;
}

.account-info-btn:hover {
    background-color: #000;
    border: 1px solid #000;
    color: #fff;
    transition: 0.4s;
}

.bday-note {
    color: #999;
    font-size: 0.9rem;
}
</style>