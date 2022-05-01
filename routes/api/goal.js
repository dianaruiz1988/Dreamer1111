const express = require('express');
const router = express.Router();

//Ctrl=controller
const goalCtrl = require('../../controllers/api/goal');

// GET /api/items

//INDUCES

//when someone makes a request to route its going to call the index
//make sure it matches the controllers (index)

//Actual route starts with your base route that is on the server
router.get('/', goalCtrl.index);

router.post('/newgoal', goalCtrl.create);

//will create a new goal 

// router.post ('/newgoal', (req,res) => {
//     goalCtrl.create ({goal:"create into database", date:"4/27/22",deadline:"4/27/22",achieved:true},(err,createdgoal) =>{
//         if (err) {
//             res.json(err)

//         }else {
//             res.json(createdgoal)
//         }
//     })
// })

// GET /api/items/:id
//when someone makes a request to items/id it will show 
// router.get('/:id', goalCtrl.show);

module.exports = router;



//model.create will allow me to create a new item 