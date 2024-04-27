import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import InputControls from '../Components/InputControls'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {


  return (

    <div className=' pt-16'>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-md mx-auto flex-1" data-v0-t="card">
        <div className="flex flex-col space-y-1.5 p-6 text-center pb-0">
          <h3 className="whitespace-nowrap tracking-tight  text-3xl text-slate-700">Login</h3>
          <p className="text-sm text-muted-foreground">Enter your email below to login to your account.</p>
        </div>
        <div className="px-6 py-2 space-y-4">
          <InputControls label="Email" placeholder="mrkeshav.05@gmail.com"
            
          />
          <InputControls label="Password" placeholder="password" 
            
          />
        </div>
        <div className="flex flex-col items-center pb-2  justify-center">
          <h2 className='text-red-500 text-xs text-left'></h2>
          <Link className="inline-flex items-center w-3/4  justify-center whitespace-nowrap text-xl hover:text-slate-500 text-slate-800 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-lg bg-[#1BB699] font-medium border border-green-700  from-teal-500 to-cyan-600"
            
          >
            Login
          </Link>
        </div>
        <div className='flex items-center  justify-center'>
          <Link className="inline-flex items-center w-3/4 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 "
            
          >
            Login with Google
          </Link>
        </div>

        <div className="p-6 text-center text-sm space-y-2">
          <p>
            Don't have an account?
            <Link className="underline" to="signup">
              Sign up
            </Link>
          </p>
          <Link className="underline" href="#">
            Forgot your password?
          </Link>
        </div>
      </div>

    </div>

  )
}

export default Login