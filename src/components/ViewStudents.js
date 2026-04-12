import { useEffect, useState } from 'react';
import axios from 'axios';

function ViewStudents() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await axios.get('http://localhost:3000/student/view');
    setStudents(res.data);
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:3000/student/delete/${id}`);
    fetchStudents();
  };

  useEffect(() => { fetchStudents(); }, []);

  return (
    <div>
      <h3>Student List</h3>
      {students.map((s) => (
        <div key={s._id}>
          <p>{s.name} - {s.email} - {s.course}</p>
          <button onClick={() => deleteStudent(s._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ViewStudents;
