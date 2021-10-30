import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Mentors() {
    const [list, setList] = useState([])
    let fetchMentors= async()=>{
        try {
            let mentors = await axios.get("http://localhost:3001/mentors");
            
            setList(mentors.data)
            console.log(list)
        } catch (error) {
            
        }
    }
    useEffect(async () => {
        try {
            await fetchMentors();
            console.log(list)
        } catch (error) {
            
        }
    }, [])
    return (
        <div>
            <ul>
                {list.map((obj)=>{
                    return(
                        <div class="row">
                        <div class="col-4">
                          <div class="list-group" id="list-tab" role="tablist">
                          <li><Link to={`/assign-students/${obj._id}`} className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" role="tab" aria-controls="list-settings">{obj.mentor}</Link></li>
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

export default Mentors
