import 'antd/dist/reset.css';

import { BrowserRouter } from 'react-router-dom';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { queryClient } from './configurations/reactQuery/queryClient';
import { AppRoutes } from './routes/AppRoutes';
import { NotificationProvider } from './modules/shared/context/NotificationContext';
import { ThemeContextProvider } from './modules/shared/context/ThemeContext';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeContextProvider>
          <NotificationProvider>
            <AppRoutes />
          </NotificationProvider>
        </ThemeContextProvider>
      </BrowserRouter>

      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
    </QueryClientProvider>
  );
}
