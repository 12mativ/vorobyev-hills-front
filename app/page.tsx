import BegButton from "@/components/BegButton";
import Block from "@/components/Block";

export default function Page(){
  return(
      <div className="flex flex-col justify-center items-center h-full bg-[url('/img/1.jpg')] bg-cover bg-center">
        <Block/>
        <BegButton/>
      </div>
  )
} 