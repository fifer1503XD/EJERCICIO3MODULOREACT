import React from "react";
import Icon from './icon'

export function Sidebar(props) {
  return( <div className="sidebar">
    {props.icons.map((icons,i) =>{
                        console.log(icons.icon)
                        return (
                          <Icon key={i} iconUrl={icons.icon}  
                          title={icons.title}/>
                        )}
        )}
          </div>   ) 
}
