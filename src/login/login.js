import './login.css'
import { NavLink } from 'react-router-dom';

function Login () {
return (
    <main className='Login'>
        <header className='judul-login'>
        <h1>Hai!</h1>
        <h2>Silahkan Login</h2>
        </header>
        
        <section className='form-login'>
            <label>Email</label>
            <input></input>
            <label>Password</label>
            <input></input>
            <div className='button-login'>
                <button className='confirm'>LOGIN</button>
                <p>OR</p> 
                <NavLink to="/sign-up">
                <button className='notToday'>REGISTER</button>
                </NavLink> 
            </div>
            
                
        </section>
    </main>
)
}

export default Login;