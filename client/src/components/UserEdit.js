// UserEdit.js
import React from 'react';
import { Edit, SimpleForm, TextInput, ImageInput } from 'react-admin';

const UserEdit = (props) => {
  return (
    <Edit title='Edit User' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
        <TextInput source='email' />
        <ImageInput source="avatar" label="Avatar" accept="image/*">
          <TextInput source="avatar" />
        </ImageInput>
      </SimpleForm>
    </Edit>
  );
}

export default UserEdit;
