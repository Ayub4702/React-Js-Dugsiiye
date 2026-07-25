// import { useState } from "react";

function StudentsDashBord (){

 const courses = [
   { id: 1, name: 'React Fundamentals', progress: 75, instructor: 'Sarah Wilson', nextLesson: 'Components & Props', color: 'blue' },
    { id: 2, name: 'JavaScript Advanced', progress: 45, instructor: 'Mike Johnson', nextLesson: 'Async/Await', color: 'purple' },
    { id: 3, name: 'UI/UX Design', progress: 90, instructor: 'Emily Chen', nextLesson: 'Color Theory', color: 'pink' },
  ];

  const Asignments = [
    { id: 1, title: 'Build a Todo App', course: 'React Fundamentals', dueDate: '2024-03-20', status: 'pending' },
    { id: 2, title: 'API Integration', course: 'JavaScript Advanced', dueDate: '2024-03-18', status: 'completed' },
    { id: 3, title: 'Design System', course: 'UI/UX Design', dueDate: '2024-03-25', status: 'in-progress' },
  ];
  const Announcements = [
    { id: 1, title: 'New Course Available', message: 'Check out our new TypeScript course!', time: '2 hours ago' },
    { id: 2, title: 'Maintenance Notice', message: 'Platform updates scheduled for tonight', time: '5 hours ago' },
  ];

  const stats = [
    { label: 'Average Grade', value: '88%', icon: '📊' },
    { label: 'Courses', value: '3', icon: '📚' },
    { label: 'Study Hours', value: '45h', icon: '⏰' },
    { label: 'Assignments', value: '12', icon: '✍️' },
  ];

 return (
 <div className="containerDashbord1 bg-gray-100 w-screen p-4">

  <div className="headerPage bg-gray-300 flex justify-between items-center shadow-lg p-4 m-4 rounded-lg">
    <div>
      <h2 className="font-bold text-2xl">Welcome Back Student</h2>
      <p className="text-gray-700">Here's what's happening with your courses today</p>
    </div>
    <div className="flex items-center gap-4">
      <span className="text-2xl">🔔</span>
      <div className="bg-pink-700 rounded-full w-14 h-14 flex items-center justify-center text-white text-2xl font-bold">
        A
      </div>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 md:mt-8 p-4 md:p-4">
    {stats.map((stat, index) => (
      <div key={index} className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center">
          <div className="text-2xl mr-4">{stat.icon}</div>
          <div>
            <div className="text-sm text-gray-500">{stat.label}</div>
            <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
          </div>
        </div>
      </div>
    ))}
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

    <div className="lg:col-span-2">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Course Progress</h2>
        <div className="space-y-4">
          {courses.map((course) => (
            <div key={course.id} className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-medium text-gray-800">{course.name}</h2>
                <span className="text-sm text-gray-500">{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className={`h-2.5 rounded-full bg-${course.color}-500`} style={{ width: `${course.progress}%` }}></div>
              </div>
              <div className="mt-2 flex justify-between text-sm">
                <span className="text-gray-500">Next: {course.nextLesson}</span>
                <span className="text-gray-500">{course.instructor}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Assignments</h2>
        <div className="space-y-4">
          {Asignments.map(assignment => (
            <div key={assignment.id} className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-800">{assignment.title}</h3>
                <p className="text-sm text-gray-500">{assignment.course}</p>
              </div>
              <div className="text-right">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${assignment.status === 'completed' ? 'bg-green-100 text-green-800' :
                    assignment.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                  }`}>
                  {assignment.status}
                </span>
                <p className="text-xs text-gray-500 mt-1">Due {assignment.dueDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  </div>
 </div>
 )
}

export default StudentsDashBord