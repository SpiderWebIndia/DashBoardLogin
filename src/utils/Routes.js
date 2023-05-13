import Credentials from "../auth/login/Credentials";
import DashboardMain from "../dashboard/DashboardMain";
export const RouteData = [
  {
    id: 1,
    protected: false,
    path: "/",
    element: <Credentials />,
  },
  {
    id: 1,
    protected: true,
    path: "/dashboard",
    element: <DashboardMain />,
  },
];
