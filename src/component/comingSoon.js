import './comingSoon.css';
import LogoEPW from './asset/Group 20.png';
import Asset1 from './asset/Asset 2@300x-01.png';
import Asset2 from './asset/140z_eco-01.png';
import Asset3 from './asset/perawanan.png';


function comingSoon () {
return (
    <div className='coming-soon'>
        <div className='awan'>
           <img src={Asset3} className='asset-awan' alt=''/> 
        </div>
        
        <div className='coming-soon-container'>
            <img src={LogoEPW} className='Logo-1' alt='' />
            <div className='coming-soon-name1'>
                <h1>EPW 2024</h1>
                <h1>COMING SOON</h1> 
            </div>
            
            
        </div>
        
        <div className='coming-soon-asset'>
            <img src={Asset1} className='asset1' alt=''/>
            <img src={Asset2} className='asset2' alt=''/>
        </div>

    </div>
)

}

export default comingSoon;