import { z } from 'zod';

const TaskSchema = z.object({
    task: z.string().nonempty(),
    status: z.boolean()
})

export default TaskSchema