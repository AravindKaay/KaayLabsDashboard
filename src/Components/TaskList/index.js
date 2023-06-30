import React from 'react'
import { Divider, Table } from 'antd';
import { AppContext } from '../../App';
import { useContext } from 'react';
import "./index.css"

const columns = [
  {
    title: 'SL.No',
    dataIndex: 'key',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Name of work',
    dataIndex: 'Nameofwork',
  },
  {
    title: 'Workcode',
    dataIndex: 'Workcode',
  },
  {
    title: 'Workcategory',
    dataIndex: 'Workcategory',
  },
  {
    title: 'Status',
    dataIndex: 'Status',
    render: (text) => {
    
    const styleColor=text==="New"?"green":"red"
    console.log(styleColor)
    return(
    <button style={{borderColor:styleColor,color:styleColor,borderStyle:"solid"}}>{text}</button>
    )

}
  },
  {
    title: 'Action',
    dataIndex: 'Action',
    render: (text) => {
    
        const styleColor=text==="Prepare Estimate"?"green":"red"
        console.log(styleColor)
        return(
        <button style={{borderColor:styleColor,color:styleColor,borderStyle:"solid"}}>{text}</button>
        )
    
    }
  },
];
const data = [
  {
    key: '1',
    Nameofwork:"Work name 105",
    Workcode:10005,
    Workcategory:"Maintenance",
    Status:"New",
    Action:"Prepare Estimate",
  },
  {
    key: '2',
    Nameofwork:"Work name 107",
    Workcode:10007,
    Workcategory:"Maintenance",
    Status:"Estimated",
    Action:"Modify Estimate",
   
  },
  
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      
      name: record.name,
    }),
  };

const TaskList = () => {
  const {filterOption,selectFilter}=useContext(AppContext)
  let filteredData
  const len=filterOption.length
  
  const filterMap=filterOption[len-1]
  
  
  
    
  
    return (
      <div className='list-container'>
        {selectFilter===true?filteredData=data.filter(each=> filterOption.includes(each.Status)):""}
        
  
        <Divider />
  
        <Table
          rowSelection={{
            
            ...rowSelection,
          }}
          columns={columns}
          dataSource={selectFilter===true?filteredData:data}
          pagination={false}
        />
      </div>
    );
}

export default TaskList






