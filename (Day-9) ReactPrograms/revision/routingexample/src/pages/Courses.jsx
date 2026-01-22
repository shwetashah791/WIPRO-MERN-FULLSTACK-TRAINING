import { Link } from "react-router-dom";

function Courses() {
  const courses = [
    { id: 1, name: "React Basics" },
    { id: 2, name: "MERN Stack" },
    { id: 3, name: "Node JS" },
  ];

  return (
    <div className="row">
      {courses.map((course) => (
        <div className="col-md-4 mb-3" key={course.id}>
          <div className="card shadow p-3">
            <h4>{course.name}</h4>
            <Link to={`/courses/${course.id}`} className="btn btn-primary">
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Courses;
