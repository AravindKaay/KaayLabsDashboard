import React from 'react'
import {PieChart,Pie,Legend,Cell,ResponsiveContainer} from "recharts"
import {AiOutlineTool,AiOutlineArrowUp,AiOutlineArrowDown,AiOutlineBook} from "react-icons/ai"
import {MdOutlineTask} from "react-icons/md"

import "./index.css"

const chartData=[{count:175},{count:134},{count:50}]
const workCategory=[{val:400},{val:200},{val:100}]

const WorkBlock = () => {
  return (
    <div className='work-container'>
        <div className='work-overview-container'>
            <div className='overview-container'>
                <h2>Works Overview</h2>
                <div className='card-container'>
                    <div className='card-block'>
                        <span ><AiOutlineTool className='work-icon'/></span>
                        <p>Total Work orders</p>
                        <h3>359</h3>
                        <p><AiOutlineArrowUp style={{color:"green"}}/> 3% higher</p>
                    </div>
                    <div className='card-block'>
                        <span ><AiOutlineBook className='workBook-icon'/></span>
                        <p>Estimated Works</p>
                        <h3>175</h3>
                        <p><AiOutlineArrowDown style={{color:"red"}}/> 20% Completed</p>
                    </div>
                    <div className='card-block'>
                        <span ><MdOutlineTask className='workApproved-icon'/></span>
                        <p>Approved Works</p>
                        <h3>134</h3>
                        <p><AiOutlineArrowUp style={{color:"green"}}/> 35% Approved</p>
                    </div>
                </div>
                    
            </div>
            <div className='vertical-line'></div>
            <ResponsiveContainer width={330} height={380}>
                <PieChart>
                    <Pie cx="35%" cy="35%" data={chartData} startAngle={0} endAngle={360} innerRadius="40%"
                    outerRadius="60%" dataKey="count">
                     <Cell name="Estimated" fill='#2196f3'/>
                     <Cell name="Approved" fill="#1de9b6"/>
                     <Cell name="Pending" fill="#f73378"/>
                    </Pie>
                    <Legend iconType='square' cx="100%" style={{marginTop:"-10px"}}  layout='vertical' verticalAlign='middle'
                    align='right'/>
                </PieChart>
            </ResponsiveContainer>
        </div>
        <div className='second-chart'>
        <h3 className='chart-heading'>Work Category</h3>
        <ResponsiveContainer width={330} height={380}>
            
                <PieChart>
                    <Pie cx="35%" cy="25%" data={workCategory} startAngle={0} endAngle={360} innerRadius="40%"
                    outerRadius="60%" dataKey="val">
                     <Cell name="Maintenance" fill='#2196f3'/>
                     <Cell name="Capital" fill="#1de9b6"/>
                     <Cell name="Others" fill="#f73378"/>
                    </Pie>
                    <Legend iconType='square' cx="100%"  layout='vertical' verticalAlign='middle'
                    align='right'/>
                </PieChart>
            </ResponsiveContainer>
        </div>
           
    </div>
  )
}

export default WorkBlock