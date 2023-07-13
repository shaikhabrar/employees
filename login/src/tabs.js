import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Tabspanel =()=>{
    return (
        <div>
          <h1>Tabs</h1>
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
        )
}
export default Tabspanel