import React, {useState} from 'react';
import Form from './form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


function Tabs() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab=(index)=>{
        setToggleState(index)
    }

    // for date picker
    const [selectedDate, setSelectedDate]=useState(null)
    return (
        <div className="container containertab">
            <div className="bloc-tabs">
                <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={()=>toggleTab(1)}>Flights</div>
                <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={()=>toggleTab(2)}>online check-in</div>
                <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={()=>toggleTab(3)}>Manage  booking</div>
                <div className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={()=>toggleTab(4)}>Flight status</div>
            </div>
            
            <div className="content-tabs">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                   <div className="">
                       <form>
                            <div className="">
                                <Form />
                            </div>

                           <div className="form-date">
                                <div className="">
                                    <label htmlFor="">Departing
                                        <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} placeholderText="28th sept 2021"
                                        dateFormat='dd,MM,yyyy' isClearable showYearDropdown scrollableMonthYearDropdown className />
                                    </label>
                                </div>                             
                                <div className="">
                                    <label htmlFor="">Arriving
                                    <input type="text" placeholder="34y887" onfocus="(this.type='date')" />
                                    </label>
                                                                    
                                </div>
                          
                                <div className="form-select">
                                    <label htmlFor="">Passengers
                                        <select className="">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </label>
                                </div>                             
                          
                                <div className="">
                                    <div className="search-btn">Search</div>                           
                                </div>
                            </div>
                       </form>
                      
                       
                   </div>
                   
                </div>

                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <h2>header</h2>
                    <p>not yet completed</p>
                </div>

                <div className={toggleState === 3 ? "content active-content" : "content"}>
                    <h2>header 3</h2>
                    <p>not yet completed</p>
                </div>
                <div className={toggleState === 4 ? "content active-content" : "content"}>
                    <h2>Content 4</h2>
                    <p>still loading.....</p>
                </div>
            </div>

        </div>
    )
}

export default Tabs
