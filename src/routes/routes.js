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
import EditTask from "../components/EditTask/EditTask";

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
            },
            {
                path: '/task-creation',
                element: <PrivateRoute>
                    <TaskCreation />
                </PrivateRoute>
            }
        ]

    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashBoard />
        </PrivateRoute>,
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
            },
            {
                path: '/dashboard/edit-task',
                element: <EditTask />
            }
        ]


    }
]);

export default router