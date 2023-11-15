import { connect, connection } from "mongoose";

export const connectMongoDb = async () => {
  try {
    const connectionURL = process.env.DATABASE_URL;

    await connect(connectionURL as string);
    console.log(`MongoDB Databse connected at ${connectionURL}`);
  } catch (error) {
    console.log("Error", error);
  }

  connection.on("error", (err) =>
    console.log(`err in MongoDB Connection ${err}`)
  );

  connection.on("disconnected", () =>
    console.log(`Database connection disconnected`)
  );
};
