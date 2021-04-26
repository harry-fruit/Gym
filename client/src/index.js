import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom"

import { App } from "./app/app"
import "./sass/index.scss"

render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
, document.querySelector("#root"))
