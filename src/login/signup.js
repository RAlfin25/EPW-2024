import './login.css'
import { NavLink } from 'react-router-dom';

function SignUp () {
return (
    <main className='SignUp'>
        <header className='judul-signup'>
        <h1>Silahkan Lengkapi Data Dirimu</h1>
        </header>
        
        <section className='form-signup'>
            <label>Email</label>
            <input></input>
            <label>Nama Lengkap</label>
            <input></input>
            <label>Password</label>
            <input></input>

            
            <div className='button-login'>
                <button className='confirm'>REGISTER</button>
                <p>OR</p> 
                <NavLink to="/login">
                <button className='notToday'>LOGIN</button>
                </NavLink> 
            </div>
        </section>
    </main>
)}

 export default SignUp ;