

const Dashboard = () => {


    return (
        <div>
            <h1 className="text-center text-[24px] mb-5 font-bold">Trang quản trị</h1>
            <div className="grid grid-cols-4 gap-4">
                <div className="bg-blue-900 py-8 rounded-md hover:shadow-lg  hover:shadow-gray-400 transition-all duration-200">
                    <div className="text-white text-center uppercase">Tổng sản phẩm</div>
                </div>
                <div className="bg-yellow-600 py-8 rounded-md hover:shadow-lg  hover:shadow-gray-400 transition-all duration-200">
                    <div className="text-white text-center uppercase">Số tài khoản</div>
                </div>
                <div className="bg-green-900 py-8 rounded-md hover:shadow-lg  hover:shadow-gray-400 transition-all duration-200">
                    <div className="text-white text-center uppercase">Tổng tiền thu</div>
                    <p className="text-white text-center">1</p>
                </div>
                <div className="bg-red-900 py-8 rounded-md hover:shadow-lg  hover:shadow-gray-400 transition-all duration-200">
                    <div className="text-white text-center uppercase">Tổng sản phẩm</div>
                    <p className="text-white text-center">1</p>
                </div>
            </div>
            <div>
                <canvas id="myChart" />
            </div>
        </div>
    )
}

export default Dashboard