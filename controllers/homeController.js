const Project = require('../models/project');

module.exports.homePage = async (req, res) => {
    let projects = await Project.find({});
    return res.render('home',{
        title: 'Home Page',
        projects: projects
    })
}