const {MongoClient} = require("mongodb")

const client =new MongoClient(process.env.MONGODB_URL)

module.exports={
    db:null,
    students:null,
    mentors:null,

    async connect()
    {   await client.connect();
        console.log("connected to Mongodb",process.env.MONGODB_URL)
       
        this.db=client.db(process.env.MONGODB_NAME)
        console.log("Database selected",process.env.MONGODB_NAME)
        
        this.students=this.db.collection("students")
        this.mentors=this.db.collection("mentors")

    }
}