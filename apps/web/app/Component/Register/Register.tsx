import React from 'react'

export default function Register (){
  return (
    <div className="w-screen h-screen flex justify-center bg-[#F0F9F3]">
      <div className="container flex flex-row h-[80%] self-center shadow-lg rounded-md">
        <div className="Lcontainer flex justify-center w-[60%] h-full self-center bg-[#06A67E] rounded-md">
          <div className="w-[60%] self-center ">
            <h1 className="text-center text-blue-100 font-black text-3xl font-montserrat py-4">Holllaaaaa!!!!!!!!!!!</h1>

            <h2 className="text-center text-blue-100 font-light text-1xl font-montserrat">To keep connected with us please login with your personal info</h2>
          </div>
        </div>
        <div className="Rcontainer flex justify-center w-full rounded-md rounded-md">
          <div className="form flex flex-col justify-center self-center gap-y-2">
            <h1 className="heading self-center text-5xl font-bold text-[#38B593]" style={{
              fontFamily:'Montserrat'
            }}>CREATE ACCOUNT</h1>
            <input className="self-center w-[400px] h-[60px] placeholder:p-3" type="string" placeholder="Name"/>
            <input className="self-center w-[400px] h-[60px] placeholder:p-3" type="email" placeholder="Email"/>
            <input className="self-center w-[400px] h-[60px] placeholder:p-3" type="password" placeholder="Password"/>
            <button className=" w-[200px] self-center bg-[#38B593] hover:bg-[#38D593] text-white font-bold py-2 px-4 rounded-full h-12">
              Register
            </button>
            <h2 className="self-center">Already have an Account? <span className="text-blue-700 cursor-pointer">Login</span></h2>
          </div>
        </div>
      </div>
    </div>
  )
}
