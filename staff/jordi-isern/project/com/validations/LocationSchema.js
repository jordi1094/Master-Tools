import {z} from 'zod'


const LocationSchema = z.object({
    name: z.string().optional(),
    enemies: z.array(z.string().optional()),
    object: z.array(z.string().optional()),
    description: z.string().optional(),
    nextLocation: z.array(z.string().optional())
})

export default LocationSchema