const express = require('express');
const router = express.Router();

//goalCtrl =controller where all my functions that relate to each route are

const goalCtrl = require('../../controllers/api/goal');

//INDUCES===========================================================================================

    /*BASE API ROUTE = app.use('/api/goal', require('./routes/api/goal'));
    each route listed below will start with BASE API ROUTE that is on the server and also noted above
    */

//INDEX++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    /*when someone makes a request to route its going to call the index
    make sure it matches the controllers (index)
    */

router.get('/', goalCtrl.index);

//NEW++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//DELETE+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//UPDATE++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//CREATE+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        //will create a new goal 
router.post('/creategoal', goalCtrl.create);


//EDIT+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//SHOW++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// GET /api/items/:id
//when someone makes a request to items/id it will show 
// router.get('/:id', goalCtrl.show);


module.exports = router;

