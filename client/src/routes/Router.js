import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Component/pages/Home/Home";
import Login from "../Component/pages/Auth/Login";
import Register from "../Component/pages/Auth/Register";
import Doctor from "../Component/pages/Doctor/Doctor";
import Contact from "./../Component/pages/Contact/Contact";
import About from "./../Component/pages/About/About";
import DoctorPreview from "../Component/pages/Doctor/DoctorPreview/DoctorPreview";
import Form2 from "../Component/pages/Form2/Form2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/Doctor",
        element: <Doctor />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/DoctorPreview",
        element: <DoctorPreview />,
      },
      {
        path: "/Form2",
        element: <Form2 />,
      },
    ],
  },
]);

export default router;
