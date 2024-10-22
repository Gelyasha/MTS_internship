import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import BooksPage from "../components/pages/BooksPage";
import ReadersPage from "../components/pages/ReadersPage";
import Page404 from "../components/pages/Page404";
import booksStore from "../store/booksStore";
import readersStore from "../store/readersStore";

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout>
                <BooksPage books={booksStore.books} />
            </Layout>
        ),
    },
    {
        path: '/readers',
        element: (
            <Layout>
                <ReadersPage readers={readersStore.readers} />
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