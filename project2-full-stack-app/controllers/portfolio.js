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
    })
 });

// 02. New Route
router.get('/new', (req, res)=>{
    res.render('New');
});

// 03. Show Route
router.get('/:id', (req, res)=>{
    Portfolio.findById(req.params.id, (err, portfolioItem)=>{
        res.render('Show', {
            portfolio:portfolioItem
        });
    });
});

// 04. Edit Route
router.get('/:id/edit', (req,res)=>{
    Portfolio.findById(req.params.id, (err, portfolioItem)=>{
        res.render('Edit', {
            portfolio:portfolioItem
        });
    });
});


 /**************************************************************************
 * FUNCTIONAL ROUTES
 * 
 * Create: Creates a new resource (POST)
 * Delete: Deletes a resource (DELETE)
 * Update: Updates a resource (PUT)
 * 
 * *************************************************************************/

// 05. Create Route
router.post('/', (req, res)=>{
    if (req.body.show === 'on') {
        req.body.show = true;
    } else {
        req.body.show = false;
    }
    req.body.tags = req.body.tags.split(",");
    Portfolio.create(req.body, (error, PortfolioItem)=>{
        // res.send(PortfolioItem);
        res.redirect('/jgumtow');
    })
});


// 06. Delete Route
router.delete('/:id', (req, res)=>{
    Portfolio.findByIdAndRemove(req.params.id, (err, itemRemoved)=>{
        res.redirect('/jgumtow');
    });
});



// 07. Update Route
router.put('/:id', (req, res)=>{
    if (req.body.show === 'on') {
        req.body.show = true;
    } else {
        req.body.show = false;
    }

    req.body.tags = req.body.tags.split(",");
    Portfolio.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, PortfolioItem)=>{
        if(err){
            console.log(err)
        }
        res.redirect('/jgumtow');
    });
});




// Export Router
module.exports = router;