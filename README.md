# Project Overview

## Project Name

Tiny Library App
## Project Description

This app will create a catalogue for a Tiny Library where users can donate or take books. Using an Airtable API, the app will allow users to: 
- browse a catalogue of books in the Tiny Library
- add a record when they donate a book to the Tiny Library
- delete a record 
## Wireframes


## Component Hierarchy
Show your component hierarchy here! Use [this](https://cms-assets.tutsplus.com/uploads/users/1795/posts/30352/image/GettingStartedWithReduxTutorial-React-Component-Structure.png) as an example.

## API and Data Sample

Show us a snippet of JSON returned by your Airtable (you can find it under the API documentation) so we know you can access it and get the info you need. This __must__ be properly formatted. An example is below:

```json
{
    "records": [
        {
            "id": "recONRzIUTuZ5lXaF",
            "fields": {
                "author": "Liz Yrineo",
                "setup": "Why did the tomato turn red?",
                "punchline": "Because it saw the salad dressing!"
            },
            "createdTime": "2020-11-30T16:03:09.000Z"
        },
        {
            "id": "rec3oYZ5Tp0AIDsKe",
            "fields": {
                "author": "Rachel Moskowitz",
                "setup": "What did the green grape say to the red grape?",
                "punchline": "Breathe, idiot, breathe!"
            },
            "createdTime": "2020-11-30T16:03:09.000Z"
        },
        {
            "id": "recA34tOaoE1IVeC1",
            "fields": {
                "author": "Gary Grant",
                "setup": "How do you make holy water?",
                "punchline": "You boil the hell out of it!"
            },
            "createdTime": "2020-11-30T16:03:09.000Z"
        }
    ],
    "offset": "recA34tOaoE1IVeC1"
}
```

### MVP/PostMVP


#### MVP 
- use an axios get request to display a list of books in the Tiny Library from the Airtable API
- display a form for users to add a Title and Author for a book they are donating and a field for a short review or recommendation
- provide a delete button for each book so that users can delete the record in the Airtable database with axios when they take a book from the Library

#### PostMVP  
- allow users to select from multiple Tiny Libraries and view catalogue information for each Library
- display multiple Tiny Libraries on a map
- allow user to search through multiple Tiny Library catalogues by author, title, and other criteria such as genre or review keywords


## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations. Here's an example.

|  Day | Deliverable | Status
|---|---| ---|
|July 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|July 13| Project Approval | Incomplete
|July 13| Core Application Structure (HTML, CSS, etc.) | Incomplete
|July 14| Pseudocode / actual code | Incomplete
|July 15| Initial Clickable Model  | Incomplete
|July 16| MVP | Incomplete
|July 17| Presentations | Incomplete

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all parts of your app.  Your estimates can then be used to evalute possibilities based on time needed and the actual time you have before the app must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add an additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## SWOT Analysis

### Strengths:

### Weaknesses:

### Opportunities:

### Threats: