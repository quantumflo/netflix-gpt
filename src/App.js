import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import Browse from "./components/Browse";
import Login from "./components/Login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import GptSearchPage from "./components/GptSearchPage";
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
  },
  {
    path: "gpt-search",
    element: (
      <ProtectedRoute>
        <GptSearchPage />
      </ProtectedRoute>
    ),
  },
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
