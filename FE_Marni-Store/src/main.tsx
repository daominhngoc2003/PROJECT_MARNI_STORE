import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import persistor, { store } from "./store/index.ts";
import { PersistGate } from "redux-persist/integration/react";
import { ToastProvider } from "react-toast-notifications";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <BrowserRouter>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ToastProvider >
        <App />
      </ToastProvider>
      <ToastContainer />
    </PersistGate>
  </Provider>
  // </BrowserRouter>
);
