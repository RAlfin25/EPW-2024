import React, { useEffect, useState } from 'react'
import AbsoluteLab from './AbsoluteLab'
function ECS() {
    const bidang = ['Artificial Intellegence', 'Product Design', 'Industrial Automation', 'Internet Of Things']
    const riset = [{judul: 'Wintex INNOPA (Gold Medal) 2020', desc: 'Wintex INNOPA (Gold Medal) 2020'}, {judul: 'Wintex INNOPA (Gold Medal) 2020', desc: 'Wintex INNOPA (Gold Medal) 2020'}, {judul: 'Wintex INNOPA (Gold Medal) 2020', desc: 'Wintex INNOPA (Gold Medal) 2020'}]
    const prestasi = ['apa', 'opo', 'what']
  return (
    <div>
      <AbsoluteLab logo='ECS.png' lab='Sistem Tertanam dan Siber Fisik' bidang={bidang} riset={riset} prestasi={prestasi} desc='Laboratorium Sistem Tertanam dan Siber-Fisik , atau dalam bahasa inggris disebut Laboratory of Embedded and Cyber -Physical System (disingkat ECS), merupakan laboratorium yang menghubungkan gagasan penelitian terbaru berbasis fisika dengan pengembangan produk/proses dalam format embedded system dan skema internet-of-things.'></AbsoluteLab>
    </div>
  )
}

export default ECS