import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='max-w-[1140px] m-auto px-4 py-16 w-full'>
        <h2 className='text-center text-gray-700'>Send us a message !</h2>
        <p className='text-center text-gray-700'>We're standing by!</p>
        <div className="grid md:grid-cols-2">
            <img className='w-full md:h-full object-cover max-h-[500px] h-[200px] p-2 '
             src="https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" 
             alt="" />
            <form>
                <div className='grid grid-cols-2'>
                    <input type="text" placeholder='First' className='border m-2 p-2' />
                    <input type="text" placeholder='Last' className='border m-2 p-2' />
                    <input type="email" placeholder='Email' className='border m-2 p-2' />
                    <input type="tel" placeholder='Phone' className='border m-2 p-2' />
                    <input type="text" placeholder='Address'  className='border m-2 p-2 col-span-2'/>
                    <textarea rows='30' cols='30' className='border m-2 p-2 col-span-2'></textarea>
                    <button className='border m-2 p-2 col-span-2'>Submit</button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
