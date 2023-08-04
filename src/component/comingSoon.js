import './comingSoon.css';
import LogoEPW from './asset/Group 20.png';
import Asset1 from './asset/Asset 2@300x-01.png';
import Asset2 from './asset/Asset 1@300x-01.png';


function comingSoon () {
return (
    <div className='coming-soon'>
        <div className='coming-soon-container'>
            <img src={LogoEPW} className='Logo' alt='' />
            <div className='coming-soon-name1'>
                <h1>EPW 2024</h1>
                <h1>COMING SOON</h1> 
            </div>
            <div className='coming-soon-name2'>
                <h1>EPW 2024</h1>
                <h1>COMING SOON</h1> 
            </div>
        </div>
        <div className='coming-soon-asset'>
            <img src={Asset1} className='asset1' alt=''/>
            <img src={Asset2} className='asset1' alt=''/>
        </div>

    </div>
)

}

export default comingSoon;