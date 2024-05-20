import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from "./App.jsx";
import './index.css'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />} />
    )
)
  
ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);