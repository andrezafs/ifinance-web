import { ConfigProvider, theme } from 'antd';
import 'antd/dist/reset.css';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { queryClient } from './configurations/reactQuery/queryClient';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ConfigProvider
          theme={{
            algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
          }}
        >
          <AppRoutes />
        </ConfigProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
