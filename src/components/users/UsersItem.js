import React from 'react';

const UsersItem = (props) =>{

    const deleteUser = () =>{
        props.onDeleteItem(props.id)
    }
return (
    <li onClick={deleteUser}>
     {props.children}
    </li>
)
}

export default UsersItem