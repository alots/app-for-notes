import React,{useState} from 'react';
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import MainLogo from './MainLogo';
import { routes } from '../lib/config/routes';

import './style.scss';  

const { Header, Sider, Content } = Layout;


const MainLayout: React.FC = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);

    const toogle = () => {
        setCollapsed(!collapsed);
    }

    return (
        <Layout className='main-layout'>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className='main-layout__logo'>
                    <MainLogo collapsed={collapsed}/>
                </div>
                <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
                    <Menu.Item key='1' icon={<UserOutlined />}>
                        <Link to={routes.notesList} className='app-header-item'> Список заметок </Link>
                    </Menu.Item>
                    <Menu.Item key='2' icon={<VideoCameraOutlined />}>
                        <Link to={routes.newnotes} className='app-header-item'> Добавить заметку </Link>
                    </Menu.Item>

                </Menu>
            </Sider>
            <Layout>
                <Header className='main-layout__header' style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toogle,
                    })}
                </Header>
                <Content
                    className='main-layout__content'
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    }}
                >
                {children}
                </Content>
            </Layout>
        </Layout>
    );
}

export default MainLayout;