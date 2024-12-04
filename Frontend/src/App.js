import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import ShopList from './components/ShopList';
import Cart from './components/Cart';
import Invoice from './components/Invoice';
import Footer from './components/Footer';
import Error from './components/Error';
import Signin from './components/Signin';
import Signup from './components/Signup';
// import Team from './components/Team';
import About from './components/About'
import Profile from './components/Profile';
import { Provider } from 'react-redux';
import store from './utils/store';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import AddBook from './components/AddBook';
import BookFair from './components/BookFair';
import Subscription from './components/Subscription';
import { Helmet } from 'react-helmet'
function App() {
  return (
    <>
      <Helmet>
        <meta name="description" content="OB&S offers a wide selection of books for browsing and purchase. Explore curated collections across genres and authors with a seamless and secure experience." />
        <meta name="keywords" content="online book exhibition, book sales, buy books online, book collections, online book store, book genres, secure book purchase" />
      </Helmet>
      <Provider store={store}>
        <div className=''>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<MainContainer />} />
              <Route path="shop" element={<ShopList />} />
              <Route path="cart" element={<Cart />} />
              <Route path="signin" element={<Signin />} />
              <Route path="signup" element={<Signup />} />
              <Route path="admin" element={<AdminLogin />} />
              <Route path="addBook" element={<AddBook />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="subscription" element={<Subscription />} />
              <Route path="bookFair" element={<BookFair />} />
              <Route path="about" element={<About />} />
              <Route path="profile" element={<Profile />} />
              <Route path="invoice" element={<Invoice />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </Provider>
    </>
  );
}

export default App;
