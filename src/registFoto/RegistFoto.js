import "./RegistFoto.css";
import { Link, NavLink } from "react-router-dom";
import React, { useState, useRef } from "react";
import axios from "axios";

const data = {
  anggota: [],
};

function Page1({ onNextPage, onBackPage }) {
  const [name, setName] = useState("");
  const [error, setError] = useState({
    namaDiri: false,
    domisili: false,
    asalInstansi: false,
    noTelp: false,
    noTelpNotNumber: false,
    email: false,
  });
  const domisili = useRef();
  const namaDiri = useRef();
  const asalInstansi = useRef();
  const noTelp = useRef();
  const email = useRef();

  const handleNext = () => {
    data.namaDiri = namaDiri.current?.value;
    data.domisili = domisili.current?.value;
    data.asalInstansi = asalInstansi.current?.value;
    data.noTelp = noTelp.current?.value;
    data.email = email.current?.value;


    let newError = {};
    if (data.namaDiri.length === 0) {
      newError = { namaDiri: true };
      namaDiri.current?.focus();
    } else newError = { namaDiri: false };

    if (!data.domisili) {
      newError = { ...newError, domisili: true };
      domisili.current?.focus();
    } else newError = { ...newError, domisili: false };

    if (!data.asalInstansi) {
      newError = { ...newError, asalInstansi: true };
      asalInstansi.current?.focus();
    } else newError = { ...newError, asalInstansi: false };

    if (!data.noTelp) {
      newError = { ...newError, noTelp: true };
      noTelp.current?.focus();
    } else newError = { ...newError, noTelp: false };

    if (isNaN(data.noTelp)) {
      newError = { ...newError, noTelpNotNumber: true };
      noTelp.current?.focus();
    } else newError = { ...newError, noTelpNotNumber: false };

    if (!data.email) {
      newError = { ...newError, email: true };
      email.current?.focus();
    } else newError = { ...newError, asalemail: false };


    setError(newError);

    console.log(error);
    if (Object.values(newError).every((val) => val === false)) {
      onNextPage(2, { name });
    }
  };

  return (
    <section className="regist-foto-bar">
      <div className="regist-foto-bar-input">
        <h1>Identitas Diri<span className="star">*</span></h1>

        <div className="regist-foto-bar-input">
          <h2>Nama Lengkap<span className="star">*</span></h2>
          {(() => {
            if (error.namaDiri) {
              return (
                <div className="regist-foto-error-msg">
                  Nama Lengkap tidak boleh kosong !
                </div>
              );
            }
          })()}
          <input className="form-foto" classname="form-foto"
            ref={namaDiri}
            defaultValue={data.namaDiri ?? ""}
            required
          ></input>
          <h2>Domisili<span className="star">*</span></h2>
          {(() => {
            if (error.domisili) {
              return (
                <div className="regist-foto-error-msg">
                 Domisili tidak boleh kosong !
                </div>
              );
            }
          })()}
          <input className="form-foto" 
            id="domisili"
            ref={domisili}
            defaultValue={data.domisili ?? ""}
            required
          ></input>
          <h2>Asal Sekolah/Instansi/Lainnya<span className="star">*</span></h2>
          {(() => {
            if (error.asalInstansi) {
              return (
                <div className="regist-foto-error-msg">
                  Asal Sekolah/Instansi/Lainnya tidak boleh kosong !
                </div>
              );
            }
          })()}
          <input className="form-foto" 
            ref={asalInstansi}
            defaultValue={data.asalInstansi ?? ""}
            required
          ></input>
          <h2>No Telepon<span className="star">*</span></h2>
          {(() => {
            if (error.noTelp) {
              return (
                <div className="regist-foto-error-msg">
                  No Telp tidak boleh kosong !
                </div>
              );
            } else if (error.noTelpNotNumber) {
              return (
                <div className="regist-foto-error-msg">
                  No Telp harus berupa angka !
                </div>
              );
            }
          })()}
          <input className="form-foto" classname="form-foto" ref={noTelp} defaultValue={data.noTelp ?? ""} required></input>
          <h2>Email<span className="star">*</span></h2>
          {(() => {
            if (error.email) {
              return (
                <div className="regist-foto-error-msg">
                  Email tidak boleh kosong !
                </div>
              );
            }
          })()}
          <input className="form-foto" 
            ref={asalInstansi}
            defaultValue={data.email ?? ""}
            required
          ></input>

          <div className="regist-foto-button">
            <div></div>

            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Page2({ onNextPage, onBackPage, formDeskripsi }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    judul: false,
    deskripsi: false,
  });
  const judul = useRef();
  const deskripsi = useRef();
  const handleNext = () => {
    let newError = {};
    if (!judul.current?.value) {
      newError = { judul: true };
    } else newError = { judul: false };


    if (!deskripsi.current?.value) {
      newError = { ...newError, deskripsi: true };
    } else newError = { ...newError, deskripsi: false };

    setError(newError);

    data.anggota[0] = {
      judul: judul.current?.value,
      deskripsi: deskripsi.current?.value,
    };

    if (Object.values(newError).every((val) => val === false)) {
      onNextPage(3, { ...formDeskripsi, email });
    }
  };

  const handleBack = () => {
    onBackPage(1, { ...formDeskripsi, email });
  };

  return (
    <section className="regist-foto-bar">
      <div className="regist-foto-bar-input">
        <h1>Judul & Deskripsi<span className="star">*</span></h1>
        <h2>Judul<span className="star">*</span></h2>
        {(() => {
          if (error.judul) {
            return (
              <div className="regist-foto-error-msg">
                Judul tidak boleh kosong !
              </div>
            );
          }
        })()}
        <input className="form-foto"
          ref={judul}
          defaultValue={data.anggota[0]?.judul ?? ""}
        ></input>

        <h2>Deskripsi<span className="star">*</span></h2>
        {(() => {
          if (error.deskripsi) {
            return (
              <div className="regist-foto-error-msg">
                Deskripsi tidak boleh kosong !
              </div>
            );
          }
        })()}
        <textarea className="deskripsi-form-foto" rows={4} cols={50} 
          ref={deskripsi}
          defaultValue={data.anggota[0]?.deskripsi ?? ""}
        ></textarea>

        <div className="regist-foto-button">
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </section>
  );
}

