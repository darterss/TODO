import React from "react";

export default function ListItem ( {items, setItem, handleChange,completed, setCompleted} ){

    function handleDeleteItem(item){
        const newItems = items;
        const index = newItems.findIndex(i => i.id === item.id )
        newItems.splice(index,1)
        setItem([...newItems])
        if (item.checked === true) setCompleted(completed-1)
    }
    return (<>
        {items.map(item => (<li key={item.id} className={`listItem ${item.id}`}>
            <label className={'label'}>
                <input className={'checkbox'}
                       onChange={e => handleChange(e, item)}
                       type={'checkbox'}
                />
                {item.text}</label>
            <button onClick={() => handleDeleteItem(item)}>Del</button>
            <p>{item.showInfo && `Вы изменили задачу "${item.text}" ${item.date} на ${item.checked}`}</p>
        </li>))}
    </>)
}