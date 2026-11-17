import { useState } from "react";
import "./App.css";
import StatCard from "./components/components/StatCard";

// Course data
const courses = [
  { id: 1, name: "React JS", progress: 75 },
  { id: 2, name: "Python", progress: 60 },
  { id: 3, name: "JavaScript", progress: 90 },
];

function App() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2>StudentHub</h2>

        <nav>
          <p>🏠 Dashboard</p>
          <p>📚 Courses</p>
          <p>📅 Attendance</p>
          <p>👤 Profile</p>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main">

        <h1>Student Dashboard</h1>
        <p>Welcome back, Student!</p>

        {/* Statistics */}
        <div className="stats">

          <StatCard
            title="Total Courses"
            value="6"
            icon="📚"
          />

          <StatCard
            title="Completed Courses"
            value="3"
            icon="✅"
          />

          <StatCard
            title="Attendance"
            value="92%"
            icon="📅"
          />

        </div>

        {/* Courses Section */}
        <h2>My Courses</h2>

        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="courses">

          {courses
            .filter((course) =>
              course.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((course) => (

              <div className="course-card" key={course.id}>

                <h3>{course.name}</h3>

                <p>Progress: {course.progress}%</p>

                <progress
                  value={course.progress}
                  max="100"
                />

              </div>

            ))}

        </div>

        {/* Assignment Counter */}
        <div className="course-card">

          <h3>Completed Assignments</h3>

          <h2>{count}</h2>

          <button onClick={() => setCount(count + 1)}>
            Complete Assignment
          </button>

          <button onClick={() => setCount(0)}>
            Reset
          </button>

        </div>

      </main>
    </div>
  );
}

export default App;
