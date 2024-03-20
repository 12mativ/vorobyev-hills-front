// pages/flights/[id].tsx

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/hooks/redux-hooks"; // Импортируем хук для доступа к состоянию Redux
import { addFlights } from "@/lib/features/flights/flightsSlice";

const FlightPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const flights = useAppSelector(state => state.flightsReducer.flights); // Получаем рейсы из состояния Redux

  useEffect(() => {
    dispatch(addFlights(flights)); // Добавляем рейсы в состояние
  }, [dispatch, flights]);

  // Получаем id рейса из query параметров
  const { id } = router.query;

  // Ищем рейс с соответствующим id
  const flight = flights.find((flight) => flight.id === Number(id));

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!flight) {
    return <div>Flight not found</div>;
  }

  return (
    <div>
      <h1>{flight.airplaneName}</h1>
      <p>Start Date: {flight.startDate}</p>
      <p>End Date: {flight.endDate}</p>
      <p>Start City: {flight.startCity}</p>
      <p>End City: {flight.endCity}</p>
    </div>
  );
};

export async function getStaticPaths() {
  // Получаем список ID всех рейсов
  const flightIds = [1, 2, 3]; // Ваш код для получения реальных ID рейсов
  
  // Возвращаем список путей для предварительного генерирования страниц
  const paths = flightIds.map((id) => ({
    params: { id: id.toString() },
  }));

  return { paths, fallback: true };
}

export default FlightPage;
