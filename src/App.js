import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import React from "react";
import "./App.css";
import PersistentDrawerLeft from "./components/drawer";
import UserProfile from "./pages/user-profile";
import EmployeePortal from "./pages/employe-portal";
import CreatePanel from "./pages/create-panel";
import Accounting from "./pages/accounting";
import CreatorEarning from "./pages/creator-earning";
import FilterEarning from "./pages/filter-accounting";
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
import Newest from "./pages/newest";
import CustomerLogin from "./pages/cutomer-ligin";
import ContentReport from "./pages/content-report";
import AccountReported from "./pages/account-reported";
import Subscription from "./pages/subscription";
import { GetAll, login } from "./utils/api-calls";
import AdminLogin from "./pages/admin-login";

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
    route: "/accounting",
    component: <Accounting />,
  },
  {
    type: "collapse",
    name: "Creators Panel",
    key: "CreatorPanelLogin",
    icon: "creator",
    route: "/creatorPanelLogin",
    component: <CreatorPanelLogin />,
  },

  {
    type: "collapse",
    name: "Customer Service",
    key: "customerService",
    icon: "customerService",
    route: "/customerLogin",
    component: <CustomerLogin />,
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

  const getD = async () => {
    const res = await GetAll()
    console.log(res, 'ALLLLLLL>......');
  }

  useEffect(() => {
    // Login();
    getD();
  }, [])
  const Login = async () => {
    const res = await login({
      email: "Hervinmb@kankira.com",
      password: "Zikk@1234"
    })
    console.log(res, '...........');
  }

  // console.log(res, 'resllll');
  return (
    <PersistentDrawerLeft routes={routes}>
      <Routes>
        {getRoutes(routes)}
        <Route path="/employPortal" element={<EmployeePortal />} />
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
        <Route path="/accounting" element={<Accounting />} />
        <Route path="/creatorEarning" element={<CreatorEarning />} />
        <Route path="/createPanel" element={<CreatePanel />} />
        <Route path="/newest" element={<Newest />} />
        <Route path="/customerLogin" element={<CustomerLogin />} />
        <Route path="/customerService" element={<CustomerService />} />
        <Route path="/contentReport" element={<ContentReport />} />
        <Route path="/accountReported" element={<AccountReported />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/" element={<AdminLogin />} />
      </Routes>
    </PersistentDrawerLeft>

  );
}

export default App;
