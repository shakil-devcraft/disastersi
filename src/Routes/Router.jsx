import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/pages/Home/Home";
import Incidents from "../Components/pages/Incidents/Incidents";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/Incidents",
                element: <Incidents/>
            },
        ]
    }
])

export default Router;