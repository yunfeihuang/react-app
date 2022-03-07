import React from 'react';
import Router from './router'
import './App.scss'
import { ConfigProvider } from 'antd'
import 'antd/dist/antd.css'
import { Provider } from './reducer/global'

function App() {
  return (
    <ConfigProvider>
      <Provider>
        <Router></Router>
      </Provider>
    </ConfigProvider>
  );
}

export default App;
