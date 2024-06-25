import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddSheet from "./components/sheet/add-sheet.component";
import Sheet from "./components/sheet/sheet.component";
import SheetsList from "./components/sheet/sheet-list.component";

import AddOrigin from "./components/origin/add-origin.component";
import OriginsList from "./components/origin/origin-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/sheets" className="navbar-brand">
            Compagnum App
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/sheets"} className="nav-link">
                Fiches Personnages
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/sheets/add"} className="nav-link">
                Nouvelles Fiche
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to={"/origins/add"} className="nav-link">
                Nouvelles Origines
              </Link>
            </li> */}
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<SheetsList />} />
            <Route path="/sheets" element={<SheetsList />} />
            <Route path="/sheets/add" element={<AddSheet />} />
            <Route path="/sheets/:id" element={<Sheet />} />
            <Route path="/origins/add" element={<AddOrigin />} />
            <Route path="/origins" element={<OriginsList />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
