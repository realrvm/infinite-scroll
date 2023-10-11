import { createBrowserRouter } from "react-router-dom";

import { PostsList } from "@/pages/posts-list";
import { PostDetails } from "@/pages/post-details";
import { App } from "@/app/App";

import { Posts } from "../types";

const routes: Record<Posts, JSX.Element> = {
  [Posts.PostsList]: <PostsList />,
  [Posts.PostDetails]: <PostDetails />,
};

export const router = createBrowserRouter([
  {
    element: <App />,
    children: Object.entries(routes).map(([path, element]) => ({
      path,
      element,
    })),
  },
]);
