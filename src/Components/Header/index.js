import React from 'react'
import {useState} from "react"
import Logo from "../../eb-green.jpg"
import profile from "../../profile sample.jpg"
import {BsSearch} from "react-icons/bs"
import {IoMdAddCircleOutline,IoIosNotificationsOutline} from "react-icons/io"
import {RxDashboard} from "react-icons/rx"
import "./index.css"

const Header = () => {
  const [userInput,setUserInput]=useState("")
  return (
    <div className='header-container'> 
        <img src={Logo} alt="logo" className='logo-props'/>
        <div className='header-inner-container'>
            <span ><BsSearch className='search-icon'/></span>
            <input type="text" className='input-props' value={userInput} onChange={(e)=>setUserInput(e.target.value)} />
            <span className='icon-header'><IoMdAddCircleOutline/></span>
            <span className='icon-header'><RxDashboard/></span>
            <span className='icon-header'><IoIosNotificationsOutline/></span>
            <img src={profile} className='profile-img' alt="profile"/>
        </div>
    </div>
  )
}

export default Header