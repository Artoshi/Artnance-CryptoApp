import React from 'react'
import Switcher from './Switcher'
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineGithub, AiFillFacebook, AiFillInstagram, AiFillGithub, } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { RxDoubleArrowUp } from 'react-icons/rx'


const Footer = () => {
  const navigate = useNavigate()
  const handleHome = () => {
    navigate('/')
    window.scrollTo(0, 0)
  }

  const handleScroll = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div>

      <div className='rounded-div mt-8 w-full'>
        <div className='my-5 grid gap-2 md:grid-cols-4 sm:grid-cols-3'>
          <div>
            <h1 className='text-2xl font-semibold text-binance hover:animate-pulse cursor-pointer' onClick={handleHome}>Artnance</h1>
            <p className='max-w-[160px] mt-2 text-sm'><span className='text-binance'>Artnance</span> is crypto site project made by <a className='link animate-pulse' href="https://www.facebook.com/messages/t/100021903639213" target='_blank' rel='noreferrer'>Artoshi</a>.<br /> Website is powered by <a className='link' href="https://www.coingecko.com" target='_blank' rel='noreferrer'>CoinGecko</a> API.</p>
          </div>
          <div>
            <h2 className='text-xl font-semibold mb-2'>About</h2>
            <ul className='dark:text-gray-400 text-gray-700'>
              <li>About us</li>
              <li>Career</li>
              <li>Invest</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h2 className='text-xl font-semibold mb-2'>Explore</h2>
            <ul className='dark:text-gray-400 text-gray-700'>
              <li>Crypto</li>
              <li>Metaverse</li>
              <li>NFT</li>
              <li>Blog</li>
            </ul>
          </div>
          <form>
            <div className='flex flex-col'>
              <h2 className='text-lg font-semibold'>Subscribe to our newsletter</h2>
              <div>
                <input disabled className='py-1 outline-none text-black text-sm rounded-lg indent-3 my-2 bg-slate-600' type="email" placeholder='Enter your email...' />
              </div>
              <div>
                <button disabled className='text-xs px-3 py-1 dark:bg-slate-700 bg-slate-300 rounded-lg'>Subscribe</button>
              </div>
            </div>
          </form>
          <div className='flex justify-between col-start-2 col-end-4 md:mt-4 sm:mt-9 mt-[68px]'>
            <a href="https://www.facebook.com/artz420" target='_blank' rel='noreferrer'><AiFillFacebook className='hover:scale-150 duration-300 ease-in-out' size={20} /></a>
            <a href="https://github.com/Artoshi" target='_blank' rel='noreferrer'><AiFillGithub className='hover:scale-150 duration-300 ease-in-out' size={20} /></a>
            <a href="https://www.instagram.com/artoshi_error404/" target='_blank' rel='noreferrer'><AiFillInstagram className='hover:scale-150 duration-300 ease-in-out' size={20} /></a>
            <a href="https://twitter.com/ArtoshiD" target='_blank' rel='noreferrer'><AiOutlineTwitter className='hover:scale-150 duration-300 ease-in-out' size={20} /></a>
          </div>
        </div>
        <div className='flex justify-center mb-2 text-xs'>
          <small>Made by <a href="https://www.facebook.com/messages/t/100021903639213" target='_blank' rel='noreferrer'>Artoshi</a>. Powered by CoinGecko.</small>
        </div>
      </div>
      <RxDoubleArrowUp onClick={handleScroll} className='h-8 w-8 mx-auto mt-10 animate-bounce cursor-pointer text-black dark:text-gray-500 ' />
    </div>
  )
}

export default Footer
