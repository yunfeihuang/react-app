import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(((item, i) => {
          return (<Route path={item.path} exact element={<item.component/>} key={i}></Route>)
        }))}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
