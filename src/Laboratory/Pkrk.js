import Laboratorium from "./Laboratory"
import logoLabPkrk from './asset-lab/Opening PKRK.png'
import logoLabPkrk1 from './asset-lab/Logo PKRK.png'
import baut from './asset-lab/obeng2.png'

function PKRK () {
    return (
        < Laboratorium 
        imgJudul={logoLabPkrk}
        txtJudul1='PENGUKURAN, KEANDALAN'
        txtJudul2='RISIKO, DAN KESELAMATAN'
        imgLab={logoLabPkrk1}
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

export default PKRK;