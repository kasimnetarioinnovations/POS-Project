import React, { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./Page/ProductDetails"
import ProductCard from "./Page/ProductCard";


const PageRouter = () => {
  const router = createBrowserRouter([
//   {
//             path:"/card",
//            element: (
//                 <>
//                 <Card/>
//                 </>
//            )
//         },
   
    {
      path: "/",
      element: <ProductDetails/>,
      children: [
        {
          path: "product_card",
          element: <ProductCard/>,
        },
    
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default PageRouter;
