import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
    registerCandidate: { type: String, required: true},
    nameComplete: { type: String, required: true},
    emailCandidate: { type: String, required: true, unique: true}, // Garantindo que o email seja único
    telephoneCandidate: { type: String, required: true},
    nameResponsible: { type: String, required: true},
    cellphoneResponsible: { type: String, required: true},
    passwordCandidate: { type: String, required: true},
    accessLevel: {type: String, required: true}
});

const Candidate = mongoose.model('Candidate', candidateSchema)
export {candidateSchema, Candidate}
