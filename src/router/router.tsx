import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import BooksPage from "../components/pages/BooksPage";
import ReadersPage from "../components/pages/ReadersPage";
import Page404 from "../components/pages/Page404";

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout>
                <BooksPage />
            </Layout>
        ),
    },
    {
        path: '/readers',
        element: (
            <Layout>
                <ReadersPage />
            </Layout>
        ),
    },
    {
        path: '*',
        element: (
            <Layout>
                <Page404 />
            </Layout>
        ),
    }
])

export default router;