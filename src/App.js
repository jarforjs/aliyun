import React from 'react';
import { Button, Layout , Input, Card, Carousel } from 'antd';
import Container from "./components/Container";
import ContentPositionItem from './components/ContentPositionItem'
import './App.css';

const { Header, Content, Footer } = Layout

const footerStyle = {
  textAlign: 'center',
  padding: 0,
}

let contentPositionArr = []
for (let i = 1; i <= 100; i++) {
  contentPositionArr.push({
    title: `${i}、蚂蚁金服-数据挖掘工程师/专家/高级专家v蚂蚁金服-数据挖掘工程师/专家/高级专家蚂蚁金服-数据挖掘工程师/专家/高级专家`,
    address: '上海',
    time: `${i+5}小时`
  })
}

function App() {
  return (
    <Layout>
      <Header style={{ padding: 0, height: 54 }}>
        <Container renderer={<div className="header-inner" style={{ width: 1000 }}/>}>
          <div className="header-left">
            <div>
              <a href="https://job.alibaba.com/zhaopin/index.htm" style={{ marginRight: 5 }}>
                <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" height="20" alt="" />
              </a>| 社招官网
            </div>
            <div>
              <ul>
                <li className="active">首页</li>
                <li>社会招聘</li>
                <li>校园招聘</li>
                <li>了解阿里</li>
                <li>个人中心</li>
              </ul>
            </div>
          </div>
          <div className="header-right">
            欢迎来到阿里巴巴集团招聘！ 登录 | 注册
          </div>
        </Container>
      </Header>
      <Content style={{ backgroundColor: 'white' }}>
        <div style={{ position: 'relative', height: 478 }}>
          <img src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png" style={{ verticalAlign: 'middle', width: 1440, height: 478}} alt="" />
          <div className="content-inner">
            <Container renderer={<div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexFlow: 'column' }}/>}>
              <div className="content-desc">
                <p style={{ width: 490 }}>
                  If not now, when?<br/>
                  If not me, who?<br/>
                  <span style={{ fontSize: 34}}>此时此刻，非我莫属！</span>
                </p>
              </div>
              <div className="content-form">
                <div className="bg"/>
                <Input placeholder="请输入职位关键词"/><Button>搜索</Button>
              </div>
            </Container>
          </div>
        </div>
        <Container renderer={<div style={{ width: 1180, maxWidth: 1180, margin: '32px auto', display: 'flex', justifyContent: 'space-between' }}/>}>
          <Card title="最新职位" extra={<a href="#">更多</a>} className="content-position" style={{ height: 300, width: 850, overflow: "hidden" }}>
            <Carousel infinite autoplay={true} slidesToShow={5} slidesToScroll={5} dots={false} dotPosition="right" style={{ display: 'flex', justifyContent: 'space-between' }}>
              {
                contentPositionArr.map((item, index) => (
                  <ContentPositionItem item={item} index={index} key={index}/>
                ))
              }
            </Carousel>
          </Card>
          <div className="content-company">
            <div style={{background: 'url(https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png)', backgroundSize: '179px 68px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="content-company-img"/>
            <div style={{background: 'url(https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png)', backgroundSize: '179px 68px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="content-company-img"/>
          </div>
        </Container>
      </Content>
      <Footer style={footerStyle}>
        <Container renderer={<div className="footer-inner" style={{ maxWidth: '100%' }} />}>
          阿里巴巴集团 Copyright ©1999-2019 版权所有
        </Container>
      </Footer>
    </Layout>
  );
}

export default App;
