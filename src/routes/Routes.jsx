import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../Category/Category";
import Newslayout from "../layouts/Newslayout";
import News from "../layouts/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/LoginAndRegister/Login";
import Register from "../pages/LoginAndRegister/Register";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Trams from "../pages/Shared/Trams";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "/",
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: 'trams',
                element: <Trams></Trams>
            }
        ]
    },
    {
        path: 'category',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path:'/news',
        element: <Newslayout></Newslayout>,
        children: [
            {
                path: ":id",
                element: <PrivateRouter><News></News></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;