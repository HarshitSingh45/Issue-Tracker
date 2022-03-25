const Issue = require('../models/issue');
const Project = require('../models/project')

module.exports.create = async (req, res) => {
    let issue = await Issue.create(req.body); 
    console.log(issue);
    let project = await Project.findById(req.body.project);
    project.issues.push(issue.id);
    project.save();
    let issues = await Issue.find({project: req.body.project});  
    return res.render('project',{
        tittle: 'Project Page',
        project: project,
        issues: issues
    });
}
