import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import ClientLayout from "./layout/ClientLayout";
// import HomePage from "./pages/client/home/HomePage";
// import ProductPage from "./pages/client/product/ProductPage";
// import ProductDetail from "./pages/client/product/ProductDetail";
// import CartPage from "./pages/cart/CartPage";
import ContactPage from "./pages/client/contact/ContactPage";
import NewsPage from "./pages/client/blog/NewsPage";
// import CheckoutPage from "./pages/cart/CheckoutPage";
// import BillDetail from "./pages/cart/BillDetailPage";
import AboutPage from "./pages/client/about/AboutPage";
import SigninPage from "./pages/auth/Login/SigninPage";
import SignupPage from "./pages/auth/Register/SignupPage";
// import UserList from "./feature/user/UserList";
// import UserUpdate from "./feature/user/UserUpdate";
// import CommentList from "./feature/reviews/CommentList";
import NotfoundPage from "./pages/notFound/NotfoundPage";
import PrivateRoute from "./utils/privateRoute";
import LoginAdmin from "./utils/LoginAdmin";
import Dashboard from "./pages/admin/Dashboard";
import { ProductAdd, ProductList, ProductUpdate } from "./feature/product";
import ListProductDelete from "./feature/product/ProductList/components/ListProductDelete";
import { VariantProductAdd, VariantProductUpdate } from "./feature/product/variantProduct";
import { BrandAdd, BrandList, BrandUpdate } from "./feature/brand";
import { NewsAdd, NewsList, NewsUpdate } from "./feature/news";
import { CouponList } from "./feature/counpon";
import CouponAdd from "./feature/counpon/CouponAdd/CounponAdd";
import CouponUpdate from "./feature/counpon/CouponUpdate/CouponUpdate";
import { ColorAdd, ColorList, ColorUpdate } from "./feature/color";
import { SizeAdd, SizeList, SizeUpdate } from "./feature/size";
import { UserAdd, UserList, UserUpdate } from "./feature/user";
import { RoleAdd, RoleList, RoleUpdate } from "./feature/role";
import { AddGroup, ListGroup, UpdateGroup } from "./feature/group";
import { BannerList, BannerUpdate } from "./feature/banner";
import { ReviewList } from "./feature/review";
import { Statistic } from "antd";
import { BillList, BillUpdate } from "./feature/bill";
import { CategoryAdd, CategoryList, CategoryUpdate } from "./feature/category";
import HomePage from "./pages/client/home/HomePage";
import ProductPage from "./pages/client/product/ProductPage";
import ProductDetailPage from "./pages/client/product/ProductDetail";
import CartPage from "./pages/cart/CartPage";
import CheckoutPage from "./pages/cart/CheckoutPage";
import AccountPage from "./pages/client/account/AcccountPage";
import DashboardAccount from "./pages/client/account/components/DashBoard";
import DashboardBill from "./pages/client/account/components/bill/billList";
import BillDetail from "./pages/client/account/components/bill/BillDetail";
import Favorite from "./pages/client/account/components/Favorite";
import VoucherPage from "./pages/client/account/components/Voucher";
import ListReviews from "./pages/client/account/components/ListReviews";
import InfoUser from "./pages/client/account/components/InfoUse";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ChangePasswordNew from "./pages/auth/ChangePasswordNew";
import VerifyToken from "./pages/auth/Verify/VerifyToken";

