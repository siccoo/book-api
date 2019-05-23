import mongoose from "mongoose";

// Add email validations to email field
const schema = new mongoose.Schema({
    email: { type: String, required: true, lowercase: true, index: true },
    passwordHash: { type: String, required: true }
    }, 
        { timestamps: true }
    );

schema.methods.isValidPassword = function isValidPassword(password) {
    return
}

export default mongoose.model("User", schema);