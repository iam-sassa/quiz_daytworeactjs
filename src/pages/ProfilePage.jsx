import React from "react";
import { Link, Outlet } from 'react-router-dom';
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const ProfilePage = () => {
    return (
        <Layout>
            <Content style={{padding: '0px 50px', backgroundColor: '#EFEFEF'}}>
        <div>
            <h1 style={{fontSize: '50px'}}>This is DetailPage</h1>
            <h1>This is Profile page of Sassa</h1>

<div style={{ display: 'flex', gap: '20px'}}>
    <Link to='address'>Address</Link>
    <Link to='hobby'>Hobby</Link>
</div>

<Outlet/>
        </div>
        </Content>
        </Layout>
    );
};


export default ProfilePage;