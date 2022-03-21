const Project = require('../models/project');

module.exports.create = async (req, res) =>{
    try{
        let project = await Project.create(req.body);
        console.log(project);
        return res.redirect('back');
    }catch(err){
        console.log('Error in creating project ', err);
        return req.redirect('back');
    }
}
module.exports.projectInfo = async (req, res) => {
    try{
        console.log(req.params.id);
        let project = await Project.findById(req.params.id);
        return res.render('project',{
            tittle: 'Project Page',
            project: project
        });
    }catch(err){
        console.log('error in opening project page ', err)
        return res.redirect('back');
    }
}