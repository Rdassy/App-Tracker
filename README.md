# Hack for the Future Project: Job Application Tracker

## Context

Hack for the Future is a hackathon organized by Bootup and focused on building tools that help people manage their day-to-day lives, navigate career transitions, and excel in their new careers. Think of tools that would help with time management, goal setting, productivity, continued education, and beyond. Many bootcamp graduates are going through their own career transitions and managing their own hectic lives - this hackathon was an opportunity to create innovative tools that could help bootcamp graduates.

As all the members of our group were attempting to pivot from our respective careers at the time of this hackathon, we decided to build a tool to track the job applications completed by users. Spreadsheets are an acceptable solution, but it can become difficult to keep track of status updates along with the details of each job one applies to. App-Tracker is a quality of life application which aims at helpin job seekers to better keep track of their applications and also provide them with tools to quickly apply to positions.


## Development

This application was developed on [Gitpod.io](https://www.gitpod.io/) which provides an easy-to-use developing environment.

App-Tracker runs on the [Heroku](https://www.heroku.com/[) platform which allows for the app keep running for free on the entry-level pricing tier. 
Using Gitpod.io and Heroku together allowed our team to not have to worry about running and linking a postgres database, as it was all automatically taken care of behind the scenes.

The back-end of the application was created using Python and Flask SQLAlchemy with Flask JWT authentication.
The front-end was developed using JavaScript, React.js, Bootstrap.

## Features

App-Tracker allows users to create a set of unique login credentials to access the application.
Once logged in, users will be able to access the dashboard and start tracking job applications by clicking the "+" button and entering all the information relevant to the job posting. 

Once added, each job application will remain on the left side of the dashboard, while the right side of the dashboard contains some tools to help job seekers keep frequently used URL's such as their Linkedin profile, Github repositories list, publically accessible resume and portfolio, and custom links.

## Challenges

Beyond the short 36 hours time frame, this hackathon presented a few challenges. Team members availability was definitely an issue as this was a remote event which did not require the participants to stay in the same location. Lack of sleep and fatigue had a big impact on progress during the second half of the project. Of course, many hours were spent reading through Flask and SQLAlchemy documentation as issues cropped up.

## Future Features

If time was not a factor, the team had discussed potentially integrating authentication to the app through the Linkedin API, integration of several job platforms, and even a potential browser plugin to automatically keep track of job applications. 

The latter was considered a bit too invasive and the team opted for user-provided input instead. There were also some less essential features discussed such as a summary of activity including counters, pre-populated cover letter and thank you note templates, follow-up reminders, and a curated social media feed targeted to job-seekers.
