import './Laboratory.css';
import bipeng from './asset-lab/Group 154.png'


function Laboratorium ({txtJudul1, txtJudul2, txtJudul3, imgJudul, imgLab, txtDeskripsi, txtBipeng, fotoBidang, txtBidang1, 
                        txtBidang2, txtBidang3, txtBidang4}) {
    return (
        <div className='container-lab'>
            <section className='Judul'>
                <img className="img-judul" src={imgJudul}/>
                <h1>{txtJudul1}</h1>
                <h1>{txtJudul2}</h1> 
                
                
            </section>

           
            
          <section className='deskripsi-lab'>
               <div className='pembatas-lab-1'></div> 
                    <div className='box-cont-desk'>
                    <div className='box-judul-desk'>
                    <h2>{txtJudul3}</h2>
                    </div>
                    
                    <div className='box-lab'>
                    <div className='box-desk-lab'>
                      <img src={imgLab}/>
                      <p>{txtDeskripsi}</p>  
                    </div>
                    </div> 
                </div>
                
               <div className='cont-bipeng'>
                <div className='judul-bipeng'>
                    <h1>BIDANG PENGEMBANGAN</h1>
                    <h2>{txtBipeng}</h2>
                </div>
                <div className='content-bipeng'>
                    <img className='img-bipeng' src={bipeng} alt=''/>
                    <div >
                        <div className="Background-txt-bipeng">
                            <p className="txt-bipeng"><img className="fotoObeng1" src={fotoBidang} />{txtBidang1}</p>
                        </div>
                        <div className="Background-txt-bipeng">
                            <p className="txt-bipeng"><img className="fotoObeng1" src={fotoBidang} />{txtBidang2}</p>
                        </div>
                        <div className="Background-txt-bipeng">
                            <p className="txt-bipeng"><img className="fotoObeng1" src={fotoBidang} />{txtBidang3}</p>
                        </div>
                        <div className="Background-txt-bipeng">
                            <p className="txt-bipeng"><img className="fotoObeng1" src={fotoBidang} />{txtBidang4}</p>
                        </div>
                    </div>
                    
                </div>

                </div>
                <div className='pembatas-lab-2'></div>
            </section> 

           
        
           {/*<section className='prestasi-lab'></section>*/}  
        </div>
    )
}

export default Laboratorium;