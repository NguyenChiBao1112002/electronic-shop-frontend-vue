<template>
    <div class="max-md:gap-3 max-md:flex-col min-h-screen h-screen flex">
        <div class="max-md:h-[250px] lg:flex-auto bg-slate-300 flex items-center px-10">
            <img class="w-full h-full object-cover opacity-[35%]" src="@/assets/img_employee_login.jpg" alt="" />
        </div>
        <div class="max-md:w-full w-[65%] flex justify-start justify-center">
            <div class="max-md:w-full w-[80%] flex flex-col items-center justify-center h-full px-10">
                <div class="w-full flex flex-col items-center justify-center">
                    <p class="text-3xl font-bold">Đăng nhập cho Nhân Viên</p>
                    <p class="text-base font-medium mt-2">Đăng nhập vào tài khoản của bạn!</p>
                </div>
                <div class="w-full flex flex-col items-center justify-center mt-10">
                    <div class="w-full">
                        <AInput name="username" label="Tên đăng nhập"
                            style-custom="border-[#AFA2C3] py-3 p-2 border-[1px] border-[#3E334E] cursor-text" is-required
                            placeholder=" Tên đăng nhập..." />
                    </div>
                    <div class="w-full mt-3">
                        <AInput name="password" label="Mật khẩu"
                            style-custom="border-[#AFA2C3] py-3 p-2 border-[1px] border-[#3E334E] cursor-text" is-required
                            placeholder=" Nhập mật khẩu..." type="password" />
                    </div>
                    <div class="w-1/2 flex gap-3 mt-5">
                        <button class="bg-[#3E334E] text-white flex-[1] w-1/2 py-3 font-bold rounded-lg" @click="onLogin">
                            <!-- <button class="bg-[#3E334E] text-white flex-[1] w-full py-3 font-bold rounded-lg" @click=""> -->
                            Đăng nhập
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import { useForm } from 'vee-validate'
import * as yup from 'yup'
// import { useRouter } from 'vue-router'
// import { initAuthStore } from '@/stores'
// import { loginApi } from '@/services/auth.service'
import AInput from '@/components/AInput.vue'
//  import { toast } from 'vue3-toastify'
//  const router = useRouter()

// const submit = async (val) => {
//   console.log(val)
//   const { email, password } = val
//   try {
//     await loginApi({ email, password }).then((res) => {
//       const data = res['data']
//       console.log(data)
//       localStorage.setItem('access_token', data.token.accessToken)
//       localStorage.setItem('refresh_token', data.token.refreshToken)
//     })
//     await initAuthStore()
//     const redirect = localStorage.getItem('redirect')
//     if (redirect) {
//       router.push(redirect)
//     } else {
//       router.push('/')
//       localStorage.removeItem('redirect')
//     }
//   } catch (error) {
//     console.log(error)
//     toast.error('Login failed, please check your login information')
//   }
// }


// validate password have min 8, have number vs uppercase
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

  