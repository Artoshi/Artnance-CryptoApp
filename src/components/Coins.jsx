import React, { useEffect, useState } from 'react'
import CoinItem from './CoinItem'
import { BiRefresh } from 'react-icons/bi'


function Coins({ coins }) {
    const [searchText, setSearchText] = useState("")

    const refresh = () => {
        window.location.reload(false)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            window.location.reload();
        }, 60000);

        return () => clearInterval(interval);
    }, [])

    return (
        <div className='rounded-div my-10 py-4'>
            <div className='flex justify-end my-3'>
                <BiRefresh onClick={refresh} className='h-7 w-7 mx-2 animate-reverse-spin hover:animate-pulse cursor-pointer hover:scale-125 hover:text-blue-300 hover:shadow-xl' />
                <input onChange={(e) => setSearchText(e.target.value)} type="text" className='bg-gray-100 dark:bg-gray-600 rounded-md py-1 indent-3 outline-none' placeholder='Search' />
            </div>
            <table className='w-full border-collapse text-center'>
                <thead className='dark:text-white'>
                    <tr className='border-b'>
                        <th></th>
                        <th>#</th>
                        <th className='text-left'>Coin</th>
                        <th></th>
                        <th>Price</th>
                        <th>24h</th>
                        <th className='hidden md:table-cell'>24h Volume</th>
                        <th className='hidden md:table-cell'>Market cap</th>
                        <th>Last 7 days</th>
                    </tr>
                </thead>
                <tbody className='dark:text-white'>
                    {coins.filter((value) => {
                        // console.log(value);
                        if (searchText === "") {
                            return value

                        } else if (value.name.toLowerCase().includes(searchText.toLowerCase())) {
                            return value
                        }

                    }).map((coin) => (
                        <CoinItem key={coin.id} coin={coin} />
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default Coins