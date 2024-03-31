"use client";

import {
  QueryClient,
  QueryClientProvider,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { useState } from "react";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const TanstackQueryProvider = ({ children }) => {
  // const queryClient = new QueryClient();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          // queries: {
          //   // With SSR, we usually want to set some default staleTime
          //   // above 0 to avoid refetching immediately on the client
          //   staleTime: 60 * 1000,
          // },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {children}
      </HydrationBoundary>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};

export default TanstackQueryProvider;
