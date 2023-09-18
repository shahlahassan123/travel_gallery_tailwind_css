import React from 'react'

const Booking = () => {
  return (
    <div id="deals" className='max-w-[1140px] m-auto w-full p-4'>
        <form className='lg:flex lg:justify-between w-full items-center'>
            <div className='flex flex-col my-4 py-4'>
                <label>Destinations</label>
                <select className='lg:w-[300px] md:w-full border rounded-md p-2'>
                    <option>Maldives</option>
                    <option>Thailand</option>
                    <option>India</option>
                    <option>Australia</option>
                </select>
            </div>
            <div className='w-full flex'>
                <div className='w-full flex flex-col lg:max-w-[250px] my-2 p-2'>
                    <label>Check-in</label>
                    <input type='date' className='border rounded-md p-2' />
                </div>
                <div className='w-full flex flex-col lg:max-w-[250px] my-2 p-2'>
                    <label>Check-out</label>
                    <input type='date' className='border rounded-md p-2' />
                </div>
            </div>
            <div className='flex flex-col w-full my-2 p-2'>
                <label>Search</label>
                <button className='w-full'>Get rates</button>
            </div>
        </form>
      
    </div>
  )
}

export default Booking
