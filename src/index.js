import { createRoot } from "react-dom/client";
import Layout from "./Layout";
import Home from "./Home";

import BookInfo from "./BookInfo";
import { CDBFooter } from "cdbreact";
import BooksAdd from "./BooksAdd";
import BooksEdit from "./BooksEdit";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/book/:id" element={<BookInfo />}></Route>
        <Route path="/book/add" element={<BooksAdd />}></Route>
        <Route path="/book/edit/:id" element={<BooksEdit />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
