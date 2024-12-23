// localStorage.clear()

const employees = [
  {
    id: 1,
    firstName: "John",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Design Homepage",
        description: "Create a responsive homepage design",
        date: "2024-10-18",
        category: "Design",
        active: true,
        newtask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve the navigation bar responsiveness issue",
        date: "2024-10-17",
        category: "Development",
        active: false,
        newtask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Team Meeting",
        description: "Attend team meeting to discuss project progress",
        date: "2024-10-19",
        category: "Meetings",
        active: false,
        newtask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Client Feedback Review",
        description: "Review client feedback on the latest design",
        date: "2024-10-15",
        category: "Client Relations",
        active: false,
        newtask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Mobile App Bug Fix",
        description: "Fix scrolling issue in mobile app",
        date: "2024-10-20",
        category: "Development",
        active: true,
        newtask: false,
        completed: false,
        failed: false,
      },
    ],
    taskNumber: {
      active: 2, // Only tasks without newtask: true and active: true are counted
      newtask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 2,
    firstName: "Jane",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Update API Documentation",
        description: "Add new API details to the official documentation",
        date: "2024-10-16",
        category: "Documentation",
        active: false,
        newtask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Backend Optimization",
        description: "Optimize backend code for better performance",
        date: "2024-10-20",
        category: "Development",
        active: false,
        newtask: true,
        completed: false,
        failed: false,
      },
      {
        title: "QA Testing",
        description: "Conduct tests on the user login feature",
        date: "2024-10-18",
        category: "Testing",
        active: true,
        newtask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Team Meeting",
        description: "Attend meeting on project delays",
        date: "2024-10-14",
        category: "Meetings",
        active: false,
        newtask: false,
        completed: false,
        failed: true,
      },
      {
        title: "API Integration Bug",
        description: "Fix issue with API integration in mobile app",
        date: "2024-10-21",
        category: "Development",
        active: true,
        newtask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Performance Report Review",
        description: "Review backend performance reports",
        date: "2024-10-19",
        category: "Analytics",
        active: true,
        newtask: false,
        completed: false,
        failed: false,
      },
    ],
    taskNumber: {
      active: 3, // Excludes tasks with newtask: true
      newtask: 1,
      completed: 1,
      failed: 2,
    },
  },
  {
    id: 3,
    firstName: "David",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Client Feedback Review",
        description: "Review feedback from the client and suggest changes",
        date: "2024-10-21",
        category: "Client Relations",
        active: true,
        newtask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Database Migration",
        description: "Migrate the old database to the new system",
        date: "2024-10-22",
        category: "Development",
        active: false,
        newtask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Bug Report Analysis",
        description: "Analyze reported bugs from QA team",
        date: "2024-10-15",
        category: "Bug Fixing",
        active: false,
        newtask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Server Deployment",
        description: "Deploy the new server architecture",
        date: "2024-10-17",
        category: "Development",
        active: false,
        newtask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Security Audit",
        description: "Perform a security audit on the server",
        date: "2024-10-18",
        category: "Security",
        active: false,
        newtask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Database Backup",
        description: "Backup old database for migration",
        date: "2024-10-19",
        category: "Development",
        active: true,
        newtask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Server Crash Issue",
        description: "Investigate cause of server crash",
        date: "2024-10-16",
        category: "Bug Fixing",
        active: false,
        newtask: false,
        completed: true,
        failed: true,
      },
    ],
    taskNumber: {
      active: 2, // Excludes tasks with newtask: true
      newtask: 2,
      completed: 3,
      failed: 2,
    },
  },
  {
    id: 4,
    firstName: "Alice",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Social Media Strategy",
        description: "Plan the next quarter's social media strategy",
        date: "2024-10-18",
        category: "Marketing",
        active: true,
        newtask: false,
        completed: false,
        failed: false,
      },
      {
        title: "SEO Audit",
        description: "Perform an SEO audit for the company website",
        date: "2024-10-16",
        category: "SEO",
        active: false,
        newtask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Email Campaign Setup",
        description: "Set up a promotional email campaign",
        date: "2024-10-20",
        category: "Marketing",
        active: false,
        newtask: true,
        completed: false,
        failed: true,
      },
      {
        title: "Marketing Analytics",
        description: "Analyze last quarter's marketing metrics",
        date: "2024-10-18",
        category: "Analytics",
        active: true,
        newtask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Content Creation Plan",
        description: "Develop a content plan for social media",
        date: "2024-10-21",
        category: "Content Creation",
        active: true,
        newtask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Ad Campaign Performance",
        description: "Review performance of the current ad campaign",
        date: "2024-10-15",
        category: "Advertising",
        active: false,
        newtask: false,
        completed: true,
        failed: false,
      },
    ],
    taskNumber: {
      active: 2, // Excludes tasks with newtask: true
      newtask: 2,
      completed: 2,
      failed: 1,
    },
  },
  {
    id: 5,
    firstName: "Michael",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "UI Prototype",
        description: "Develop a prototype for the user interface",
        date: "2024-10-18",
        category: "Design",
        active: true,
        newtask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Code Review",
        description: "Conduct code review for the latest release",
        date: "2024-10-16",
        category: "Development",
        active: false,
        newtask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Performance Metrics Analysis",
        description: "Analyze performance metrics and report findings",
        date: "2024-10-19",
        category: "Analytics",
        active: false,
        newtask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Client Presentation",
        description: "Prepare presentation for client meeting",
        date: "2024-10-17",
        category: "Client Relations",
        active: false,
        newtask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Bug Fixing",
        description: "Fix the recent bugs reported in the dashboard",
        date: "2024-10-15",
        category: "Bug Fixing",
        active: true,
        newtask: false,
        completed: false,
        failed: false,
      },
    ],
    taskNumber: {
      active: 2, // Excludes tasks with newtask: true
      newtask: 1,
      completed: 1,
      failed: 1,
    },
  },
];


const admin = [
  {
    id: 1,
    firstName: "Admin",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
