export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

export const DUMMY_TASKS: Task[] = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary: 'Learn all the basic and advanced features of Angular',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u1',
    title: 'Build first app',
    summary: 'Build a first app with Angular',
    dueDate: '2025-12-15',
  },
  {
    id: 't3',
    userId: 'u2',
    title: 'Prepare presentation',
    summary: 'Prepare a presentation about Angular',
    dueDate: '2025-12-20',
  },
];