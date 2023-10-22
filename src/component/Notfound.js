import './Notfound.css';
import Building from './asset/image 32.png';

function NotFound () {
    return (
        <div className="container-notfound">
            <div className='notfound'>
              <img src={Building} className='building' alt=''/> 
              <div className='text-notfound'>
                <h1>404</h1>
                <h2>Page Not Found</h2> 
              <p>Oops... something is wrong</p> 
              </div>
              
            </div>
            
        </div>
    )
}

export default NotFound;