function Page3({ onNextPage, onBackPage, formKarya }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({    
    karyaAsli: false,
    linkPost: false,
    kumpulKarya: false,
  });
  const karyaAsli = useRef();
  const linkPost = useRef();
  const kumpulKarya = useRef();

  const handleNext = () => {


    let newError = {};    
    if (!karyaAsli.current?.value) {
      newError = {karyaAsli: true };
      linkPost.current?.focus();
    } else newError = {karyaAsli: false };

    if (!linkPost.current?.value) {
      newError = {...newError, linkPost: true };
      linkPost.current?.focus();
    } else newError = {...newError, linkPost: false };

    if (!kumpulKarya.current?.value) {
      newError = {...newError, kumpulKarya: true };
      linkPost.current?.focus();
    } else newError = {...newError, kumpulKarya: false };
    setError(newError);

    data.anggota[1] = {
      karya_asli: karyaAsli.current?.value,
      link: linkPost.current?.value,
      kumpul_karya: kumpulKarya.current?.value,
    };

    if (Object.values(newError).every((val) => val === false)) {
      onNextPage(4, { ...formKarya, email });
    }
  };

  const handleBack = () => {
    onBackPage(2, { ...formKarya, email });
  };
  return (
    <section className="regist-foto-bar">
      <div className="regist-foto-bar-input">
        <h1>Pengumpulan Berkas <span className="star">*</span></h1>
        <h2>Pengumpulan Dokumen Keaslian Karya<span className="star">*</span></h2>
        {(() => {
          if (error.karyaAsli) {
            return (
              <div className="regist-foto-error-msg">
                File Dokumen tidak boleh kosong !
              </div>
            );
          }
        })()}
        <input className="form-foto-file" 
          type="file"
          ref={karyaAsli}
          defaultValue={data.anggota[1]?.karya_asli ?? ""}
        ></input>
        <h2>Pengumpulan Link Post Instagram (multiple)<span className="star">*</span></h2>
        {(() => {
          if (error.linkPost) {
            return (
              <div className="regist-foto-error-msg">
                Link tidak boleh kosong !
              </div>
            );
          } 
        })()}
        <input className="form-foto" 
          type="text"
          ref={linkPost}
          defaultValue={data.anggota[1]?.link ?? ""}
        ></input>
        <h2>Pengumpulan Karya (format .jpg/.png)<span className="star">*</span></h2>
        {(() => {
          if (error.kumpulKarya) {
            return (
              <div className="regist-foto-error-msg">
                File Karya tidak boleh kosong !
              </div>
            );
          }
        })()}
        <input className="form-foto-file" 
          type="file"
          ref={kumpulKarya}
          defaultValue={data.anggota[1]?.kumpul_karya ?? ""}
        ></input>

        <div className="regist-foto-button">
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </section>
  );
}


