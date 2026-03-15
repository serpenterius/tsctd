

export type TaskType = {
  readonly id: number,
  title: string,
  completed: boolean,
  priority: 'low' | 'medium' | 'high',
  createdAt: string
}