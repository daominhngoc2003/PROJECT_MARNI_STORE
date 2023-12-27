import { Empty } from "antd";
import { getDecodedAccessToken } from "../../../../decoder";
import { useGetUserByIdQuery } from "../../../../api/user";
import { useGetFavoriteByUserQuery } from "../../../../api/favorite";
import { IProduct } from "../../../../interface/product";
import ProductItem from "../../../../components/product/ProductItem";

const Favorite = () => {
  const token: any = getDecodedAccessToken();
  const { data: userData } = useGetUserByIdQuery<any>(token?._id);
  const user = userData?.user;


  const userId = user?._id;

  const { data: favorite } = useGetFavoriteByUserQuery<any>(userId);
  const favoriteData: any = favorite?.favorite?.products;

  return (
    <div className="flex flex-col h-full p-3 overflow-hidden  rounded-sm select-none  ">
      {favoriteData?.length > 0 ? (
        <div className="relative grid grid-cols-4 gap-3 ">
          {favoriteData?.map((item: IProduct) => {
            return (
              <ProductItem product={item} />
            );
          })}
          <div className='text-center'>
            {/* <Pagination current={currentPages} total={totalItems} onChange={onHandlePageChange} className="mt-5" /> */}
          </div>
        </div>
      ) : <Empty />}

    </div>
  );
};

export default Favorite;
