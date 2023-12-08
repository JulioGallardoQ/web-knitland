// Create an instance of the Express Module
var express = require("express");
// Initialize the Express Framework through an object
// The object name is app and calling the object express()
var app = express();

// Pass in the databse path
// the , check all in the / root folder files
// It will look for a file called database
// This file will contain the connection information
var connection = require("./database");


// We need to get access to all folder files in the direcrory 
// We alaso need to access the directory of all files
app.use(express.static(__dirname));

// This will extend the app access to all available files through the use of url for routing
app.use(express.urlencoded({extended:true}))


// create a method that will be able to find and locate the Contact.html file
// THen we will be able to read the Contact data and connect to the database to send this information
app.get('/', function(req,res){
    // This function will check the file names 
    // and see if we can find the Contact.html file
    // ___dirname gets the directory name and appends the form.html
    //  So that it will return the full Contact.html location
    
    res.sendFile(__dirname + '/Contact.html');

})

// Create a POST method which will send the information 
// we got using the GET from the form.html file
// through the localhost:3000

app.post('/submit', function(req,res){

    // This post method contains the logic of capturing
    // the information in the form and validating the input
    // THen we send all information to the database
    // Create the body of the request this body
    // Must contain all information being sent from the form

    const {fullName, email, phone, Affair, Message} = req.body;

    console.log("Received data:", { fullName, email, phone, Affair, Message });

    if (!fullName || !email || !phone) {
        // Log the details of the failed validation
        console.log("Validation failed. Missing required fields.");
        // Return an error message to the client
        return res.send("Please Try again, make sure all fields are correctly filled in!");
    }

    if(fullName && email && phone){

        // Create a SQL command to execute in MYSQL once all information is peresnt
        // This command is an INSERT command to put information
        // Into the database 
        // INSERT INTO  contactinfo (fullName,email.phoneNumber);  
        const sql = "INSERT INTO contactinfo (fullName,email,phoneNumber,Affair,Message) VALUES (?,?,?,?,?)";
        
        // Once we have established the structure for the information from the form
        //  That needs to be passed in to the POST method as the Request body
        // We now pass the information as a Query to be parsed by the MYSQL module 
        // Usig the Connection with the database we pass in all 
        // the information using the req.body objects {} information
            connection.query(sql, [fullName, email, phone, Affair, Message], function(err, results){
                console.log("SQL query executed.");
                    // Using the connection to write the information to the sql database
                    // We need to return the error if any otherwise returnt he results
                    // Validate the input error if any
                    if(err){
                        // If we run into an error inserting we return the err
                        console.error("Error inserting data: ", err);
                        // The user gets to know that the information has not been entered into the database 
                        return res.send("Error: could not insert data into the database!")
                    }
                    // If all is ok and the user information has been inserted into the database 
                    // we grant the user access to the home page
                    console.log("Data successfully inserted into the database.");
                    res.redirect("/successForm.html");
        })

    }else{

        // If the user information has not been complete or 
        //  failed the validation we return the message
        return res.send("Please Try again, make sure all fields are correctly filled in!")

    }
})

// Open a port for the app to listen to
// This port will serve as the gateway for the 
//  flow of information from the client to the database
app.listen(3000, function(){

    console.log("App Listening on port 3000")
})

connection.connect(function(err) {
    if (err) {
        console.error("Error connecting to database:", err);
        return;
    }
    console.log("Connected to MySQL database");
});

