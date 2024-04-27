import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import ShopList from './components/ShopList';
import Cart from './components/Cart';
import Invoice from './components/Invoice';
import Footer from './components/Footer';

const appRouter = createBrowserRouter([{
  path: '/',
  element: <Body />,
  children: [
    {
      path: '/',
      element: <MainContainer />
    },
    {
      path: 'shop',
      element: <ShopList />
    },
    {
      path: 'cart',
      element: <Cart />
    },
    {
      path: 'invoice',
      element: <Invoice />
    }
  ]

}])
function App() {
  return (
    <div className=''>
      <Header />
      <RouterProvider router={appRouter} />
      <Footer />
    </div>
  );
}

export default App;
