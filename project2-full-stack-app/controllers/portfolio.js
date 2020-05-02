// Dependencies
const express = require('express');
const router = express.Router();
const Portfolio = require('../models/portfolio.js');

// Routes
/**************************************************************************
 * PRESENTATIONAL ROUTES (all GET requests)
 * 
 * Index: Shows all resources - links to New, Edit and Delete routes
 * New: Shows form to create ne resource item - linked to Create Route
 * Show: Shows 1 individual resourced from list
 * Edit: Shows a form to update a resource item - linked to Update Route
 * 
 * *************************************************************************/
// Seed
router.get('/seed', (req, res)=>{
    Portfolio.create([
        {
            title:"Animated Upbring Golf Logo",
            img:"../img/golf-logo-01.gif",
            description:"I designed an animated logo for the annual Upbring golf tournament.",
            tags: ["gif", "logo", "Upbring"],
            rating: 4,
            show:true
        }
    ], (err, data)=>{
        res.redirect('/jgumtow');
    })
});

// 01. Index Route
 router.get('/', (req, res)=>{
    Portfolio.find({}, (error, allItems)=>{
        res.render('Index', {
           portfolio: allItems
           
        });
        // res.send(allItems);
    })
 });

// 02. New Route


// 03. Show Route


// 04. Edit Route



 /**************************************************************************
 * FUNCTIONAL ROUTES
 * 
 * Create: Creates a new resource (POST)
 * Delete: Deletes a resource (DELETE)
 * Update: Updates a resource (PUT)
 * 
 * *************************************************************************/

// 05. Create Route



// 06. Delete Route



// 07. Update Route





// Export Router
module.exports = router;