//modified from CatsApp

/// Dependencies
// =============================================================
const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();


//
//Burger routes defined here--V

// Create all our routes and set up logic within those routes where required.
router.get("/", function (_, result) {
    burger.selectAll(function (data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        result.render("index", hbsObject);
    });
});


router.post("/api/burgers", function (request, result) {
    burger.insertOne([
        "burger_name"
    ], [
            request.body.name,
        ], function (resultPost) {
            // Send back the name of the new burger
        // Send back the ID of the new quote
        result.json({ id: resultPost.insertId });
        });
});

router.put("/api/burgers/:id", function (request, result) {
    let condition = "id = " + request.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: request.body.devoured
    }, condition, function (resultUpdate) {
        
        if (resultUpdate.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return result.status(404).end();
        } else {
            result.status(200).end();
        }
    });
    const apiKey= process.env.GIPHY_APIKEY;
    const search = "eating+hamburger";
    const queryURL = "https://api.giphy.com/v1/gifs/search?" + "q=" + search + "&api_key=" + apiKey;
    result.json(queryURL);
});


//
//

// Export routes for server.js to use.
module.exports = router;