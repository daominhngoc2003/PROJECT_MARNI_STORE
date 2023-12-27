import { Link } from "react-router-dom"

const ContactPage = () => {
    return (
        <div>
            <div className="md:max-w-[1200px] px-5 md:px-0 mx-auto my-20">
                <section className="banner-section mb-4">
                    <div className="banner-wrapper">
                        <h1 className="text-center font-bold text-[30px]">LIÊN HỆ</h1>
                        <div className="banner-content text-center">
                            <Link to="">TRANG CHỦ</Link>/
                            <a>LIÊN HỆ</a>
                        </div>
                    </div>
                </section>
                {/* <!-- CONTACT --> */}
                <section className="contact-section-main">
                    <div className="contact-wrapper-main md:flex gap-10">
                        {/* <!-- MAP --> */}
                        <div>
                            <iframe
                                className="md:w-[600px] w-full md:h-[400px] "
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.737561142996!2d105.7460974785345!3d21.04318433061325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454ec5ee656af%3A0x53d490c3dd6c965c!2zMyBQLiBQaMO6IEtp4buBdSwgUGjDumMgRGnhu4VuLCBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1686425902162!5m2!1svi!2s"
                                style={{ border: 0 }} allowFullScreen
                                loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* <!-- CONTACT DETAIL --> */}
                        <div className="contact-detail">
                            <div className="col md:flex gap-5  md:mt-0 mt-6 mb-5 md:mb-0">
                                <div className="contact-logo md:block hidden max-w-[100px] md:max-w-[200px]">
                                    <img
                                        src="http://mauweb.monamedia.net/cleverfood/wp-content/uploads/2018/04/logo-mona.png"
                                        alt="" />
                                </div>
                                <div className="contact-content">
                                    <div className="contact-address flex gap-2 items-center text-[15px]"><i className="fa-solid fa-location-dot"></i>Ngõ 3 Phú Kiều , Phường
                                        Phúc
                                        Diễn, Quận Bắc Từ Liêm, Hà Nội</div>
                                    <div className="contact-phone flex gap-2 items-center text-[15px]"><i className="fa-solid fa-phone"></i><Link to="">0869827432</Link></div>
                                    <div className="contact-email flex gap-2 items-center text-[15px]"><i className="fa-solid fa-envelopes-bulk"></i>
                                        <Link to="">ngocdm22052003@gmail.com</Link>
                                    </div>
                                    <div className="contact-facebook flex gap-2 items-center text-[15px]"><i className="fa-brands fa-facebook"></i><Link to="">Đào Minh
                                        Ngọc</Link></div>
                                </div>
                            </div>
                            <div className="contact-title">
                                <h1 className="text-center font-bold mb-5 mt-4 text-[23px]">LIÊN HỆ VỚI CHÚNG TÔI</h1>
                            </div>
                            <div>
                                <form action="" className="form-contact">
                                    <div className="contact-grid grid grid-cols-2 gap-2">
                                        <input type="text" placeholder="Họ và tên" className="w-full border px-2 rounded-sm outline-none animation-all focus:border-b-green-400 py-2" />
                                        <input type="text" placeholder="Email" className="w-full border px-2 rounded-sm outline-none animation-all focus:border-b-green-400 py-2" />
                                        <input type="text" placeholder="Số điện thoại" className="w-full border px-2 rounded-sm outline-none animation-all focus:border-b-green-400 py-2" />
                                        <input type="text" placeholder="Địa chỉ" className="w-full border px-2 rounded-sm outline-none animation-all focus:border-b-green-400 py-2" />
                                        <textarea name="" placeholder="Lời nhắn" id="" className="w-full border px-2 rounded-sm outline-none animation-all focus:border-b-green-400 py-2 col-span-2"></textarea>
                                    </div>
                                    <div className="btn-submit text-center">
                                        <button type="submit" className="bg-gray-700 text-white px-6 py-2 mt-4 hover:bg-gray-900 duration-300 animation-all rounded-sm">GỬI</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-50">
                    <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                        <div className="mx-auto max-w-lg text-center">
                            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                                Đăng ký để nhận cập nhật
                            </h2>

                            <p className="hidden text-gray-500 sm:mt-4 sm:block">
                                Để lại email để không bỏ lỡ bất kì ưu đãi nào
                            </p>
                        </div>

                        <div className="mx-auto mt-8 max-w-xl">
                            <form action="#" className="sm:flex sm:gap-4">
                                <div className="sm:flex-1">
                                    <label htmlFor="email" className="sr-only">Email</label>

                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                                >
                                    <span className="text-sm font-medium"> ĐĂNG KÝ </span>

                                    <svg
                                        className="h-5 w-5 rtl:rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ContactPage