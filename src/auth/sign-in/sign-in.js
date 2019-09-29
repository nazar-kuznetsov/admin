import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import Authorization from '../../components/authorization';
import { signIn, authorization } from '../services/action';
import {getUser} from '../services/selectors';

const SignIn = props => {

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      props.authorization(token);
    }
  }, []);

  const submit = data => {
    props.signIn(data);
  };

  if (props.user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Authorization
        title="Панель управление"
        link="Забыли пароль?"
        to="/forgot-password"
        label="Войти"
        submit={submit}
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: getUser(state)
  };
};

const mapDispatchToProps = {
  signIn,
  authorization
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

// export default function SignIn({ signIn, forgotPassword }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [resetValue, setResetValue] = useState('');


//   const changeEmail = e => {
//     setEmail(e.target.value);
//   };

//   const changePassword = e => {
//     setPassword(e.target.value);
//   };

//   const submitForm = e => {
//     e.preventDefault();
//     signIn({ email, password });
//   };

//   const forgoutPassword = ({target}) => {
//     setResetValue(target.value);
//   };

//   const sendEmailResetPasswort = e => {
//     e.preventDefault();
//     forgotPassword(resetValue);
//   };

//   return (
//     <div>
//         123
//     </div>
//   );
// }

