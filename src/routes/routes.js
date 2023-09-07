import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LogIn from "../components/LogIn/LogIn";
import Main from "../components/Main/Main";
import SignUp from "../components/SignUp/SignUp";
import MenuPage from "../components/MenuPage";
import TaskCreation from "../components/TaskCreation/TaskCreation";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/sign-up',
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

    }
]);

export default router