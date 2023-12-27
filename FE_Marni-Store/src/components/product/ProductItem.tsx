import { Link, useNavigate } from "react-router-dom";
import "./css/productItem.css";
import { useAddToFavoriteMutation, useGetFavoriteByUserQuery } from "../../api/favorite";
import { useMemo } from "react";
import { getDecodedAccessToken } from "../../decoder";
import { useGetUserByIdQuery } from "../../api/user";
import Swal from "sweetalert2";

import AddToCart from "./components/addToCart";
const ProductItem = ({ product }: any) => {
  const [addToFavorite] = useAddToFavoriteMutation();
  const navigate = useNavigate()

  // giải mã lấy ra user id
  const response: any = getDecodedAccessToken();
  const { data: userData } = useGetUserByIdQuery<any>(response?._id);
  const user = useMemo(() => userData?.user, [userData]);

  // Xử lý giá
  let priceProduct = product?.variant_products && product?.variant_products[0]?.variant_price;
  let discountProduct = product?.variant_products && product?.variant_products[0]?.variant_discount;
  let percentPrice;

  if (priceProduct !== undefined && discountProduct !== undefined && priceProduct !== 0) {
    percentPrice = ((priceProduct - discountProduct) / priceProduct) * 100;

    // Format the percentage with two decimal places
    percentPrice = percentPrice.toFixed(2);

    // Add commas as the thousands separator
    percentPrice = percentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const { data: FavoriteData } = useGetFavoriteByUserQuery<any>(user?._id);
  const productByFavorite = FavoriteData?.favorite.products
  const pro = productByFavorite?.some((item: any) => item._id === product._id);

  // Thêm sản phẩm yêu thích
  const onHandleSubmit = async (_id: string) => {
    const formData: any = {
      product_id: _id,
      user_id: user?._id
    }
    try {
      const favorite: any = await addToFavorite(formData).unwrap();
      if (favorite.success === true) {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: `${favorite.message}`,
          showConfirmButton: false,
          timer: 2000
        })
        return;
      } else {
        Swal.fire({
          position: 'top',
          title: 'Opps!',
          text: `${favorite.message}`,
          icon: 'error',
          confirmButtonText: 'Quay lại'
        })
      }
    } catch (error: any) {
      const loginResult = await Swal.fire({
        position: 'top',
        title: 'Opps!',
        text: `${error.data.message}`,
        icon: 'error',
        showCancelButton: true,
        confirmButtonText: 'Đăng nhập',
        cancelButtonText: 'Quay lại'
      });

      if (loginResult.isConfirmed) {
        navigate("/login");
      }
    }
  };


  return (
    <div className="flex group flex-col md:max-h-[500px] h-full p-3 overflow-hidden rounded-lg select-none movie-cart relative">
      <Link
        to={`/products/${product?._id}`}
        className="overflow-hidden rounded-md h-[250px]"
      >
        <span className="absolute z-10 bg-yellow-300 px-3">
          {product?.product_discount}
        </span>
        <div className="lg:w-[200px] h-full border">
          <img
            src={product?.product_image?.url}
            alt="image"
            className="w-full  h-full img-main hover:scale-110 duration-300 transition-all  object-cover rounded-md mb-5"
          />
        </div>
      </Link>
      <div className="absolute hidden group-hover:flex group-hover:transition-all flex-col z-10 right-0 items-center gap-1 item-cart">
        {/* Icon or image for cart */}
        {/* <p
          onClick={() => addToCartItem(product)}
          className="bg-red-500 text-white px-2 py-2 cursor-pointer rounded-md">
          <i className="fa-solid fa-cart-shopping fa-beat"></i>
        </p> */}
        <AddToCart product={product} user={user} />
        <p
          onClick={() => onHandleSubmit(product?._id)}
          className="bg-white border text-white px-2 py-2 cursor-pointer rounded-md"
        >
          {/* <i className="fa-regular fa-heart hover:text-[#ca6f04] transition-all"></i> */}
          <i
            className={` ${!pro ? 'fa-regular' : 'fa-solid'
              } transition-all duration-300 fa-heart fa-shake  text-red-600`}>
          </i>
        </p>
      </div>
      <div className=" mt-4">
        <h5 className="mb-2 hover:text-secondary  text-center duration-200 transition-all min-h-[70px]">
          <Link to={`/products/${product?._id}`}>
            {product?.product_name?.length > 42 ? product.product_name.slice(0, 44).concat("...") : product.product_name}</Link>
        </h5>
        {/* <div className="flex items-center justify-between mb-10 text-sm ">
          <span className="font-bold text-[#CD151C] text-[15px]">
            {product?.product_price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
          </span>
          <span className="text-[14px]">{product?.product_color}</span>
        </div> */}
        <p className="absolute inset-x-0 px-4 pb-3 bottom-0 h-23  flex justify-between gap-3 items-center">
          {(product?.variant_products?.length > 0 || product?.variant_products[0]?.variant_quantity === 0) ? (
            product?.variant_products[0]?.variant_discount !== 0 ? (
              <div className='flex items-center gap-1'>
                <span className="tracking-wider text-[13px] text-red-600 font-medium">
                  {product?.variant_products && product?.variant_products[0]?.variant_discount?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                <del className="tracking-wider text-[13px] text-gray-400 font-medium">
                  {product?.variant_products && product?.variant_products[0]?.variant_price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</del>
              </div>
            ) : (
              <span className="tracking-wider text-[15px] text-red-600 font-medium">
                {product?.variant_products && product?.variant_products[0]?.variant_price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
            )
          ) : <div className='text-red-400'>Đang cập nhật</div>}
          <span className=" text-gray-900 text-[12px]"> Đã bán: {product?.sold_quantity || 0}</span>
        </p>
        {/* <Link to={`/products/${product?._id}`} className="w-full py-2 text-white text-center duration-300 transition-all  rounded-lg cursor-pointer hover:text-primary bg-[#fcaf17] hover:bg-white hover:border border border-secondary mt-auto">
          Xem chi tiết
        </Link> */}
      </div>
    </div>
  );
}
export default ProductItem;
