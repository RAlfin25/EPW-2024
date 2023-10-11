import './about-tf.css';
import Cardbidang from './cardBidang';
import LogoTF from './asset-at/logoTF.png';
import foto1 from './asset-at/foto1.png';
import foto2 from './asset-at/foto2.png';
import obeng1 from './asset-at/obeng1.png';
import obeng2 from './asset-at/obeng2.png';
import obeng3 from './asset-at/obeng3.png';
import obeng4 from './asset-at/obeng4.png';
import obeng5 from './asset-at/obeng5.png';
import Bulet1 from './asset-at/Foton-01.png';
import Bulet2 from './asset-at/Energi-01.png';
import Bulet3 from './asset-at/ICO-01.png';
import Bulet4 from './asset-at/Bahan-01.png';
import Bulet5 from './asset-at/Vibrastik-01.png';
import Bulet6 from './asset-at/ECS-01.png';
import Bulet7 from './asset-at/PKRK-01.png';

import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { NavLink } from 'react-router-dom';



function AboutTF() {
  return (
    <body className='body-AT'>
      <section className='Page1_Ab'>
        <div className='containerP1_Ab'>
          <img src={LogoTF} className='logoTF_Ab'/>
          <div className='textP1_Ab'>
            <h1 className='tfP1_Ab'>
              TEKNIK FISIKA
            </h1>
            <h1 className='its_Ab'>
              Institut Teknologi Sepuluh Nopember
            </h1>
            <a href='#Page2_Ab' className='butExp_Ab'>Explore More</a>
          </div>
        </div>
      </section>

      <section className='Page2_Ab' id='Page2_Ab'>
        <div className='containerP2_Ab'>
          <img src={foto1} className='foto1_Ab' />
          <div className='textP2_Ab'>
            <h1 className='tfP2_Ab'>
              TEKNIK FISIKA
            </h1>
            <h2 className='apaItu_Ab'>
              Apa itu Teknik Fisika (Engineering Physics)?
            </h2>
            <p className='textPanjangP2_Ab'>
            <span className='txtOren_Ab'>Teknik Fisika Institut Teknologi Sepuluh Nopember</span> merupakan salah satu departemen dibawah Fakultas Teknologi Industri dan Rekayasa Sistem yang berdiri tahun 1965.
            </p>
            <p className='textPanjangP2_Ab'>
            <span className='txtOren_Ab'>Pendidikan Teknik Fisika (Engineering Physics)</span> sendiri merupakan pendidikan keteknikan yang memadukan konsep-konsep keteknikan / rekayasa (engineering) dengan penguasaan dasar ilmu fisika dan matematika yang kuat untuk menghasilkan aplikasi kreatif dan inovatif. Teknik Fisika lahir untuk menjawab tantangan perkembangan sains dan teknologi dalam berbagai bidang yang membutuhkan engineer dengan dasar sains teoritis yang kuat disertai kemampuan bekerja dalam multi-disiplin ilmu.
            </p>
          </div>
        </div>
      </section>

      <section className='Page3_Ab'>
        <div className='containerP3_Ab'>
          <div className='textP3_Ab'>
            <h1 className='BidMin_Ab'>
              5 BIDANG MINAT
            </h1>
            <h1 className='tfP3_Ab'>
              Teknik Fisika
            </h1>
            <p className='textPanjangP3_Ab'>
              Peserta didik di Departemen Teknik Fisika ITS dibekali dengan kemampuan riset dan pengembangan, serta perancangan dan analisa untuk berbagai sistem fisis di Industri, dengan peminatan dalam 5 bidang: 
            </p>
            <div className='limaBidang_Ab'>
              <div className='bidangSatu_Ab'><Cardbidang txtBidang='Bidang Riset Rekayasa Energi dan Pengondisian Lingkungan' fotoBidang={obeng1} /></div>
              <div className='bidangDua_Ab'><Cardbidang txtBidang='Bidang Riset Rekayasa Instrumentasi' fotoBidang={obeng2} /></div>
              <div className='duaBidang_Ab'>
                <Cardbidang txtBidang='Bidang Riset Vibrasi dan Akustik' fotoBidang={obeng3} />
                <Cardbidang txtBidang='Bidang Riset Rekayasa Bahan' fotoBidang={obeng4} />
              </div>
              <div className='bidangLima_Ab'><Cardbidang txtBidang='Bidang Riset Rekayasa Fotonika' fotoBidang={obeng5} /></div>
              </div>
          </div>
          <img src={foto2} className='foto2_Ab' />
        </div>
      </section>

      <section className='Page4_Ab'>
        <div className='containerP4_Ab'>
          <div className='textP4_Ab'>
            <h1 className='textLab_Ab'>LABORATORIUM</h1>
            <h1 className='tfP4_Ab'>Teknik Fisika</h1>
            <p className='textPanjangP4_Ab'>Departemen Teknik Fisika berkomitmen untuk menyelenggarakan pendidikan yang beriringan dengan pembentukan keterampilan mahasiswa/i sesuai yang tertuang dalam visi misi  Teknik Fisika. Fasilitas akademik yang memadai ditunjukkan diantaranya dengan keberadaan laboratorium untuk kelimat bidang minat.</p>
          </div>
          <div className='container-slider'>
          {/*  <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={-50}
              slidesPerView={5}
              navigation
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              
            >

              <SwiperSlide className='slide-container'>
                <div className='slide-content'>
                  <div className='card-image'>
                    <img src={Bulet1} className='card-img' />
                  </div>

                  <div className='card-content'>
                    <h2 class="nama-lab">Rekayasa Fotonika</h2>
                    <NavLink to="/Foton"
                      style={({ isActive, isPending }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "" : "",
                          textDecoration: "none", 
                        };
                      }} 
                      ><a className='button' href='#'>learn more</a></NavLink>
                  </div>
                </div> 
                
              </SwiperSlide>
              <SwiperSlide className='slide-container'>
                <div className='slide-content'>    
                      <div className='card-image'>
                          <img src={Bulet2} className='card-img' />
                      </div>

                    <div class="card-content">
                      <h2 class="nama-lab">Rekayasa Energi dan Pengondisian Lingkungan</h2>
                      <NavLink to="/Energi"
                      style={({ isActive, isPending }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "" : "",
                          textDecoration: "none", 
                        };
                      }} 
                      ><a className='button' href='#'>learn more</a></NavLink>
                    </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide className='slide-container'>
                <div className='slide-content'>
                      <div className='card-image'>
                          <img src={Bulet3} className='card-img' />
                      </div>

                    <div class="card-content">
                      <h2 class="nama-lab">Instrumentasi Kontrol dan Optimisasi</h2>
                      <NavLink to="/Instrumen"
                      style={({ isActive, isPending }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "" : "",
                          textDecoration: "none", 
                        };
                      }} 
                      ><a className='button' href='#'>learn more</a></NavLink>
                    </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide className='slide-container'>
                <div className='slide-content'>
                      <div className='card-image'>
                          <img src={Bulet4} className='card-img' />
                      </div>

                    <div class="card-content">
                      <h2 class="nama-lab">Material Fungsional Maju</h2>
                      <NavLink to="/Bahan"
                      style={({ isActive, isPending }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "" : "",
                          textDecoration: "none", 
                        };
                      }} 
                      ><a className='button' href='#'>learn more</a></NavLink>
                    </div>
                  </div>
            
              </SwiperSlide>
              <SwiperSlide className='slide-container'>
                <div className='slide-content'>
                      <div className='card-image'>
                          <img src={Bulet5} className='card-img' />
                      </div>

                    <div class="card-content">
                      <h2 class="nama-lab">Vibrasi dan Akustik</h2>
                      <NavLink to="/Vibrastik"
                      style={({ isActive, isPending }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "" : "",
                          textDecoration: "none", 
                        };
                      }} 
                      ><a className='button' href='#'>learn more</a></NavLink>
                    </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide className='slide-container'>
                <div className='slide-content'>
                      <div className='card-image'>
                          <img src={Bulet6} className='card-img' />
                      </div>

                    <div class="card-content">
                      <h2 class="nama-lab">Sistem Tertanam dan Siber-Fisik</h2>
                      <NavLink to="/ECS"
                      style={({ isActive, isPending }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "" : "",
                          textDecoration: "none", 
                        };
                      }} 
                      ><a className='button' href='#'>learn more</a></NavLink>
                    </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide className='slide-container'>
                <div className='slide-content'>
                      <div className='card-image'>
                          <img src={Bulet7} className='card-img' />
                      </div>

                    <div class="card-content">
                      <h2 class="nama-lab">Pengukuran, Keandalan, Risiko, dan Keselamatan</h2>
                      <NavLink to="/PKRK"
                      style={({ isActive, isPending }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "" : "",
                          textDecoration: "none", 
                        };
                      }} 
                      ><a className='button' href='#'>learn more</a></NavLink>
                    </div>
            
                </div>
              </SwiperSlide>
                    </Swiper> */}
          </div>
        </div>
      </section>
    </body>
  );
}

export default AboutTF;
