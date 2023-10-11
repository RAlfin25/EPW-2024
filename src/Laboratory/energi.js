import Laboratorium from "./Laboratory"
import logoLabEnergi from './asset-lab/Opening Energi.png'
import logoLabEnergi1 from './asset-lab/Logo Energi.png'
import baut from './asset-lab/obeng2.png'

function Energi () {
    return (
        < Laboratorium 
        imgJudul={logoLabEnergi}
        txtJudul1='REKAYASA ENERGI DAN'
        txtJudul2='PENGONDISIAN LINGKUNGAN'
        imgLab={logoLabEnergi1}
        txtDeskripsi='Laboratorium Sistem Tertanam dan Siber-Fisik , atau dalam bahasa inggris disebut Laboratory of Embedded and Cyber -Physical System (disingkat ECS), merupakan laboratorium yang menghubungkan gagasan penelitian terbaru berbasis fisika dengan pengembangan produk/proses dalam format embedded system dan skema internet-of-things.'
        txtJudul3='Apa itu Lab Sistem Tertanam  dan Siber Fisik?'
        txtBipeng='Laboratorium Sistem Tertanam dan Siber-Fisik'
        txtBidang1="Artificial Intellegence"
        txtBidang2="Product Design"
        txtBidang3="Industrial Automation"
        txtBidang4="Internet Of Things"
        fotoBidang={baut}
        />
        
        )
}

export default Energi;