function Page4({ onNextPage, onBackPage, formBukti }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({    
    buktiTransfer: false,
    buktifollowig: false,    
  });
  const buktiTransfer = useRef();
  const buktifollowig = useRef();

  const handleBack = () => {
    let newError = {}

    if (!buktiTransfer.current?.value) {
      newError = { ...newError, buktiTransfer: true };
    } else newError = { ...newError, buktiTransfer: false };

    if (!buktifollowig.current?.value) {
      newError = { ...newError, buktifollowig: true };
    } else newError = { ...newError, buktifollowig: false };

    setError(newError);

    data.buktiTransfer = buktiTransfer.current.value;
    data.buktifollowig = buktifollowig.current.value;

    if (Object.values(newError).every((val) => val === false)) {
      onBackPage(3, { ...formBukti, email });
    }
  };
  return (
    <section className="regist-foto-bar">
      <div className="regist-foto-bar-input">
        <h1>Bukti <span className="star">*</span></h1>
        <h2>Bukti Transfer Biaya Pendaftaran<span className="star">*</span></h2>
        {(() => {
          if (error.buktiTransfer) {
            return (
              <div className="regist-foto-error-msg">
               Bukti Transfer tidak boleh kosong !
              </div>
            );
          }
        })()}
        <input className="form-foto-file" 
        type="file"
        ref={buktiTransfer} 
        defaultValue={data?.buktiTransfer}></input>
        <h2>Bukti Follow Instagram EPW<span className="star">*</span></h2>
        {(() => {
          if (error.buktifollowig) {
            return (
              <div className="regist-foto-error-msg">
               Bukti Follow Instagram tidak boleh kosong !
              </div>
            );
          }
        })()}
        <input className="form-foto-file" 
        type="file"
        ref={buktifollowig} 
        defaultValue={data?.buktifollowig}></input>

        <div className="regist-foto-button">
          <button onClick={handleBack}>Back</button>
          <button
            onClick={() => {
              axios
                .post(
                  "https://api.epwits.org/fotografi/register",
                  {
                    nama_lengkap: String(data.namaDiri),
                    email: String(data.email),
                    domisili: String(data.domisili),
                    judul_karya: String(data.anggota[0]?.judul),
                    deskripsi_karya: String(data.anggota[0]?.deskripsi),
                    nomor_telepon: String(data.noTelp),
                    link_post_instagram: String(data.anggota[1]?.link),
                    asal_sekolah: String(data.asalInstansi),
                    bukti_transfer: data.buktiTransfer,
                    bukti_follow: data.buktifollowig,
                    berkas_asli: data.anggota[1]?.karyaAsli,
                    foto_karya: data.anggota[1]?.kumpul_karya,
                  },
                  {
                    headers: {
                      Authorization: "Bearer " + "eyJhbGciOiJIUz",
                    },
                  }
                )
                .then((res) => {
                  if (res?.message === "Team already exist") {
                    alert("Nama Tim sudah terdaftar");
                    onBackPage(4, { ...formBukti, email });
                  } else {
                    alert("Berhasil mendaftar");
                    window.location.href = "/";
                  }
                })
                .catch((err) => {
                  alert("terdapat kesalahan");
                  // console.log(err);
                });
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}


// Tambahkan Page3, Page4, dan Page5 dengan logika serupa

function RegistFoto() {
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
    <div className="regist-foto-main">
      {currentPage < 5 && (
        <section>
          <div className="regist-foto-judul">
            <h1>FOTOGRAFI</h1>
            <p>Photograpy Competition</p>
          </div>
          <div className="pembatas-foto-regis-img"></div>
        </section>
      )}

      {renderPage()}
    </div>
  );
}

export default RegistFoto;