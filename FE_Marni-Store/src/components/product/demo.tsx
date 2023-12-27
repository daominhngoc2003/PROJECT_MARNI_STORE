// import { useEffect, useState } from "react";
// import { Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { v4 as uuidv4 } from "uuid";
// import ProductItem from "./ProductItem";
// import { useAppDispatch, useAppSelector } from "../../store/hook";

// const ProductListCategory = ({ categoryId }: any) => {



//   // const [cateName, setCategoryName] = useState('');
//   // useEffect(() => {
//   //   const category = categories?.docs?.find((category: ICategory) => category._id === categoryId);
//   //   if (category) {
//   //     setCategoryName(category.category_name);
//   //   }
//   // }, [categoryId, categories]);

//   return (
//     <div>
//       {/* <h2 className="mb-5 text-2xl font-bold">{cateName}</h2>
//       <Swiper
//         breakpoints={{
//           350: {
//             slidesPerView: 2,
//             slidesPerGroup: 2,
//           },
//           768: {
//             slidesPerView: 4,
//             slidesPerGroup: 4,
//           },
//           1023: {
//             slidesPerView: 5,
//             slidesPerGroup: 5,
//           },
//         }}
//         spaceBetween={10}
//         slidesPerGroup={5}
//         loop={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Navigation, Pagination]}
//         className="category_list"
//       >
//         {products?.map((product: IProduct) => (
//           <SwiperSlide key={uuidv4()}>
//             <ProductItem item={product} />
//           </SwiperSlide>
//         ))}
//       </Swiper> */}
//     </div>
//   );

// };

// export default ProductListCategory;
