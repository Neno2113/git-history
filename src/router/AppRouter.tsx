import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { HomeView, BackendView } from "../views";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <HomeView />},
            { path: '/backend', element: <BackendView />}
        ]
    }
])



