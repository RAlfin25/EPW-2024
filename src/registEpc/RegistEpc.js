import './RegistEpc.css'
import { NavLink } from 'react-router-dom'
import React, { useState, useRef } from "react";
import axios from 'axios';

const data = {
    anggota: [],
  };

function Page1 ({ onNextPage, onBackPage }){
const [team, setTeam] = useState("");
const [error, setError] = useState({
    namaTeam: false,
    rayon: false,
});    
const namaTeam = useRef ();
const rayon = useRef ();

const handleNext = () => {
        data.namaTeam = namaTeam.current?.value;
        data.rayon = rayon.current?.value;

        let newError = {};
        if (data.namaTeam.length === 0) {
            newError = { namaTeam: true };
            namaTeam.current?.focus();
          } else newError = { namaTeam: false };
        
        if (!data.rayon) {
            newError = { ...newError, rayon: true };
            rayon.current?.focus();
          } else newError = { ...newError, rayon: false };

        setError(newError);
        if (Object.values(newError).every((val) => val === false)) {
        onNextPage(2, { team });
        }
    };

    return (
        <section className='regist-epc-bar'>
            <div className='regist-epc-bar-input'>
                <h1>Identitas Tim</h1>
        
                    <h2>Nama Tim</h2>
                    {(() => {
                        if (error.namaTeam) {
                        return (
                          <div className="regist-foto-error-msg">
                            Nama Tim tidak boleh kosong !
                          </div>
                        );
                      }
                    })()}
                    <input className='form-epc'
                    ref={namaTeam}
                    defaultValue={data.namaTeam ?? ""}
                    required
                    ></input>
                    <h2>Rayon</h2>
                    {(() => {
                        if (error.rayon) {
                        return (
                          <div className="regist-foto-error-msg">
                            Rayon tidak boleh kosong !
                          </div>
                        );
                      }
                    })()}
                    <input className='form-epc'
                    ref={rayon}
                    defaultValue={data.rayon ?? ""}
                    required
                    ></input>
            
            </div>
            <div className='regist-epc-button'>
                <div></div>

                <button onClick={handleNext}>Next</button>
            </div>
        </section>
    )
}

