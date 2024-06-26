import React, { useState } from 'react';
import { Tabs } from 'antd';
import { Outlet } from 'react-router-dom';
import ViewProductsList from '../ViewProducts/ViewProductsList';
import ListExport from '../ListExport/ListExport';

const { TabPane } = Tabs;

const ConsultStockContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('1');
  const handleChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <div style={{  minHeight: 360 }}>
      <div>
        <Title text='Consultar Estoque' />
      </div>
      <Tabs defaultActiveKey="1" activeKey={activeTab} onChange={handleChange} style={{ margin: "0 auto", maxWidth: 1024 }}>
        <TabPane tab="Tabela" key="1">
          <Outlet context={{ tab: 'Tab 1' }} />
          <div>
            <ViewProductsList />
          </div>
        </TabPane>
        <TabPane tab="Lista" key="2">
          <Outlet context={{ tab: 'Tab 2' }} />
          <ListExport />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ConsultStockContainer;
