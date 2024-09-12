import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/home";
import About from "../pages/About/about";
import Blog from "../pages/Blog/blog";
import Contact from "../pages/Contact/contact";
import Error from "../pages/Error/error";
import Reservation from "../pages/Reservation/reservation";
import Menu from "../pages/Menu/menu";
import Gallery from "../pages/Gallery/gallery";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/reservation",
    element: <Reservation />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
]);
export default routes;
