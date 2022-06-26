import React from 'react'
import { Logo } from './Logo'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='w-full py-5 flex items-center justify-center bg-gray-100 border-b border-gray-600'>
        <Logo />
    </header>
  )
}

export default Header