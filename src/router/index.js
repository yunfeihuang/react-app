import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes'

const renderRoute = (array) => {
  return routes.map(((item, i) => {
    if (item.children && item.children.length) {
      return (<Route path={item.path} exact element={<item.component/>} key={i}>
        {renderRoute(item.children)}
      </Route>)
    } else {
      return (<Route path={item.path} exact element={<item.component/>} key={i}></Route>)
    }
  }))
}
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {renderRoute(routes)}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
