import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useState } from "react";
import { ISignup } from "../../../interface/auth";
import { useRegisterMutation } from "../../../api/auth";
import Swal from "sweetalert2";
import VerifyEmail from "./VerifyEmail";
import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
const SignupPage = () => {
    // const { register, handleSubmit, formState: { errors }, watch } = useForm<ISignup>();
    // const navigate = useNavigate()
    // const onHandleSubmit = async (value: any) => {
    //     try {
    //         navigate('/signin');
    //     } catch (error: any) {
    //         console.log(error.respones.data.message);

    //     }
    // }
    const checkPasswordMatch = (value: any) => {
        const password = watch("user_password")?.trim();
        const confirmPassword = value?.trim();

        if (password !== confirmPassword) {
            return "Mật khẩu không trùng khớp";
        }
        return true;
    };

    const [spinning, setSpinning] = useState<boolean>(false);
    const [email, setEmail] = useState('');
    const [open, setOpen] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<ISignup>();

    const [Register] = useRegisterMutation();

    // validate email
    const validateEmail = (value: string) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(value)) {
            return "Email không hợp lệ";
        }
        return true;
    };

    const onHandleSubmit = async (value: ISignup) => {
        setSpinning(true);
        try {
            const data: any = await Register(value).unwrap();
            console.log(data);

            if (data.success === true) {
                setEmail(value?.user_email);
                setOpen(true)
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: `${data.message}`,
                    showConfirmButton: false,
                    timer: 2000
                })
                return;
            } else {
                Swal.fire({
                    title: 'Opps!',
                    text: `${data.message}`,
                    icon: 'error',
                    confirmButtonText: 'Quay lại'
                })
            }
        } catch (error: any) {
            console.log(error);

            Swal.fire({
                title: 'Opps!',
                text: `${error?.data?.message}`,
                icon: 'error',
                confirmButtonText: 'Quay lại'
            })
        } finally {
            setSpinning(false);
        }
    };

    return (
        <div className="md:bg-[url('https://bizweb.dktcdn.net/100/438/408/themes/915505/assets/bg_login.jpg?1690016531690')] py-12">
            {spinning && (
                <div className="fixed inset-0 z-50 bg-black opacity-50"></div>
            )}

            {/* Spin component */}
            {spinning && (
                <div className="fixed z-50 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
                </div>
            )}
            <VerifyEmail setOpen={setOpen} open={open} email={email} />
            <form action="" className="md:w-[600px] mx-auto py-10 px-4 md:px-[100px] bg-white" onSubmit={handleSubmit(onHandleSubmit)}>
                <p className="text-center mb-10">Chào mừng bạn đến với Yody!</p>
                <h1 className="text-center font-bold text-[30px]">ĐĂNG KÝ</h1>
                <div className="text-[16px] mt-5">
                    <div>
                        <input
                            type="text"
                            {...register("user_fullname", { required: "Tên không được bỏ trống ", minLength: { value: 2, message: "Tối thiểu 2 kí tự" } })}
                            placeholder="Họ và tên"
                            className="w-full border outline-none rounded-sm px-5 py-2 mb-5 focus: duration-300 focus:border-b-secondary" />
                        <div className="text-red-500">{errors?.user_fullname && errors?.user_fullname.message}</div>
                    </div>
                    <div>
                        <input
                            type="text"
                            {...register("user_username", { required: "Tên đăng nhập không được bỏ trống ", minLength: { value: 2, message: "Tối thiểu 2 kí tự" } })}
                            placeholder="Tên đăng nhập"
                            className="w-full border outline-none rounded-sm px-5 py-2 mb-5 focus: duration-300 focus:border-b-secondary" />
                        <div className="text-red-500">{errors?.user_username && errors?.user_username.message}</div>
                    </div>
                    {/* <div>
                        <input
                            type="text"
                            {...register("user_phone", {
                                required: "Số điện thoại không được bỏ trống ",
                                pattern: {
                                    value: /^[0-9]{10}$/, // 10 digits only
                                    message: "Số điện thoại không hợp lệ"
                                }
                            })}
                            placeholder="Số điện thoại"
                            className="w-full border outline-none rounded-sm px-5 py-2 mb-5 focus: duration-300 focus:border-b-secondary" />
                        <div className="text-red-500">{errors?.user_phone && errors?.user_phone.message}</div>
                    </div> */}
                    <div>
                        <input
                            type="text"
                            {...register("user_email", {
                                required: "Email không được bỏ trống ",
                                // pattern: {
                                //     value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                //     message: "Email Không đúng định rạng"
                                // }
                                validate: validateEmail
                            })}
                            placeholder="Địa chỉ Email"
                            className="w-full border outline-none rounded-sm px-5 py-2 mb-5 focus: duration-300 focus:border-b-secondary" />
                        <div className="text-red-500">{errors?.user_email && errors?.user_email.message}</div>
                    </div>
                    <div>
                        <input
                            {...register("user_password", { required: "Password không được bỏ trống ", minLength: { value: 6, message: "Tối thiểu 6 kí tự " } })}
                            type="password"
                            placeholder="Mật khẩu"
                            className="w-full border outline-none rounded-sm px-5 py-2 mb-5 focus:duration-300 focus:border-b-secondary" />
                        <div className="text-red-500">{errors?.user_password && errors?.user_password.message}</div>
                    </div>
                    <div>
                        <input
                            {...register("user_confirmPassword", {
                                required: "Xác nhận mật khẩu không được bỏ trống",
                                validate: checkPasswordMatch, // Corrected: Remove the `value` parameter here
                            })}
                            type="password"
                            placeholder="Xác nhận mật khẩu"
                            className="w-full border outline-none rounded-sm px-5 py-2 mb-5 focus:duration-300 focus:border-b-secondary"
                        />
                        <div className="text-red-500">{errors?.user_confirmPassword && errors.user_confirmPassword.message}</div>

                    </div>
                    <div className="text-center">
                        <button className="text-center w-full bg-[#ffb801] hover:bg-yellow-500 transition-all  duration-300 text-white py-2 rounded-sm mb-5">Đăng ký</button>
                    </div>
                    <div className="text-center">
                        <Link
                            to="#"
                            className="text-[#ffb801] hover:text-yellow-500 transition-all">Quên mật khẩu</Link>
                        <p className="mt-5 text-[17px] text-gray-700">Hoặc đăng nhập bằng</p>
                        <div className="flex items-center justify-center space-x-5 mt-5 mb-[80px]">
                            <Link
                                to=""
                                className="flex items-center space-x-2 border px-3 py-2 rounded-full">
                                <i className="fa-brands fa-google fa-bounce"></i>
                                <p>Google</p>
                            </Link>
                            <Link
                                to=""
                                className="flex items-center space-x-2 border px-3 py-2 rounded-full">
                                <i className="fa-brands fa-facebook fa-bounce"></i>
                                <p>Facebook</p>
                            </Link>
                        </div>
                        <div>
                            Bạn đã có tài khoản? <Link to="/signin" className="text-[#ffb801] hover:text-yellow-500 transition-all"> Đăng nhập ngay!</Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignupPage