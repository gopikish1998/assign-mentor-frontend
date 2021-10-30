import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function AddMentors() {
    const [mentor,setMentor] = useState("");
    const [student,setStudent]=useState("")
    let history = useHistory();
    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`http://localhost:3001/create-mentor`, { mentor })
            history.push("/mentors")
        } catch (error) {
            console.log(error)
        }
    }
    let handleSubmit2 = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`http://localhost:3001/create-student`, { student })
            history.push("/mentors")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main class="form-signin text-center">
            <form onSubmit={handleSubmit}>
            <h1 class="h3 mb-3 fw-normal">ADD MENTOR</h1>
             <div class="form-floating">
                    <input type="text" value={mentor} onChange={e => setMentor(e.target.value)} class="form-control" id="floatingInput" placeholder="Mentor" />
                    <label for="floatingInput">Mentor Name</label>
                    <input class="w-100 btn btn-lg btn-primary" type="submit" value="Submit" />
                </div>
            </form>
            <form onSubmit={handleSubmit2}>
            <h1 class="h3 mb-3 fw-normal">ADD STUDENT</h1>
             <div class="form-floating">
                    <input type="text" value={student} onChange={e => setStudent(e.target.value)} class="form-control" id="floatingInput" placeholder="Mentor" />
                    <label for="floatingInput">Student Name</label>
                    <input class="w-100 btn btn-lg btn-primary" type="submit" value="Submit" />
                </div>
            </form>
        </main>
    )
}

export default AddMentors
