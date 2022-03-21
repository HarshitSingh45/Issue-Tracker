module.exports.homePage = async (req, res) => {
    return res.render('home',{
        title: 'Home Page',
        content: 'Hey there !!'
    })
}