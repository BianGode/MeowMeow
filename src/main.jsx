import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Login from "./routes/Login.tsx";
import Register from "./routes/Register.tsx";
import Cats from "./routes/Cats.tsx";
import CreateCat from "./routes/CreateCat.tsx";
import {
  BrowserRouter,
  createBrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "Cats",
        element: <Cats />,
      },
      {
        path: "createCat",
        element: <CreateCat />,
      },
    ],
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "Register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="cats" element={<Cats />} />
        <Route path="createcat" element={<CreateCat />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);
