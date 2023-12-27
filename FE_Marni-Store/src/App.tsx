
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import 'react-toastify/dist/ReactToastify.css'

import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";


function App() {
  return (
    <div>
      <RouterProvider router={routes} />
      {/* <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products">
            <Route index element={<ProductPage />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>

          <Route path="cart">
            <Route index element={<CartPage />} />
          </Route>

          <Route path="contact" element={<ContactPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="bills/detail" element={<BillDetail />} />

          <Route path="signin" element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />

          <Route path="*" element={<NotfoundPage />} />
        </Route>

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products">
            <Route index element={<ProductList />} />
            <Route path="add" element={<ProductAdd />} />
            <Route path=":id/update" element={<ProductUpdate />} />
          </Route>
          <Route path="categories">
            <Route index element={<CategoryList />} />
            <Route path="add" element={<CategoryAdd />} />
            <Route path=":id/update" element={<CategoryUpdate />} />
          </Route>
          <Route path="users">
            <Route index element={<UserList />} />
            <Route path=":id/update" element={<UserUpdate />} />
          </Route>
          <Route path="comments">
            <Route index element={<CommentList />} />
          </Route>
          <Route path="bills">
            <Route index element={<BillList />} />
            <Route path=":id/update" element={<BillUpdate />} />
          </Route>
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
