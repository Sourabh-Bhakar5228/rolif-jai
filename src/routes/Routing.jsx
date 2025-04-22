// src/router.js
import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import AdminLayout from "../layouts/AdminLayout";

// lazy-loaded components
const Home = lazy(() => import("../pages/home/Home"));
const AboutUs = lazy(() => import("../pages/about/AboutUs"));
const Products = lazy(() => import("../pages/products/Products"));
const Login = lazy(() => import("../pages/validations/Login"));
// const Career = lazy(() => import("../pages/career/Career"));
const Gallery = lazy(() => import("../pages/gallery/Gallery"));
const ContactUs = lazy(() => import("../pages/contact/ContactUs"));
const ProductDetails = lazy(() => import("../pages/products/ProductDetails"));

// blogs
const Blogs = lazy(() => import("../pages/blogs/Blogs"));
const BlogPost = lazy(() => import("../pages/blogs/BlogPost"));

// admin panel
const Dashboard = lazy(() => import("../admin/dashboard/Dashboard"));
const AdminProducts = lazy(() => import("../admin/products/AdminProducts"));

const AdminBlogs = lazy(() => import("../admin/blogs/AdminBlogs"));
const AddBlog = lazy(() => import("../admin/blogs/AddBlog"));

const AdminSettings = lazy(() => import("../admin/settings/AdminSettings"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />, // includes <ScrollRestoration /> if needed
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about-us",
                element: <AboutUs />,
            },
            // products start
            {
                path: "furniture/*",
                element: <Products />,
            },
            {
                path: "tiles-and-sanitary-ware/*",
                element: <Products />,
            },
            {
                path: "electrics/*",
                element: <Products />,
            },
            {
                path: "services/*",
                element: <Products />,
            },
            {
                path: "furniture-details/*",
                element: <ProductDetails />,
            },
            {
                path: "tiles-and-sanitary-ware-details/*",
                element: <ProductDetails />,
            },
            {
                path: "electrics-details/*",
                element: <ProductDetails />,
            },
            {
                path: "services-details/*",
                element: <ProductDetails />,
            },
            // products end
            {
                path: 'blogs',
                element: <Blogs />,
            },
            {
                path: 'blogpost/*',
                element: <BlogPost />
            },
            {
                path: 'gallery',
                element: <Gallery />
            },
            {
                path: 'contact-us',
                element: <ContactUs />
            }
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'products',
                element: <AdminProducts />
            },
            {
                path: 'blogs',
                element: <AdminBlogs />
            },
            {
                path: 'add-blog',
                element: <AddBlog />,
            },
            {
                path: 'settings',
                element: <AdminSettings />
            },
            {
                path: '*',
                element: <h2>Admin 404 page!</h2>
            }
        ]
    },
    {
        path: "*",
        element: <h2>404 page!</h2>,
    },
]);

const Routing = () => {
    return <>
        <RouterProvider router={router} />
    </>
}

export default Routing;
