import './RegistInj.css';
import {Link, NavLink } from 'react-router-dom';
import React, {useState, useRef } from 'react';
import axios from 'axios';

const data = {}

function Page1({ onNextPage, onBackPage }) {
  const [name, setName] = useState('');
  const {namaSekolah, namaTim, smaCheckbox, kuliahCheckbox, namaGuru, noTelp} = useRef();  


  const handleNext = () => {
    data.name = 
    onNextPage(2, { name });
  };


  return (
    <section className='regist-inj-bar'>
    <div className='regist-inj-bar-input'>
        <h1>Identitas Tim</h1>
            <h2>Tingkat</h2> 
            <div className='regist-inj-bar-checklist'> 
                <div className='regist-inj-bar-checklist-button1'>
                    <input type='radio' id='check' name='academic' ref={smaCheckbox}></input>
                    <label for="check-SMA">SMA</label>
                </div>
                
                <div className='regist-inj-bar-checklist-button2'>
                    <input type='radio' id='check' name='academic' ref={kuliahCheckbox}></input>
                    <label for="check-Kuliah">Kuliah</label>  
                </div> 
                
            </div>
            
            <div className='regist-inj-bar-input'>
                <h2>Nama Tim</h2>
                <input ref={namaTim}></input>
                <h2>Nama Sekolah/Kampus</h2>
                <input ref={namaSekolah}></input>
                <h2>Nama Guru/Dosen Pembimbing</h2>
                <input ref={namaGuru}></input>
                <h2>No Telepon Guru/Dosen Pembimbing</h2>
                <input ref={noTelp}></input>
            
            <div className='regist-inj-button'> 
            <div></div>

            <button onClick={handleNext}>Next</button>
     
            </div>
            </div>
    </div>
    </section>
   
  );
}

function Page2({ onNextPage, onBackPage, formData }) {
  const [email, setEmail] = useState('');
  const handleNext = () => {
    onNextPage(3, { ...formData, email });
  };

  const handleBack = () => {
    onBackPage(1, { ...formData, email });
  };

  return (
    <section className='regist-inj-bar'>
        <div className='regist-inj-bar-input'>
            <h1>Identitas Ketua</h1>
                <h2>Nama Ketua</h2>
                <input></input>
                <h2>NISN/NIM Ketua</h2>
                <input></input>
                <h2>No Telepon Ketua</h2>
                <input></input>

                <div className='regist-inj-button'> 
                    
                    <button onClick={handleBack}>Back</button>
                    <button onClick={handleNext}>Next</button>
            </div>
    </div>
        
    </section>      
  );
}

function Page3({ onNextPage, onBackPage, formAnggota1 }) {
    const [email, setEmail] = useState('');
    const handleNext = () => {
      onNextPage(4, { ...formAnggota1, email });
    };
  
    const handleBack = () => {
      onBackPage(2, { ...formAnggota1, email });
    };
return (
            <section className='regist-inj-bar'>        
            <div className='regist-inj-bar-input'>
                <h1>Identitas Anggota 1 </h1>
                    <h2>Nama Anggota 1</h2>
                    <input></input>
                    <h2>NISN/NIM Anggota 1</h2>
                    <input></input>
                    <h2>No Telepon Anggota 1</h2>
                    <input></input>

                    <div className='regist-inj-button'> 
                    <button onClick={handleBack}>Back</button>
                    <button onClick={handleNext}>Next</button>
                    </div>
            </div>
                
            </section>      

);

}  

function Page4({ onNextPage, onBackPage, formAnggota2 }) {
    const [email, setEmail] = useState('');
    const handleNext = () => {
      onNextPage(5, { ...formAnggota2, email });
    };
  
    const handleBack = () => {
      onBackPage(3, { ...formAnggota2, email });
    };
return (
            <section className='regist-inj-bar'>        
            <div className='regist-inj-bar-input'>
                <h1>Identitas Anggota 2 </h1>
                    <h2>Nama Anggota 2</h2>
                    <input></input>
                    <h2>NISN/NIM Anggota 2</h2>
                    <input></input>
                    <h2>No Telepon Anggota 2</h2>
                    <input></input>

                    <div className='regist-inj-button'> 
                    <button onClick={handleBack}>Back</button>
                    <button onClick={handleNext}>Next</button>
                    </div>
            </div>
                
            </section>      

);

} 

function Page5({ onNextPage, onBackPage, formAbstrak }) {
    const [email, setEmail] = useState('');
  
    const handleBack = () => {
      onBackPage(4, { ...formAbstrak, email });
    };
return (
            <section className='regist-inj-bar'>        
            <div className='regist-inj-bar-input'>
                <h1>Form Pengumpulan </h1>
                    <h2>Pengumpulan Bukti Follow, Kartu KTM/Kartu Pelajar, Twibbon</h2>
                    <input></input>
                    <h2>Pengumpulan Abstrak & Originalitas</h2>
                    <input></input>

                    <div className='regist-inj-button'> 
                    <button onClick={handleBack}>Back</button>
                    <button onClick={() => {}}>Submit</button>
                    </div>
            </div>
                
            </section>      

);

} 

// Tambahkan Page3, Page4, dan Page5 dengan logika serupa

function RegistInj() {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({});
  const [formAnggota1, setFormAnggota1] = useState({});
  const [formAnggota2, setFormAnggota2] = useState({});
  const [formAbstrak, setFormAbstrak] = useState({});


  const handleNextPage = (page, data) => {
    setCurrentPage(page);
    setFormData(data);
  };

  const handleBackPage = (page, data) => {
    setCurrentPage(page);
    setFormData(data);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <Page1 onNextPage={handleNextPage} />;
      case 2:
        return <Page2 onNextPage={handleNextPage} onBackPage={handleBackPage} formData={formData} />;
      case 3:
        return <Page3 onNextPage={handleNextPage} onBackPage={handleBackPage} formData={formAnggota1} />;
      case 4:
        return <Page4 onNextPage={handleNextPage} onBackPage={handleBackPage} formData={formAnggota2} />;  
      case 5:
        return <Page5 onNextPage={handleNextPage} onBackPage={handleBackPage} formData={formAbstrak} />;    
        
            // Tambahkan kasus untuk Page3, Page4, dan Page5
      default:
        return null;
    }
  };

  return (
    <div className='regist-inj-main'>
      
      {currentPage < 6 && (
        <section >
            <div className='regist-inj-judul'>
                <h1>INJECTION</h1>
                <p>Science Project and Exhibition</p>
            </div>
            <div className='pembatas-inj-regis-img'></div>
        </section>
      )}
      
      {renderPage()}
    </div>
  );
}

export default RegistInj;
