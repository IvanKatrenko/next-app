
import React, { useState, useContext, createContext } from 'react';

// definition for a single notification
export type Notification = {
    id: number;
    title: string;
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
    status: 'success' | 'error' | 'warning' | 'info';
}

type NotificationContextType = {
    notifications: Notification[];
    addNotification: (title: string, message: string, type: 'success' | 'error' | 'warning' | 'info') => void
    removeNotification: (id: number) => void;
    removeAllNotifications: () => void;
}

//create a notification context
const NotificationsContext = createContext<NotificationsContextType | undefined>(undefined);

//context provider to component (komponent ktory umozliwia uzycie danego contextu wewnatrz)
export const NotificationsProvider: React.FC = ({ children }) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [lastId, setLastId] = useState(0);
}

const generateId = () => {
    setLastId(lastId + 1);
    return lastId;
}

//- powinien zwracac state z notyfikacjami (type, message), mozliwosc dodania nowej wiadomosci, usuniecia jednej i usuniecia wszystkich 
//add new notification

const addNotification = (title: string, message: string, type: 'success' | 'error' | 'warning' | 'info') => {
    const NewNotification: Notification = { // create new notification
        title: title,
        message: message,
        type: type,
        status: 'success' // status: 'success' | 'error' | 'warning' | 'info'
    }
    setNotifications([...notifications, NewNotification]); // add new notification
}

//remove one notification

const removeNotification = (id: number) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
}

//remove all notifications

const removeAllNotifications = () => {
    setNotifications([]);
}

return (
    <NotificationsContext.Provider value={{ notifications, addNotification, removeNotification, removeAllNotifications }}>
    {children}
    </NotificationsContext.Provider>
)

