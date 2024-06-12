// UserCreate.js
import React from 'react';
import { Create, SimpleForm, TextInput, ImageInput } from 'react-admin';

const UserCreate = (props) => {
  return (
    <Create title='Create a User' {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput source='email' />
        <ImageInput source="avatar" label="Avatar" accept="image/*">
          <TextInput source="avatar" />
        </ImageInput>
      </SimpleForm>
    </Create>
  );
}

export default UserCreate;
