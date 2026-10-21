function StudentCard(props) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img
          src={props.image}
          className="card-img-top"
          alt={props.name}
          style={{
            height:"300px",
            width:"100%"
          }}
        />
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p><b>Name:</b> {props.name}</p>
          <p><b>Reg No:</b> {props.regno}</p>
          <p><b>Department:</b> {props.department}</p>
          <p><b>Marks:</b> {props.marks}</p>
        </div>
      </div>
    </div>
  );
}

// Create the React Root.
const root = ReactDOM.createRoot(
  document.getElementById("root")
);

// Render three StudentCard components.
root.render(
  <div className="container mt-4">
    <div className="row">

      <StudentCard
        image="student1.jpg"
        name="Prabha"
        regno="1U24CA041"
        department="BCA"
        marks="92"
      />

      <StudentCard
        image="student2.jpg"
        name="Malini"
        regno="1U24CA053"
        department="BCA"
        marks="88"
      />

      <StudentCard
        image="Student3.jpg"
        name="kaviya"
        regno="1U24CA046"
        department="BCA"
        marks="95"
      />

    </div>
  </div>
);


