import {
  HashRouter as Router,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import theme from "./theme";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import CreatePost from "./pages/create-post/CreatePost";
import Detail from "./pages/detail/Detail";
import EditPost from "./pages/edit-post/EditPost";
import Profile from "./pages/profile/Profile";

import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "detail/:slug",

      element: <Detail />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "create-post",
      element: <CreatePost />,
    },
    {
      path: "edit-post/:slug",
      element: <EditPost />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
