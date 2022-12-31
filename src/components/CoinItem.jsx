import React, { useState, useEffect } from 'react'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link } from "react-router-dom"
import { db } from "../firebase"
import { UserAuth } from "../context/AuthContext"
import { arrayUnion, doc, updateDoc, onSnapshot } from "firebase/firestore"


function CoinItem({ coin }) {

  const [savedCoin, setSavedCoin] = useState(false)
  const { user } = UserAuth()

  const handleSavedCoin = () => {
    setSavedCoin(prevCoin => !prevCoin)
  }

  const coinPath = doc(db, "user", `${user?.email}`)
  const saveCoin = async () => {
    if (user?.email) {
      handleSavedCoin()
      await updateDoc(coinPath, {
        favorites: arrayUnion({
          id: coin.id,
          name: coin.name,
          image: coin.image,
          rank: coin.market_cap_rank,
          symbol: coin.symbol,
          price: coin.current_price,
        })
      })
    } else {
      alert("โปรดลงชื่อเข้าใช้ก่อนทำรายการใดๆนะคะ ขอบคุณค่ะ 😘")
    }
  }

  return (
    <tr className='h-[75px] border-b overflow-hidden'>
      <td onClick={saveCoin} >
        {savedCoin ? <AiFillHeart className='cursor-pointer hover:scale-150 duration-300 ease-out' color='red' /> : <AiOutlineHeart className='cursor-pointer hover:scale-150 duration-300 ease-out' />}
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <div className='flex items-center'>
          <Link to={`/coin/${coin.id}`}><img className='w-6 ml-2 hover:scale-150 duration-300 ease-out' src={coin.image} alt={coin.id} /></Link>
          <div className='w-[90px] hidden sm:table-cell'>
            <Link to={`/coin/${coin.id}`}>{coin.name}</Link>
          </div>
        </div>
      </td>
      <td>
        <div><Link to={`/coin/${coin.id}`}>{coin.symbol.toUpperCase()}</Link></div>
      </td>
      <td>${coin.current_price.toLocaleString()}</td>
      <td className={coin.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-600"}>{coin.price_change_percentage_24h.toFixed(2)}%</td>
      <td className='w-[200px] hidden md:table-cell'>${coin.total_volume.toLocaleString()}</td>
      <td className='w-[200px] hidden md:table-cell' >${coin.market_cap.toLocaleString()}</td>
      <td className='hover:scale-110 duration-300 ease-out'>
        <Sparklines svgWidth={140} svgHeight={40} data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="lightblue" />
        </Sparklines>
      </td>
    </tr>
  )
}

export default CoinItem