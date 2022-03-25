const Project = require('../models/project');
const Issue = require('../models/issue');

module.exports.create = async (req, res) =>{
    try{
        console.log('inside controller');
        let project = await Project.create(req.body);
        console.log(project);
        return res.json({
            data: {
                project: project,
            },
            message: 'project created successfully'
        })
    }catch(err){
        console.log('Error in creating project ', err);
        return req.redirect('back');
    }
}
module.exports.projectInfo = async (req, res) => {
    try{
        console.log(req.params.id);
        let project = await Project.findById(req.params.id);
        let issues = await Issue.find({project: req.params.id});

        
        return res.render('project',{
            tittle: 'Project Page',
            project: project,
            issues: issues
        });
    }catch(err){
        console.log('error in opening project page ', err)
        return res.redirect('back');
    }
}
module.exports.search = async (req, res) => {
    try{
        console.log(req.body);
        // console.log()
        let project = await Project.findById(req.body.project).populate('issues');
        let issues = await Issue.find({project: req.body.project, title: req.body.search});
        console.log(issues);
        return res.json({
            data: {
                project: project,
                issues: issues
            },
            message: 'search result'
        })
        // return res.render('project',{
        //     tittle: 'Project Page',
        //     project: project,
        //     issues: issues
        // });

    }catch(err){
        console.log('error in searching the issue ', err);
        return res.redirect('back');
    }
}
module.exports.filter = async (req, res) => {
    try{
        console.log(req.body);
        console.log(req.body.author);
        console.log(req.body.labels);

        let project = await Project.findById(req.body.project);
        var issues;
        if(req.body.author == undefined && req.body.labels == undefined){
            issues = await Issue.find({});
        }
        else if(req.body.author == undefined){
            issues = await Issue.find({labels: {$in : req.body.labels}});
        }
        else if(req.body.labels == undefined){
            issues = await Issue.find({author: {$in : req.body.author}});
        }else{
            issues = await Issue.find({labels: {$in : req.body.labels}, author : {$in: req.body.author}});
        }
        console.log(issues);
        return res.render('project',{
            tittle: 'Project Page',
            project: project,
            issues: issues
        });

    }catch(err){
        console.log('error in searching the issue ', err);
        return res.redirect('back');
    }
}

 