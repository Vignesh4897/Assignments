import config from '../config/config.json' with{type : 'json'};
import queries from '../queries/queries.json' with{type : 'json'};
import {Client} from 'pg';

export class DBCommons {

 //common method to get the data from database
 async getdata(query : string) : Promise<Array<Object>>{
    //Create a configuration to connect with the database. 
    const dbconfig = new Client ({
        host:config.database.host,
        port:config.database.port,
        user:config.database.user,
        password:config.database.password,
        database:config.database.database
    });
    //Connect with the database by using the above connection URL. 
    await dbconfig.connect();

    //Execute the query and store the db results in one variable.
    const data = await dbconfig.query(query);

   // dbConfig → your Client object
   // . → accesses a property/method of that object
   // query → method provided by the pg Client
   // (query) → passes your SQL query as an argument

 
    //Close the database connection. 
    await dbconfig.end();

    //return the records received from the database. 
    return data.rows;
 }   
 
}  
let obj = new DBCommons();
let dbdata =  await obj.getdata("SELECT * FROM CATEGORY");
// or let dbdata =  await obj.getdata(queries.get_all_categories);
console.log(dbdata);
console.log(dbdata[1]!.name= 'Animation',);
