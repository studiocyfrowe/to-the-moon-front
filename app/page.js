"use client"
import BgGradient from "./components/bgGradient";
import StartNavigation from "./components/startNavigation";
import HeaderCarousel from "./components/headerCarousel";
import ItemsBox from "./components/itemsBox";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [cinemas, setCinemas] = useState([])
  const [cities, setCities] = useState([])
  const [isError, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  async function getRandomCinemas() {
    setIsLoading(true)
    await axios.get('http://127.0.0.1:8000/api/cinemas/getRandomCinemas')
      .then((res) => (res.data))
      .then((data) => {
          setCinemas(data)
          setIsLoading(false)
          console.log(cities)
      })
      .catch((e) => {
          console.log(e)
          setError(true)
      })
  }

  async function getCities() {
    setIsLoading(true)
    await axios.get('http://127.0.0.1:8000/api/cities/getAll')
      .then((res) => (res.data))
      .then((data) => {
          setCities(data)
          setIsLoading(false)
          console.log(cities)
      })
      .catch((e) => {
          console.log(e)
          setError(true)
      })
  }

  useEffect(() => {
    getCities()
    getRandomCinemas()
  }, [])

  return (
      <main className="flex flex-col min-h-screen bg-zinc-950 relative overflow-x-hidden">
          <div className="flex flex-col absolute top-0 mx-auto my-auto z-10 w-screen p-16 min-h-screen">
            <StartNavigation/>
            <div className="my-8"></div>
            <HeaderCarousel/>
            <div className="px-24 -translate-y-96 z-10">
              <div className="border border-solid border-orange-600 bg-orange-600/30 rounded-lg p-8 my-24">
                <ItemsBox label={`Nowości w kinach`}/>
              </div>
              <div className="border border-solid border-orange-600 bg-orange-600/30 rounded-lg p-8 my-24">
                <ItemsBox label={`Kina w okolicy`} items={cinemas}/>
              </div>
              <div className="border border-solid border-orange-600 bg-orange-600/30 rounded-lg p-8 my-24">
                <ItemsBox label={`Miasta`} cities={cities}/>
              </div>
            </div>
            <div className="w-full text-center mt-auto mb-6 z-10">
              <small>2024 | to the moon | by studio_cyfrowe</small>
            </div>
          </div>
          <div className="opacity-60"><BgGradient/></div>
      </main>
  );
}
