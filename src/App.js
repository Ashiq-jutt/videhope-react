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
    name: "Customer Service",
    key: "customerService",
    icon: "customerService",
    route: "/customerService",
    component: <CustomerServices />,
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
    <PersistentDrawerLeft routes={routes}>
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/dashboard" />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/allUsers" element={<UserData />} />
        <Route path="/createNewUser" element={<CreateNewUser />} />
        <Route path="/newestDetail" element={<NewestDetail />} />
        <Route path="/withdrawRwquest" element={<WithdrawRwquest />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </PersistentDrawerLeft>
  );
}

export default App;
