<!-- CODENAME: BANANA -->
# Project Overview

Tiny Library App

see the deployed app here: https://tiny-library.netlify.app/
## Project Description

This app creates a catalogue for a Tiny Library where users can donate or take books. The front end is build with React and uses an Airtable API and database. The app allows users to: 
- browse a list of Tiny Library locations
- browse a catalogue of books in each Tiny Library
- add a record when they donate a book to the Tiny Library
- delete a record when they take a book from the Library

## Component Hierarchy
![component hierarchy](assets/component-hierarchy.png)

## API and Data Sample
Sample json from Airtable database:

```json
{
    "records": [
        {
            "id": "recTabfp2VKpQwrqp",
            "fields": {
                "author": "Karl Marx, Frederick Engels",
                "recommendation": "the most important document of the 19th century",
                "title": "The Communist Manifesto"
            },
            "createdTime": "2021-06-28T22:35:24.000Z"
        },
        {
            "id": "rectcuYTabv20MdR0",
            "fields": {
                "author": "Vladimir Lenin",
                "recommendation": "bruh, if you want to overthrow the state, you better know what the state is first!",
                "title": "State and Revolution"
            },
            "createdTime": "2021-06-28T22:35:24.000Z"
        },
        {
            "id": "recgGU2UUiJqWuWLz",
            "fields": {
                "author": "Rosa Luxemburg",
                "recommendation": "reforming the current system? overthrowing it entirely? can we do both? still so relevant today",
                "title": "Social Reform or Revolution?"
            },
            "createdTime": "2021-06-28T22:35:24.000Z"
        }
    ],
    "offset": "recgGU2UUiJqWuWLz"
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
- use another API to fill in additional information about books in the catalogue and potentially to correct spelling or other errors in user-generated data
- add a feature that allows user to search through multiple Tiny Library catalogues by author, title, and other criteria such as genre or review keywords


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 28| Prepare project pitch and Readme; Set up Airtable Database | Complete
|June 29| Project Approval; pseudo-code and begin coding basic structure | Complete
|June 30-July 1| Complete code and debugging; CSS styling  | Complete
|July 2| Moring: finish CSS tweaks; Deploy by 12:30 | Complete
|July 7| Presentation  | Complete



## SWOT Analysis

### Strengths:
Well-defined MVP; starightforward plan for building features.

### Weaknesses:
The accuracy of the database depends on user interactions with the app; inaccurate data could make users not want to use the app.

### Opportunities:
The app could make book sharing more valuable.

### Threats:
User-generated data is unpredictable and could include errors.
