import { Navigate, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import PersistentDrawerLeft from "./components/drawer";
import SignIn from "./pages/sigIn";
import AllUser from "./pages/allUser";
import { Box, Icon, Paper } from "@mui/material";
import PaymentData from "./pages/paymentData";
import Setting from "./pages/setting";
import Earnings from "./pages/earnings";
import ReportContent from "./pages/report-content";
import ChangeName from "./pages/change-name";
import UserProfile from "./pages/user-profile";
import Table from "./pages/image-file";
import FileImage from "./pages/image-file";
import EmployePortal from "./pages/employe-portal";
import EmployeePortal from "./pages/employe-portal";
import EmployeeDetail from "./pages/newest-detail";
import NewestDetail from "./pages/newest-detail";
import EditProfile from "./pages/edit";
import ContentReport from "./pages/content-report";
import PastWithDrawal from "./pages/past-with-drawal";
import Newest from "./pages/newest";
import CreatePanel from "./pages/create-panel";
import CustomerServices from "./pages/customer-services";
import CustomerLogin from "./pages/cutomer-ligin";
import CreatorPanelLogin from "./pages/creator-panel-login";
import Accounting from "./pages/accounting";
// import Home from "./pages/test";
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
    icon: "accounting",
    route: "/Accounting",
    component: <Accounting />,
  },
  {
    type: "collapse",
    name: "CreatePortal",
    key: "CreatePortal",
    icon: "creator",
    route: "/CreatePortal",
    component: <CreatePanel />,
  },
  {
    type: "collapse",
    name: "Customer Service",
    key: "reportedContent",
    icon: "customerService",
    route: "/reportedContent",
    component: <ContentReport />,
  },
  {
    type: "collapse",
    name: "Employee Portal",
    key: "settings",
    icon: "employeePortal",
    route: "/settings",
    component: <EmployePortal />,
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
      </Routes>
    </PersistentDrawerLeft>
    // <PaymentData />
  );
}

export default App;
