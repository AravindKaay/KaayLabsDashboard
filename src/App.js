
import { useState } from 'react';
import {CiMenuBurger} from "react-icons/ci"
import {BsPeople,BsCardChecklist} from "react-icons/bs"
import {VscTools} from "react-icons/vsc"
import { createContext } from 'react';
import {RxDashboard} from "react-icons/rx"
import Header from "./Components/Header"
import UserInfo from "./Components/UserInfo"
import WorkBlock from "./Components/WorkBlock"
import TaskHeaderBlock from './Components/TaskHeaderBlock';
import TaskList from './Components/TaskList';

import './App.css';

export const AppContext=createContext({
  
})

const App=()=>{
  const [sideBar,setSideBar]=useState(false)
  const [filterOption,setFilterOption]=useState([])
  const [selectFilter,setSelectFilter]=useState(false)
  const sideBarHeight=sideBar===true?"100vh":"10vh"

  
   return(
    <AppContext.Provider value={{filterOption,setFilterOption,selectFilter,setSelectFilter}}>
    <div className='app-main-container'>
         <div className='header-main-container'>
              <div className='sidebar-container' style={{height:sideBarHeight}}>
                    <p className='burger-icon'><CiMenuBurger onClick={()=>setSideBar(!sideBar)} style={{fontSize:"25px"}}/></p>
                    {sideBar && <div className='sidebar-inner-container'>
                      <span className='icon'><RxDashboard/></span>
                        <span className='icon'><BsPeople/> </span>
                        <span className='icon'><VscTools/></span>
                        <span className='icon'><BsCardChecklist/> </span>
                      </div>}
              </div>
            </div>
            <div className='actual-container'>
                <Header/>
                <UserInfo/>
                <WorkBlock/>
                <TaskHeaderBlock/>
                <TaskList/>
            </div>
        </div>
        </AppContext.Provider>
   )
}

export default App;
