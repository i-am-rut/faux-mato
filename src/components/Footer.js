import React from 'react'
import { Link } from 'react-router'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { GITHUB_URL, LINKEDIN_URL } from '../utils/constants'

const Footer = () => {
  return (
      <div className='mt-auto text-center py-4 bg-gray-800 text-gray-300 font-bold font-[Gilroy] w-[100%]'>&#169; {new Date().getFullYear()} Faux-mato Limited.
      <div className='flex items-center gap-4 justify-center'>
      <Link to='/about' className="hover:underline">About Us</Link>
      <a target='_blank' rel='noopener noreferrer' href={GITHUB_URL} className='text-2xl' ><FaGithubSquare /></a>
      <a target='_blank' rel='noopener noreferrer' href= {LINKEDIN_URL} className='text-2xl' ><FaLinkedin /></a>
      </div>
      </div>
  )
}

export default Footer
