const express = require('express');
const router = express.Router();
const {Requests, Projects, Users} = require("../models");
const { validateToken } = require('../middlewares/AuthMiddleware');

router.get("/", async (req, res) => {
    const ListOfRequests = await Requests.findAll();
    res.json(ListOfRequests);
});

router.get('/byId/:id', async (req,res) => {
    const id = req.params.id;
    const request = await Requests.findByPk(id);
    res.json(request);
})

router.get('/byProjectId/:projectId', async (req,res) => {
    const projectId = req.params.projectId;
    const requests = await Requests.findAll({ where: {ProjectId: projectId}});
    res.json(requests);
})

router.post("/", validateToken, async (req,res) => {
    const request = req.body;
    
    let username = req.user.username;
    await Users.findOne({
        where: { username: username }
    }).then((userDetail)=>{
        request.UserId= userDetail.dataValues.id;
        console.log("request:",request);
        Requests.create(request).then(()=>{
            res.json(request);
        })
    })
})

module.exports = router;