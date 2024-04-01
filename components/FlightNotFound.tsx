import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

const FlightNotFound = () => {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => router.back()}
        className="flex p-3 text-white items-center gap-x-2 group mb-3 self-start text-lg rounded-lg font-semibold"
        type="button"
      >
        <IoIosArrowBack size={30} />
      </button>
      <div className="w-full h-full flex items-center justify-center">
        <p className="bg-sky-600 p-3 rounded-lg text-white">Соответствующие полеты не найдены.</p>
      </div>
    </div>
  );
};

export default FlightNotFound;
