import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AssignStudents(props) {
    const [list, setList] = useState([])
    const [mentor,setMentor]=useState([])
    let fetchStudents= async()=>{
        try {
            let student = await axios.get("http://localhost:3001/students");                
            let mentors = await axios.get("http://localhost:3001/mentors");
            console.log(student.data)
            console.log(mentors.data)
            setList(student.data)
            setMentor(mentors.data)     
        } catch (error) {
            
        }
    }
 
    let handleChange = async (e,id)=>{
        try {
          await axios.put(`http://localhost:3001/update-student/${id}`,{isAssigned:e.target.checked,mentorid:props.match.params.id})
          fetchStudents()
        } catch (error) {
          
        }
      }
    useEffect(async () => {
        try {
            await fetchStudents();
            console.log(list)
            console.log(mentor) 
        } catch (error) {
            
        }
    }, [])

    return (
        <div>
            {mentor.length ? <h1>{mentor.filter(obj=> obj._id==props.match.params.id)[0].mentor}</h1>: <></>}
            <ul>
                {list.map((obj)=>{
                    return(
                        <div class="row">
                        <div class="col-4">
                          <div class="list-group" id="list-tab" role="tablist">
                          <li><input className="form-check-input me-1" checked={obj.isAssigned} onChange={(e)=>handleChange(e,obj._id)} type="checkbox" value="" aria-label="..." /><a to={`/`} className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" role="tab" aria-controls="list-settings">{obj.student}</a></li>
                          </div>
                        </div>
                        <div class="col-8">
                          <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
                          </div>
                        </div>
                      </div>
                    )
                })}
            </ul> 
        </div>
    )
}

export default AssignStudents
