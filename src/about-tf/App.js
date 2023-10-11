import './App.css';
import Cardbidang from './Components/cardBidang'
import LogoTF from './Image/logoTF.png'
import foto1 from './Image/foto1.png'
import foto2 from './Image/foto2.png'
import obeng1 from './Image/obeng1.png'
import obeng2 from './Image/obeng2.png'
import obeng3 from './Image/obeng3.png'
import obeng4 from './Image/obeng4.png'
import obeng5 from './Image/obeng5.png'
import Bulet1 from './Image/Foton.png'
import Bulet2 from './Image/Energi.png'
import Bulet3 from './Image/ICO.png'
import Bulet4 from './Image/Bahan.png'
import Bulet5 from './Image/Vibrastik.png'
import Bulet6 from './Image/ECS.png'
import Bulet7 from './Image/PKRK.png'

import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



function App() {
  return (
    <body>
      <section className='Page1_Ab'>
        <div className='containerP1_Ab'>
          <img src={LogoTF} className='logoTF_Ab'/>
          <div className='textP1_Ab'>
            <h1 className='tfP1_Ab'>
              TEKNIK FISIKA
            </h1>
            <h1 className='its_Ab'>
              Institute Teknologi Sepuluh Nopember
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
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={20}
              slidesPerView={4}
              navigation
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              

              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >

              <SwiperSlide className='slide-container'>
                <div className='slide-content'>
                  <div className='card'>
                    <div className='image-content'>
                      <span className='overlay'></span>
                            
                      <div className='card-image'>
                          <img src={Bulet1} className='card-img' />
                      </div>
                    </div>

                    <div class="card-contentfohan">
                      <h2 class="nama-lab">Rekayasa Fotonika</h2>
                      <a className='button' href='#'>learn more</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='slide-container'>
                <div className='slide-content'>
                  <div className='card'>
                    <div className='image-content'>
                      <span className='overlay'></span>
                            
                      <div className='card-image'>
                          <img src={Bulet2} className='card-img' />
                      </div>
                    </div>

                    <div class="card-content">
                      <h2 class="nama-lab">Rekayasa Energi dan Pengondisian Lingkungan</h2>
                      <a className='button' href='#'>learn more</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='slide-container'>
                <div className='slide-content'>
                  <div className='card'>
                    <div className='image-content'>
                      <span className='overlay'></span>
                            
                      <div className='card-image'>
                          <img src={Bulet3} className='card-img' />
                      </div>
                    </div>

                    <div class="card-content">
                      <h2 class="nama-lab">Instrumentasi Kontrol dan Optimisasi</h2>
                      <a className='button' href='#'>learn more</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='slide-container'>
                <div className='slide-content'>
                  <div className='card'>
                    <div className='image-content'>
                      <span className='overlay'></span>
                            
                      <div className='card-image'>
                          <img src={Bulet4} className='card-img' />
                      </div>
                    </div>

                    <div class="card-contentfohan">
                      <h2 class="nama-lab">Material Fungsional Maju</h2>
                      <a className='button' href='#'>learn more</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='slide-container'>
                <div className='slide-content'>
                  <div className='card'>
                    <div className='image-content'>
                      <span className='overlay'></span>
                            
                      <div className='card-imagevib'>
                          <img src={Bulet5} className='card-imgvib' />
                      </div>
                    </div>

                    <div class="card-contentfohan">
                      <h2 class="nama-lab">Vibrasi dan Akustik</h2>
                      <a className='button' href='#'>learn more</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='slide-container'>
                <div className='slide-content'>
                  <div className='card'>
                    <div className='image-content'>
                      <span className='overlay'></span>
                            
                      <div className='card-imageecs'>
                          <img src={Bulet6} className='card-imgecs' />
                      </div>
                    </div>

                    <div class="card-content">
                      <h2 class="nama-lab">Sistem Tertanam dan Siber-Fisik</h2>
                      <a className='button' href='#'>learn more</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='slide-container'>
                <div className='slide-content'>
                  <div className='card'>
                    <div className='image-content'>
                      <span className='overlay'></span>
                            
                      <div className='card-image'>
                          <img src={Bulet7} className='card-img' />
                      </div>
                    </div>

                    <div class="card-content">
                      <h2 class="nama-lab">Pengukuran, Keandalan, Risiko, dan Keselamatan</h2>
                      <a className='button' href='#'>learn more</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </body>
  );
}

export default App;
