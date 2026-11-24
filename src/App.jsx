
function Student(props) {
  return (
    <div>
      <h2>Student Details</h2>
      <p>Course: {props.course}</p>
      <p>Name: {props.name}</p>
      <p>Faculty: {props.faculty}</p>
    </div>
  );
}
function App() {
  return (
    <Student
      course="FSWD"
      name="Arun"
      faculty="vijay"
    />
  );
}
export default App;
