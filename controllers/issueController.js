const Issue = require('../models/issue');
const Project = require('../models/project')

module.exports.create = async (req, res) => {
    let issue = await Issue.create(req.body); 
    console.log(issue);
    let project = await Project.findById(req.body.project);
    project.issues.push(issue.id);
    project.save();
    return res.redirect('back');
}
