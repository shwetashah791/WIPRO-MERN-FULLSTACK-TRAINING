import { useParams } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();

  return (
    <div className="card p-4 shadow">
      <h2>Course Details</h2>
      <p>Course ID: {id}</p>
      <p>Description: This is a detailed page for course {id}.</p>
    </div>
  );
}

export default CourseDetails;
