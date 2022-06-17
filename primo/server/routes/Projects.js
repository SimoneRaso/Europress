const express = require('express');
const router = express.Router();
const {Projects} = require("../models");

router.get("/", async (req, res) => {
    const ProjectsLists = await Projects.findAll();
    res.json(ProjectsLists);
});

router.get('/byId/:id', async (req,res) => {
    const id = req.params.id;
    const request = await Projects.findByPk(id);
    res.json(request);
})

router.post("/", async (req,res) => {
    const project = req.body;
    await Projects.create(project);
    res.json(project);
})

module.exports = router;