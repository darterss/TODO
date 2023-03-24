import React from "react";

export default function ListItem (props){
    return (<>
        {props.items.map(item => (<li key={item.id} className={`listItem ${item.id}`}>
            <label className={'label'}>
                <input className={'checkbox'}
                       onChange={e => props.handleChange(e, item)}
                       type={'checkbox'}
                />
                {item.text}</label>
            <p>{item.showInfo && `Вы изменили задачу "${item.text}" ${Date()} на ${item.checked}`}</p>
        </li>))}
    </>)
}