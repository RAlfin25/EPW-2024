import React from 'react'
import TemplateLab from './TemplateLab'
import AbsoluteLab from './AbsoluteLab'

function Energi() {
  const bidang = ['Rekayasa Thermal (Thermal and Fluid Engineering)', 'Renewable Energi', 'Energy Management and Green Building']
    const riset = [{judul: 'Wintex INNOPA (Gold Medal) 2020', desc: 'Wintex INNOPA (Gold Medal) 2020'}, {judul: 'Wintex INNOPA (Gold Medal) 2020', desc: 'Wintex INNOPA (Gold Medal) 2020'}, {judul: 'Wintex INNOPA (Gold Medal) 2020', desc: 'Wintex INNOPA (Gold Medal) 2020'}]
    const prestasi = ['apa', 'opo', 'what']
  return (
    <AbsoluteLab logo='energi.svg' lab='Rekayasa Energi dan Pengondisian Lingkungan' desc='Laboratorium ini merupakan tempat khusus untuk mempelajari dan mendalami bidang ilmu energi dan pengkondisian lingkungan (rekayasa thermal). Dalam menunjang bidang ilmu tersebut, maka laboratorium ini dibagi menjadi tiga bidang minat dalam pembelajarannya. Antara lain yaitu bidang minat Rekayasa Thermal, bidang minat Renewable Energi, dan bidang minat Energi Management dan Green Building' bidang={bidang} prestasi={prestasi} riset={riset}></AbsoluteLab>
  )
}

export default Energi