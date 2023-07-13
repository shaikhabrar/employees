import React, { useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import Tabspanel from './tabs';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CakeIcon from '@mui/icons-material/Cake';
import EventIcon from '@mui/icons-material/Event';
import { Link } from 'react-router-dom';
import './birthday.css';

const Birthdays = () => {
  const [activeTab, setActiveTab] = useState('File Upload');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Add logic to handle the selected tab
  };

  return (
    <div className='birthdayContainer d-flex grayBackground mx-auto'>
      <div className="side-menu sideBar">
      <List component="nav">
        <Link to='/fileUploader'>
        <ListItem
          button
          selected={activeTab === 'Upload New File'}
          onClick={() => handleTabClick('File Upload')}
        >
          <ListItemIcon >
            <CloudUploadIcon className='icon'/>
          </ListItemIcon>
          <ListItemText primary="UPLOAD NEW FILE" />
        </ListItem></Link>
        <ListItem
          button
          selected={activeTab === 'Birthdays'}
          onClick={() => handleTabClick('Birthdays')}
        >
          <ListItemIcon>
            <CakeIcon className='icon'/>
          </ListItemIcon>
          <ListItemText primary="UPCOMING BIRTHDAYS" />
        </ListItem>
        <ListItem
          button
          selected={activeTab === 'Anniversary'}
          onClick={() => handleTabClick('Anniversary')}
        >
          <ListItemIcon>
            <EventIcon className='icon'/>
          </ListItemIcon>
          <ListItemText primary="UPCOMING ANNIVERSARY" />
        </ListItem>
      </List>
      </div>
      <div className='tabContainer'>
          <Tabspanel/>
        </div>
        </div>
 
  );
};


export default Birthdays;
