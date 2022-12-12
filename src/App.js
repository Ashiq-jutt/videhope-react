import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import PersistentDrawerLeft from "./components/drawer";
import SignIn from "./pages/sigIn";
import AllUser from "./pages/allUser";
import { Icon } from "@mui/material";
import PaymentData from "./pages/paymentData";
import Setting from "./pages/setting";
import Earnings from "./pages/earnings";
import ReportContent from "./pages/report-content";
import ChangeName from "./pages/change-name";
const routes = [
  {
    type: "collapse",
    name: "All Users",
    key: "users",
    icon: "group",
    route: "/allUsers",
    component: <AllUser />,
  },
  {
    type: "collapse",
    name: "Payments",
    key: "payments",
    icon: "payments",
    route: "/payments",
    component: <PaymentData />,
  },
  {
    type: "collapse",
    name: "Earnings",
    key: "earnings",
    icon: "earnings",
    route: "/earnings",
    component: <Earnings />,
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
    icon: 'logout',
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
    // <ChangeName />
    <>
      <PersistentDrawerLeft routes={routes}>
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/allUsers" />} />
        </Routes>
      </PersistentDrawerLeft>
    </>
    // <PaymentData />
    // </>
  );
}

export default App;
