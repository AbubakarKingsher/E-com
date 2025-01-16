import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import CreateProduct from "./components/CreateProduct";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="h-screen w-full flex">
      <BrowserRouter basename="/E-com">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/details/:id`} element={<Details />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
