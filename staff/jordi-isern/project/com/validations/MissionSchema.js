import { z } from 'zod'
import TaskSchema from './TaskSchema.js';

const MissionSchema = z.object({
    title: z.string().nonempty(),
    background: z.string().nonempty(),
    objective: z.string().nonempty(),
    startLocation: z.string().optional(),
    checkList: z.array(TaskSchema)
});

export default MissionSchema

// TODO RENDER IO DESPLEGAR APP
