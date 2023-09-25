import React, { useRef, useState } from 'react'

// global.css
import '../Assets/CSS/Global.css'

// react icons
import { HiOutlineMail } from 'react-icons/hi'
import { RiLockPasswordLine } from 'react-icons/ri'
import {FaFacebookF} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'

function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [formFields, setFormFields] = useState(
    {
      email: '',
      password: ''
    }
  )

  const handleChange = (e) => {
    console.log(formFields)
    setFormFields({
      ...formFields,
      [e.name]: e.value,
    })
  }

  const [active, setActive] = useState({
    email: false,
    password: false,
  })

  const handleClick = (type) => {
    if (!active.email && type == 'email' && formFields.email == '') {
      emailRef.current.style.transition = '0.5s'
      emailRef.current.style.scale = '0.9'
      emailRef.current.style.transform = 'translateY(-1.5rem)'

      setActive({
        email: !active.email
      })
    }
    else {
      if (formFields.email == '') {
        emailRef.current.style.transition = '0.5s'
        emailRef.current.style.scale = '1'
        emailRef.current.style.transform = 'translateY(0rem)'

        setActive({
          email: !active.email
        })
      }
    }

    if (!active.email && type == 'password' && formFields.password == '') {
      passwordRef.current.style.transition = '0.5s'
      passwordRef.current.style.scale = '0.9'
      passwordRef.current.style.transform = 'translateY(-1.5rem)'

      setActive({
        password: !active.password
      })
    }
    else {
      if (formFields.password == '') {
        passwordRef.current.style.transition = '0.5s'
        passwordRef.current.style.scale = '1'
        passwordRef.current.style.transform = 'translateY(0rem)'

        setActive({
          password: !active.password
        })
      }
    }
  }

  return (
    <>
      <section className='SignInBg flex items-center justify-center w-screen min-h-screen py-12 px-6 sm:px-12'>
        <div className='signInForm flex flex-col items-center gap-y-12 justify-center w-full py-12 max-w-3xl rounded-2xl px-6 sm:px-12' >
          <span className='flex flex-col items-start text-gray-100 justify-center w-full'>
            <h1 className='w-full text-left text-2xl '>Sign In</h1>
            <span className=' w-36 border-blue-500 border-2 rounded-3xl mt-2.5 border-solid mb-3.5'></span>
            <span className='text-left hidden max-w-xl text-md italic sm:inline-block'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim sed, ad omnis repudiandae odio consectetur voluptates unde debitis sit fuga.</span>
          </span>

          <form action="" className='w-full gap-y-4 flex flex-col text-gray-100 items-center justify-center'>
            <span className='w-full relative py-2 origin-left flex gap-x-3 items-center justify-between z-10' style={{ borderBottom: '2px solid white' }} >
              <label htmlFor="" className='absolute top-auto left-10 z-10' onClick={() => handleClick('email')} ref={emailRef}>email address</label>
              <HiOutlineMail className='text-gray-100 text-3xl' />
              <input type="email" className='w-full outline-none bg-transparent px-2 text-lg text-gray-100' onClick={() => handleClick('email')} name='email' onChange={(ele) => handleChange(ele.currentTarget)} required />
            </span>

            <span className='w-full relative py-2 origin-left flex gap-x-3 items-center justify-between z-10' style={{ borderBottom: '2px solid white' }} >
              <label htmlFor="" className='absolute top-auto left-10 z-10' onClick={() => handleClick('password')} ref={passwordRef}>password</label>
              <RiLockPasswordLine className='text-gray-100 text-3xl' />
              <input type="password" className='w-full outline-none bg-transparent px-2 text-lg text-gray-100' onClick={() => handleClick('password')} name='password' onChange={(ele) => handleChange(ele.currentTarget)} required />
            </span>
          </form>

          <span className='flex text-gray-100 items-center justify-between w-full'>
            <label htmlFor="" className='text-sm italic'>
              <input type="checkbox" className='bg-transparent cursor-pointer' /> keep me signed in
            </label>
            <button className='text-md py-1.5 px-5 bg-blue-500 rounded-md cursor-pointer hover:bg-blue-400'>Sign In</button>
          </span>

          <span className='hidden items-center justify-between gap-x-10 w-full sm:flex'>
            <span className='w-full border-gray-200 border-2 rounded-3xl mt-2.5 border-solid mb-3.5'></span>
            <span className='w-full border-gray-200 border-2 rounded-3xl mt-2.5 border-solid mb-3.5'></span>
          </span>

          <span className='flex flex-col gap-y-5 items-center text-gray-100 justify-between w-full sm:flex-row'>
          <button className='flex items-center justify-center text-md py-2 px-5 bg-[#3b82f630] rounded-md cursor-pointer hover:bg-[#3b83f663]'>
            <FaFacebookF className='text-lg text-blue-500 mr-2'/> Sign in with Facebook</button>
          <button className='flex items-center justify-center text-md py-2 px-5 bg-[#3b82f630] rounded-md cursor-pointer hover:bg-[#3b83f663]'>
            <FcGoogle className='text-lg mr-2'/> Sign in with Google</button>
          </span>
        </div>
      </section>
    </>
  )
}

export default SignIn