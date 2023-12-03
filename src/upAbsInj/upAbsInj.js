import React, {useState, useRef} from "react";
import axios from "axios";

const data = {
    anggota: [],
  };

function UpAbsInj ({ onNextPage, onBackPage }) {
    const [name, setName] = useState("");
  const [error, setError] = useState({
    namaTim: false,
    tingkat: false,
    buktiBayar: false,
    kumpulPaper: false,
    emailKetua: false,
  });
  const buktiBayar = useRef();
  const namaTim = useRef();
  const smaCheckbox = useRef();
  const kuliahCheckbox = useRef();
  const kumpulPaper = useRef();
  const emailKetua = useRef();
  const judulPaper = useRef();
  
    const handleNext = () => {
      data.namaTim = namaTim.current?.value;
      data.buktiBayar = buktiBayar.current?.value;
      data.kumpulPaper = kumpulPaper.current?.value;
      data.sma = smaCheckbox.current?.checked;
      data.kuliah = kuliahCheckbox.current?.checked;
      data.emailKetua = emailKetua.current?.value;
      data.judulPaper = judulPaper.current?.value;
  
      let newError = {};
      if (data.namaTim.length === 0) {
        newError = { namaTim: true };
        namaTim.current?.focus();
      } else newError = { namaTim: false };
  
      if (!data.sma && !data.kuliah) {
        newError = { ...newError, tingkat: true };
        smaCheckbox.current?.focus();
      } else newError = { ...newError, tingkat: false };
  
      if (!data.buktiBayar) {
        newError = { ...newError, buktiBayar: true };
        buktiBayar.current?.focus();
      } else newError = { ...newError, buktiBayar: false };
  
      if (!data.kumpulPaper) {
        newError = { ...newError, kumpulPaper: true };
        kumpulPaper.current?.focus();
      } else newError = { ...newError, kumpulPaper: false };
      if (!emailKetua.current?.value) {
        newError = { ...newError, emailKetua: true };
        emailKetua.current?.focus();
      } else newError = { ...newError, emailKetua: false };
      if (!judulPaper.current?.value) {
        newError = { ...newError, judulPaper: true };
        judulPaper.current?.focus();
      } else newError = { ...newError, judulPaper: false };


      setError(newError);
        
      axios
                .post(
                  "http://localhost:3000/injection/abstrak",
                  {
                    nama_tim: String(data.namaTim),
                    email_ketua: String(data.emailKetua),
                    tingkat: data.sma ? "SMA" : "Mahasiswa",
                    link_bukti_transfer: String(data.buktiBayar),
                    link_full_paper: String(data.kumpulPaper),        
                    judul_paper: String(data.judulPaper),            
                  },
                  {
                    headers: {
                      Authorization: "Bearer " + "eyJhbGciOiJIUz",
                    },
                  }
                )
                .then((res) => {
                  console.log(res)
                  if (res.data.status == 400) {
                    alert("Nama Tim tidak terdaftar");                    
                  } else {
                    alert("Berhasil mendaftar");
                    // window.location.href = "/";
                  }
                })
                .catch((err) => {
                  alert("terdapat kesalahan");
                  // console.log(err);
                });
      // if (Object.values(newError).every((val) => val === false)) {
      //   onNextPage(2, { name });
      // }
    };
    
    
    return (
    <div className="regist-inj-main">
        <section>
          <div className="regist-inj-judul">
            <h1>INJECTION</h1>
            <p>Science Project and Exhibition</p>
          </div>
          <div className="pembatas-inj-regis-img"></div>
        </section>
        <section className="regist-inj-bar">
            <div className="regist-inj-bar-input">
                <h1>Regristrasi Ulang Tahap Full Paper<span className="star">*</span></h1>
                <h2>Tingkat<span className="star">*</span></h2>
                {(() => {
                    if (error.tingkat) {
                        return (
                        <div className="regist-inj-error-msg">
                        Pilih salah satu !</div>
                );
                }
                })()}
                <div className="regist-inj-bar-checklist">
                <div className="regist-inj-bar-checklist-button1">
                    <input
                    type="radio"
                    id="check"
                    name="academic"
                    ref={smaCheckbox}
                    defaultChecked={data.sma ?? false}
                    ></input>
                    <label for="check-SMA">SMA</label>
                </div>

                <div className="regist-inj-bar-checklist-button2">
                    <input
                    type="radio"
                    id="check"
                    name="academic"
                    ref={kuliahCheckbox}
                    defaultChecked={data.kuliah ?? false}
                    ></input>
                    <label for="check-Kuliah">Kuliah</label>
                </div>
                </div>

                <div className="regist-inj-bar-input">
                <h2>Nama Tim<span className="star">*</span></h2>
                {(() => {
                    if (error.namaTim) {
                    return (
                        <div className="regist-inj-error-msg">
                        Nama Tim tidak boleh kosong !
                        </div>
                    );
                    }
                })()}
                <input
                    ref={namaTim}
                    defaultValue={data.namaTim ?? ""}
                    required
                ></input>
                <h2>Email Ketua<span className="star">*</span></h2>
                {(() => {
                if (error.emailKetua) {
                    return (
                    <div className="regist-inj-error-msg">
                        Email Ketua Tim tidak boleh kosong !
                    </div>
                    );
                }
                })()}
                <input
                ref={emailKetua}
                defaultValue={data.judulPaper ?? ""}
                ></input>
                <h2>Judul Paper<span className="star">*</span></h2>
                {(() => {
                if (error.judulPaper) {
                    return (
                    <div className="regist-inj-error-msg">
                        Judul Paper tidak boleh kosong !
                    </div>
                    );
                }
                })()}
                <input
                ref={judulPaper}
                defaultValue={data.judulPaper ?? ""}
                ></input>
                <h2>Link Gdrive Bukti Pembayaran<span className="star">*</span></h2>
                {(() => {
                    if (error.buktiBayar) {
                    return (
                        <div className="regist-inj-error-msg">
                        Link Bukti tidak boleh kosong !
                        </div>
                    );
                    }
                })()}
                <input
                    ref={buktiBayar}
                    defaultValue={data.buktiBayar ?? ""}
                    required
                ></input>
                <h2>Link Gdrive Pengumpulan Full Paper<span className="star">*</span></h2>
                {(() => {
                    if (error.kumpulPaper) {
                    return (
                        <div className="regist-inj-error-msg">
                        Link Pengumpulan tidak boleh kosong !
                        </div>
                    );
                    }
                })()}
                <input
                    ref={kumpulPaper}
                    defaultValue={data.kumpulPaper ?? ""}
                    required
                ></input>
                

                <div className="regist-inj-button">
                    <div></div>

                    <button onClick={handleNext}>Submit</button>
                </div>
                </div>
            </div>
        </section>
    </div>
    );
}

export default UpAbsInj;
