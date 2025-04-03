import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Analytics from "./pages/Analytics";
import Revenue from "./pages/Revenue";
import Dashboard from "./pages/INDEX";
import MainDashboard from "./pages/Dashboard";

const route = [
  {
    path: "/",
    component: <Dashboard />,
    public: false,
    children: [
      {
        path: "",
        component: <MainDashboard />,
      },
      {
        path: "students",
        component: <Analytics />,
      },
      {
        path: "admins",
        component: <Revenue />,
      },
    ],
  },
];

const Main = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      route.map((route) => (
        <Route path={route.path} element={route.component}>
          {route.children?.map((child) => (
            <Route path={child.path} element={child.component} />
          ))}
        </Route>
      ))
    )
  );
  return <RouterProvider router={routes} />;
};

export default Main;
