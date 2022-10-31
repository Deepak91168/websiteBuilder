const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const client = require("mailchimp-marketing");
const https = require("https")
const { request } = require("http")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true})) 

app.get("/" , function(req , res){
    res.sendFile(__dirname + "/signup.html")
    
})
app.post("/" , function(req , res){
    var fname = req.body.firstName
    var lname = req.body.lastName
    var email = req.body.email

    // client.setConfig({
    //     apiKey: "4e063f54b2063616080d7f15e56746b2-us9",
    //     server: "us9",
    //   });
      
    //   const runAdd = async () => {
    //     const response = await client.lists.addListMember("637520042a", {
    //       email_address: email,
    //       status: "pending",
    //     });
    //     console.log(response);
    // };
      
    // // runAdd();

    // const run = async () => {
    //     const response = await client.lists.getListMembersInfo("637520042a");
    //     console.log(response);
    //   };
      
    // run();

    var data = {
        members: [
            {
                email_address : email,
                status : "subscribed",
                merge_fields: {
                    FNAME : fname,
                    LNAME : lname
                }
            }
        ]


    }
    const jsonData = JSON.stringify(data)
    const url = "https://us9.api.mailchimp.com/3.0/lists/637520042a";
    
    const options = {
        method: "POST",
        auth: "Priyanshu:4e063f54b2063616080d7f15e56746b2-us9"
    }

    const request = https.request(url, options, function (response) {
        console.log("staaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaatus code : " + response.statusCode)
        if(response.statusCode === 200){
            res.sendFile(__dirname + "/success.html")
        }
        else{
            res.sendFile(__dirname + "/failure.html")
        }
        response.on("data", function (data) {+
          console.log(JSON.parse(data));
        });
    });
    
    request.write(jsonData)
    request.end()
})
app.post("/failure" , function(req , res){
    res.redirect("/")
})

app.listen(process.env.PORT || 3000, function(){
    console.log("the server is running at port 3000")
})