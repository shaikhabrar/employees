import React, { useState } from 'react';
import 'react-tabs/style/react-tabs.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CakeIcon from '@mui/icons-material/Cake';
import EventIcon from '@mui/icons-material/Event';
import { Link } from 'react-router-dom';
import "./birthday.css"

const Birthdays = () => {
  const [activeTab, setActiveTab] = useState('File Upload');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Add logic to handle the selected tab
  };

  return (
    <div className='birthdayContainer d-flex'>
      <div className="side-menu sideBar">
      <List component="nav">
        <Link to='/fileUploader'>
        <ListItem
          button
          selected={activeTab === 'Upload New File'}
          onClick={() => handleTabClick('File Upload')}
        >
          <ListItemIcon>
            <CloudUploadIcon />
          </ListItemIcon>
          <ListItemText primary="UPLOAD NEW FILE" />
        </ListItem></Link>
        <ListItem
          button
          selected={activeTab === 'Birthdays'}
          onClick={() => handleTabClick('Birthdays')}
        >
          <ListItemIcon>
            <CakeIcon />
          </ListItemIcon>
          <ListItemText primary="UPCOMING BIRTHDAYS" />
        </ListItem>
        <ListItem
          button
          selected={activeTab === 'Anniversary'}
          onClick={() => handleTabClick('Anniversary')}
        >
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary="UPCOMING ANNIVERSARY" />
        </ListItem>
      </List>
      </div>
      <div>
          <Tabs>
          <TabList>
            <Tab>Upto 7 Days</Tab>
            <Tab>Upto 14 Days</Tab>
            <Tab>Upto 1 Month</Tab>
          </TabList>
    
          <TabPanel>
            <h2>Content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Content 3</h2>
          </TabPanel>
        </Tabs>
        </div>
        </div>
 
  );
};


export default Birthdays;


