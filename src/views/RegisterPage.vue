<template>
    <div class="max-md:gap-3 max-md:flex-col min-h-screen h-screen flex">
        <div class="max-md:h-[250px] lg:flex-auto bg-[#191a24] flex items-center px-10">
            <img class="w-full h-full object-cover opacity-[45%]" src="@/assets/img_register.jpg" alt="" />
        </div>
        <div class="max-md:w-full w-[65%] flex justify-start justify-center">
            <div class="max-md:w-full w-[80%] flex flex-col items-center justify-center h-full px-10">
                <div class="w-full flex flex-col items-center justify-center">
                    <p class="text-4xl font-bold">Đăng ký</p>
                    <p class="text-base font-medium mt-2">Hãy đăng ký và thoả thích mua sắm!</p>
                </div>
                <div class="w-full flex flex-col items-center justify-center mt-10">
                    <div class="w-full mt-5">
                        <AInput v-model="name" name="name" label="Tên đăng nhập"
                            style-custom="border-[#AFA2C3] py-3 p-2 border-[1px] border-[#3E334E] cursor-text" is-required
                            placeholder=" Nhập tên đăng nhập..." />
                    </div>
                    <div class="w-full mt-3">
                        <AInput v-model="password" name="password" label="Mật khẩu"
                            style-custom="border-[#AFA2C3] py-3 p-2 border-[1px] border-[#3E334E] cursor-text" is-required
                            placeholder=" Nhập mật khẩu..." type="password" />
                    </div>
                    <div class="w-full mt-3">
                        <AInput v-model="confirmPassword" name="confirmPassword" label="Xác nhận mật khẩu"
                            style-custom="border-[#AFA2C3] py-3 p-2 border-[1px] border-[#3E334E] cursor-text" is-required
                            placeholder=" Nhập lại mật khẩu xác nhận..." type="password" />
                    </div>
                    <div class="w-full flex gap-3 mt-5">
                        <button class="bg-[#3E334E] text-white flex-[1] w-full py-3 font-bold rounded-lg">
                            Đăng ký
                        </button>
                        <RouterLink to="/login"
                            class="block text-center border-[1px] border-[#3E334E] text-[#3E334E] flex-[1] w-full font-bold py-3 rounded-lg">
                            Đăng nhập
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { useRouter } from 'vue-router'
// import { registerApi } from '@/services/auth.service'
// import { toast } from 'vue3-toastify'
import AInput from '@/components/AInput.vue'
const router = useRouter()

const submit = async (val) => {
    const { email, password, name, confirmPassword } = val
    try {
        await registerApi({
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            name: name,
        }).then((res) => {
            console.log(res)
            toast.success('Register success!')
            router.push('/login')
        })
    } catch (error) {
        console.log(error)
        toast.error('Register failed!')
    }
}

const { handleSubmit } = useForm({
    validationSchema: yup.object({
        name: yup.string().required("Tên đăng nhập là trường bắt buộc"),
        password: yup
            .string()
            .matches(/^(?=.*[A-Za-z])(?=.*\d).+$/, 'Mật khẩu phải chứa ít nhất 1 số và 1 chữ cái')
            .min(8, 'Mật khẩu ít nhất 8 ký tự')
            .max(20, 'Mật khẩu tối đa 20 ký tự')
            .required('Mật khẩu là trường bắt buộc'),
        confirmPassword: yup
            .string()
            .required('Xác nhận mật khẩu là trường bắt buộc')
            .oneOf([yup.ref('password'), null], 'Mật khẩu không khớp'),
    }),
})

const onRegister = () => {
    handleSubmit(submit)()
}

</script>
  