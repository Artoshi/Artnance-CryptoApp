import React from 'react'
import { FaBitcoin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const TrendingItem = ({ coin }) => {
  return (
    <div>
      <div className='rounded-div p-3 hover:scale-110 ease-out duration-300'>
        <div className='flex justify-between items-center'>
          <div>
            <Link to={`/coin/${coin.item?.id}`}>
              <img className='rounded-full cursor-pointer' src={coin.item.small} alt={coin.item.id} />
              <div>
                <h2 className='font-semibold text-xl'>{coin.item.name}</h2>
                <h5 className='text-sm font-bold text-gray-500'>{coin.item.symbol}</h5>
              </div>
            </Link>
          </div>
          <div className='flex'>
            <FaBitcoin className='relative top-[6px] right-1' color='#f7931a' size={15} />
            <p>{coin.item.price_btc.toFixed(9)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingItem
