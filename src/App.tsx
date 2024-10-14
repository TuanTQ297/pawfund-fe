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

import "./App.css";
import CreatePost from "./pages/create-post/CreatePost";
import Detail from "./pages/detail/Detail";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import EditPost from "./pages/edit-post/EditPost";
import Listing from "./pages/listing/Listing";
import Notification from "./pages/notification/Notification";
import Profile from "./pages/profile/Profile";

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
  ]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
