import "./homepage.css";
import ephyfest from "../component/asset/ephyfest.svg";
import slider1 from "../component/asset/image 18.jpg";
import { useEffect, useRef, useState } from "react";
const sliderContent = [
  {
    title: "Workshop",
    sumary:
      "Kegiatan ini ditujukan untuk mahasiswa dengan menampilkan berbagai teknologi riset yang dikembangkannya",
    img: slider1,
    link: "",
  },
  {
    title: "ALUMNI GATHERING",
    sumary:
      "Penjelasan ALUMNI GATHERING orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum vulputat",
    img: slider1,
    link: "",
  },
  {
    title: "Workshop",
    sumary:
      "Kegiatan ini ditujukan untuk mahasiswa dengan menampilkan berbagai teknologi riset yang dikembangkannya",
    img: slider1,
    link: "",
  },
  {
    title: "Workshop",
    sumary:
      "Kegiatan ini ditujukan untuk mahasiswa dengan menampilkan berbagai teknologi riset yang dikembangkannya",
    img: slider1,
    link: "",
  },
];

function HomePage() {
  document.title = "Engineering Physics Week 2024";
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [index, setIndex] = useState(0);
  const slider = useRef(null);
  useEffect(() => {
    if (left == true) {
      let active = document.getElementById(["slider-content-", index].join(""));
      active.style.transform = "translateX(-15%)";
      active.style.transition = "transform 200ms ease-in-out";
      setTimeout(() => {
        active.style.height = "60%";
        active.style.transition = "height 0.3s ease-in-out";
      }, 200);
      setTimeout(() => {
        active.style.transform = "translateX(0%)";
        active.style.transition = "transform 200ms ease-in-out";
      }, 400);
      setTimeout(() => {
        active.style = null;
        active.classList.remove("center");
        setLeft(false);
        setRight(false);
        setIndex(index == 0 ? sliderContent.length - 1 : index - 1);
      }, 500);
    }
    if (right == true) {
      let active = document.getElementById(["slider-content-", index].join(""));
      active.style.transform = "translateX(15%)";
      active.style.transition = "transform 0.3s ease-in-out";
      setTimeout(() => {
        active.style.height = "60%";
        active.style.transition = "height 0.1s ease-in-out";
      }, 200);
      setTimeout(() => {
        active.style.transform = "translateX(0%)";
        active.style.transition = "transform 200ms ease-in-out";
      }, 400);
      setTimeout(() => {
        active.classList.remove("center");
        active.style = null;
        setRight(false);
        setLeft(false);
        setIndex(index == sliderContent.length - 1 ? 0 : index + 1);
      }, 500);
    }
  }, [left, right]);
  useEffect(() => {
    setInterval(() => {
      setLeft(true);
    }, 5000);
  }, []);
  return (
    <>
      <div className="header">
        <div className="header-content">
          <div className="header-logo"></div>
          <div className="header-text">
            <h4>Welcome to</h4>
            <h1>ENGINEERING PHYSICS WEEK 2024</h1>
            <p>
              EPW merupakan sebuah wadah acara yang didalamnya berisi
              event-event kompetisi bagi siswa SMA/SMK/Sederajat, dan juga
              mahasiswa/i. Event ini tentunya sebagai media untuk menyalurkan
              inovasi, ide, dan juga prestasi-nya.
            </p>
            <button className="orrange-button">Explore More</button>
          </div>
        </div>
        <div className="tema-section">
          <div className="tema-content">
            <h3>EPW 2024 MENGUSUNG TEMA </h3>
            <h1>
              “Youth Movement Toward Technology and Sustainable Development”
            </h1>
          </div>
        </div>
        <div className="event-journey-section">
          <div className="event-journey-content">
            <h1>EPW 2024</h1>
            <h2>Event Journey</h2>
          </div>
        </div>
      </div>
      <div className="injection">
        <div className="pembatas atas"></div>
        <div className="injection-content">
          <div className="injection-text">
            <h1>Injection</h1>
            <p>
              Science Project and Innovation (INJECTION) merupakan kompetisi
              karya tulis ilmiah bagi SMA/SMK Sederajat dan mahasiswa/i
              perguruan tinggi yang dapat dijadikan salah satu wadah bagi para
              generasi penerus bangsa...
            </p>
            <button>Explore More</button>
          </div>
          <div className="injection-logo">
            <div className="injection-mail"></div>
          </div>
        </div>
        <div className="pembatas bawah"></div>
      </div>
      <div className="videografi">
        <div className="videografi-content">
          <div className="videografi-logo"></div>
          <div className="videografi-text">
            <h1>videografi</h1>
            <p>
              Videografi EPW 2024 merupakan kompetisi film pendek atau short
              film bagi SMA/SMK sederajat dan mahasiswa/i perguruan tinggi
              tingkat nasional sebagai bentuk wadah pengembangan minat...
            </p>
            <button>Explore More</button>
          </div>
        </div>
        <div className="pembatas bawah"></div>
      </div>
      <div className="epc">
        <div className="epc-content">
          <div className="epc-text">
            <h1>EPC</h1>
            <p>
              Engineering Physics Challenge (EPC) merupakan Kompetisi Fisika
              Teknik tahunan tingkat Nasional yang diselenggarakan oleh Himpunan
              Mahasiswa Teknik Fisika, Departemen Teknik Fisika ITS untuk
              mengasah...
            </p>
            <button>Explore More</button>
          </div>
          <div className="epc-logo">
            <div className="epc-thropy"></div>
          </div>
        </div>
        <div className="pembatas bawah"></div>
      </div>
      <div className="ephyfest">
        <div className="ephyfest-content">
          <div className="ephyfest-content-top">
            <div className="ephyfest-logo"></div>
            <div className="ephyfest-text">
              <img src={ephyfest} alt="ephyfest" />
              <p>
                Engineering Physics Challenge (ephyfest) merupakan Kompetisi
                Fisika Teknik tahunan tingkat Nasional yang diselenggarakan oleh
                Himpunan Mahasiswa Teknik Fisika, Departemen Teknik Fisika ITS
                untuk mengasah...
              </p>
            </div>
          </div>
          <div className="ephyfest-content-bottom">
            <div className="slider-header">Explore More</div>
            <div className="slider" ref={slider}>
              {sliderContent.map((item, i) => {
                let prev = (index == 0 ? sliderContent.length - 1 : index) - 1;
                let next = (index == sliderContent.length - 1 ? 0 : index) + 1;
                if (
                  (i >= prev && i <= next) ||
                  i == prev ||
                  i == index ||
                  i == next
                ) {
                  return (
                    <div
                      className={(() => {
                        if (i == index) return "slider-content center";
                        else return "slider-content";
                      })()}
                      id={["slider-content-", i].join("")}
                    >
                      <img src={item.img} alt={item.title} />
                      <div className="overlay">
                        <div className="overlay-content">
                          <h1>{item.title}</h1>
                          <p>{item.sumary}</p>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
              <div
                className="slider-controll-left"
                onClick={() => {
                  setLeft(true);
                }}
              ></div>
              <div
                className="slider-controll-right"
                onClick={() => {
                  setRight(true);
                }}
              ></div>
            </div>
            <div className="slider-index">
              {sliderContent.map((item, i) => {
                if (index == i) {
                  return <div className="slider-index-content active"></div>;
                } else {
                  return <div className="slider-index-content"></div>;
                }
              })}
            </div>
          </div>
          <div className="ephyfest-content-end"></div>
        </div>
        <div className="ephyfest-mask-end"> </div>
      </div>
      <div className="timeline">
        <div className="timeline-content">
          <h1>EPW</h1>
        </div>
      </div>
    </>
  );
}

export default HomePage;
