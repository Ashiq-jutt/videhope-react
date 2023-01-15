import React from "react";
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
import CustomerServices from "./pages/customer-services";
import CreateNewUser from "./pages/create-new-user";
import NewestDetail from "./pages/newest-detail";
import WithdrawRwquest from "./pages/withdraw-request";
import UserData from "./pages/allUser";
import EditProfile from "./pages/edit";
import Detail from "./pages/detail";
import Chat from "./pages/chat";
import Earnings from "./pages/earnings";
import CreatorPanelLogin from "./pages/creator-panel-login";
import CustomerService from "./pages/customer-services";

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
    key: "FilterEarning",
    icon: "accounting",
    route: "/filterEarning",
    component: <FilterEarning />,
  },
  {
    type: "collapse",
    name: "Creators Panel",
    key: "CreatorPanelLogin",
    icon: "creator",
    route: "/CreatorPanelLogin",
    component: <CreatorPanelLogin />,
  },

  {
    type: "collapse",
    name: "Customer Service",
    key: "customerService",
    icon: "customerService",
    route: "/customerService",
    component: <CustomerService />,
  },
  {
    type: "collapse",
    name: "Employees Portal",
    key: "EmployeePortal",
    icon: "employeePortal",
    route: "/employeePortal",
    component: <EmployeePortal />,
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
    <PersistentDrawerLeft routes={routes}>
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/dashboard" />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/creatorPanelLogin" element={<CreatorPanelLogin />} />
        <Route path="/employeePortal" element={<EmployeePortal />} />
        <Route path="/allUsers" element={<UserData />} />
        <Route path="/createNewUser" element={<CreateNewUser />} />
        <Route path="/newestDetail" element={<NewestDetail />} />
        <Route path="/withdrawRwquest" element={<WithdrawRwquest />} />
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/filterEarning" element={<FilterEarning />} />
      </Routes>
    </PersistentDrawerLeft>
  );
}

export default App;
