import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import FollowersPage from "./pages/FollowersPage/FollowersPage";
import TodoPage from "./pages/TodoPage/TodoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <TodoPage />,
      },
      {
        path: "/followers",
        element: <FollowersPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Banner />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
