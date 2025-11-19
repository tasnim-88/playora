import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import ToyDetails from "../Pages/ToyDetails";
import AllToys from "../Pages/AllToys";
import Authentication from "../Layouts/Authentication";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import PrivateRoute from "../Provider/PrivateRoute";
import MyProfile from "../Pages/MyProfile";
import Error from "../Pages/Error";
import ForgotPassword from "../Pages/ForgotPassword";
import Terms from "../Pages/Terms";
import Policy from "../Pages/Policy";
import FAQ from "../Pages/FAQ";
import ContactUs from "../Pages/ContactUs";
import ReviewForm from "../Components/HomeLayout/ReviewForm";

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            { index: true, Component: Home },

        ]
    },
    {
        path: '/allToys',
        Component: AllToys
    },
    {
        path: '/toyDetails/:toyId',
        element: <PrivateRoute>
            <ToyDetails></ToyDetails>
        </PrivateRoute>
    },
    {
        path: '/auth',
        Component: Authentication,
        children: [
            { path: '/auth/login', Component: Login },
            { path: '/auth/registration', Component: Registration }
        ]
    },
    {
        path: '/profile',
        element: <PrivateRoute>
            <MyProfile></MyProfile>
        </PrivateRoute>
    },
    // { path: '/about', element: <h2>About</h2> },
    // { path: '/allToys', element: <h2>Shop</h2> },
    { path: '/forgotPassword', Component: ForgotPassword },
    { path: '/terms', Component: Terms },
    { path: '/policy', Component: Policy },
    { path: '/faq', Component: FAQ },
    { path: '/contactUs', Component: ContactUs },
    {
        path: '/review',
        element: <PrivateRoute>
            <ReviewForm></ReviewForm>
        </PrivateRoute>
    },
    { path: '/*', Component: Error }
])
export default router