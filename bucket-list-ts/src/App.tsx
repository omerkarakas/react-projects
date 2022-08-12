import React, { useState } from 'react';
import { DesktopOutlined } from '@ant-design/icons';

import './App.css';
import { Layout } from 'antd';
import BucketList from './components/BucketList';
import AddBucketList from './components/AddBucketList';

const { Header, Footer, Sider, Content } = Layout;

const initialState = [
  {
    what: 'Go to Bahamas',
    url: 'https://a.cdn-hotels.com/gdcs/production107/d1657/ce115d52-5bd1-4f78-8a2a-6f1ec518d239.jpg',
    lastAge: 55,
    notes:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dignissimos quidem itaque debitis inventore consequuntur fugit iusto assumenda ex quibusdam?',
  },
  {
    what: 'Visit Rome',
    url: 'https://res.cloudinary.com/https-www-isango-com/image/upload/f_auto/t_m_Prod/v7682/europe/italy/rome/1082.jpg',
    lastAge: 50,
    notes:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore pariatur dolorum earum. Libero ipsa quisquam aliquam aliquid molestiae explicabo accusamus.',
  },
];

export interface IState {
  list: {
    what: string;
    url: string;
    lastAge: number;
    notes?: string;
  }[];
}

function App() {
  const [list, setList] = useState<IState['list']>(initialState);

  return (
    <div className="App">
      <Layout>
        <Header>
          <h1>Bucketlist Before You Turn Sixty</h1>
        </Header>
        <Layout>
          <Content>
            <BucketList list={list} />
            <AddBucketList list={list} setList={setList} />
          </Content>
        </Layout>
        <Footer>OKarakas design &copy; </Footer>
      </Layout>
    </div>
  );
}

export default App;
