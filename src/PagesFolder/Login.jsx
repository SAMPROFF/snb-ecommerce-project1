import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  console.log()

  function handleSubmit(e) {
    e.preventDefault();

    // const loggedUser = JSON.parse(localStorage.getItem('user'));
    // console.log(loggedUser);

    if (email === '' && password === '') {
      localStorage.setItem('isLoggedIn', true);
      // localStorage.setI

      navigate('/');
    } else {
      toast.error('Wrong username or password');
    }
  }

  return (
    <div className='form-container'>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-input'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='form-input'>
          <button className='btn btn-block'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;