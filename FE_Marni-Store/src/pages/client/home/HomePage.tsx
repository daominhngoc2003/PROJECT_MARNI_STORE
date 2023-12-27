

import GroupBanner from "./components/groupBanner";
import CategoryFeature from "./components/CategoryFeature";
import Contact from "./components/Contact";
import GroupProductNew from "./components/group-product-new";
const HomePage = () => {
    return (
        <>
            <main className="body">
                <GroupBanner />
                {/* danh mục */}
                {/* <section className="h-[300px] md:h-[700px] bg-white mb-10 z-[100px]">
                    <div className="grid grid-cols-1 pt-8 md:pt-[100px] gap-4 lg:grid-cols-4 lg:gap-8 md:w-[1200px] mx-auto mb-5 md:mb-10">
                        <div className="rounded-lg bg-gray-100 md:block hidden">
                            <div className="flex h-32 flex-col justify-between border-e bg-white">
                                <div className="px-4 md:py-6">
                                    <ul className="mt-6 space-y-1">
                                        <li>
                                            <Link
                                                to="#"
                                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                            >
                                                Phụ nữ
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                            >
                                                Nam
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="md:h-32  rounded-lg  lg:col-span-3 px-2" >
                            <div className="md:flex justify-between items-center ">
                                <div></div>
                                <h1 className="md:text-[50px] font-medium pb-3 md:pb-10 text-black">Top danh mục</h1>
                            </div>
                            <div className="grid grid-cols-3 gap-3 md:grid-cols-3 lg:gap-8">
                                <div className="h-32 rounded-lg lg:gap-8">
                                    <div className="category-image overflow-hidden">
                                        <img className="hover:scale-[1.15] animation-all w-full duration-[300ms] cursor-pointer" src="https://bizweb.dktcdn.net/100/376/737/themes/894814/assets/banner_col_1.jpg?1676271560514" alt="" />
                                    </div>
                                    <div className="category-content">
                                        <Link to="#">
                                            <h1 className="font-medium duration-150 animation hover:text-red-500 text-black  text-[14px] md:text-[18px] text-center py-5 hover"># Quần áo</h1>
                                        </Link>
                                    </div>
                                </div>
                                <div className="h-32 rounded-lg lg:gap-8">
                                    <div className="category-image overflow-hidden">
                                        <img className="hover:scale-[1.15] animation-all w-full duration-[300ms] cursor-pointer" src="https://bizweb.dktcdn.net/100/376/737/themes/894814/assets/banner_col_2.jpg?1676271560514" alt="" />
                                    </div>
                                    <div className="category-content">
                                        <Link to="#">
                                            <h1 className="font-medium duration-150 animation hover:text-red-500 text-black  text-[14px] md:text-[18px] text-center py-5 hover"># Trang sức</h1>
                                        </Link>
                                    </div>
                                </div>
                                <div className="h-32 rounded-lg lg:gap-8">
                                    <div className="category-image overflow-hidden">
                                        <img className="hover:scale-[1.15] animation-all w-full duration-[300ms] cursor-pointer" src="https://bizweb.dktcdn.net/100/376/737/themes/894814/assets/banner_col_3.jpg?1676271560514" alt="" />
                                    </div>
                                    <div className="category-content">
                                        <Link to="#">
                                            <h1 className="font-medium duration-150 animation hover:text-red-500 text-black text-[14px] md:text-[18px] text-center py-5 hover"># Giày dép</h1>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* icon */}
                <CategoryFeature />

                {/*  sản phẩm theo danh mục */}
                {/* <section className=" grid-cols-2 md:grid-cols-4 mb-10 md:w-[1200px] mx-auto product-male page-container">
                    <ProductListCategory categoryId="64bbad761bf229520476dbfc" />

                </section>
                <section className=" grid-cols-2 md:grid-cols-4 mb-10 md:w-[1200px] mx-auto product-male page-container">
                    <ProductListCategory categoryId="64bbada61bf229520476dbff" />
                </section> */}

                {/* <ProductFeature /> */}
                <section className="max-w-[1200px] mx-auto">
                    <GroupProductNew />
                </section>
                <Contact />
            </main>
        </>
    );
};

export default HomePage;
