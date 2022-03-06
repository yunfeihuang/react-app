import React, {useContext} from 'react';
import { Context } from '../../reducer/index.js'
import {Button} from 'antd'

/** @jsxImportSource @emotion/react */
export default function (props) {
  const { state, dispatch } = useContext(Context);
  return (<div css={{fontSize: '16px'}} >
    Index page<br/>count：{state.count}<br/>
    <Button onClick={() => {dispatch({type: 'increment'})}}>+</Button>
    <Button onClick={() => {dispatch({type: 'decrement'})}}>-</Button>
  </div>)
};
