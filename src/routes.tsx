import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Analytics from "./pages/Analytics";
import Revenue from "./pages/Revenue";
import Dashboard from "./pages";
import MainDashboard from "./pages/Dashboard";
import CRM from "./pages/CRM";
import Apps from "./pages/Apps";

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
        path: "analytics",
        component: <Analytics />,
      },
      {
        path: "revenue",
        component: <Revenue />,
      },
      {
        path: "crm",
        component: <CRM />,
      },
      {
        path: "apps",
        component: <Apps />,
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