function Page2 ({ onNextPage, onBackPage, formAnggota1 }){
    
    const [member1, setMember1] = useState("");
    const [error, setError] = useState ({
        namaLengkap: false,
        asalSekolah: false,
        gender: false,
        email: false,
        noTelp: false,
        noTelpNotNumber: false,
    });
        const namaLengkap = useRef ();
        const asalSekolah = useRef ();
        const maleCheckbox = useRef();
        const femaleCheckbox = useRef();
        const email = useRef ();
        const noTelp = useRef ();
    
    const handleNext = () => {
        let newError = {};    

        if ( !namaLengkap.current?.value) {
            newError = { namaLengkap: true };
          } else newError = { nnamaLengkap: false };
          
        if ( !asalSekolah.current?.value) {
            newError = { ...newError, asalSekolah: true };
          } else newError = { ...newError, asalSekolah: false };
        
        if (!maleCheckbox.current?.checked && !femaleCheckbox.current?.checked) {
            newError = { ...newError, gender: true };
            maleCheckbox.current?.focus();
          } else newError = { ...newError, gender: false };


        if ( !email.current?.value) {
            newError = { ...newError, email: true };
          } else newError = { ...newError, email: false };
        
        if ( !noTelp.current?.value) {
            newError = { ...newError, noTelp: true };
          } else newError = { ...newError, noTelp: false };
      
        if ( isNaN(noTelp.current?.value)) {
            newError = { ...newError, noTelpNotNumber: true };
          } else newError = { ...newError, noTelpNotNumber: false }; 

        setError(newError);

        data.anggota[0] = {
            nama_lengkap: namaLengkap.current?.value,
            asal_sekolah: asalSekolah.current?.value,
            email: email.current?.value,
            nomor_telepon: noTelp.current?.value,
            male: maleCheckbox.current?.checked,
            female: femaleCheckbox.current?.checked,
          };

        if (Object.values(newError).every((val) => val === false)) {
        onNextPage(3, { ...formAnggota1, member1 });
        }
    };

    const handleBack = () => {
        onBackPage(1, { ...formAnggota1, member1 });
      };
    
    return (
        <section className='regist-epc-bar'>
            <div className='regist-epc-bar-input'>
                <h1>Identitas Anggota 1</h1>
                    <h2>Nama Lengkap Anggota 1</h2>
                    {(() => {
                        if (error.namaLengkap) {
                        return (
                          <div className="regist-foto-error-msg">
                            Nama Lengkap tidak boleh kosong !
                          </div>
                        );
                      }
                    })()}
                    <input className='form-epc'
                    ref={namaLengkap}
                    defaultValue={data.namaLengkap ?? ""}
                    required></input>
                    <h2>Asal Sekolah</h2>
                    {(() => {
                        if (error.asalSekolah) {
                        return (
                          <div className="regist-foto-error-msg">
                            Asal Sekolah tidak boleh kosong !
                          </div>
                        );
                      }
                    })()}
                    <input className='form-epc'
                    ref={asalSekolah}
                    defaultValue={data.asalSekolah ?? ""}
                    required
                    ></input>
                    <h2>Gender</h2>
                    {(() => {
                        if (error.gender) {
                        return (
                        <div className="regist-inj-error-msg">
                            Pilih salah satu !
                        </div>
                        );
                      }
                    })()}
                    <div className="regist-epc-bar-checklist">
                        <div className="regist-epc-bar-checklist-button1">
                          <input
                            type="radio"
                            id="check"
                            name="gender"
                            ref={maleCheckbox}
                            defaultChecked={data.anggota[0]?.male ?? false}
                          ></input>
                        <label for="check-Male">Laki-laki</label>
                        </div>

                        <div className="regist-epc-bar-checklist-button2">
                          <input
                            type="radio"
                            id="check"
                            name="gender"
                            ref={femaleCheckbox}
                            defaultChecked={data.anggota[0]?.female ?? false}
                          ></input>
                        <label for="check-Female">Perempuan</label>
                        </div>
                    </div>

                    <h2>Email</h2>
                    {(() => {
                        if (error.email) {
                        return (
                          <div className="regist-foto-error-msg">
                            Email tidak boleh kosong !
                          </div>
                        );
                      }
                    })()}
                    <input className='form-epc'
                    ref={email}
                    defaultValue={data.email ?? ""}
                    required></input>
                    <h2>No. Telepon</h2>
                    {(() => {
                        if (error.noTelp) {
                        return (
                          <div className="regist-foto-error-msg">
                            No telepon tidak boleh kosong !
                          </div>
                        );
                      } else if (error.noTelpNotNumber) {
                        return (
                            <div className="regist-foto-error-msg">
                              No Telepon harus berupa angka !
                            </div>
                        );
                      }
                    })()}
                    <input className='form-epc'
                    ref={noTelp}
                    defaultValue={data.anggota[0]?.nomor_telepon ?? ""}
                    required></input>
            </div>
            <div className='regist-epc-button'>
                <button onClick={handleBack}>Back</button>

                <button onClick={handleNext}>Next</button>
            </div>
        </section>
    )
}

