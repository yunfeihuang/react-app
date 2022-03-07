import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import { Context } from '../../store/index.js'
import {Button} from 'antd'

/** @jsxImportSource @emotion/react */
export default function (props) {
  const { state, dispatch } = useContext(Context);
  return (<div css={{fontSize: '16px'}} >
    <Link to="/mine">Mine</Link><br/>
    Index Page<br/>count：{state.count}<br/>
    <Button onClick={() => {dispatch({type: 'increment'})}}>+</Button>
    <Button onClick={() => {dispatch({type: 'decrement'})}}>-</Button>
  </div>)
};
