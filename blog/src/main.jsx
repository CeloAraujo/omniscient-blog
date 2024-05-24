import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Home from "./routes/Home.jsx";
import NewPost from "./routes/NewPost.jsx";
import Post from "./routes/Post.jsx";
import Admin from "./routes/Admin.jsx";
import EdittPost from "./routes/EdittPost.jsx";


const router = createBrowserRouter([
  {
    path:"/omniscient-blog/",
    element: <App />,
    children: [
      {
        path: "/omniscient-blog/",
        element: <Home />,
      },
      {
        path: "/omniscient-blog/new",
        element: <NewPost />,
      },
      {
        path: "/omniscient-blog/posts/:id",
        element: <Post />,
      },
      {
        path: "/omniscient-blog/admin",
        element: <Admin />,
      },
      {
        path: "/omniscient-blog/posts/edit/:id",
        element: <EdittPost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
