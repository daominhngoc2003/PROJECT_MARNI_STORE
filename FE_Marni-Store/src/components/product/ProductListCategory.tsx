// import React, { useEffect, useState } from "react";
// import { Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { v4 as uuidv4 } from "uuid";
// import { ICategory } from "../../interface/Category";
// import ProductItem from "./ProductItem";
// import { GetProductByCategory } from "../../api/category";
// import { useAppDispatch, useAppSelector } from "../../store/hook";
// import { getAllCategory } from "../../actions/category";
// import { Skeleton } from "antd";

// type ProductListCategory = {
//   categoryId: string
// };

// const ProductListCategory: React.FC<ProductListCategory> = ({
//   categoryId
// }) => {
//   const [categoryProducts, setCategoryProducts] = useState([]);
//   const { categories: categories, isLoading } = useAppSelector((state) => state.categories)
//   const dispatch = useAppDispatch();
//   // const [categories, setCategories] = useState<ICategory[]>([]);
//   const [categoryName, setCategoryName] = useState('');

//   useEffect(() => {
//     fetchCategoryProducts();
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       dispatch(getAllCategory());
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchCategoryName();
//   }, [categoryId, categories]);

//   const fetchCategoryName = async () => {
//     const category = categories?.docs?.find((category: ICategory) => category._id === categoryId);
//     if (category) {
//       setCategoryName(category.category_name);
//     }
//   };

//   const fetchCategoryProducts = async () => {
//     try {
//       const response = await GetProductByCategory(categoryId);
//       setCategoryProducts(response.data.products);
//       // setCategories(response.data.categoryName);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   // if (isLoading) return <div>Laoding</div>
//   return (
//     <div>
//       <h2 className="mb-5 text-[20px] px-2 md:px-0 md:text-[40px] font-medium text-black">{categoryName}</h2>
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
//         {categoryProducts.map((product) => (
//           <SwiperSlide key={uuidv4()}>
//             {isLoading ? (<Skeleton active paragraph={{ rows: 6 }} />) : (
//               <ProductItem item={product} />
//             )}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );

// };

// export default ProductListCategory;
