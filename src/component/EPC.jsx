import React from 'react'
import SliderRiset from './SliderRiset'
function EPC() {
    function Button(props){
        const {children} = props
        return(
            <h1 className='bg-[#5A8EAF] rounded-2xl border-2 border-black p-3 mt-10 text-white font-bold w-fit text-xl'>{children}</h1>
        )
    }
  return (
    <div style={{background:'#96CEE6'}}>
        <div className='p-20'>
            <h1 className='font-bold text-[50px] text-[#365569]
            '>EPC</h1>
            <h1 className='text-white mb-10'>Open Registration<br/>Daftarkan Tim mu Sekarang!</h1>
            <a href="/" className='px-2 py-1 bg-[#365569] text-white'>Explore More</a>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <div className='w-[800px] flex flex-col justify-center items-center rounded-3xl bg-[#F2EFD5] p-20 text-center'>
                <div className=''>
                <h1 className='bg-[#5A8EAF] rounded-full border-2 border-black p-2 text-white font-semibold mb-10 absolute top-[325px] translate-x-1/2'>ENGINEERING PHYSICS COMPETITION</h1>
                <h1>EPC atau Engineering Physics Challenge, merupakan sebuah kompetisi ilmiah tahunan dalam bidang Fisika yang diikuti oleh siswa/siswi SMA sederajat. Kegiatan tersebut diselenggarakan oleh Departemen. Teknik Fisika ITS yang bertujuan agar siswa/siswi SMA dapat mengenal ilmu-ilmu fisika dalam bidang teknik terutama lima bidang minat teknik fisika.</h1>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <Button>LAST YEAR</Button>
            <h1 className='text-orange-400 font-bold text-[40px] mb-10'>MEMORIES</h1>
            <SliderRiset riset={['apa', 'apa', 'apa']}></SliderRiset>
        </div>
        <div className='flex flex-row gap-20 justify-center items-center mt-10'>
            <div>
                <h1 className='text-orange-400 font-bold text-[40px]'>BENEFITS</h1>
                <Button>What you get from EPC?</Button>
            </div>
            <div className='flex flex-col gap-4 w-[450px] text-white '>
                <h1 className='px-3 py-1 bg-[#5A8EAF] rounded-xl font-bold text-xl'>Freepass Teknik Fisika ITS</h1>
                <h1 className='px-3 py-1 bg-[#5A8EAF] rounded-xl font-bold text-xl'>Pengalaman mengenal Teknik Fisika ITS</h1>
                <h1 className='px-3 py-1 bg-[#5A8EAF] rounded-xl font-bold text-xl'>Gratis SNBT TRYOUT</h1>
                <h1 className='px-3 py-1 bg-[#5A8EAF] rounded-xl font-bold text-xl'>Sertifikasi Tingkat Nasional</h1>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <Button>EVENT TIMELINE</Button>
            <h1 className='text-[50px] font-bold text-white'>EPC TIMELINE</h1>
            <div className='flex flex-row justify-center gap-10 items-center'>
                <h1 className='text-orange-400 font-bold text-[40px]'>INTERESTED?</h1>
                <div className='flex flex-col gap-6'>
                    <a href="" className='px-3 py-1 font-semibold bg-[#5A8EAF] text-white rounded-xl'>Guidebook Here</a>
                    <a href="" className='px-3 py-1 font-semibold bg-[#5A8EAF] text-white rounded-xl'>Register Now!</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EPC