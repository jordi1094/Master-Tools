import CharacterSchema from "./CharacterSchema.js";
import NpcSchema from "./NpcSchema.js";
import LocationSchema from "./LocationSchema.js";
import CampaignSchema from "./CampaignSchema.js";
import TaskSchema from "./TaskSchema.js";
import MissionSchema from "./MissionSchema.js";

const validateZod = {
    CharacterSchema,
    NpcSchema,
    LocationSchema,
    CampaignSchema,
    TaskSchema,
    MissionSchema

}

export default validateZod
