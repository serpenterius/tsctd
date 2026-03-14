

export type TaskType = {
  id: number,
  title: string,
  completed: boolean,
  priority: 'low' | 'medium' | 'high',
  createdAt: string
}