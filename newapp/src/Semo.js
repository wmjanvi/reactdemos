import React, { useState } from 'react';

const StudentManagementSystem = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleAddStudent = () => {
    if (!name || !email || !age) {
      alert('Please fill in all fields.');
      return;
    }

    const newStudent = { id: Date.now(), name, email, age };
    setStudents([...students, newStudent]);

    // Clear form fields
    setName('');
    setEmail('');
    setAge('');
  };

  const handleUpdateStudent = () => {
    if (!selectedStudent) {
      alert('Please select a student to update.');
      return;
    }

    const updatedStudents = students.map((student) =>
      student.id === selectedStudent.id ? { ...student, name, email, age } : student
    );

    setStudents(updatedStudents);
    setSelectedStudent(null);

    // Clear form fields
    setName('');
    setEmail('');
    setAge('');
  };

  const handleDeleteStudent = () => {
    if (!selectedStudent) {
      alert('Please select a student to delete.');
      return;
    }

    const updatedStudents = students.filter((student) => student.id !== selectedStudent.id);

    setStudents(updatedStudents);
    setSelectedStudent(null);

    // Clear form fields
    setName('');
    setEmail('');
    setAge('');
  };

  return (
    <div>
      <h2>Student Management System</h2>

      <div>
        <h3>Add Student</h3>
        <form onSubmit={(e) => { e.preventDefault(); handleAddStudent(); }}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Age:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Add Student</button>
        </form>
      </div>

      <div>
        <h3>Student List</h3>
        {students.length === 0 ? (
          <p>No students registered yet.</p>
        ) : (
          <ul>
            {students.map((student) => (
              <li key={student.id}>
                <strong>Name:</strong> {student.name},{' '}
                <strong>Email:</strong> {student.email},{' '}
                <strong>Age:</strong> {student.age}{' '}
                <button onClick={() => setSelectedStudent(student)}>Edit</button>{' '}
                <button onClick={handleDeleteStudent}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {selectedStudent && (
        <div>
          <h3>Edit Student</h3>
          <form onSubmit={(e) => { e.preventDefault(); handleUpdateStudent(); }}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              Age:
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
            <br />
            <button type="submit">Update Student</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default StudentManagementSystem;
