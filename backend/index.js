var express = require('express')
var app = express()
var bodyPaser = require('body-parser')
var router = express.Router()
var cors = require('cors')

//setting
app.use(cors())
app.use('/api', bodyPaser.json(), router)
app.use('/api', bodyPaser.urlencoded({ extended: false }), router)

//variable
let std = [
    { id: 5935512001, name: "Supanut", surname: "nut" },
    { id: 59355120049, name: "sandbob", surname: "sound" },
    { id: 59355120078, name: "new", surname: "xxx" },
    { id: 59355120069, name: "joox", surname: "yyy" },

]

// dont need parameter
router.route('/psu')
    //show all std
    .get((req,res)=>{
        res.send(std)
    })

    //Create
    .post((req,res)=>{
        let tmp = {}
        tmp.id = req.body.id
        tmp.name = req.body.name
        tmp.surname = req.body.surname
        std.push(tmp)
        res.send('add success')
    })


var position
//use parameter 
router.route('/psu/:id')
    // Require / seek
    .get((req,res)=>{
        position = std.find( item =>{
            return item.id == req.params.id
        })
    res.send(position)
    })   

    //update
    .put( (req,res)=>{
        position  = std.find( item => {
            return position.id == req.params.id
        })
        position.id = req.body.id
        position.name = req.body.name
        position.surname = req.body.surname
        res.send('updated')
    })

    //delete
    .delete( (req,res) =>{
        let arr = std.filter(item => {
            return item.id != req.params.id
        })
        std = arr
        res.send('deleted')
    })

app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(8000,console.log('running'))