import { createBrowserRouter } from "react-router";
import Ornek from "../components/ornek";
const routes = createBrowserRouter([
  {
    path: "/",
    element: "anasyfa",
  },
  {
    path: "/ornek",
    element: <Ornek />,
  },
]);

export default routes;
