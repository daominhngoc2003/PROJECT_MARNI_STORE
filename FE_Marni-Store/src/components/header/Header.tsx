import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef, useMemo } from "react";
// import Search from "../search";
import Swal from "sweetalert2"
import { getDecodedAccessToken } from "../../decoder";
import { useGetFavoriteByUserQuery } from "../../api/favorite";
import "./index.css"
import SearchHeader from "./components/Search";
import { useGetUserByIdQuery } from "../../api/user";
import { useGetCartByUserQuery } from "../../api/cart";
import Notification from "./components/Notification";

const Header = () => {
  const token: any = getDecodedAccessToken();
  const navigate = useNavigate();
  const roleId = token?.role_name;

  const { data: userData } = useGetUserByIdQuery<any>(token?._id);
  const user = useMemo(() => userData?.user, [userData])
  const { data: carts } = useGetCartByUserQuery(token?._id);

  const cartList = useMemo(() => carts?.cart, [carts]);
  const [status, setStatus] = useState(false);

  const { data: FavoriteUser } = useGetFavoriteByUserQuery<any>(token?._id);
  const favoriteData = useMemo(() => FavoriteUser?.favorite, [FavoriteUser]);
  // const [currentPage, setCurrentPage] = useState("");
  const handleLogout = () => {
    localStorage.removeItem("status");
    localStorage.removeItem("accessToken");
    setStatus(true);

    window.location.reload();
  };

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<any>(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [showMenu, setShowMenu] = useState(true); // Khai báo state để ẩn/hiện thanh menu

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setShowMenu(position < 100); // Khi vị trí cuộn dưới 100px, hiển thị menu
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const headerClass = showMenu ? " py-10 transition-all duration-300 " : " transition-all py-5 flex items-center duration-300";
  const menuChild = showMenu ? "mt-10" : "";

  // const location = useLocation();
  // const [currentPage, setCurrentPage] = useState("");

  // useEffect(() => {
  //   // Lấy path của trang hiện tại từ location
  //   const path = location.pathname;

  //   // Cập nhật trạng thái của trang hiện tại
  //   setCurrentPage(path);
  // }, [location]);

  const handleClick = async () => {
    if (!user?._id) {
      const loginResult = await Swal.fire({
        position: 'top',
        title: 'Opps!',
        text: "Bạn cần đăng nhập để thực hiện chức năng này",
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

  // const productList = carts?.products;
  // const _id = user?._id

  // const countCart = carts?.products?.length

  // const dropdownRef = useRef<any>(null);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // useEffect(() => {
  //   const handleClickOutside = (event: any) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setIsDropdownOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <header className={`bg-black dark:bg-gray-900  fixed w-full z-20 top-0 left-0 dark:border-gray-600  ${headerClass}`}>
      <div className="flex items-center  md:w-[1200px] mx-auto justify-between px-5  page-container">
        <div className="absolute md:max-w-[200px] max-w-[100px] top-[10px] left-[10px]">
          <img
            src="https://bizweb.dktcdn.net/100/376/737/themes/894814/assets/bg_left_header.png?1665394167535"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className=" md:block hidden md:max-w-[1000px]">
          <img
            src="https://bizweb.dktcdn.net/100/376/737/themes/894814/assets/logo.png?1676271560514"
            alt=""
            className="object-cover w-full  relative h-full"
          />
        </div>
        <nav className={`${menuChild}`}>
          <ul className="flex items-center justify-center md:text-[16px] text-[12px] font-medium capitalize  text-[#acacac]">
            <li className="pr-3 transition-all hover:text-secondary  hover:border-b-secondary">
              <Link to="/" className="font-bold active:text-secondary">
                Trang chủ
              </Link>
            </li>
            <li className="px-3 transition-all hover:text-secondary focus:text-red-500 hover:border-b-secondary">
              <Link to="/products" className="font-bold ">
                Sản phẩm
              </Link>
            </li>
            <li className="px-3 transition-all hover:text-secondary  hover:border-b-secondary">
              <Link to="/about" className="font-bold ">
                Giới thiệu
              </Link>
            </li>
            <li className="px-3 transition-all hover:text-secondary  hover:border-b-secondary">
              <Link to="/contact" className="font-bold ">
                Liên hệ
              </Link>
            </li>
            <li className="px-3 transition-all hover:text-secondary  hover:border-b-secondary">
              <Link to="/news" className="font-bold ">
                Tin tức
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center md:order-2">
          <div className="header-icon flex items-center space-x-3">
            <div className="nav-search text-[20px] cursor-pointer relative">
              <SearchHeader />
            </div>
            <div className="nav-user flex items-center menu-item text-[20px] cursor-pointer relative">
              {user && !status ? (
                <ul className="submenu">
                  <li>
                    <Link
                      to="account"
                      className="text-red-500 text-lg font-medium"
                    >
                      {user?.user_fullname}
                    </Link>
                  </li>
                  {roleId === "Admin" ? (
                    <li>
                      <Link to="/admin">Trang quản trị</Link>
                    </li>
                  ) : roleId === "Member" ? (
                    <li>
                      <Link to="/member">Trang nhân viên</Link>
                    </li>
                  ) : (
                    ""
                  )}
                  <li>
                    <Link to="/account/info">Thông tin tài khoản</Link>
                  </li>
                  <li>
                    <Link to="/account/change-password-new">Đổi mật khẩu</Link>
                  </li>
                  <li>
                    <Link to="#" onClick={handleLogout}>
                      Đăng xuất
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className="submenu">
                  <li>
                    <Link
                      to="login"
                      className="hover:text-[#9c5727] transition-all block"
                    >
                      Đăng nhập
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="register"
                      className="hover:text-[#9c5727] transition-all block"
                    >
                      Đăng ký
                    </Link>
                  </li>
                </ul>
              )}

              <div className="icon-search group">
                {user && !status ? (
                  <div className="w-5 h-5">
                    <img
                      className="w-full h-full rounded-full"
                      src={user?.user_avatar?.url || "https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-admin-rolls-glyph-black-icon-png-image_691507.jpg"}
                      alt=""
                    />
                  </div>
                ) : (
                  <i className="fa-regular fa-user text-gray-300 hover:text-[#ca6f04] transition-all"></i>
                )}
              </div>
            </div>
            <Notification />
            <div className="nav-heart text-[20px] cursor-pointer relative">
              {user ? (
                <Link to={`/account/favorites`} className="icon-heart">
                  <i className="fa-regular text-gray-300  fa-heart hover:text-[#ca6f04] transition-all"></i>
                  <span className="absolute bg-[#ca6f04] right-[-8px] text-white rounded-full px-[5px] text-[10px]">
                    {favoriteData ? favoriteData?.products?.length : 0}
                  </span>
                </Link>
              ) : (
                <span className="icon-heart disabled" onClick={handleClick}>
                  <i className="fa-regular text-gray-300 hover:text-[#ca6f04] fa-heart"></i>
                  <span className="absolute  bg-[#ca6f04] right-[-8px] text-white rounded-full px-[5px] text-[10px]">
                    {favoriteData ? favoriteData?.products?.length : 0}
                  </span>
                </span>
              )}
            </div>
            <div className="nav-cart cart-menu-item text-[20px] w-[30px]  cursor-pointer relative">
              <ul className="cart-submenu left-[-270px] lg:left-[-340px]  ">
                <h1 className="text-gray-400 mb-2">Sản phẩm mới thêm</h1>
                <div className="">
                  {cartList && cartList?.products.length > 0 ? (
                    cartList?.products.slice(0, 4).map((item: any) => {
                      return (
                        <li className="mb-4" key={item?._id}>
                          <div>
                            <Link
                              to={`/products/${item?.product_id?._id}`}
                              className="grid grid-cols-[auto,30%] gap-1 px-2 items-center justify-between hover:bg-gray-200 py-3 transition-all duration-300 cursor-help"
                            >
                              <div className=" flex items-center gap-2">
                                <div className="max-w-[50px] h-[5opx]">
                                  <img src={item?.product_image?.url} className="w-full h-full" alt="" />
                                </div>
                                <h1 className="font-bold">
                                  {item?.product_name}
                                </h1>
                              </div>
                              <div>
                                <span className="text-red-500 ">
                                  {item?.quantity}
                                </span>
                                <span className="text-red-500 font-medium px-2 text-[12px]">
                                  {"X"}
                                </span>
                                {/* <span className="text-red-500">
                                  {formatMoney(
                                    item?.product_discount === 0
                                      ? item?.product_price
                                      : item?.product_discount
                                  ) + "K"}
                                </span> */}
                              </div>
                            </Link>
                          </div>
                        </li>
                      );
                    })
                  ) : (
                    <div className="text-xl font-medium">Giỏ hàng trống</div>
                  )}
                </div>
                <div className="flex justify-between gap-2 items-center mt-3">
                  <span className="flex justify-between gap-1 items-center">
                    <p>Thêm</p>
                    {cartList?.products?.reduce((i: number, a: any) => {
                      return i + a?.quantity;
                    }, 0) || 0}
                    <p> sản phẩm vào giỏ hàng</p>
                  </span>
                  <Link
                    to="/carts"
                    className="bg-[#ca6f04] text-white px-8 text-[16px] py-2 rounded-sm transition-all hover:bg-yellow-800 duration-300"
                  >
                    Giỏ hàng
                  </Link>
                </div>
              </ul>
              <Link to="/" className="" onClick={handleClick}>
                <div className="icon-cart">
                  <i className="fa-solid text-gray-300  fa-bag-shopping fa-bounce hover:text-[#ca6f04] transition-all"></i>
                  <span className="absolute bg-[#ca6f04] right-[-8px] text-white rounded-full px-[5px] text-[10px]">
                    {user && cartList ? cartList?.products?.length || 0 : 0}
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>

    </header>
  );
};

export default Header;
