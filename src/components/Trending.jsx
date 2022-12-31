import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TrendingItem from './TrendingItem'

const Trending = () => {
  const [data,setData] = useState([])
  const url = "https://api.coingecko.com/api/v3/search/trending"

  useEffect(() => {
    axios.get(url)
    .then((res) => {
      setData(res.data.coins)
    })
  },[url])

  return (
    <div className='rounded-div py-5'>
      <h1 className='text-3xl font-semibold my-5 text-binance'>Trending</h1>
      <div className='grid gap-3 md:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1'>
        {data.map((coin) => (
          <TrendingItem key={coin.item.id} coin={coin} />
        ))}
      </div>
    </div>
  )
}

export default Trending
