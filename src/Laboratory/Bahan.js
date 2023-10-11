import Laboratorium from "./Laboratory"
import logoLabBahan from './asset-lab/Opening Bahan.png'
import logoLabBahan1 from './asset-lab/Logo Bahan.png'
import baut from './asset-lab/obeng2.png'

function Bahan () {
    return (
        < Laboratorium 
        imgJudul={logoLabBahan}
        txtJudul1='MATERIAL DAN'
        txtJudul2='FUNGSIONAL MAJU'
        imgLab={logoLabBahan1}
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

export default Bahan;