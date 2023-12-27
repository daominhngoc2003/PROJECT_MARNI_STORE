import { Link } from "react-router-dom"

const AboutPage = () => {
    return (
        <div>
            <section>
                <div className="mx-auto mb-[100px] md:mb-[300px] max-w-[1280px] px-4 md:py-8 my-10 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1  lg:grid-cols-2">
                        <div className="relative z-10 lg:py-16">
                            <div className="relative h-64 sm:h-80 lg:h-full">
                                <img
                                    alt="House"
                                    src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="relative flex items-center bg-gray-100">
                            <span
                                className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                            ></span>

                            <div className="p-8 sm:p-16 lg:p-24">
                                <h2 className="text-2xl font-bold sm:text-3xl">
                                    Về chúng tôi
                                </h2>

                                <p className="mt-4 text-gray-600">
                                    Cửa hàng đầu tiên được thành lập vào năm 1999 tại Heilbronn, Đức, vẫn là trụ sở chính cho các chi nhánh của nó. Trong suốt tám năm kinh nghiệm thành công trong lĩnh vực trang sức phát triển cao, công ty đã trải qua những thay đổi kinh doanh lớn để phát triển việc cung cấp và mở rộng cơ sở khách hàng của mình. Việc phát triển từ một thợ kim hoàn nhỏ thành một trong những nhân vật quan trọng trong lĩnh vực trang sức châu Âu, tên thương mại Marni Store được thành lập vào năm 2011. Cuối năm 2011, Marni Store đã đạt được tiến bộ tuyệt vời tại thị trường Anh và Tây Ban Nha bên cạnh Đức.

                                    Năm 2012, Marni Store bắt đầu thiết kế và phát triển các sản phẩm của riêng mình. Sự thay đổi chiến lược này tạo cơ hội tích cực tham gia vào đấu trường quốc tế. Cũng trong năm đó, Marni Store bắt đầu giao dịch ở Áo và Thụy Sĩ. Năm 2013, công ty tiếp tục thành công thâm nhập thị trường quốc tế hơn nữa bằng cách thêm Phần Lan, Ý, Đan Mạch, Thụy Điển và Pháp vào danh mục đầu tư ngày càng tăng của mình. Được thúc đẩy bởi sự tăng trưởng này, Marni Store đã ra mắt các cơ sở sản xuất của riêng mình tại Đức.

                                    Trong suốt năm 2014, Marni Store đã củng cố cấu trúc công ty cho phép doanh nghiệp thâm nhập vào các thị trường Tây Âu và đã nhanh chóng phát triển tại các thị trường trọng điểm của Châu Âu. Năm 2016, Marni Store tiếp tục mở rộng kinh doanh tại các thị trường Đông Âu và Viễn Đông ngoài Hoa Kỳ, Thái Bình Dương và Nam Mỹ.

                                    Năm 2019, Marni Store hiện là nhà kim hoàn tiên phong cung cấp cho hơn 60 quốc gia có văn phòng tại 6 quốc gia - Đức, Thụy Sĩ, Mỹ, Úc, Bulgaria và Thổ Nhĩ Kỳ.

                                    Chúng tôi với tư cách là Glamira làm việc không mệt mỏi để đáp ứng nhu cầu của khách hàng một cách chuyên nghiệp và hiệu quả - phù hợp với các giá trị của công ty về sự liêm chính và tin cậy. Marni Store đã phát triển cơ sở hạ tầng Thương mại điện tử đẳng cấp thế giới để tạo điều kiện thuận lợi cho nhu cầu của người tiêu dùng toàn cầu hiện nay với việc cung cấp dịch vụ nhanh chóng và chất lượng cao cho người dùng bằng cách sử dụng công nghệ mới nhất.
                                </p>

                                <Link to=''
                                    className="mt-8  inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                                >
                                    Bắt đầu
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage