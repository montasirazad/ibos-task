import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LogIn from "../components/LogIn/LogIn";
import Main from "../components/Main/Main";
import SignUp from "../components/SignUp/SignUp";
import MenuPage from "../components/MenuPage";
import TaskCreation from "../components/TaskCreation/TaskCreation";
import DashBoard from "../components/DashBoard/DashBoard";
import AvailableUsers from "../components/AvailableUsers/AvailableUsers";
import AllTask from "../components/AllTask/AllTask";
import FilterTask from "../components/FilterTask/FilterTask";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <SignUp />
            },
            {
                path: '/log-in',
                element: <LogIn />
            }, {
                path: '/menu',
                element:
                    <MenuPage />
                // <PrivateRoute>
                // </PrivateRoute>
            },
            {
                path: '/task-creation',
                element: <TaskCreation />
            }
        ]

    },
    {
        path: '/dashboard',
        element: <DashBoard />,
        children: [
            {
                path: '/dashboard',
                element: <AvailableUsers />
            },
            {
                path: '/dashboard/all-task',
                element: <AllTask />
            },
            {
                path: '/dashboard/filter-task',
                element: <FilterTask />
            }
        ]


    }
]);

export default router