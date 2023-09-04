import React, { useEffect, useState } from 'react'
import AbsoluteLab from './AbsoluteLab'
function Foton() {
    const bidang = ['Spektroskopi', 'Fiber Optik', 'Optical Devices']
    const riset = [{judul: 'Wintex INNOPA (Gold Medal) 2020', desc: 'Wintex INNOPA (Gold Medal) 2020'}, {judul: 'Wintex INNOPA (Gold Medal) 2020', desc: 'Wintex INNOPA (Gold Medal) 2020'}, {judul: 'Wintex INNOPA (Gold Medal) 2020', desc: 'Wintex INNOPA (Gold Medal) 2020'}]
    const prestasi = ['apa', 'opo', 'what']
  return (
    <div>
      <AbsoluteLab logo='foton.png' lab='Rekayasa Fotonika' bidang={bidang} riset={riset} prestasi={prestasi} desc='Kelompok Bidang Keilmuan Rekayasa Fotonika merupakan cabang bidang rekayasa, yang berkaitan dengan penerapan prinsip-prinsip keilmuan Optika dalam mengembangkan suatu sistem optik / fotonik terintegrasi, untuk penggunaan pada berbagai keperluan sehari-hari. Sistem optik / fotonik ini dapat dimanfaatkan untuk berbagai keperluan monitoring proses industri, sistem pertahanan / militer, aplikasi diagnostik dan terapeutik dalam bidang medis / pelayanan kesehatan, serta penggunaan pada bidang pertanian dan peternakan untuk pemastian kualitas dan keaslian produk pengolahan hasil pertanian / peternakan.'></AbsoluteLab>
    </div>
  )
}

export default Foton