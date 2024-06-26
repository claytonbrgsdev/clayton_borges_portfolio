import React, { useState } from 'react';
import { Tabs } from 'antd';
import { Outlet } from 'react-router-dom';
import StockUpdate from '../StockUpdate/StockUpdate';
import AddProduct from '../AddProducts/AddProduct';

const { TabPane } = Tabs;

const UpdateStockContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('1');

  const handleChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <div style={{ minHeight: 360 }}>
      <div>
        <Title text='Atualizar Estoque' />
      </div>
      <Tabs defaultActiveKey="1" activeKey={activeTab} onChange={handleChange}  style={{ margin: "0 auto", maxWidth: 1024 }}>
        <TabPane tab="Atualizar produto" key="1">
          <Outlet context={{ tab: 'Tab 1' }} />
          <div>
            <StockUpdate />
          </div>
        </TabPane>
        <TabPane tab="Adicionar novo produto" key="2">
          <Outlet context={{ tab: 'Tab 2' }} />
          <div>
            <AddProduct />
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default UpdateStockContainer;
