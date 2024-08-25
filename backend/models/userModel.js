import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please add the user name"]
        },
        email: {
            type: String,
            required: [true, "Please add the user email address"],
            unique: [true, "Email address is already taken"]
        },
        password: {
            type: String,
            required: [true, "Please add the password"]
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);
export default User;