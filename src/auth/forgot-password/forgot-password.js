import React from 'react';
import Authorization from '../../components/authorization';

const ForgotPassword = () => {

  const submit = ({ email }) => {
    console.log({email});
  };

  return (
    <>
      <Authorization
        title="Восстановление пароля"
        link="← Назад"
        to="/login"
        inputPassword={false}
        submit={submit}
        label="Отправить"
      />
    </>
  );
};

export default ForgotPassword;
