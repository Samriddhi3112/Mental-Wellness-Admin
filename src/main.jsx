// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import store from "./app/store"
// import "./assets/css/auth.css";
// import "./assets/css/custom.css";
// import "./assets/css/responsive.css";
// import "./assets/css/style.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Provider } from "react-redux";
// {/* <BrowserRouter basename="/mental_wellness_web/" > */}

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>
// )

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./app/store";
import AppRoutes from "./routes/AppRoutes";
import "./assets/css/auth.css";
import "./assets/css/custom.css";
import "./assets/css/responsive.css";
import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Provider } from "react-redux";

const router = createBrowserRouter(AppRoutes, {
  basename: "/mental_wellness_admin/",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" />
    </Provider>
  </React.StrictMode>
);