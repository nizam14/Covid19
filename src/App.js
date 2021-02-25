import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import MaterialDatatable from "material-datatable";
import axios from "axios";
import { Link, Route, Switch } from "react-router-dom";
import Flag from "react-world-flags";
import chart from "./chart";
import Table from "./table";
import More from "./More";
const App=(props)=> {
 
  return (
    <div>
      <Switch>
        <Route path="/chart" component={chart}></Route>
        <Route path="/more" component={More}></Route>
        <Route exact
          path="/"
          component={Table}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
