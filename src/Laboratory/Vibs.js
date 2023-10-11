import Laboratorium from "./Laboratory"
import logoLabVibs from './asset-lab/Opening Vibs.png'
import logoLabVibs1 from './asset-lab/Logo Vibs.png'
import baut from './asset-lab/obeng2.png'

function Vibrastik () {
    return (
        < Laboratorium 
        imgJudul={logoLabVibs}
        txtJudul1='VIBRASI DAN'
        txtJudul2='AKUSTIK'
        imgLab={logoLabVibs1}
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

export default Vibrastik;