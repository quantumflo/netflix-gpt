import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import Browse from "./components/Browse";
import Login from "./components/Login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
  }
]);

const App = () => {

  return (
    <Provider store={appStore}>
      <RouterProvider router={router}>
        <Body />
      </RouterProvider>
    </Provider>
  );
};

export default App;
