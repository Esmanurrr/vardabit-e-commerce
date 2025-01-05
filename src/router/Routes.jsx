import { createBrowserRouter } from "react-router";
import Home from "../components/home/Home";
import ProductDetail from "../components/product/ProductCard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [{ path: "/product-detail", element: <ProductDetail /> }],
  },
]);
