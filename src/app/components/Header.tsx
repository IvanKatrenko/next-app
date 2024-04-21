import React, { useState } from 'react';
import { useNotifications } from '@/context/notificationsContext';

const Header: React.FC = () => {

const [message, setMessage] = useState<string>('');
const [type, setType] = useState<'success' | 'error' | 'warning' | 'info'>('success');
const [addNotification] = useNotifications();


//handle form submit
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addNotification(message, type);
    };

//handle message change
const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    };

//handle type change and message change 
const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value as 'success' | 'error' | 'warning' | 'info');
    };

//handle add notification click
const handleAddNotification = () => {
    addNotification(message, type);
    setMessage('');
    };

return (
    <div className="header">
      <input type="text" value={message} onChange={handleMessageChange} />
      <label>
        <input 
            type="radio" 
            value="info" 
            checked={type === 'info'} 
            onChange={handleTypeChange} />
        Info
      </label>
      <label>
        <input 
            type="radio" 
            value="success" 
            checked={type === 'success'} 
            onChange={handleTypeChange} />
        Success
      </label>
      <label>
        <input 
            type="radio" 
            value="warning" 
            checked={type === 'warning'} 
            onChange={handleTypeChange} />
        Warning
      </label>
      <label>
        <input 
            type="radio" 
            value="danger" 
            checked={type === 'danger'} 
            onChange={handleTypeChange} />
        Danger
      </label>
      <button 
            type="submit" 
            onClick={handleAddNotification}>Add Notification</button>
    </div>
    );
};


export default Header;