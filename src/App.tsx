import 'antd/dist/reset.css';

import { BrowserRouter } from 'react-router-dom';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { queryClient } from './configurations/reactQuery/queryClient';
import { AppRoutes } from './routes/AppRoutes';
import { ThemeContextProvider } from './modules/layouts/ThemeContext';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeContextProvider>
          <AppRoutes />
        </ThemeContextProvider>
      </BrowserRouter>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
