import React from 'react';
import { Layout, Typography } from 'antd';


const { Header } = Layout;
const { Link } = Typography;

const NavBar: React.FC = () => {
    
    return (
        <Header style={{ backgroundColor: '#17123f', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: "94px", margin: "auto" }}>
            <Link href='/home' style={{ color: 'white', fontSize: '16px' }}>
               <h1>navbar clayton borges dev</h1>
                {/* <img src={logo} style={{  maxHeight: "48px", maxWidth: "64px", marginLeft: "17px", paddingRight: 3 }} /> */}
            </Link>
        </Header>
    );
};

export default NavBar;
