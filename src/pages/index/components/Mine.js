import React, {useContext} from 'react';
import { Context } from '../../mine/reducer.js'

/** @jsxImportSource @emotion/react */
export default function (props) {
  const { state, dispatch } = useContext(Context);
  return (<div css={{fontSize: '16px'}} >
    Mine Component state: <br/>
    {JSON.stringify(state)}
  </div>)
};
