"use client";
import React, { useEffect, useState } from 'react'

type Structure = {
  id: number,
  firstName: string,
  lastName: string,
  age: number
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  }
}

const page = () => {
  const [data, setData] = useState<Structure[]>([])
  console.log(data);
  
  
  useEffect(() =>{
    async function fetchData() {
    const getData = await fetch("https://dummyjson.com/users")
    const responce = await getData.json();
    setData(responce.users);
    }
    fetchData();
  },[]);
  return (
    <div className='min-h-screen flex justify-center items-center flex-col w-[100%]'>
      <h1 className='text-2xl text-black mb-6 text-center content-center cursor-pointer'>Application Programming Interface(API)</h1>
    <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-7 '>
    {data.slice(1, 10).map((item)=> {
      return (
      <div
      key={item.id}
      className='border-2  border-gray-400 p-2 rounded-md shadow-md transition-all duration-300 hover:shadow-2xl shadow-gray cursor-pointer'
      >
        <div >
        <h1>{`My name is ${item.firstName} ${item.lastName} and my age is ${item.age} `}</h1>
        
        </div>
      </div>
       
      )
    })}
    </div>
    </div>
  )
}

export default page



// "http://simple-books-api.glitch.me/books"