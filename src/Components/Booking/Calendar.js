import React,{useState}  from 'react'

 
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const CalendarDate = () => {
    const [value, onChange] = useState(new Date());
    //console.log(value)
  return (
   
       <Calendar
        className="mb-2"
        onChange={onChange}
        value={value}
      />
 
  )
}

export default CalendarDate