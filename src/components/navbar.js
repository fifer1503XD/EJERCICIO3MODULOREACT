import React from "react";
import Logo from './logo'
import SearchBar from './search-bar';
import Login from "./login";
import Icon from "./icon";
import videocam from "../icons/iconfinder_ic_videocam_48px_3669181.png";
import module from "../icons/iconfinder_ic_view_module_48px_3669149.png";
import alert from "../icons/iconfinder_icon-ios7-bell_211694.png";



/* Importar los componentes */

/* Importar los iconos */

export default function Navbar(props) {
  return <div className="navbar">
    <Logo logo="https://i.ytimg.com/vi/QveDZzMwvVQ/maxresdefault.jpg" />
    <SearchBar />
    <Icon  iconUrl={videocam}
           title="Grabar"/>
    <Icon  iconUrl={module}
           title="vista"/>
    <Icon  iconUrl={alert}
           title="vista"/>
    
    <Login />

  </div>;
}
