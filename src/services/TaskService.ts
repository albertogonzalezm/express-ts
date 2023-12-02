interface Task {
  id: number;
  title: string;
  tools: string[];
}

const tasks: Task[] = [
  {
    id: 1,
    title: "Noticias",
    tools: ["Java", "Spring Boot", "MySQL"],
  },
  {
    id: 2,
    title: "Social Network",
    tools: ["TypeScript", "Express.js", "Sequelize", "PostgreSQL"],
  },
];

export default class TaskService {
  findById(id: number) {
    return tasks.find((task) => task.id === id);
  }

  findAll() {
    return tasks;
  }
}
