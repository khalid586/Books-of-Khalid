import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../Pages/HomePage';
import ErrorPage from '../Pages/ErrorPage';
import ListedBooks from '../Pages/ListedBooks';
import Book from '../Pages/Book';
import HistoryPage from '../Pages/HistoryPage';
import Developer from '../Pages/Developer';
import ReadlingList from '../Components/ReadlingList';
import Wishlist from '../Components/Wishlist';
import PagesToRead from '../Pages/PagesToRead';
import WishlistPage from '../Pages/WishlistPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<HomePage></HomePage>,
        loader:() => fetch('/books.json'),
      },
      {
        path:'/listed_books',
        element:<ListedBooks></ListedBooks>,
        loader:() => fetch('/books.json'),
        children:[
          {
              path:'',
              element:<ReadlingList></ReadlingList>,
          },
          {
            path: 'wishlist', 
            element: <Wishlist></Wishlist>, 
          },
        ]
      },
      {
        path:'/developer',
        element:<Developer></Developer>,
        loader:() => fetch('/books.json'),
      },
      {
        path:'/history',
        element:<HistoryPage></HistoryPage>,
        loader:() => fetch('/books.json'),
      },
      {
        path:'/pages_to_read',
        element:<PagesToRead></PagesToRead>,
        loader:() => fetch('/books.json'),
      },
      {
        path:'/wishlist',
        element:<WishlistPage></WishlistPage>,
        loader:() => fetch('/books.json'),
      },
      {
        path:'/login',
        element:<LoginPage></LoginPage>
      },
      {
        path:'/register',
        element:<RegisterPage></RegisterPage>
      },
      {
        path:'/book/:id',
        element:<Book></Book>,
        loader:() => fetch('/books.json'),
      },
    ]
  },
]);

export default router;
