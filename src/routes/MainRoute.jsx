import PATHS from "./routes";
import { Routes, Route } from "react-router";
import styled from "styled-components";

import Button from "@mui/material/Button";

const StyledButton = styled(Button)`
  margin: 20px;
  background-color: #007bff;
  color: white;
`;

import Home from "../pages/Home";
import About from "../pages/About";
import Purchase from "../pages/Purchase";
import News from "../pages/News";
import NewsDetail from "../pages/NewsDetail";
import Error404 from "../pages/Error404";
import Hooks from "../pages/Hooks";
import ChatApp from "../pages/ChatApp";
import RenderingLists from "../pages/RenderingPureLists";

function MainRoute() {
  const routes = [
    {
      pathName: "*", // asterisk
      element: <Error404 />,
    },
    {
      pathName: PATHS.HOME,
      element: <Home />,
    },
    {
      pathName: PATHS.ABOUT,
      element: <About />,
    },
    {
      pathName: PATHS.PURCHASE,
      element: <Purchase />,
    },
    {
      pathName: PATHS.NEWS,
      element: <News />,
    },
    {
      pathName: PATHS.NEWS_DETAIL,
      element: <NewsDetail />,
    },
    {
      pathName: "/hooks",
      element: <Hooks />,
    },
    {
      pathName: PATHS.CHAT_APP,
      element: <ChatApp />,
    },
    {
      pathName: PATHS.RENDERING_PURE_LIST,
      element: <RenderingLists />,
    },
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.pathName} element={route.element} />
      ))}
    </Routes>
  );
}

export default MainRoute;
