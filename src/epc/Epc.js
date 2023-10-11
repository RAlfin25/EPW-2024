import './epc.css';
import building from './asset-Epc/Asset 1@300x green.png'
import prizepool from './asset-Epc/Prizepool.svg'
import timelineEpc from './asset-Epc/Group 221.png'
import city from './asset-Epc/Frame 39.svg'
import road from './asset-Epc/Group 283.svg'




function Epc () {
    return (
        <div className="Epc">
            <section className='Judul-Epc'>
                <div className='Judul-Epc-container'>
                    <h1>EPC</h1>
                    <p>Open Registration</p>
                    <p>Daftarkan Tim mu Sekarang!</p>
                </div>     
            </section>
            <section className='Deskripsi-Epc'>
                <div className='build-epc'>
                    <img className='build-epc-img' src={building} alt=''/>
                </div>
                <div className='txt-judul-epc'>
                    <h1>
                        ENGINEERING PHYSICS COMPETITION
                    </h1>
                </div>
                <div className='txt-deskripsi-epc'>
                    <p>
                    Engineering Physics Challenge (EPC) merupakan Kompetisi Fisika Teknik tahunan 
                    tingkat Nasional yang diselenggarakan oleh Himpunan Mahasiswa Teknik Fisika, 
                    Departemen Teknik Fisika ITS  untuk mengasah kemampuan siswa SMA/MA sederajat
                    dalam mengaplikasikan dan memecahkan permasalahan fisika terapan khususnya      
                    bidang: (i) Rekayasa Instrumentasi dan Kontrol, (ii) Rekayasa Fotonika, (iii) Vibrasi dan Akustik,
                    (iv) Rekayasa Material, dan (v) Rekayasa Energi dan Pengkondisian Lingkungan.
                    </p>
                </div>
                <div className='pembatas-awan-epc-1'></div>
            </section>
            
            <section></section>
            <section className='prizepool-epc'>
                <div className='prizepool-img-epc'>
                    <img className='img-pp-epc' src={prizepool} alt=''/>
                </div>      
            </section>
            
            <section className='benefit-epc'>
                <div className='pembatas-awan-epc-2'></div>
                <div className='box-benefit-epc'>
                    <div className='title-benefit-epc'>
                        <h1>BENEFITS</h1>
                        <h3>What you get from EPC?</h3>
                    </div>
                    <div className='desk-benefit-epc'>
                        <p>Freepass Teknik Fisika ITS</p>
                        <p>Pengalaman mengenal Teknik Fisika ITS</p>
                        <p>Gratis SNBT TRYOUT</p>
                        <p>Sertifikasi Tingkat Nasional</p>
                    </div>

                </div>

                <div className='pembatas-awan-epc-3'></div>
            </section>
            
            <section className='timeline-epc'>
                <div className='title-timeline-epc'>
                    <h2>EVENT TIMELINE</h2>
                    <h1>EPC TIMELINE</h1>
                    <img className='img-timeline-epc' src={timelineEpc} alt=''/>
                </div>
            </section>
            <img className='city-epc' src={city} alt=''/>
            <img className='road-epc' src={road} alt=''/>
        </div>
    )
}

export default Epc ;