import { Skeleton } from "antd";
import ProductItem from "../../../../components/product/ProductItem";
import { useMemo, useState } from "react";
import { useGetProductNewQuery } from "../../../../api/product";

const GroupProductNew = () => {
    const {
        data: ProductData,
        isLoading,
        isError
    } = useGetProductNewQuery<any>({ _limit: 100 } as any);

    const topSellingData = useMemo(() => ProductData?.products, [ProductData]);
    const [visibleProduct, setVisibleProduct] = useState(10);
    const hanleLoadMore = () => {
        setVisibleProduct(prevCount => prevCount + 10)
    }
    const handleHidden = () => {
        setVisibleProduct(10)
    }
    const productToShow = topSellingData?.slice(0, visibleProduct);
    return (
        <div>
            {isError ? "" : (
                <div>
                    {productToShow?.length > 1 && <h1 className="text-[20px] md:px-0 px-2 md:text-[40px] font-medium text-black">Sản phẩm mới</h1>}
                    <div className="grid grid-cols-2 md:grid-cols-5  gap-2 md:gap-4">
                        {productToShow?.length > 1 && productToShow?.map((item: any) => (
                            <div key={item._id} className="flex items-center justify-center">
                                {isLoading ? (<Skeleton active paragraph={{ rows: 6 }} />) : (
                                    <ProductItem product={item} isLoading={isLoading} />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                        <div> {(topSellingData && topSellingData?.length > 10) && (
                            <button
                                onClick={hanleLoadMore}
                                className='text-gray-600 shadow-sm font-medium border hover:border-green-400 transition-all border-green-200 px-4 py-2 rounded-full'>
                                Xem thêm
                            </button>
                        )}
                        </div>
                        <div> {topSellingData && visibleProduct >= 11 && (
                            <button
                                onClick={handleHidden}
                                className='text-gray-600 shadow-sm font-medium border hover:border-gray-400 transition-all border-gray-200 px-4 py-2 rounded-[30px]'>
                                Ẩn
                            </button>
                        )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GroupProductNew;
