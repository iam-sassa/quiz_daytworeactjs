import React from "react";
import { Link, Outlet } from 'react-router-dom';
import { Layout } from "antd";
import { useNavigate } from 'react-router-dom';
import { Divider } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const posts = [
    {
        id: 1,
        name: 'Post one',
        content: 'Hello World'
    }, 
    {
        id: 2,
        name: 'Post Two',
        content: 'Different Id'
    },
    {
        id: 3,
        name: 'Post Three',
        content: 'Numeric post'
    }
];

const HomePage = () => {
    const navigate = useNavigate();

    const navigateToPost = (post) => {
        navigate(`/post/${post.id}`, {replace : true, state: { from: 'homepage' }});
    };

    return (
        <Layout>
            <Content style={{padding: '0px 50px', backgroundColor: '#EFEFEF'}}>
        <div>
            <ul>
        { posts.map( post => (
          <Link onClick={() => {navigateToPost(post.id)}}><li key={post.id}><h1>{post.name}{' '}</h1></li></Link>
        ))}
         <Divider />
      </ul>
      <
        </div>
        </Content>
        </Layout>
    );
};

export default HomePage;