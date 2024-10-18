import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/pages/Home/Home";
import Incidents from "../Components/pages/Incidents/Incidents";
import Locations from "../Components/pages/Locations/Locations";
import Activities from "../Components/pages/Activities/Activities";
import Cypher from "../Components/pages/Cypher/Cypher";
import TaskA from "../Components/pages/Incidents/TaskA";
import TaskB from "../Components/pages/Incidents/TaskB";
import TaskC from "../Components/pages/Incidents/TaskC";
import TaskD from "../Components/pages/Incidents/TaskD";
import TaskE from "../Components/pages/Incidents/TaskE";

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
                path: "/Incidents/TaskA",
                element: <TaskA />
            },
            {
                path: "/Incidents/TaskB",
                element: <TaskB />
            },
            {
                path: "/Incidents/TaskC",
                element: <TaskC />
            },
            {
                path: "/Incidents/TaskD",
                element: <TaskD />
            },
            {
                path: "/Incidents/TaskE",
                element: <TaskE />
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