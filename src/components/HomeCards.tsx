type HomeCardsProps =  {
    image:string
    text:string
}

const HomeCards = ({image, text}:HomeCardsProps) => {
  return (
    <div className="mb-10 xl:px-5">
        <div style={{backgroundImage: `url(${image})` }} className="rounded-[10px] w-50 md:w-60 lg:w-75 xl:w-90  h-75 md:h-85 lg:h-95 xl:h-[550px] bg-cover bg-center"/>
        <p className="text-center mt-2 text-[#333333] font-bold text-[16px] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ">{text}</p>
    </div>
  )
}

export default HomeCards