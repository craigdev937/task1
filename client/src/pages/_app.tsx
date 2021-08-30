import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";

const QClient = new QueryClient();

export default function
App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={QClient}>
            <React.StrictMode>
                <Component {...pageProps} />
                <ReactQueryDevtools initialIsOpen={false} />
            </React.StrictMode>
        </QueryClientProvider>
    );
};




