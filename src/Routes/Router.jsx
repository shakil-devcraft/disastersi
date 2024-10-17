import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/pages/Home/Home";
import Incidents from "../Components/pages/Incidents/Incidents";
import Locations from "../Components/pages/Locations/Locations";
import Activities from "../Components/pages/Activities/Activities";
import Cypher from "../Components/pages/Cypher/Cypher";

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
            {
                path: "/Locations",
                element: <Locations/>
            },
            {
                path: "/Activities",
                element: <Activities/>
            },
            {
                path: "/Cypher",
                element: <Cypher/>
            },
        ]
    }
])

export default Router;