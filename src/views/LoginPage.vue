<template>
  <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
  <div class="max-md:gap-3 max-md:flex-col min-h-screen h-screen flex">
    <div class="max-md:h-[250px] lg:flex-auto bg-[#191a24] flex items-center px-10">
      <img class="w-full h-full object-cover opacity-[35%]" src="../assets/img_login.jpg" alt="" />
    </div>
    <div class="max-md:w-full w-[55%] flex justify-start justify-center">
      <div class="max-md:w-full w-[80%] flex flex-col items-center justify-center h-full px-10">
        <div class="w-full flex flex-col items-center justify-center">
          <p class="text-3xl font-bold">Đăng nhập</p>
          <p class="text-base font-medium mt-2">Đăng nhập vào tài khoản của bạn!</p>
        </div>
        <div class="w-full flex flex-col items-center justify-center mt-10">
          <div class="w-full">
            <AInput name="username" label="Tên đăng nhập"
              style-custom="border-[#AFA2C3] py-3 p-2 border-[1px] border-[#3E334E] cursor-text" is-required
              placeholder=" Nhập tên đăng nhập..." />
          </div>
          <div class="w-full mt-2">
            <AInput name="password" label="Mật khẩu"
              style-custom="border-[#AFA2C3] py-3 p-2 border-[1px] border-[#3E334E] cursor-text" is-required
              placeholder=" Nhập mật khẩu..." type="password" />
          </div>

          <!-- forgot -->
          <div class="w-full flex justify-end mt-3">
            <RouterLink to="#" class="text-[#3E334E] text-sm font-medium">Quên mật khẩu?
            </RouterLink>
          </div>
          <div class="w-full flex gap-3 mt-3">
            <button class="bg-[#3E334E] text-white flex-[1] w-full py-3 font-bold rounded-lg" @click="onLogin">
              <!-- <button class="bg-[#3E334E] text-white flex-[1] w-full py-3 font-bold rounded-lg" @click=""> -->
              Đăng nhập
            </button>
            <RouterLink to="/register"
              class="block text-center border-[1px] border-[#3E334E] text-[#3E334E] flex-[1] w-full font-bold py-3 rounded-lg">
              Đăng ký
            </RouterLink>
          </div>

          <div class="w-full flex  justify-center gap-3 mt-4">HOẶC </div>

          <div class="w-full flex gap-3 mt-4">
            <div class="flex justify-center w-full">
              <button
                class="social-button flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-8 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="-0.5 0 48 48" version="1.1">
                  <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Color-" transform="translate(-401.000000, -860.000000)">
                      <g id="Google" transform="translate(401.000000, 860.000000)">
                        <path
                          d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                          id="Fill-1" fill="#FBBC05"> </path>
                        <path
                          d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                          id="Fill-2" fill="#EB4335"> </path>
                        <path
                          d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                          id="Fill-3" fill="#34A853"> </path>
                        <path
                          d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                          id="Fill-4" fill="#4285F4"> </path>
                      </g>
                    </g>
                  </g>
                </svg>
                <span>Đăng nhập với Google</span>
              </button>
            </div>
          </div>
          <div class="w-full flex gap-3 mt-3">
            <div class="flex justify-center w-full">
              <button
                class="social-button flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 48 48" version="1.1">
                  <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Color-" transform="translate(-200.000000, -160.000000)" fill="#4460A0">
                      <path
                        d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
                        id="Facebook">

                      </path>
                    </g>
                  </g>
                </svg>
                <span>Đăng nhập với Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.social-button:hover {
  background-color: #edf2f7 !important;
}
</style>

<script setup>
import { ref } from "vue"
import { useForm } from 'vee-validate'
import * as yup from 'yup'
// import { useRouter } from 'vue-router'
// import { initAuthStore } from '@/stores'
// import { loginApi } from '@/services/auth.service'
import AInput from '../components/AInput.vue'

// Validate password have min 8, have number vs uppercase
const { handleSubmit } = useForm({
  validationSchema: yup.object({
    username: yup.string().required("Tên đăng nhập là trường bắt buộc"),
    password: yup
      .string()
      .matches(/^(?=.*[A-Za-z])(?=.*\d).+$/, 'Mật khẩu phải chứa ít nhất 1 số và 1 chữ cái')
      .min(8, 'Mật khẩu ít nhất 8 ký tự')
      .max(20, 'Mật khẩu tối đa 20 ký tự')
      .required('Mật khẩu là trường bắt buộc'),
  }),
})

const onLogin = () => {
  handleSubmit(submit)()
}
</script>

