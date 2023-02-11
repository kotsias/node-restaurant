import mongoose from "mongoose";

export const configMongo = (app: any) => {
    mongoose.set("strictQuery", false);
    mongoose.connect('mongodb://localhost:27017/cart', {})
        .then(res => console.log("connected")).catch(err => console.log(err));

    mongoose.Promise = global.Promise;
    process.on("SIGINT", cleanup);
    process.on("SIGTERM", cleanup);
    process.on("SIGHUP", cleanup);
    if (app) {
        app.set("mongoose", mongoose);
    }
};

function cleanup() {
    mongoose.connection.close(() => {
        process.exit(0);
    });
}