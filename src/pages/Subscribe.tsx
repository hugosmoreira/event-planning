import React, {useState, FormEvent} from 'react'

type Props = {}

const Subscribe = (props: Props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        console.log(name, email)
    }


  return (
    <div className='min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center'>
        <div className='max-w-[1100px] flex items-center justify-between mt-20 mx-auto'>
            <div className='max-w-[640px]'>

            </div>
            <div className='p-8 bg-gray-700 border border-gray-500 rounded'>
                <strong className='text-2xl mb-6 block'>Inscreva-se gratuitamente</strong>

                <form onSubmit={handleSubmit} action="" className='flex flex-col gap-2 w-full'>
                    <input type="text" className='bg-gray-900 rounded px-5 h-14' placeholder='Seu nome completo' onChange={event => setName(event.target.value)}/>
                    <input type="text" className='bg-gray-900 rounded px-5 h-14' placeholder='Digite seu email'/>
                    <button type='submit' className='mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-gray-700'>
                        Garantir inscrição
                    </button>
                </form>
            </div>

        </div>
            <img src="" alt="" />
    </div>
  )
}

export default Subscribe