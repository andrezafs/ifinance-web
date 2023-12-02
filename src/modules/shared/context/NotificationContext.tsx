import { notification } from 'antd';
import { NotificationInstance } from 'antd/es/notification/interface';
import { ReactNode, createContext, useContext } from 'react';

export type NotificationProviderProps = {
  children: ReactNode;
};

export type NotificationContextProps = {
  api: NotificationInstance;
};

const NotificationContext = createContext({} as NotificationContextProps);

export function NotificationProvider({ children }: NotificationProviderProps) {
  const [api, contextHolder] = notification.useNotification();

  return (
    <NotificationContext.Provider value={{ api }}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotificationContext() {
  const context = useContext(NotificationContext);

  if (Object.keys(context).length === 0) {
    throw new Error(
      'useNotificationContext must be used within a NotificationProvider',
    );
  }

  return context;
}
