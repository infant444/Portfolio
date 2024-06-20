import { connect } from 'mongoose';


export const dbconnect = () => {
    connect(process.env.MONGODB_URL!).then(
        () => console.log("db1 connect successfully"),
        (error) => console.log(error)
    )

}