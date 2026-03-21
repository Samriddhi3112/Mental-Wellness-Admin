// import AppRoutes from "./routes/AppRoutes";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./App.css";

// function App() {

//   return (
//     <>
//       <AppRoutes />
//       <ToastContainer position="top-right" reverseOrder={false} />
//     </>
//   );
// }

// export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import AppRoutes from "./routes/AppRoutes";

// 🔥 create router
const router = createBrowserRouter(AppRoutes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;