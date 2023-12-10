import { NextUIProvider } from "@nextui-org/react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Items from "./pages/Items";

const Layout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "items",
                element: <Items />,
            },
        ],
    },
]);

function App() {
    return (
        <NextUIProvider>
            <RouterProvider router={router} />
        </NextUIProvider>
    );
}

export default App;
