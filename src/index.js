import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import Page404 from './components/Pagina404'
import Home from './pages/Home';
import CadastroCategoria from './pages/cadastro/categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route  path="/" component={Home} exact/>
      <Route  path="/cadastro/video" component={CadastroVideo}/>
      <Route  path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={Page404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);