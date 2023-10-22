const validation = (values) => {
    let errors = {}

    if (!values.tingkat){
        errors.tingkat= "Bagian ini harus diisi"
    }

    if (!values.namaTim) {
        errors.namaTim= "Nama Tim harus diisi"
    }

    if(!values.namaSekolahKampus) {
        errors.namaTim= "Nama Sekolah harus diisi"
    }

    if(!values.namaGuruDosenPembimbing) {
        errors.namaGuruDosenPembimbing = "Nama Dosen pembimbing harus diisi"
    }

    if(!values.noTeleponGuruDosenPembimbing) {
        errors.noTeleponGuruDosenPembimbing ="No Telepon harus diisi"
    }

    return errors;
}

export default validation