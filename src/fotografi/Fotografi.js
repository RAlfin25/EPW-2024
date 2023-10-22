import './fotografi.css'
import building from './asset-Fotografi/Asset 1@300x red.png'
import prizepool from './asset-Fotografi/Prizepool.svg'
import timelineEpc from './asset-Fotografi/Group 221.png'
import city from './asset-Fotografi/Frame 39.png'
import road from './asset-Fotografi/Group 283.svg'

function Fotografi () {
    return (
        <div className="Fotografi">
            <section className='Judul-Fotografi'>
                <div className='Judul-Fotografi-container'>
                    <h1>FOTOGRAFI</h1>
                    <p>Open Registration</p>
                    <p>Daftarkan Tim mu Sekarang!</p>
                </div>     
            </section>
            <section className='Deskripsi-Fotografi'>
                <div className='build-Fotografi'>
                    <img className='build-Fotografi-img' src={building} alt=''/>
                </div>
                <div className='txt-judul-Fotografi'>
                    <h1>
                    FOTOGRAFI
                    </h1>
                </div>
                <div className='txt-deskripsi-Fotografi'>
                    <p>
                    Fotografi EPW 2024 merupakan salah satu sub-event dari serangkaian acara The 14th Engineering Physics Week 2024. 
                    Acara ini merupakan lomba fotografi dengan mengusung tema yaitu "Urban Life" dimana mencakup genre human interest, 
                    street activity, landscape, dll. Kompetisi ini terbuka bagi kalangan umum dan terbagi atas dua babak yaitu babak penyisihan dan babak final yang dilakukan secara online

                    </p>
                </div>

            {/*<div className='pembatas-awan-Fotografi-1'></div>*/}

            </section>
            
            <section></section>
            <section className='prizepool-Fotografi'>
                <div className='prizepool-img-Fotografi'>
                    <img className='img-pp-Fotografi' src={prizepool} alt=''/>
                </div>      
            </section>
            
            <section className='benefit-Fotografi'>
                <div className='pembatas-awan-Fotografi-2'></div>
                <div className='box-benefit-Fotografi'>
                    <div className='title-benefit-Fotografi'>
                        <h1>BENEFITS</h1>
                        <h3>What you get from Fotografi?</h3>
                    </div>
                    <div className='desk-benefit-Fotografi'>
                        <p>Pengalaman dan ilmu berharga</p>
                        <p>Sertifikat dan penghargaan</p>
                        <p>Pameran Fotografi</p>
                    </div>

                </div>

                <div className='pembatas-awan-Fotografi-3'></div>
            </section>
            
            <section className='timeline-Fotografi'>
                <div className='title-timeline-Fotografi'>
                    <h2>EVENT TIMELINE</h2>
                    <h1>FOTOGRAFI TIMELINE</h1>
                    <img className='img-timeline-Fotografi' src={timelineEpc} alt=''/>
                </div>
            </section>
            <section></section>
            <img className='city-inj' src={city} alt=''/>
            <img className='road-inj' src={road} alt=''/>
        </div>
    )
}

export default Fotografi ;
