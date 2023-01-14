import { Navigate, Route, Routes } from "react-router-dom";
// import React from "react";
import "./App.css";
import PersistentDrawerLeft from "./components/drawer";
import SignIn from "./pages/sigIn";
import Setting from "./pages/setting";
import ReportContent from "./pages/report-content";
import UserProfile from "./pages/user-profile";
import EmployeePortal from "./pages/employe-portal";
import CreatePanel from "./pages/create-panel";
import Accounting from "./pages/accounting";
import CreatorEarning from "./pages/creator-earning";
import FilterEarning from "./pages/filter-accounting";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "users",
    icon: "dash",
    route: "/dashboard",
    component: <EmployeePortal />,
  },
  {
    type: "collapse",
    name: "Accounting",
    key: "Accounting",
    icon: "Accounting",
    route: "/Accounting",
    component: <Accounting />,
  },
  {
    type: "collapse",
    name: "CreatePortal",
    key: "CreatePortal",
    icon: "CreatePortal",
    route: "/CreatePortal",
    component: <CreatePanel />,
  },
  {
    type: "collapse",
    name: "Reported content",
    key: "reportedContent",
    icon: "reportedContent",
    route: "/reportedContent",
    component: <ReportContent />,
  },
  {
    type: "collapse",
    name: "Settings",
    key: "settings",
    icon: "settings",
    route: "/settings",
    component: <Setting />,
  },
  {
    type: "collapse",
    name: "signout",
    key: "signout",
    icon: "logout",
    route: "/signout",
    component: <SignIn />,
  },
];
const getRoutes = (allRoutes) =>
  allRoutes.map((route) => {
    // if (route.collapse) {
    //   return getRoutes(route.collapse);
    // }

    if (route.route) {
      return (
        <Route
          exact
          path={route.route}
          element={route.component}
          key={route.key}
        />
      );
    }

    return null;
  });

function App() {
  return (
    // <AllUser />
    // <PersistentDrawerLeft routes={routes}>
    //   <Routes>
    //     {getRoutes(routes)}
    //     <Route path="*" element={<Navigate to="/dashboard" />} />
    //     <Route path="/userProfile" element={<UserProfile />} />
    //   </Routes>
    // </PersistentDrawerLeft>
    // <Detail />
    // <WithdrawRwquest />
    // <CreatorEarning />
    <FilterEarning />
  );
}

export default App;
