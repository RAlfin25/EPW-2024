import Laboratorium from "./Laboratory"
import logoLabEcs from './asset-lab/Opening.png'
import logoLabEcs1 from './asset-lab/Logo ECS.svg'
import baut from './asset-lab/obeng2.png'

function ECS () {
    return (
        < Laboratorium 
        imgJudul={logoLabEcs}
        txtJudul1='SISTEM TERTANAM '
        txtJudul2='DAN SIBER FISIK'
        imgLab={logoLabEcs1}
        txtDeskripsi='Laboratorium Sistem Tertanam dan Siber-Fisik , atau dalam bahasa inggris disebut Laboratory of Embedded and Cyber -Physical System (disingkat ECS), merupakan laboratorium yang menghubungkan gagasan penelitian terbaru berbasis fisika dengan pengembangan produk/proses dalam format embedded system dan skema internet-of-things.'
        txtJudul3='Apa itu Lab Sistem Tertanam  dan Siber Fisik?'
        txtBipeng='LABORATORIUM SISTEM TERTANAM DAN SIBER-FISIK'
        txtBidang1="Artificial Intellegence"
        txtBidang2="Product Design"
        txtBidang3="Industrial Automation"
        txtBidang4="Internet Of Things"
        fotoBidang={baut}
        />
        
        )
}

export default ECS;