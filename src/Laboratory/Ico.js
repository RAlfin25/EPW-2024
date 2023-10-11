import Laboratorium from "./Laboratory"
import logoLabIco from './asset-lab/Opening Ico.png'
import logoLabIco1 from './asset-lab/Logo ICO.png'
import baut from './asset-lab/obeng2.png'

function Instrumen () {
    return (
        < Laboratorium 
        imgJudul={logoLabIco}
        txtJudul1='INSTRUMENTASI KONTROL'
        txtJudul2='DAN OPTIMISASI'
        imgLab={logoLabIco1}
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

export default Instrumen;