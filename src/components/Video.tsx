import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from 'phosphor-react'
import { DefaultUi, Player, Youtube  } from '@vime/react'
import React from 'react'
import '@vime/core/themes/default.css'



type Props = {}

const Video = (props: Props) => {
  return (
    <div className='flex-1'>
      <div className='bg-black flex justify-center'>
        <div className='h-full w-full max-w-[1100px] max-h-[60vh] aspect-video'>
          <Player>
            <Youtube videoId='NQp5ZAKbKvk' />
            <DefaultUi />
          </Player>
        </div>

      </div>

      <div className='p-8 max-w-[1100px] mx-auto'>
        <div className='flex items-start gap-16'>
          <div className='flex-1'>
            <h1 className='text-2xl font-bold'>
              Aula 01 - Abertura da Plataforma
            </h1>
            <p className='mt-4 text-gray-200 leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ut.
            </p>

            <div className='flex items-center gap-4 mt-6'>
              <img 
              className='h-16 w-16 rounded-full boder-2 boder-blue-500'
              src="https://github.com/diego3g.png" 
              alt="" 
              
              />

              <div className='leading-relaxed'>
                <strong className='font-bold text-2xl block'>Diego Fernando</strong>
                <span className='text-gray-200 text-sm block'>CTO at my Balls</span>
              </div>
            </div>
          </div>
            
          <div className='flex flex-col gap-4'>
            <a href="" className='p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors'>
              <DiscordLogo size={24}/>
              Comunidade do Discord
            </a>

            <a href="" className='p-4 text-sm border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900'>
              <Lightning size={24}/>
              Acesse o desafio
            </a>
          </div>
        </div>
        <div className='gap-8 mt-20 grid grid-cols-2'>
          <a href="" className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'>
            <div className='bg-green-700 h-full p-6 flex items-center'>
              <FileArrowDown size={40} />
            </div>
            <div className='py-6 leading-relaxed'>
              <strong className='text-2xl'>Material Complomentar</strong>
              <p className='text-sm text-gray-200 mt-2'>
                Acesse o material complementar para acelerar o seu desenvolvimento
              </p>
            </div>
            <div className='h-full p-6 flex items-center'>
              <CaretRight size={24} />
            </div>
          </a>

          <a href="" className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'>
            <div className='bg-green-700 h-full p-6 flex items-center'>
              <FileArrowDown size={40} />
            </div>
            <div className='py-6 leading-relaxed'>
              <strong className='text-2xl'>Wallpapers Exclusivos</strong>
              <p className='text-sm text-gray-200 mt-2'>
                Baixe wallpapers exclusivos do labs e personalize sua maquina.
              </p>
            </div>
            <div className='h-full p-6 flex items-center'>
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Video