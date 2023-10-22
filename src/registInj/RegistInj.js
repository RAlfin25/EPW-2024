import "./RegistInj.css";
import { Link, NavLink } from "react-router-dom";
import React, { useState, useRef } from "react";
import axios from "axios";

const data = {
  anggota: [],
};

function Page1({ onNextPage, onBackPage }) {
  const [name, setName] = useState("");
  const [error, setError] = useState({
    namaTim: false,
    tingkat: false,
    namaSekolah: false,
    namaGuru: false,
    noTelpGuru: false,
    noTelpGuruNotNumber: false,
  });
  const namaSekolah = useRef();
  const namaTim = useRef();
  const smaCheckbox = useRef();
  const kuliahCheckbox = useRef();
  const namaGuru = useRef();
  const noTelp = useRef();

  const handleNext = () => {
    data.namaTim = namaTim.current?.value;
    data.namaSekolah = namaSekolah.current?.value;
    data.namaGuru = namaGuru.current?.value;
    data.noTelp = noTelp.current?.value;
    data.sma = smaCheckbox.current?.checked;
    data.kuliah = kuliahCheckbox.current?.checked;

    let newError = {};
    if (data.namaTim.length === 0) {
      newError = { namaTim: true };
      namaTim.current?.focus();
    } else newError = { namaTim: false };

    if (!data.sma && !data.kuliah) {
      newError = { ...newError, tingkat: true };
      smaCheckbox.current?.focus();
    } else newError = { ...newError, tingkat: false };

    if (!data.namaSekolah) {
      newError = { ...newError, namaSekolah: true };
      namaSekolah.current?.focus();
    } else newError = { ...newError, namaSekolah: false };

    if (!data.namaGuru) {
      newError = { ...newError, namaGuru: true };
      namaGuru.current?.focus();
    } else newError = { ...newError, namaGuru: false };

    if (!data.noTelp) {
      newError = { ...newError, noTelpGuru: true };
      noTelp.current?.focus();
    } else newError = { ...newError, noTelpGuru: false };

    if (isNaN(data.noTelp)) {
      newError = { ...newError, noTelpGuruNotNumber: true };
      noTelp.current?.focus();
    } else newError = { ...newError, noTelpGuruNotNumber: false };

    setError(newError);

    console.log(error);
    if (Object.values(newError).every((val) => val === false)) {
      onNextPage(2, { name });
    }
  };

  return (
    <section className="regist-inj-bar">
      <div className="regist-inj-bar-input">
        <h1>Identitas Tim<span className="star">*</span></h1>
        <h2>Tingkat<span className="star">*</span></h2>
        {(() => {
          if (error.tingkat) {
            return (
              <div className="regist-inj-error-msg">Pilih salah satu !<span className="star">*</span></div>
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
          <h2>Nama Sekolah/Kampus<span className="star">*</span></h2>
          {(() => {
            if (error.namaSekolah) {
              return (
                <div className="regist-inj-error-msg">
                  Nama Sekolah tidak boleh kosong !
                </div>
              );
            }
          })()}
          <input
            ref={namaSekolah}
            defaultValue={data.namaSekolah ?? ""}
            required
          ></input>
          <h2>Nama Guru/Dosen Pembimbing<span className="star">*</span></h2>
          {(() => {
            if (error.namaGuru) {
              return (
                <div className="regist-inj-error-msg">
                  Nama Guru/Dosen Pembimbing tidak boleh kosong !
                </div>
              );
            }
          })()}
          <input
            ref={namaGuru}
            defaultValue={data.namaGuru ?? ""}
            required
          ></input>
          <h2>No Telepon Guru/Dosen Pembimbing<span className="star">*</span></h2>
          {(() => {
            if (error.noTelpGuru) {
              return (
                <div className="regist-inj-error-msg">
                  No Telp Guru/Dosen Pembimbing tidak boleh kosong !
                </div>
              );
            } else if (error.noTelpGuruNotNumber) {
              return (
                <div className="regist-inj-error-msg">
                  No Telp Guru/Dosen Pembimbing harus berupa angka !
                </div>
              );
            }
          })()}
          <input ref={noTelp} defaultValue={data.noTelp ?? ""} required></input>

          <div className="regist-inj-button">
            <div></div>

            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Page2({ onNextPage, onBackPage, formData }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    namaKetua: false,
    nisnKetua: false,
    nisnKetuaNotNumber: false,
    noTelpKetua: false,
    noTelpKetuaNotNumber: false,
    emailKetua: false,
  });
  const namaKetua = useRef();
  const nisnKetua = useRef();
  const noTelpKetua = useRef();
  const emailKetua = useRef();
  const handleNext = () => {
    let newError = {};
    if (!namaKetua.current?.value) {
      newError = { namaKetua: true };
    } else newError = { namaKetua: false };

    if (!nisnKetua.current?.value) {
      newError = { ...newError, nisnKetua: true };
    } else newError = { ...newError, nisnKetua: false };

    if (isNaN(nisnKetua.current?.value)) {
      newError = { ...newError, nisnKetuaNotNumber: true };
    } else newError = { ...newError, nisnKetuaNotNumber: false };

    if (!noTelpKetua.current?.value) {
      newError = { ...newError, noTelpKetua: true };
    } else newError = { ...newError, noTelpKetua: false };

    if (isNaN(noTelpKetua.current?.value)) {
      newError = { ...newError, noTelpKetuaNotNumber: true };
    } else newError = { ...newError, noTelpKetuaNotNumber: false };

    if (!emailKetua.current?.value) {
      newError = { ...newError, emailKetua: true };
    } else newError = { ...newError, emailKetua: false };

    setError(newError);

    data.anggota[0] = {
      nama_lengkap: namaKetua.current?.value,
      nim: nisnKetua.current?.value,
      nomor_telepon: noTelpKetua.current?.value,
      email: emailKetua.current?.value,
    };

    if (Object.values(newError).every((val) => val === false)) {
      onNextPage(3, { ...formData, email });
    }
  };

  const handleBack = () => {
    onBackPage(1, { ...formData, email });
  };

  return (
    <section className="regist-inj-bar">
      <div className="regist-inj-bar-input">
        <h1>Identitas Ketua<span className="star">*</span></h1>
        <h2>Nama Ketua<span className="star">*</span></h2>
        {(() => {
          if (error.namaKetua) {
            return (
              <div className="regist-inj-error-msg">
                Nama Ketua Tim tidak boleh kosong !
              </div>
            );
          }
        })()}
        <input
          ref={namaKetua}
          defaultValue={data.anggota[0]?.nama_lengkap ?? ""}
        ></input>
        <h2>NISN/NIM Ketua<span className="star">*</span></h2>
        {(() => {
          if (error.nisnKetua) {
            return (
              <div className="regist-inj-error-msg">
                NISN/NIM Ketua Tim tidak boleh kosong !
              </div>
            );
          } else if (error.nisnKetuaNotNumber) {
            return (
              <div className="regist-inj-error-msg">
                NISN/NIM Ketua Tim harus berupa angka !
              </div>
            );
          }
        })()}
        <input
          ref={nisnKetua}
          defaultValue={data.anggota[0]?.nim ?? ""}
        ></input>
        <h2>No Telepon Ketua<span className="star">*</span></h2>
        {(() => {
          if (error.noTelpKetua) {
            return (
              <div className="regist-inj-error-msg">
                Nomer Telepon Ketua Tim tidak boleh kosong !
              </div>
            );
          } else if (error.noTelpKetuaNotNumber) {
            return (
              <div className="regist-inj-error-msg">
                Nomer Telepon Ketua Tim harus berupa angka !
              </div>
            );
          }
        })()}
        <input
          ref={noTelpKetua}
          defaultValue={data.anggota[0]?.nomor_telepon ?? ""}
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
          defaultValue={data.anggota[0]?.email ?? ""}
        ></input>

        <div className="regist-inj-button">
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </section>
  );
}

function Page3({ onNextPage, onBackPage, formAnggota1 }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    namaAnggota: false,
    nisnAnggota: false,
    nisnAnggotaNotNumber: false,
    noTelpAnggota: false,
    noTelpAnggotaNotNumber: false,
    emailAnggota: false,
  });
  const namaAnggota = useRef();
  const nisnAnggota = useRef();
  const noTelpAnggota = useRef();
  const emailAnggota = useRef();

  const handleNext = () => {
    let newError = {};    

    if ( !namaAnggota.current?.value) {
      newError = { namaAnggota: true };
    } else newError = { namaAnggota: false };
    
    if ( !nisnAnggota.current?.value) {
      newError = { ...newError, nisnAnggota: true };
    } else newError = { ...newError, nisnAnggota: false };

    if ( isNaN(nisnAnggota.current?.value)) {
      newError = { ...newError, nisnAnggotaNotNumber: true };
    } else newError = { ...newError, nisnAnggotaNotNumber: false };

    if ( !noTelpAnggota.current?.value) {
      newError = { ...newError, noTelpAnggota: true };
    } else newError = { ...newError, noTelpAnggota: false };

    if ( isNaN(noTelpAnggota.current?.value)) {
      newError = { ...newError, noTelpAnggotaNotNumber: true };
    } else newError = { ...newError, noTelpAnggotaNotNumber: false };

    if ( !emailAnggota.current?.value) {
      newError = { ...newError, emailAnggota: true };
    } else newError = { ...newError, emailAnggota: false };

    setError(newError);

    data.anggota[1] = {
      nama_lengkap: namaAnggota.current?.value,
      nim: nisnAnggota.current?.value,
      nomor_telepon: noTelpAnggota.current?.value,
      email: emailAnggota.current?.value,
    };

    if (Object.values(newError).every((val) => val === false)) {
      onNextPage(4, { ...formAnggota1, email });
    }
  };

  const handleBack = () => {
    onBackPage(2, { ...formAnggota1, email });
  };
  return (
    <section className="regist-inj-bar">
      <div className="regist-inj-bar-input">
        <h1>Identitas Anggota 1 <span className="star">*</span></h1>
        {(() => {
          if (error.namaAnggota) {
            return (
              <div className="regist-inj-error-msg">
                Nama Anggota 1 Tim tidak boleh kosong !
              </div>
            );
          }
        })()}
        <h2>Nama Anggota 1<span className="star">*</span></h2>
        <input
          ref={namaAnggota}
          defaultValue={data.anggota[1]?.nama_lengkap ?? ""}
        ></input>
        <h2>NISN/NIM Anggota 1<span className="star">*</span></h2>
        {(() => {
          if (error.nisnAnggota) {
            return (
              <div className="regist-inj-error-msg">
                NISN/NIM Anggota tidak boleh kosong !
              </div>
            );
          } else if (error.nisnAnggotaNotNumber) {
            return (
              <div className="regist-inj-error-msg">
                NISN/NIM Anggota harus berupa angka !
              </div>
            );
          }
        })()}
        <input
          ref={nisnAnggota}
          defaultValue={data.anggota[1]?.nim ?? ""}
        ></input>
        <h2>No Telepon Anggota 1<span className="star">*</span></h2>
        {(() => {
          if (error.noTelpAnggota) {
            return (
              <div className="regist-inj-error-msg">
                Nomer Telepon Anggota Tim tidak boleh kosong !
              </div>
            );
          } else if (error.noTelpAnggotaNotNumber) {
            return (
              <div className="regist-inj-error-msg">
                Nomer Telepon Anggota Tim harus berupa angka !
              </div>
            );
          }
        })()}
        <input
          ref={noTelpAnggota}
          defaultValue={data.anggota[1]?.nomor_telepon ?? ""}
        ></input>
        <h2>Email Anggota 1<span className="star">*</span></h2>
        {(() => {
          if (error.emailAnggota) {
            return (
              <div className="regist-inj-error-msg">
                Email Anggota Tim tidak boleh kosong !
              </div>
            );
          }
        })()}
        <input
          ref={emailAnggota}
          defaultValue={data.anggota[1]?.email ?? ""}
        ></input>

        <div className="regist-inj-button">
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </section>
  );
}

function Page4({ onNextPage, onBackPage, formAnggota2 }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({    
    nisnAnggota: false,
    nisnAnggotaNotNumber: false,
    noTelpAnggota: false,
    noTelpAnggotaNotNumber: false,
    emailAnggota: false,
  });
  const namaAnggota = useRef();
  const nisnAnggota = useRef();
  const noTelpAnggota = useRef();
  const emailAnggota = useRef();
  const handleNext = () => {
    let newError = {};    

    if (namaAnggota.current?.value && !nisnAnggota.current?.value) {
      newError = { ...newError, nisnAnggota: true };
    } else newError = { ...newError, nisnAnggota: false };

    if (namaAnggota.current?.value && isNaN(nisnAnggota.current?.value)) {
      newError = { ...newError, nisnAnggotaNotNumber: true };
    } else newError = { ...newError, nisnAnggotaNotNumber: false };

    if (namaAnggota.current?.value && !noTelpAnggota.current?.value) {
      newError = { ...newError, noTelpAnggota: true };
    } else newError = { ...newError, noTelpAnggota: false };

    if (namaAnggota.current?.value && isNaN(noTelpAnggota.current?.value)) {
      newError = { ...newError, noTelpAnggotaNotNumber: true };
    } else newError = { ...newError, noTelpAnggotaNotNumber: false };

    if (namaAnggota.current?.value && !emailAnggota.current?.value) {
      newError = { ...newError, emailAnggota: true };
    } else newError = { ...newError, emailAnggota: false };

    setError(newError);
    data.anggota[2] = {
      nama_lengkap: namaAnggota.current?.value,
      nim: nisnAnggota.current?.value,
      nomor_telepon: noTelpAnggota.current?.value,
      email: emailAnggota.current?.value,
    };
    if (Object.values(newError).every((val) => val === false)) {
      onNextPage(5, { ...formAnggota2, email });
    }
  };

  const handleBack = () => {
    onBackPage(3, { ...formAnggota2, email });
  };
  return (
    <section className="regist-inj-bar">
      <div className="regist-inj-bar-input">
        <h1>Identitas Anggota 2 (Optional)</h1>
        <h2>Nama Anggota 2</h2>
        <input
          ref={namaAnggota}
          defaultValue={data.anggota[2]?.nama_lengkap ?? ""}
        ></input>
        <h2>NISN/NIM Anggota 2 </h2>
        {(() => {
          if (error.nisnAnggota) {
            return (
              <div className="regist-inj-error-msg">
                NISN/NIM Anggota tidak boleh kosong !
              </div>
            );
          } else if (error.nisnAnggotaNotNumber) {
            return (
              <div className="regist-inj-error-msg">
                NISN/NIM Anggota harus berupa angka !
              </div>
            );
          }
        })()}
        <input
          ref={nisnAnggota}
          defaultValue={data.anggota[2]?.nim ?? ""}
        ></input>
        <h2>No Telepon Anggota 2</h2>
        {(() => {
          if (error.noTelpAnggota) {
            return (
              <div className="regist-inj-error-msg">
                Nomer Telepon Anggota Tim tidak boleh kosong !
              </div>
            );
          } else if (error.noTelpAnggotaNotNumber) {
            return (
              <div className="regist-inj-error-msg">
                Nomer Telepon Anggota Tim harus berupa angka !
              </div>
            );
          }
        })()}
        <input
          ref={noTelpAnggota}
          defaultValue={data.anggota[2]?.nomor_telepon ?? ""}
        ></input>
        <h2>Email Anggota 2</h2>
        {(() => {
          if (error.emailAnggota) {
            return (
              <div className="regist-inj-error-msg">
                Email Anggota Tim tidak boleh kosong !
              </div>
            );
          }
        })()}
        <input
          ref={emailAnggota}
          defaultValue={data.anggota[2]?.email ?? ""}
        ></input>

        <div className="regist-inj-button">
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </section>
  );
}

function Page5({ onNextPage, onBackPage, formAbstrak }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({    
    buktiFollow: false,
    abstrak: false,    
  });
  const buktiFollow = useRef();
  const abstrak = useRef();

  const handleBack = () => {
    let newError = {}

    if (!buktiFollow.current?.value) {
      newError = { ...newError, buktiFollow: true };
    } else newError = { ...newError, buktiFollow: false };

    if (!abstrak.current?.value) {
      newError = { ...newError, abstrak: true };
    } else newError = { ...newError, abstrak: false };

    setError(newError);

    data.buktiFollow = buktiFollow.current?.value;
    data.abstrak = abstrak.current?.value;

    if (Object.values(newError).every((val) => val === false)) {
      onBackPage(4, { ...formAbstrak, email });
    }
  };
  return (
    <section className="regist-inj-bar">
      <div className="regist-inj-bar-input">
        <h1>Form Pengumpulan <span className="star">*</span></h1>
        <h2>Pengumpulan Bukti Follow, Kartu KTM/Kartu Pelajar, Twibbon<span className="star">*</span></h2>
        {(() => {
          if (error.buktiFollow) {
            return (
              <div className="regist-inj-error-msg">
               Pengumpulan Bukti Follow, Kartu KTM/Kartu Pelajar, Twibbon tidak boleh kosong !
              </div>
            );
          }
        })()}
        <input ref={buktiFollow} defaultValue={data?.buktiFollow}></input>
        <h2>Pengumpulan Abstrak & Originalitas<span className="star">*</span></h2>
        {(() => {
          if (error.abstrak) {
            return (
              <div className="regist-inj-error-msg">
               Pengumpulan Abstrak & Originalitas tidak boleh kosong !
              </div>
            );
          }
        })()}
        <input ref={abstrak} defaultValue={data?.abstrak}></input>

        <div className="regist-inj-button">
          <button onClick={handleBack}>Back</button>
          <button
            onClick={() => {
              data.buktiFollow = buktiFollow.current?.value;
              data.abstrak = abstrak.current?.value;
              console.log(data);
              axios
                .post(
                  "https://api.epwits.org/injection/register",
                  {
                    nama_tim: String(data.namaTim),
                    asal_sekolah: String(data.namaSekolah),
                    no_telp_pembimbing: String(data.noTelp),
                    link_berkas_bukti: String(data.buktiFollow),
                    link_berkas_abstrak: String(data.abstrak),
                    type: data.kuliahCheckbox,
                    nama_pembimbing: String(data.namaGuru),
                    anggota: JSON.stringify({ anggota: data.anggota }),
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
                    onBackPage(4, { ...formAbstrak, email });
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
        return (
          <Page2
            onNextPage={handleNextPage}
            onBackPage={handleBackPage}
            formData={formData}
          />
        );
      case 3:
        return (
          <Page3
            onNextPage={handleNextPage}
            onBackPage={handleBackPage}
            formData={formAnggota1}
          />
        );
      case 4:
        return (
          <Page4
            onNextPage={handleNextPage}
            onBackPage={handleBackPage}
            formData={formAnggota2}
          />
        );
      case 5:
        return (
          <Page5
            onNextPage={handleNextPage}
            onBackPage={handleBackPage}
            formData={formAbstrak}
          />
        );

      // Tambahkan kasus untuk Page3, Page4, dan Page5
      default:
        return null;
    }
  };

  return (
    <div className="regist-inj-main">
      {currentPage < 6 && (
        <section>
          <div className="regist-inj-judul">
            <h1>INJECTION</h1>
            <p>Science Project and Exhibition</p>
          </div>
          <div className="pembatas-inj-regis-img"></div>
        </section>
      )}

      {renderPage()}
    </div>
  );
}

export default RegistInj;