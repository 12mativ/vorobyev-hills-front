"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/hooks/redux-hooks"; // Импортируем хук для доступа к состоянию Redux
import { addFlights } from "@/lib/features/flights/flightsSlice";
import { useParams } from "next/navigation";
import { getFlights } from "@/http/flights/flightsAPI";
import { formateComplexDate } from "@/utils/formateComplexDate";
import { IoIosArrowBack } from "react-icons/io";
import LoaderIndicator from "@/components/Loader";
import FlightNotFound from "@/components/FlightNotFound";

const FlightPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const params = useParams<{ flightId: string }>();
  const router = useRouter();
  const flight = useAppSelector((state) =>
    state.flightsReducer.flights.find((flight) => flight.id === params.flightId)
  );

  useEffect(() => {
    setIsLoading(true);
    getFlights()
      .then((res) => {
        dispatch(addFlights(res.data));
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (!flight && !isLoading) {
    return (
      <FlightNotFound />
    );
  }

  if (isLoading) {
    return <LoaderIndicator />;
  }

  return (
    <div className="w-full h-full flex flex-col">
      <button
        onClick={() => router.back()}
        className="flex p-3 pb-0 text-white items-center gap-x-2 group self-start text-lg rounded-lg font-semibold"
        type="button"
      >
        <IoIosArrowBack size={30} />
      </button>
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-fit bg-sky-600 p-5 rounded-lg text-lg text-white">
          <p className="text-2xl font-semibold p-5 pl-0">
            {flight?.airplane.airplaneName}
          </p>
          <p>Дата взлета: {formateComplexDate(flight?.startDate || "")}</p>
          <p>Дата посадки: {formateComplexDate(flight?.endDate || "")}</p>
          <p>Город отправки: {flight?.startCity}</p>
          <p>Город прибытия: {flight?.endCity}</p>
        </div>
      </div>
    </div>
  );
};

export default FlightPage;
