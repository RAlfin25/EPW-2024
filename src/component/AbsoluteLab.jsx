import React from 'react'
import SliderPrestasi from './SliderPrestasi'
import SliderRiset from './SliderRiset'
function AbsoluteLab(props) {
    const{lab, logo, desc, bidang, prestasi, riset} = props
  return (
    <div className='flex flex-col justify-center items-center'>
        <section className='flex flex-col items-center bg-sky-300 h-[860px]  w-full'>
          <div style={{boxShadow:'0px 0px 100px 0px rgba(43,128,30,0.88)',WebkitBoxShadow:'0px 0px 100px 0px rgba(43,128,30,0.88)', MozBoxShadow:'0px 0px 100px 0px rgba(43,128,30,0.88)'}} className='bg-white rounded-full w-[228.08px] h-[228.08px] flex justify-center items-center mt-10 z-[1]'>
            <img className='w-full p-4 h-fit' src={logo} alt="" />
          </div>
          <div className='absolute top-20 flex flex-col items-center'>
          <img  src="tangan.png" alt="" />
          <h1 className='border-2 z-[1] text-white text-xl font-semibold bg-sky-800 border-sky-950 rounded-full p-2 px-3 w-fit -translate-y-4'>LABORATORIUM</h1>
            <h1 style={{textShadow: '1px 0 gray, 0 4px gray, 0px 0 black, 0 0px black'}} 
            className='text-white text-[50px] w-[800px] font-bold text-center z-[1]'>{lab.toUpperCase()}</h1>
            <a href="/" className='w-fit p-2 px-4 mt-10 bg-orange-400 text-white rounded-xl z-[1]'>Explore More</a>
          <div className='w-[1400px] -top-20 absolute '>
            <img src="Top.png" alt="" />
          </div>
          </div>
          
        </section>
        <section className=' h-[1282.21px] w-[3710px] absolute top-[780px]' style={{borderRadius:'50%',  background:'url("middle.png"), #F2EFD5',
                backgroundBlendMode:'hard-light'}}></section>
        <section className='h-[1200px] w-full  z-[1] flex flex-col items-center' style={{  background:'url("middle.png"), #F2EFD5',
                backgroundBlendMode:'hard-light'}}>
        <div className='border-2 bg-sky-300 border-sky-700 w-[1200px] rounded-xl p-4 mt-10'>
                <h1 className='bg-orange-400 text-white w-fit p-2 py-1 border-2 border-sky-800 rounded-full -translate-y-full'>Apa itu Lab {lab}?</h1>
                <div className='flex flex-row gap-10'>
                    <div className='w-[400px] flex flex-col justify-center items-center'>
                        <div className='w-[203px] h-[203px] flex justify-center items-center bg-white rounded-full z-[1]'>
                        <img className='w-full p-2' src={logo} alt="" />
                        </div>
                        <div style={{borderRadius:'50%'}}  className='bg-gradient-to-t from-gray-700 to-gray-400 w-[250px] shadow-2xl h-[90px] -translate-y-10'>

                        </div>
                    </div>
                <h1 className='text-xl '>{desc}</h1>
                </div>
                </div>
                <div className='mt-10 flex flex-col w-[1200px]'> 
                <h1 className='text-[32px] text-left text-white w-fit rounded-2xl font-bold bg-sky-700 px-4'>BIDANG PENGEMBANGAN</h1>
                <h1 className='text-orange-400 text-left font-bold'>LABORATORIUM {lab.toUpperCase()}</h1>
                <div className='flex flex-row gap-10 justify-center mt-10 items-center'>
                    <img src="Group 154.png" className='w-[400px]' alt="" />
                    <div className='flex-col gap-4 flex w-[600px]'>
                        {
                            bidang.map((minat) => {
                                return (
                                    <div className='flex flex-row gap-4 items-center border-2 border-sky-600 rounded-full px-2 bg-[#F2EFD5]'>
                                        <img className='w-[30px]' src="list.png" alt="" />
                                        <h1>{minat}</h1>
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                </div>
                <img className='mt-20 translate-y-14' src="ye.png" alt="" />
            
                </div>
        </section>

        <section className=' w-full flex flex-col items-center z-[1]' style={{background:'url("image 22.png"), rgb(125 211 252)',}}>
                <div className='text-right w-[1200px] flex flex-col items-end pt-20'>
                <h1 className='bg-orange-400 text-white px-2 font-bold text-[32px] w-fit rounded-xl '>RISET DAN PENELITIAN</h1>
                <h1 className='text-black text-left font-bold'>LABORATORIUM {lab.toUpperCase()}</h1>
              
                </div>
                <div className="w-[1200px] py-20">
                <SliderRiset riset={riset}></SliderRiset>
                </div>
                <div className="">
                    <img src="City.png" alt="" />
                </div>
            </section>
            <section className='h-[800px] w-full flex justify-center items-center flex-col' style={{background:'url("image 25.png"), #F2EFD5', backgroundBlendMode:'soft-light'}}>
                
                <div >
                    <img className="absolute right-0 -translate-y-36 h-[1000px]" src="pIALA.png" alt="" />
                </div>
                <div className='text-left w-[1200px] flex flex-col pt-20'>
                <h1 className='bg-sky-700 text-white px-2 font-bold text-[32px] w-fit rounded-xl '>PRESTASI</h1>
                <h1 className='text-orange-400 text-left font-bold'>LABORATORIUM {lab.toUpperCase()}</h1>
                </div>
                <div className="w-[1400px] py-20 ">
              
                <SliderPrestasi prestasi={prestasi}></SliderPrestasi>
              
                </div>
            </section>
    </div>
  )
}

export default AbsoluteLab