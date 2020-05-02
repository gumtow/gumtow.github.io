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
    Fruit.create([
        {
            name:'grapefruit',
            color:'pink',
            readyToEat:true
        },
        {
            name:'grape',
            color:'purple',
            readyToEat:false
        },
        {
            name:'avocado',
            color:'green',
            readyToEat:true
        }
    ], (err, data)=>{
        res.redirect('/fruits');
    })
});

// 01. Index Route
 

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