export const routes = createBrowserRouter([
    {
        path: "/", // client
        element: <ClientLayout />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: "/products",
                children: [
                    { index: true, element: <ProductPage /> },
                    { path: ":id", element: <ProductDetailPage /> },
                ],
            },

            { path: "carts", element: <CartPage /> },
            { path: "checkouts", element: <CheckoutPage /> },
            { path: "login", element: <SigninPage /> },
            { path: "register", element: <SignupPage /> },

            { path: "contact", element: <ContactPage /> },
            { path: "news", element: <NewsPage /> },
            { path: "about", element: <AboutPage /> },
            {
                path: "account",
                element: <AccountPage />,
                children: [
                    { index: true, element: <Navigate to="info" /> },
                    { path: "dashboard", element: <DashboardAccount /> },
                    { path: "forget-password", element: <ForgetPassword /> },
                    { path: "change-password-new", element: <ChangePasswordNew /> },
                    { path: "verify-token", element: <VerifyToken /> },
                    { path: "change-password-forget", element: <VerifyToken /> },
                    {
                        path: "bills",
                        children: [
                            { index: true, element: <DashboardBill /> },
                            { path: ":idBill", element: <BillDetail /> },
                        ],
                    },
                    { path: "favorites", element: <Favorite /> },
                    { path: "vouchers", element: <VoucherPage /> },
                    { path: "reviews", element: <ListReviews /> },
                    {
                        path: "info",
                        children: [
                            { index: true, element: <InfoUser /> },
                            { path: "changPassword", element: <h2>ChanglePassWord</h2> },
                        ],
                    },
                ],
            },
        ],
    },
    { path: "checkAdmin", element: <LoginAdmin /> },
    {
        path: "/admin", // redirect /admin/dashboard
        element: <PrivateRoute isAuth={true} />,
        children: [
            {
                element: <AdminLayout />,
                children: [
                    { index: true, element: <Navigate to="dashboard" /> },
                    { path: "dashboard", element: <Dashboard /> },
                    {
                        path: "products",
                        children: [
                            { index: true, element: <ProductList /> },
                            { path: "add", element: <ProductAdd /> },
                            { path: "listDelete", element: <ListProductDelete /> },
                            { path: ":id/update", element: <ProductUpdate /> },
                            { path: ":id/variant/add", element: <VariantProductAdd /> },
                            {
                                path: ":id/variant/:variantID/update",
                                element: <VariantProductUpdate />,
                            },
                        ],
                    },
                    {
                        path: "categories",
                        children: [
                            { index: true, element: <CategoryList /> },
                            { path: "add", element: <CategoryAdd /> },
                            { path: ":id/update", element: <CategoryUpdate /> },
                        ],
                    },
                    {
                        path: "brands",
                        children: [
                            { index: true, element: <BrandList /> },
                            { path: "add", element: <BrandAdd /> },
                            { path: ":id/update", element: <BrandUpdate /> },
                        ],
                    },
                    {
                        path: "news",
                        children: [
                            { index: true, element: <NewsList /> },
                            { path: "add", element: <NewsAdd /> },
                            { path: ":id/update", element: <NewsUpdate /> },
                        ],
                    },
                    {
                        path: "coupons",
                        children: [
                            { index: true, element: <CouponList /> },
                            { path: "add", element: <CouponAdd /> },
                            { path: ":id/update", element: <CouponUpdate /> },
                        ],
                    },
                    {
                        path: "colors",
                        children: [
                            { index: true, element: <ColorList /> },
                            { path: "add", element: <ColorAdd /> },
                            { path: ":id/update", element: <ColorUpdate /> },
                        ],
                    },
                    {
                        path: "sizes",
                        children: [
                            { index: true, element: <SizeList /> },
                            { path: "add", element: <SizeAdd /> },
                            { path: ":id/update", element: <SizeUpdate /> },
                        ],
                    },
                    {
                        path: "users",
                        children: [
                            { index: true, element: <UserList /> },
                            { path: "add", element: <UserAdd /> },
                            { path: ":id/update", element: <UserUpdate /> },
                        ],
                    },
                    {
                        path: "roles",
                        children: [
                            { index: true, element: <RoleList /> },
                            { path: "add", element: <RoleAdd /> },
                            { path: ":id/update", element: <RoleUpdate /> },
                        ],
                    },
                    {
                        path: "product-group",
                        children: [
                            { index: true, element: <ListGroup /> },
                            { path: "add", element: <AddGroup /> },
                            { path: ":id/update", element: <UpdateGroup /> },
                        ],
                    },
                    {
                        path: "banners",
                        children: [
                            { index: true, element: <BannerList /> },
                            { path: ":id/update", element: <BannerUpdate /> },
                        ],
                    },
                    {
                        path: "bills",
                        children: [
                            { index: true, element: <BillList /> },
                            { path: ":id/update", element: <BillUpdate /> },
                        ],
                    },
                    { path: "reviews", element: <ReviewList /> },
                    { path: "statistics", element: <Statistic /> },
                ],
            },
        ]
    },
    { path: "*", element: <NotfoundPage /> },
])