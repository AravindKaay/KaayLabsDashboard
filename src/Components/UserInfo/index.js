import React,{useState} from 'react'
import { DatePicker, Space } from 'antd';

import {GoLocation} from "react-icons/go"
import {FaLocationArrow} from "react-icons/fa"
import "./index.css"

const locationList=["Chennai","Vijayawada","Mumbai","Delhi"]
const { RangePicker } = DatePicker;

const UserInfo = () => {
  const [location,setLocation]=useState("")
  return (
    <div className='user-info-main-container'>
        <div className='user-info-block'>
            <h3>Hello, Aravind</h3>
            <p>Associate software Engineer</p>
        </div>
        <div className='location-calender-container'>
           
                
                 <select value={location} className='location-dropdown fa' onChange={(e)=>setLocation(e.target.value)}>
                
                 {locationList.map(each=>(
                   
                    <option value={each}> {each}</option>
                  
                ))}
                </select> 
                <Space style={{color:"black"}} direction="vertical" size={12}>
                      <RangePicker />
                     
                </Space>
              
        </div>
    </div>
  )
}

export default UserInfo