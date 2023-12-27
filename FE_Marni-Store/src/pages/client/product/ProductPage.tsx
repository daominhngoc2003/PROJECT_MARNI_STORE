import { Link } from "react-router-dom";
import ProductItem from "../../../components/product/ProductItem";
import { useMemo, useState } from "react";
import { Skeleton } from "antd";
import { useGetAllProductClientQuery } from "../../../api/product";
import { useGetAllCategoryClientQuery } from "../../../api/category";
// import { useGetAllBrandClientQuery } from "../../../api/brand";
// import { useGetAllColorClientQuery } from "../../../api/color";
// import { useGetAllSizeCLientQuery } from "../../../api/size";
import { IProduct } from "../../../interface/product";
import { IoIosSearch } from "react-icons/io";

const ProductPage = () => {
    const [search, setSearch] = useState("");
    const [categoryId, setCategoryId] = useState("");

    const req = {
        product_name: search,
        limit: 100,
        category_id: categoryId,
    }
    /// context
    const {
        data: products,
        error: isErrorProduct,
        isLoading: isLoadingProduct } = useGetAllProductClientQuery(req as any);

    const { data: categories } = useGetAllCategoryClientQuery();
    // const { data: brands } = useGetAllBrandClientQuery<any>();
    // const { data: colors } = useGetAllColorClientQuery<any>();
    // const { data: sizes } = useGetAllSizeCLientQuery<any>();

    const dataProducts = useMemo(() => products?.products, [products]);
    const dataCategories = useMemo(() => categories?.categories, [categories]);
    // const dataBrands = useMemo(() => brands?.brands, [brands]);
    // const dataColors = useMemo(() => colors?.colors, [colors]);
    // const dataSizes = useMemo(() => sizes?.sizes, [sizes]);

    // state
    const [currentPage, setCurrentPage] = useState(1);

    // Gọi hàm fetch data products
    const handleSearchInputChange = (event: any) => {
        setSearch(event.target.value);
    };

    const handleSortCategory = (id: any) => {
        if (categoryId === id) {
            setCategoryId("");
        } else {
            setCategoryId(id);
        }
    };

    return (
        <main className="product md:w-[1200px] mx-auto">
            <div className="product_heading page-container px-2 md:px-5">
                <nav aria-label="Breadcrumb" className="flex w-[180px] mt-5 mx-auto">
                    <ol
                        className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600"
                    >
                        <li className="flex items-center">
                            <Link to="/"
                                className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>

                                <span className="ms-1.5 text-xs font-medium"> Home </span>
                            </Link>
                        </li>

                        <li className="relative flex items-center">
                            <span
                                className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
                            >
                            </span>

                            <Link
                                to="#"
                                className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
                            >
                                Shirts
                            </Link>
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="product_content page-container px-2 md:px-5">
                <div className="grid md:grid-cols-5 gap-4">
                    <div className="col-span-1 w-full">
                        <div className="relative border  border-gray-100  hover:shadow-sm mb-2 px-2 pr-10 rounded-md">
                            <input
                                value={search} // Đặt giá trị trường nhập liệu bằng searchValue
                                onChange={handleSearchInputChange}
                                type="text"
                                placeholder="Tìm kiếm giày..."
                                className="w-full text-[10px] py-2 shadow-sm sm:text-sm outline-none"
                            />

                            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                                <button
                                    type="button"
                                    className="text-gray-600 hover:text-gray-700"
                                >
                                    <IoIosSearch />
                                </button>
                            </span>
                        </div>
                        <div className="product_category  mb-5 border-gray-100 bg-white border shadow rounded-lg py-2">
                            <h4 className="text-xl  text-center border border-gray-50 bg-gray-50  shadow-sm  mb-5  mt-3 font-bold">
                                Danh mục sản phẩm
                            </h4>
                            <ul className=" border-gray-300  pt-3">
                                {dataCategories?.map((category: any) => (
                                    <li
                                        key={category?._id}
                                        className="cursor-pointer border border-gray-50 flex gap-2 group items-center hover:text-[#fb7317] hover:shadow-md lg:text-[15px] px-3 py-1 duration-300 transition-all "
                                    >
                                        <input
                                            type="checkbox"
                                            name={category?.category_name}
                                            className="cursor-pointer "
                                            id={category?.category_name}
                                            onClick={() => handleSortCategory(category?._id)}
                                            checked={categoryId === category?._id}
                                        />
                                        <label
                                            htmlFor={category?.category_name}
                                            className="block w-full"
                                        >
                                            <h1 className="cursor-pointer transition-all group-hover:text-[#fb7317]">
                                                {category?.category_name}
                                            </h1>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                    <div className="col-span-4">
                        <div className="flex items-center  md:py-3 justify-between px-3 md:px-4">
                            <span className="text-[#7A7A9D] md:text-[15px] text-[12px]">{products?.docs?.length} sản phẩm</span>
                            <div className="sort-cate-right">
                                <label className="title mr-2 md:text-[15px] text-[12px]">Sắp xếp theo</label>
                                <select className="px-2 py-2   md:text-[15px] text-[12px] rounded outline-none hover:border-yellow-300 duration-300 transition-all border">
                                    <option value="">Từ A {"->"} Z</option>
                                    <option value="">Từ Z {"->"} A</option>
                                    <option value="">Giá thấp đến cao</option>
                                    <option value="">Giá từ cao đến thấp</option>
                                </select>
                            </div>
                        </div>
                        {isErrorProduct ? <div> Không có sản phẩm nào</div> : (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                                {dataProducts?.map((item: IProduct) => {
                                    return (
                                        <div key={item._id} className="flex items-center justify-center">
                                            {isLoadingProduct ? (<Skeleton active paragraph={{ rows: 6 }} />) : (
                                                <ProductItem product={item} isLoading={isLoadingProduct} />
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                        {!isErrorProduct && (
                            <div className="col-span-4 py-2">
                                <div className="col-span-4 py-2">
                                    <ul className="flex items-center justify-center gap-x-2">
                                        <li className="px-3 py-1 border duration-300 transition-all border-[#7A7A9D] bg-white text-[#7A7A9D] hover:bg-secondary hover:text-white">
                                            <button
                                                onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
                                                disabled={currentPage === 1}
                                            >
                                                {"<"}
                                            </button>
                                        </li>
                                        {Array.from({ length: 1 }).map((_, index) => (
                                            <li
                                                key={index + 1}
                                                className={`px-3 py-1 border duration-300 transition-all border-[#7A7A9D] bg-white text-[#7A7A9D] hover:bg-secondary hover:text-white ${index + 1 === currentPage
                                                    ? "bg-secondary text-black"
                                                    : ""
                                                    }`}
                                            >
                                                <button onClick={() => setCurrentPage(index + 1)}>
                                                    {index + 1}
                                                </button>
                                            </li>
                                        ))}
                                        {/* paginate */}
                                        <li className="px-3 py-1 border duration-300 transition-all border-[#7A7A9D] bg-white text-[#7A7A9D] hover:bg-secondary hover:text-white">
                                            <button
                                                onClick={() => setCurrentPage((nextPage) => nextPage + 1)}
                                                disabled={currentPage === 1}
                                            >
                                                {">"}
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProductPage;