function Page3 ({ onNextPage, onBackPage, formAnggota2 }){
    
    const [member2, setMember1] = useState("");
    const [error, setError] = useState ({
        namaLengkap: false,
        asalSekolah: false,
        gender: false,
        email: false,
        noTelp: false,
        noTelpNotNumber: false,
    });
        const namaLengkap = useRef ();
        const asalSekolah = useRef ();
        const maleCheckbox = useRef();
        const femaleCheckbox = useRef();
        const email = useRef ();
        const noTelp = useRef ();
    
    const handleNext = () => {
        let newError = {};    

        if ( !namaLengkap.current?.value) {
            newError = { namaLengkap: true };
          } else newError = { nnamaLengkap: false };
          
        if ( !asalSekolah.current?.value) {
            newError = { ...newError, asalSekolah: true };
          } else newError = { ...newError, asalSekolah: false };
        
          if (!maleCheckbox.current?.checked && !femaleCheckbox.current?.checked) {
            newError = { ...newError, gender: true };
            maleCheckbox.current?.focus();
          } else newError = { ...newError, gender: false };


        if ( !email.current?.value) {
            newError = { ...newError, email: true };
          } else newError = { ...newError, email: false };
        
        if ( !noTelp.current?.value) {
            newError = { ...newError, noTelp: true };
          } else newError = { ...newError, noTelp: false };
      
        if ( isNaN(noTelp.current?.value)) {
            newError = { ...newError, noTelpNotNumber: true };
          } else newError = { ...newError, noTelpNotNumber: false }; 

        setError(newError);

        data.anggota[1] = {
            nama_lengkap: namaLengkap.current?.value,
            asal_sekolah: asalSekolah.current?.value,
            email: email.current?.value,
            nomor_telepon: noTelp.current?.value,
            male: maleCheckbox.current?.checked,
            female: femaleCheckbox.current?.checked,
          };

        if (Object.values(newError).every((val) => val === false)) {
        onNextPage(4, { ...formAnggota2, member2 });
        }
    };

    const handleBack = () => {
        onBackPage(2, { ...formAnggota2, member2 });
      };
    
    return (
        <section className='regist-epc-bar'>
            <div className='regist-epc-bar-input'>
                <h1>Identitas Anggota 2</h1>
                    <h2>Nama Lengkap Anggota 2</h2>
                    {(() => {
                        if (error.namaLengkap) {
                        return (
                          <div className="regist-foto-error-msg">
                            Nama Lengkap tidak boleh kosong !
                          </div>
                        );
                      }
                    })()}
                    <input className='form-epc'
                    ref={namaLengkap}
                    defaultValue={data.namaLengkap ?? ""}
                    required></input>
                    <h2>Asal Sekolah</h2>
                    {(() => {
                        if (error.asalSekolah) {
                        return (
                          <div className="regist-foto-error-msg">
                            Asal Sekolah tidak boleh kosong !
                          </div>
                        );
                      }
                    })()}
                    <input className='form-epc'
                    ref={asalSekolah}
                    defaultValue={data.asalSekolah ?? ""}
                    required
                    ></input>
                    <h2>Gender</h2>
                    {(() => {
                        if (error.gender) {
                        return (
                        <div className="regist-inj-error-msg">
                            Pilih salah satu !
                        <span className="star">*</span></div>
                        );
                      }
                    })()}
                    <div className="regist-epc-bar-checklist">
                        <div className="regist-epc-bar-checklist-button1">
                          <input
                            type="radio"
                            id="check"
                            name="gender"
                            ref={maleCheckbox}
                            defaultChecked={data.male ?? false}
                          ></input>
                        <label for="check-Male">Laki-laki</label>
                        </div>

                        <div className="regist-epc-bar-checklist-button2">
                          <input
                            type="radio"
                            id="check"
                            name="gender"
                            ref={femaleCheckbox}
                            defaultChecked={data.female ?? false}
                          ></input>
                        <label for="check-Female">Perempuan</label>
                        </div>
                    </div>

                    <h2>Email</h2>
                    {(() => {
                        if (error.email) {
                        return (
                          <div className="regist-foto-error-msg">
                            Email tidak boleh kosong !
                          </div>
                        );
                      }
                    })()}
                    <input className='form-epc'
                    ref={email}
                    defaultValue={data.email ?? ""}
                    required></input>
                    <h2>No. Telepon</h2>
                    {(() => {
                        if (error.noTelp) {
                        return (
                          <div className="regist-foto-error-msg">
                            No telepon tidak boleh kosong !
                          </div>
                        );
                      } else if (error.noTelpNotNumber) {
                        return (
                            <div className="regist-foto-error-msg">
                              No Telepon harus berupa angka !
                            </div>
                        );
                      }
                    })()}
                    <input className='form-epc'
                    ref={noTelp}
                    defaultValue={data.anggota[1]?.nomor_telepon ?? ""}
                    required></input>
            </div>
            <div className='regist-epc-button'>
                <button onClick={handleBack}>Back</button>

                <button onClick={handleNext}>Next</button>
            </div>
        </section>
    )
}

