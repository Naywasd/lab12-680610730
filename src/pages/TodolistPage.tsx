import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TaskInput from "../components/TaskInput";
import TaskCard from "../components/TaskCard";
import Footer from "../components/Footer";

export default function TodolistPage() {
  const tasks = [
    {
      id: 1,
      title: "Read a book",
      description: "Vite + React + Bootstrap + TS",
      isDone: false,
    },
    {
      id: 2,
      title: "Write code",
      description: "Finish project for class",
      isDone: false,
    },
    {
      id: 3,
      title: "Deploy app",
      description: "Push project to GitHub Pages",
      isDone: true,
    },
  ];

  return (
    <div className="container-fluid min-vh-100">
      <div className="row h-100">
        <div className="col-2 p-0">
          <Sidebar username="sermsub" type="student" />
        </div>

        <div className="col-10 p-0 d-flex flex-column min-vh-100">
          <Header />

          <main className="flex-grow-1 p-4">
            <div className="container">
              <h2 className="text-center">Todo List</h2>
              <p className="text-center text-muted">ทั้งหมด {tasks.length} งาน</p>

              <TaskInput />

              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  isDone={task.isDone}
                />
              ))}
            </div>
          </main>

          <Footer
            year="2026"
            fullName="sermsub bunjopkarn"
            studentId="680610730"
          />
        </div>
      </div>
    </div>
  );
}
