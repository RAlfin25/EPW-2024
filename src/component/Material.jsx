import React, { useEffect, useState } from 'react'
import AbsoluteLab from './AbsoluteLab'
function Material() {
    const bidang = ['Nano Material', 'MicroFluidic Biosensor', 'Biomaterials', 'Polymer', 'Mechanical Propeties Of Materials', 'Nanomaterials']
    const riset = [{judul: 'Wintex INNOPA (Gold Medal) 2020', desc: 'Wintex INNOPA (Gold Medal) 2020'}, {judul: 'Wintex INNOPA (Gold Medal) 2020', desc: 'Wintex INNOPA (Gold Medal) 2020'}, {judul: 'Wintex INNOPA (Gold Medal) 2020', desc: 'Wintex INNOPA (Gold Medal) 2020'}]
    const prestasi = ['apa', 'opo', 'what']
  return (
    <div>
      <AbsoluteLab logo='bahan.png' lab='Material dan Fungsional Maju' bidang={bidang} riset={riset} prestasi={prestasi} desc='Laboratorium Material Fungsional Maju merupakan sarana pendukung untuk melakukan kegiatan pendidikan dan pengajaran, penelitian dan pengabdian kepada masyarakat dalam hal yang berkaitan dengan rekayasa bahan serta mempelajari berbagai pengetahuan material meliputi pengembangan dan penerapan pengetahuan mengenasi komposisi, struktur, pemrosesan, dan karakterisasi bahan yang sesuai dengan sifat-sifat dan terapannya. Termasuk juga ke dalamnya analisis kinerja sistem dan pemilihan material untuk sistem tertentu.'></AbsoluteLab>
    </div>
  )
}

export default Material