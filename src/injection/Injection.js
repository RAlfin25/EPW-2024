import './injection.css';
import building from './asset-Inj/Asset 1@300x green.png'
import prizepool1 from './asset-Inj/Group 282.png'
import prizepool2 from './asset-Inj/Group 227.png'
import prizepool3 from './asset-Inj/Group 226.png'
import prizepool4 from './asset-Inj/Group 202.png'
import timelineInj from './asset-Inj/Group 221.svg'
import city from './asset-Inj/Frame 39.svg'
import road from './asset-Inj/Group 283.svg'
import {Link, NavLink } from 'react-router-dom';



function Injection () {
    return (
        <div className="Injection">
            <section className='Judul-Inj'>
                <div className='Judul-Inj-container'>
                    <h1>INJECTION</h1>
                    <p>Open Registration</p>
                    <p>Daftarkan Tim mu Sekarang!</p>
                </div>     
            </section>
            <section className='Deskripsi-Inj'>
                
                <div className='box-desk-inj'>
                    <div className='build-inj'>
                    <img className='build-inj-img' src={building} alt=''/>
                </div>
                <div className='txt-judul-inj'>
                    <h1>
                        INJECTION
                    </h1>
                </div>
                <div className='txt-deskripsi-inj'>
                    <p>
                        Science Project and Innovation (INJECTION) merupakan kompetisi 
                        karya tulis ilmiah  bagi SMA/SMK Sederajat dan mahasiswa/i perguruan 
                        tinggi yang dapat dijadikan salah satu wadah bagi para generasi penerus 
                        bangsa yang inovatif dan kreatif untuk mengembangkan ide-ide dan 
                        mengimplementasikannya. Dalam mewujudukan nilai SDGs 2030. 
                    </p>
                </div>
                </div>
                <div className='pembatas-awan-inj-1'></div>
            </section>
            
            <section></section>
            <section className='prizepool-inj'>
                <div className='prizepool-img-inj'>
                    <img className='img-pp-inj-1' src={prizepool1} alt=''/>
                    <img className='img-pp-inj-2' src={prizepool2} alt=''/>
                </div>
                <div className='prizepool-img-inj'>
                    <img className='img-pp-inj-3' src={prizepool3} alt=''/>
                    <img className='img-pp-inj-4' src={prizepool4} alt=''/>
                </div>      
            </section>
            
            <section className='benefit-inj'>
                <div className='pembatas-awan-inj-2'></div>
                <div className='box-benefit-inj'>
                    <div className='title-benefit-inj'>
                        <h1>BENEFITS</h1>
                        <h3>What you get from Injection?</h3>
                    </div>
                    <div className='desk-benefit-inj'>
                        <p>Free Pass Bagi Juara 1 Kategori SMA/SMK Sederajat</p>
                        <p>Sertifikat Tingkat Nasional</p>
                        <p>Public Exhibition bagj Finalis</p>
                        <p>Mendapatkan Feedback Terkait Ide yang Kalian Buat</p>
                        <p>Menambah Exposure Karya melalui IG bagi Finalis</p>
                        <p>Dan benefit yang masih banyak lagi</p>
                    </div>

                </div>

                <div className='pembatas-awan-inj-3'></div>
            </section>
            
            <section className='timeline-inj'>
                <div className='title-timeline-inj'>
                    <h2>EVENT TIMELINE</h2>
                    <h1>INJECTION TIMELINE</h1>
                    <img className='img-timeline-inj' src={timelineInj} alt=''/>
                </div>
            </section>
            <section>
            <NavLink to="./regist-injection"
                 style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "" : "#114E90",
                      textDecoration: "none", 
                    };
                  }} ><button>Registration</button>
            </NavLink>

                
            </section>
            <img className='city-inj' src={city} alt=''/>
            <img className='road-inj' src={road} alt=''/>
        </div>
    )
}

export default Injection ;