import HomePage from './routes/homePage/homePage';
import ListPage from './routes/listPage/listPage';
import {Layout, RequireAuth} from './routes/layout/layout';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SinglePage from './routes/singlePage/singlePage';
import LoginPage from './routes/loginPage/loginPage';
import ProfilePage from './routes/profilePage/profilePage';
import RegisterPage from './routes/register/registerPage';
import ProfileUpdatePage from './routes/profileUpdatePage/profileUpdatePage';
import NewPostPage from './routes/newPostPage/newPostPage';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout/>
      ),
      children: [
        {
          path: "/",
          element: (
            <HomePage/>
          )
        },
        {
          path: "/list",
          element: (
            <ListPage/>
          )
        },
        {
          path: "/:id",
          element: (
            <SinglePage/>
          )
        },
        {
          path: "/login",
          element: (
            <LoginPage/>
          )
        },
        {
          path: "/register",
          element: (
            <RegisterPage/>
          )
        },
      ]
    },
    {
      path: "/",
      element: <RequireAuth/>,
      children: [
        {
          path: "/profile",
          element: (
            <ProfilePage/>
          )
        },
        {
          path: "/profile/update",
          element: (
            <ProfileUpdatePage/>
          )
        },
        {
          path: "/login",
          element: (
            <LoginPage/>
          )
        },
        {
          path: "/register",
          element: (
            <RegisterPage/>
          )
        },
        {
          path: "/add",
          element: (
            <NewPostPage/>
          )
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
