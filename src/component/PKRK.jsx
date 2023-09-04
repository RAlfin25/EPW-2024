import React, { useEffect, useState } from 'react'
import AbsoluteLab from './AbsoluteLab'
function PKRK() {
    const bidang = ['Elektronika', 'Pengukuran', 'Manajemen Resiko', 'Keandalan']
    const riset = [{judul: 'Wintex INNOPA (Gold Medal) 2020', desc: 'Wintex INNOPA (Gold Medal) 2020'}, {judul: 'Wintex INNOPA (Gold Medal) 2020', desc: 'Wintex INNOPA (Gold Medal) 2020'}, {judul: 'Wintex INNOPA (Gold Medal) 2020', desc: 'Wintex INNOPA (Gold Medal) 2020'}]
    const prestasi = ['apa', 'opo', 'what']
  return (
    <div>
      <AbsoluteLab logo='pkrk.png' lab='Pengukuran, Keandalan, Risiko, dan Kesalamatan?' bidang={bidang} riset={riset} prestasi={prestasi} desc='Laboratorium Pengukuran, Keandalan, Risiko, dan Keselamatan (LPKRK) merupakan salah satu laboratorium penunjang keilmuan yang berada di Departemen Teknik Fisika ITS. Laboratorium ini sebelumnya bernama Laboratorium Pengukuran Fisis atau biasa disebut juga Lab Fisis. Selain menunjang kegiatan perkuliahan, laboratorium ini juga biasa digunakan untuk mengembangkan keilmuan dibidang sistem pengukuran, kalibrasi, reliability, safety, microcontroller, dan elektronika.'></AbsoluteLab>
    </div>
  )
}

export default PKRK