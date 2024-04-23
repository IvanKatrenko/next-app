
import React from 'react';
import { useNotifications } from '@/context/notificationsContext';
import { Notification } from '@/context/notificationsContext';

const Notifications: React.FC = () => {
    const { notifications } = useNotifications();


return (
    <div className="notifications__wrapper">
      {notifications.map(notification => (
        <Notification key={notification.id} type={notification.type} message={notification.message} />
      ))}
    </div>
  );
};

export default Notifications;