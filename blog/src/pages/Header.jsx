import { Button, TextInput } from 'flowbite-react'
import React from 'react'

const Header = () => {
  return (
    <navbar className='border border-b-2  rounded-b-md p-2
     px-6 m-0 flex justify-between
      items-center dark:text-white '>
        <h1 className='text-lg font-semibold'>Wlogg</h1>
        <form>
            <TextInput
            type='text'
            placeholder='Search . . .🔎'
            />
        </form>
        <Button className='' pill>Get started</Button>
    </navbar>
  )
}

export default Header