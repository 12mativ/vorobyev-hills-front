import StartButton from "@/components/StartButton";

export default function Page(){
  return(
      <div className="flex flex-col justify-center items-center h-full bg-[url('/img/1.jpg')] bg-cover bg-center">
        <div className="w-[30%] text-white">
          <p className="text-5xl font-semibold pb-6 text-center">
            AirFood
          </p>
          <p className="text-center pb-14 font-medium">
            Lorem ipsum dolor sit amet consectetur. Tristique urna feugiat risus quisque nec sed quam porttitor. Id mauris sit pharetra ullamcorper diam. Sit turpis convallis commodo risus. Et parturient quisque sed euismod sit convallis.
          </p>
        </div>

        <StartButton/>
      </div>
  )
} 