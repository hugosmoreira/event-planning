import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600'>
      <span className='font-bold text-2xl pb-6 border-b border-gray-500 block'>
        Cronograma de aulas
      </span>

    </aside>
  )
}

export default Sidebar