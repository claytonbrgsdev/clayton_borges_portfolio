import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../Config/Redux/Hooks/hooks'
import { signOutUser } from '../../../Config/Redux/Slices/authSlice';
import { Layout, Button, Typography, Space } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Text, Link } = Typography;

const NavBar: React.FC = () => {
    const dispatch = useAppDispatch();
    const isAuthenticated = useAppSelector(state => state.auth.authenticated);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        dispatch(signOutUser());
    };

    return (
        <Header style={{ backgroundColor: '#17123f', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: "94px", margin: "auto" }}>
            <Link href='/home' style={{ color: 'white', fontSize: '16px' }}>
                {/* <img src={logo} style={{  maxHeight: "48px", maxWidth: "64px", marginLeft: "17px", paddingRight: 3 }} /> */}
            </Link>
            {isAuthenticated && (
                <Space>
                    <Button type="text" onClick={handleLogout}>
                        Sair da Conta
                    </Button>
                </Space>
            )}
        </Header>
    );
};

export default NavBar;
