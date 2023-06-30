import React, { useContext, useState } from 'react'
import { Select, Space } from 'antd';


import "./index.css"
import { AppContext } from '../../App';

const {Option}=Select

const TaskHeaderBlock = () => {
  const [activeHeader,setActiveHeader]=useState(1)
  const {filterOption,setFilterOption,selectFilter,setSelectFilter}=useContext(AppContext)
  return (
    <div >
        <h3 style={{marginLeft:"25px"}}>My Tasks</h3>
    <div className='taskHeader-container'>
        
        <div className='task-container'>
            <button className={activeHeader===1?"activeHeader":"normal-header"} onClick={()=>setActiveHeader(1)}>Approval List </button>
            <button className={activeHeader===2?"activeHeader":"normal-header"} onClick={()=>setActiveHeader(2)}>New work orders(175)</button>
            <button className={activeHeader===3?"activeHeader":"normal-header"} onClick={()=>setActiveHeader(3)}>Estimates(175)</button>
        </div>
        <div className='input-container'>
             <Select mode="multiple" onChange={(value)=>setFilterOption([...filterOption,value])} placeholder='Category' style={{
      width: '20%',
    }}>
                <Option value="Estimated">Estimated</Option>
                <Option value="New">New</Option>
                <Option value="Approved">Approved</Option>

             </Select>
             <button type="button" className='filter-button' onClick={()=>setSelectFilter(!selectFilter)}>Filter</button>
        </div>
    </div>
    </div>
  )
}

export default TaskHeaderBlock