import starImg from '~/assets/images/star.png'
import preWorkOutImg from '~/assets/images/preWorkOut.png'
import proteinImg from '~/assets/images/protein.png'
import Button from '../buttons';
import Carousel from '../carousel';
const MaximiumCapacity = (props) => {
    const bgStyles = {
        background: `url("${starImg}")`,
        backgroundRepeat: 'no-Repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      };
    return (
        <>
    {props.maximiumCapacity && (
        <section className="flex h-screen w-full items-center justify-center lg:h-auto lg:py-40 xs:justify-between xs:px-5 xs:hidden" style={bgStyles}>
        <div className='flex items-start w-[490px] flex-col gap-5 lg:w-[300px] xs:w-[200px]'>
        <h1 className='text-neonGreen  text-[75px] font-bold leading-none oswald lg:text-5xl  xs:!text-3xl'>
        REACH YOUR
        MAXIMUM 
        CAPACITY
        </h1>
        <h1 className='text-white  text-[17px] font-thin  aeonik w-[300px] tracking-wide'>
        Go further than you thought with CapacityX supplements.
        </h1>
        <Button border=" " link="/shop" action="SHOP NOW"/>
        </div>
        <div>
            <Carousel firstSlide={preWorkOutImg} secondSlide={proteinImg} thirdSlide={preWorkOutImg} fourthSlide={proteinImg}/>
        </div>
            </section>
    )}
    {props.respMaxCapacity && (
        <section className="flex  flex-col h-screen w-full  lg:h-auto pt-32 xs:justify-between xs:px-5  xs:w-full gap-5 pb-6 hidden xs:flex" style={bgStyles}>
            <div className='flex'>
            <div className='flex flex-col items-start w-[490px]  gap-5 lg:w-[300px] xs:w-full '>
        <h1 className='text-neonGreen  text-[75px] font-bold leading-none oswald lg:text-5xl  xs:!text-3xl xs:w-[200px] 2xs:w-auto '>
        REACH YOUR
        MAXIMUM 
        CAPACITY
        </h1>
        <h1 className='text-white  text-[17px] font-thin  aeonik w-full tracking-wide 2xs:text-sm'>
        Go further than you thought with CapacityX supplements.
        </h1>
        </div>
        <div className='self-end'>
            <Carousel firstSlide={preWorkOutImg} secondSlide={proteinImg} thirdSlide={preWorkOutImg} fourthSlide={proteinImg}/>
        </div>
            </div>
            <Button border=" " link="/shop" action="SHOP NOW"/>
            </section>
    )}
    </>
      );
}
 
export default MaximiumCapacity;