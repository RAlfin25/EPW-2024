import Laboratorium from "./Laboratory"
import logoLabFoton from './asset-lab/Opening Foton.png'
import logoLabFoton1 from './asset-lab/Logo Foton.png'
import baut from './asset-lab/obeng2.png'

function Foton () {
    return (
        < Laboratorium 
        imgJudul={logoLabFoton}
        txtJudul1='REKAYASA'
        txtJudul2='FOTONIKA'
        imgLab={logoLabFoton1}
        txtDeskripsi='Kelompok Bidang Keilmuan Rekayasa Fotonika merupakan cabang bidang rekayasa, 
                        yang berkaitan dengan penerapan prinsip-prinsip keilmuan Optika dalam mengembangkan 
                        suatu sistem optik / fotonik terintegrasi, untuk penggunaan pada berbagai keperluan sehari-hari. 
                        Sistem optik / fotonik ini dapat dimanfaatkan untuk berbagai keperluan monitoring proses industri, 
                        sistem pertahanan / militer, aplikasi diagnostik dan terapeutik dalam  bidang medis / pelayanan kesehatan, 
                        serta penggunaan pada bidang pertanian dan peternakan untuk pemastian kualitas dan keaslian produk pengolahan hasil pertanian / peternakan.'
        txtJudul3='Apa itu Lab Rekayasa Fotonika?'
        txtBipeng='Laboratorium Rekayasa Fotonika'
        txtBidang1="Artificial Intellegence"
        txtBidang2="Product Design"
        txtBidang3="Industrial Automation"
        txtBidang4="Internet Of Things"
        fotoBidang={baut}
        />
        
        )
}

export default Foton;