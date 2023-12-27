
const CategoryFeature = () => {

    return (
        <section className="grid grid-cols-2 px-2 md:px-0 md:w-[1200px] mx-auto gap-4 lg:grid-cols-4 lg:gap-8 mb-5 md:mb-10">
            <div className="h-32 rounded-lg bg-gray-100 flex items-center gap-3 justify-center hover:shadow-md animation-all duration-300">
                <div>
                    <i className="fa-solid fa-rotate-right text-[20px] md:text-[36px] text-[#ed0202] hover:fa-spin"></i>
                </div>
                <div>
                    <h1 className="font-medium text-[16px] md:text-[18px] text-black">Đổi trả hàng</h1>
                    <p className=" text-black text-[10px] ">Trong vòng 24h</p>
                </div>
            </div>
            <div className="h-32 rounded-lg bg-gray-100 flex items-center gap-3 justify-center hover:shadow-md animation-all duration-300">
                <div>
                    <i className="fa-solid fa-truck-fast   text-[20px] md:text-[36px] text-[#ed0202] hover:fa-spin"></i>
                </div>
                <div>
                    <h1 className="font-medium text-[16px] md:text-[18px] text-black">Miễn phí giao hàng</h1>
                    <p className=" text-black text-[10px] ">Với đơn hàng {">"} 500k</p>
                </div>
            </div>
            <div className="h-32 rounded-lg bg-gray-100 flex items-center gap-3 justify-center hover:shadow-md animation-all duration-300">
                <div>
                    <i className="fa-solid fa-phone   text-[20px] md:text-[36px] text-[#ed0202] hover:fa-spin"></i>
                </div>
                <div>
                    <h1 className="font-medium text-[16px] md:text-[18px] text-black">Hỗ trợ trực tuyến</h1>
                    <p className=" text-black text-[10px] ">1900 6750</p>
                </div>
            </div>
            <div className="h-32 rounded-lg bg-gray-100 flex items-center gap-3 justify-center hover:shadow-md animation-all duration-300">
                <div>
                    <i className="fa-solid fa-money-bill    text-[20px] md:text-[36px] text-[#ed0202]"></i>
                </div>
                <div>
                    <h1 className="font-medium text-[16px] md:text-[18px] text-black">Thanh toán</h1>
                    <p className=" text-black text-[10px] ">An toàn, Bảo mật</p>
                </div>
            </div>
        </section>
    );
};

export default CategoryFeature;
