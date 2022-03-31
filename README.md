
# Issue-Tracker

A nodejs application to track issues/bugs for a project. All the issues/bugs will be categorized into tags, if any user finds any bugs he/she can add issue/bugs tag along with the issue. User can add multiple filters to view issues according to the filters , users can search issues also.

## How to setup the project on local system

To setup this project, run the following commands on your terminal

 1. Clone the project

```bash
https://github.com/HarshitSingh45/Issue-Tracker.git
```

2. Change directory to Ecomerce-API 

```bash
cd Issue-tracker/
```

3. Install all depedencies

```bash
npm i --save
```

4. Run the project

```bash
npm start
```
## Features

Home Page

- Button to add new project
- List of all the projects created so far

Project Detail Page

- Filter by multiple labels i.e. I should be able to filter by 2 or more labels at the same time
- Filter by author
- Search by title and description
- Button to create new issue

Issue Page

- User should be able to create an issue for a project


## Tech Stack

- NodeJS
- Express
- mongodb
- ejs
- Javascript

## Directory Structure

```
.
├── assets
│   ├── images
│   ├── scripts
│   │   ├── addIssue.js
│   │   ├── addProject.js
│   │   ├── filterIssue.js
│   │   ├── issue.js
│   │   ├── projectAjax.js
│   │   └── searchIssue.js
│   ├── scss
│   │   ├── addIssue.scss
│   │   ├── addProject.scss
│   │   ├── header.scss
│   │   ├── issue.scss
│   │   ├── layout.scss
│   │   └── projectList.scss
│   └── styles
│       ├── addIssue.css
│       ├── addProject.css
│       ├── header.css
│       ├── issue.css
│       ├── layout.css
│       └── projectList.css
├── config
│   └── mongoose.js
├── controllers
│   ├── homeController.js
│   ├── issueController.js
│   └── projectController.js
├── index.js
├── models
│   ├── issue.js
│   └── project.js
├── package-lock.json
├── package.json
├── routes
│   ├── index.js
│   ├── issue.js
│   └── project.js
└── views
    ├── _footer.ejs
    ├── _header.ejs
    ├── home.ejs
    ├── layout.ejs
    └── project.ejs


```
## Author

- [@HarshitSingh45](https://www.github.com/HarshitSingh45)

