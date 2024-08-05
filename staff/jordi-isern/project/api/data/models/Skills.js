import { Schema } from "mongoose";

const Skills = new Schema({
    acrobatics: {
        type: Number,
    },
    animalHandling: {
        type: Number,
    },
    arcana: {
        type: Number,
    },
    athletics: {
        type: Number,
    },
    deception: {
        type: Number,
    },
    history: {
        type: Number,
    },
    insight: {
        type: Number,
    },
    intimidation: {
        type: Number,
    },
    investigation: {
        type: Number,
    },
    medicine: {
        type: Number,
    },
    nature: {
        type: Number,
    },
    perception: {
        type: Number,
    },
    performance: {
        type: Number,
    },
    persuasion: {
        type: Number,
    },
    religion: {
        type: Number,
    },
    sleightOfHand: {
        type: Number,
    },
    stealth: {
        type: Number,
    },
    survival: {
        type: Number,
    },
});

export default Skills;