function Page4 ({ onNextPage, onBackPage, formBerkas }){
    
    const [berkas, setBerkas] = useState("");
    const [error, setError] = useState({    
        pasFoto1: false,
        pasFoto2: false,
        kartuPelajar1: false,
        kartuPelajar2: false,
        buktiTransfer: false,
        
      });
      const pasFoto1 = useRef();
      const pasFoto2 = useRef();
      const kartuPelajar1 = useRef();
      const kartuPelajar2 = useRef();
      const buktiTransfer = useRef();
      

      const handleBack = () => {
        let newError = {}
    
        if (!pasFoto1.current?.value) {
            newError = { ...newError, pasFoto1: true };
          } else newError = { ...newError, pasFoto1: false };
        
        if (!pasFoto2.current?.value) {
            newError = { ...newError, pasFoto2: true };
          } else newError = { ...newError, pasFoto2: false };
          
        if (!kartuPelajar1.current?.value) {
            newError = { ...newError, kartuPelajar1: true };
          } else newError = { ...newError, kartuPelajar1: false };
          
        if (!kartuPelajar2.current?.value) {
            newError = { ...newError, kartuPelajar2: true };
          } else newError = { ...newError, kartuPelajar2: false };
        
        if (!buktiTransfer.current?.value) {
            newError = { ...newError, buktiTransfer: true };
          } else newError = { ...newError, buktiTransfer: false };
    
        
    
        setError(newError);
        
        data.pasFoto1 = pasFoto1.current;
        data.pasFoto2 = pasFoto2.current;
        data.kartuPelajar1 = kartuPelajar1.current;
        data.kartuPelajar2 = kartuPelajar2.current;
        data.buktiTransfer = buktiTransfer.current;
        
    
        if (Object.values(newError).every((val) => val === false)) {
          onBackPage(3, { ...formBerkas, berkas });
        }
      };
    
    return (
        <section className='regist-epc-bar'>
            <div className='regist-epc-bar-input'>
                <h1>Berkas</h1>
                
                    <h2>Pas Foto (3x4 Biru)Anggota 1</h2>
                    {(() => {
                        if (error.pasFoto1) {
                        return (
                          <div className="regist-foto-error-msg">
                            Pas Foto tidak boleh kosong !
                          </div>
                        );
                      }
                    })()}
                    <input 
                    type='file'
                    ref={pasFoto1} 
                    defaultValue={data?.pasFoto1?.value}
                    ></input>
                    <h2>Pas Foto (3x4 Biru)Anggota 2</h2>
                    {(() => {
                        if (error.pasFoto2) {
                        return (
                          <div className="regist-foto-error-msg">
                            Pas Foto tidak boleh kosong !
                          </div>
                        );
                      }
                    })()}
                    <input 
                    type='file'
                    ref={pasFoto2} 
                    defaultValue={data?.pasFoto2?.value}
                    ></input>
                    <h2>Kartu Pelajar (SK Aktif) Anggota 1</h2>
                    {(() => {
                        if (error.kartuPelajar1) {
                        return (
                          <div className="regist-foto-error-msg">
                            Kartu Pelajar tidak boleh kosong !
                          </div>
                        );
                      }
                    })()}
                    <input 
                    type='file'
                    ref={kartuPelajar1} 
                    defaultValue={data?.kartuPelajar1?.value}
                    ></input>
                    <h2>Kartu Pelajar (SK Aktif) Anggota 2</h2>
                    {(() => {
                        if (error.kartuPelajar2) {
                        return (
                          <div className="regist-foto-error-msg">
                            Kartu Pelajar tidak boleh kosong !
                          </div>
                        );
                      }
                    })()}
                    <input 
                    type='file'
                    ref={kartuPelajar2} 
                    defaultValue={data?.kartuPelajar2?.value}
                    ></input>
                    <h2>Bukti Pembayaran</h2>
                    {(() => {
                        if (error.buktiTransfer) {
                        return (
                          <div className="regist-foto-error-msg">
                            Bukti Transfer tidak boleh kosong !
                          </div>
                        );
                      }
                    })()}
                    <input 
                    type='file'
                    ref={buktiTransfer} 
                    defaultValue={data?.buktiTransfer?.value}
                    ></input>
            
            </div>
            <div className='regist-epc-button'>
                <button onClick={handleBack}>Back</button>

                <button onClick={(e) => {    
                  let newError = {}
    
                  if (!pasFoto1.current?.value) {
                      newError = { ...newError, pasFoto1: true };
                    } else newError = { ...newError, pasFoto1: false };
                  
                  if (!pasFoto2.current?.value) {
                      newError = { ...newError, pasFoto2: true };
                    } else newError = { ...newError, pasFoto2: false };
                    
                  if (!kartuPelajar1.current?.value) {
                      newError = { ...newError, kartuPelajar1: true };
                    } else newError = { ...newError, kartuPelajar1: false };
                    
                  if (!kartuPelajar2.current?.value) {
                      newError = { ...newError, kartuPelajar2: true };
                    } else newError = { ...newError, kartuPelajar2: false };
                  
                  if (!buktiTransfer.current?.value) {
                      newError = { ...newError, buktiTransfer: true };
                    } else newError = { ...newError, buktiTransfer: false };
              
                  
              
                  setError(newError);
                  if (!Object.values(newError).every((val) => val === false)) {
                   return
                  }
                  data.pasFoto1 = pasFoto1.current;
                  data.pasFoto2 = pasFoto2.current;
                  data.kartuPelajar1 = kartuPelajar1.current;
                  data.kartuPelajar2 = kartuPelajar2.current;
                  data.buktiTransfer = buktiTransfer.current;

                  let anggota = [];
                  for (let i = 0; i < data.anggota.length; i++) {
                    let gender = "";
                    if (data.anggota[i].female) gender = "female";
                    else if(data.anggota[i].male) gender = "male";
                    anggota.push({
                      nama_lengkap : data.anggota[i].nama_lengkap,
                      asal_sekolah: data.anggota[i].asal_sekolah,
                      gender: gender,
                      email: data.anggota[i].email,
                      nomor_telepon: data.anggota[i].nomor_telepon,
                      })
                  }
                  let anggota_ = {anggota: anggota};

                  const formData = new FormData();
                  formData.append("nama_tim", String(data.namaTeam));
                  formData.append("rayon", String(data.rayon));
                  formData.append("anggota", String(JSON.stringify(anggota_)));

                  formData.append("foto_anggota_1", data?.pasFoto1?.files[0]);
                  formData.append("foto_anggota_2", data?.pasFoto2?.files[0]);
                  formData.append("bukti_transfer", data?.buktiTransfer?.files[0]);
                  formData.append("kartu_pelajar_anggota_2", data?.kartuPelajar2?.files[0]);
                  formData.append("kartu_pelajar_anggota_1", data?.kartuPelajar1?.files[0]);
                  console.log(formData);
                  
                  axios
                    .post(
                      "https://api.epwits.org/epc/register",
                      formData,
                      {
                        headers: {
                            "Content-Type": "multipart/form-data",
                          "Authorization": "Bearer " + "eyJhbGciOiJIUz",
                        },
                      }
                    )
                    .then((res) => {
                      console.log(res);
                      if (res?.message === "Team already exist") {
                        alert("Nama Tim sudah terdaftar");
                        // onBackPage(4, { ...formBukti, email });
                      } else {                    
                        alert("Berhasil mendaftar");
                        window.location.href = "/";
                      }
                    })
                    .catch((err) => {
                      alert("terdapat kesalahan");                  
                    });
                }}>Submit</button>
            </div>
        </section>
    )
}

