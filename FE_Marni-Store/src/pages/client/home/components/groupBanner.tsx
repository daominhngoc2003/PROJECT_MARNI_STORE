
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 } from "uuid";
import SliderHomePage from "../../../../components/slider/SliderHomePage";

const GroupBanner = () => {
    return (
        <section className=" slider-home z-10  page-container">
            <Swiper
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                grabCursor={true}
                slidesPerView={"auto"}
                className="mySwiper"
            >
                {new Array(10).fill(0).map(() => (
                    <SwiperSlide key={v4()}>
                        <SliderHomePage key={v4()}></SliderHomePage>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default GroupBanner;
