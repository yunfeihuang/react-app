import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Context } from '../../reducer/global'

/** @jsxImportSource @emotion/react */
export default function (props) {
  const { state, dispatch } = useContext(Context);
  return (<div css={{fontSize: '16px'}} >
    <Link to="/">Home</Link><br/>
    Mine Page <br/>
    user: {JSON.stringify(state.user)}
  </div>)
};
