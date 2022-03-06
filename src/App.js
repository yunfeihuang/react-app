import React from 'react';
import Router from './router'
import './App.scss'
import { ConfigProvider } from 'antd'
import 'antd/dist/antd.css'
// import { Provider } from './store'

function App() {
  return (
    <ConfigProvider>
      <Router></Router>
    </ConfigProvider>
  );
}

export default App;
