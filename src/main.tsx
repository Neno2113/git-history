import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { RouterProvider } from 'react-router-dom';
import theme from './theme/theme.ts';
import { router } from './router/AppRouter.tsx';



const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={ theme }>
      <QueryClientProvider client={ queryClient }>
        <ReactQueryDevtools />
        <RouterProvider router={ router } />      
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