function RegistEpc() {
    
    const [currentPage, setCurrentPage] = useState(1);
  const [formDeskripsi, setFormDeskripsi] = useState({});
  const [formKarya, setFormKarya] = useState({});
  const [formBukti, setFormAbstrak] = useState({});

  const handleNextPage = (page, data) => {
    setCurrentPage(page);
    setFormDeskripsi(data);
  };

  const handleBackPage = (page, data) => {
    setCurrentPage(page);
    setFormDeskripsi(data);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <Page1 onNextPage={handleNextPage} />;
      case 2:
        return (
          <Page2
            onNextPage={handleNextPage}
            onBackPage={handleBackPage}
            formDeskripsi={formDeskripsi}
          />
        );
      case 3:
        return (
          <Page3
            onNextPage={handleNextPage}
            onBackPage={handleBackPage}
            formDeskripsi={formKarya}
          />
        );
      case 4:
        return (
          <Page4
            onNextPage={handleNextPage}
            onBackPage={handleBackPage}
            formDeskripsi={formBukti}
          />
        );



      // Tambahkan kasus untuk Page3, Page4, dan Page5
      default:
        return null;
    }
  };
    
    return (
        <div className="regist-epc-main">
          {currentPage < 5 && (
          <section>
            <div className="regist-epc-judul">
              <h1>EPC</h1>
              <p>Engineering Physics Challenge</p>
            </div>
            <div className="pembatas-epc-regis-img"></div>
          </section>
    )}

            {renderPage()}
      </div>
    )
}

export default RegistEpc