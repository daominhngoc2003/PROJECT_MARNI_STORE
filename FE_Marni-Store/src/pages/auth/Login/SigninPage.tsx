import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
// import { Spin } from "antd";
import { useLoginMutation } from "../../../api/auth";
import { ISignin } from "../../../interface/auth";
import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import VerifyEmail from "../Register/VerifyEmail";

import io from "socket.io-client"
const socket = io("http://localhost:8080", { transports: ["websocket"] });
import { toast } from "react-toastify";
import { getDecodedAccessToken } from "../../../decoder";
// import Cookies from 'universal-cookie';
const SigninPage = () => {
    const navigate = useNavigate();
    const [Login] = useLoginMutation();
    const [spinning, setSpinning] = useState<boolean>(false);
    const [email, setEmail] = useState('');
    const [open, setOpen] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ISignin>();

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        socket.on("new_user_login", (data: any) => {
            console.log("end here");
            toast.success(data.message)

        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const validateEmail = (value: string) => {
        // Điều kiện kiểm tra email ở đây
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(value)) {
            return "Email không hợp lệ";
        }
        return true;
    };

    const onHandleSubmit = async (value: ISignin) => {
        setSpinning(true); // Bắt đầu hiển thị trạng thái isLoading
        try {
            const data: any = await Login(value).unwrap();
            if (data.success === true) {
                await localStorage.setItem("accessToken", JSON.stringify(data?.accessToken));
                const token: any = getDecodedAccessToken();

                // const cookies = new Cookies();
                // const refreshToken = cookies.get('refreshToken');

                await socket.emit("new_user_login", {
                    message: data.message,
                    token,
                });
                navigate("/");
            } else if (data.success === 1) {
                setEmail(value?.user_email);
                Swal.fire({
                    title: "Tài khoản chưa được kích hoạt",
                    text: `${data.message}`,
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Đồng ý!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        setOpen(true)
                    }
                });
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
            setSpinning(false); // Dừng hiển thị trạng thái isLoading
        }
    };
    return (
        <div className="md:bg-[url('https://bizweb.dktcdn.net/100/438/408/themes/915505/assets/bg_login.jpg?1690016531690')] md:py-12">

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
            <form action="" className="md:w-[600px] px-5 mx-auto py-10 md:px-[100px] bg-white" onSubmit={handleSubmit(onHandleSubmit)}>
                <p className="text-center mb-10">Chào mừng bạn đến với Yody!</p>
                <h1 className="text-center font-bold text-[30px]">ĐĂNG NHẬP</h1>
                <div className="text-[16px] mt-5">
                    <div>
                        <input
                            type=""
                            {...register("user_email", {
                                required: "Email không được bỏ trống ",
                                // pattern: {
                                //     value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                //     message: "Email Không đúng định rạng"
                                // }
                                validate: validateEmail
                            })}
                            placeholder="Địa chỉ Email"
                            className="w-full border outline-none rounded-sm px-5 py-2 mb-5 focus:duration-300 focus:border-b-secondary" />
                        <div className="text-red-500">{errors?.user_email && errors?.user_email.message}</div>
                    </div>
                    <div>
                        <div className="relative flex ">
                            <input
                                id="pwd"
                                {...register("user_password", { required: "Password không được bỏ trống ", minLength: { value: 6, message: "Tối thiểu 6 kí tự " } })}
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Mật khẩu"
                                className="w-full border outline-none rounded-sm px-5 py-2 mb-5 focus:duration-300 focus:border-b-secondary" />
                            <span
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 end-0 grid place-content-center px-4 pb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-9 w-5 text-gray-400 cursor-pointer hover:text-yellow-300 duration-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    id="chk"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={3}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span>
                        </div>
                        <div className="text-red-500">{errors?.user_password && errors?.user_password.message}</div>
                    </div>
                    <div className="text-center">
                        <button className="text-center w-full bg-[#ffb801] hover:bg-yellow-500 transition-all  duration-300 text-white py-2 rounded-sm mb-5">Đăng nhập</button>
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
                            Bạn đã có tài khoản? <Link to="/signup" className="text-[#ffb801] hover:text-yellow-500 transition-all"> Đăng ký ngay!</Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SigninPage