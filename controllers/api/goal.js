
const Goal = require('../../models/Goal')

async function index (req, res) {
    try {
        const goals = await Goal.find ({})
        res.status(200).json(goals)
    } catch {
       res.status(400).json({ message:'Bad Request'})
    }
}

async function create (req, res) {
    try {
        const newgoal = await Goal.create(req.body)

            res.status(200).json(newgoal)

    } catch {
        res.status(400).json({ message:'Bad Request'})
    }

}

// i want to export all my functions above not just one below

module.exports = {
index,
create
}