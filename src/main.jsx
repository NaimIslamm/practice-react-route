import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigation,
} from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Posts from "./Components/Posts/Posts.jsx";
import ShowDetails from "./Components/ShowDetails/ShowDetails.jsx";
import Error from "./Components/ErrorPage/Error.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/comments"),
        element: <Posts></Posts>,
      },
      {
        path: "/Post/:postid",
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/comments/${params.postid}`
          ),
        element: <ShowDetails></ShowDetails>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
