import React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton, ImageField } from 'react-admin';
// import './UserList.css'; // Import CSS file

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid className="user-list"> {/* Add class name */}
        <TextField source='id' />
        <ImageField source='avatar.src' title='Avatar' className="avatar-img" /> 
        <TextField source='name' />
        <EmailField source='email' />
        <EditButton basePath='/users' />
        <DeleteButton basePath='/users' />
      </Datagrid>
    </List>
  );
}

export default UserList;
