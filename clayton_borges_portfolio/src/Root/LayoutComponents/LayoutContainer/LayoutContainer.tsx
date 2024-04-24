import { Outlet } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import { Layout } from 'antd';
import './Layout.css';
import 'antd/dist/reset.css';
import Footer from "../Footer/Footer";

const { Header, Content } = Layout;

export default function LayoutContainer() {

    return (
        <>
            <Layout>
                <Header>
                    <NavBar />
                </Header>
                <Content style={{ padding: '16px', display: 'flex' }}>
                    <div style={{ flex: 1 }}>
                        <Outlet />
                    </div>
                </Content>
                <Footer/>
            </Layout>
        </>
    );
}
