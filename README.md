## Project Name

The Golf Crunch

## Project Description

The Golf Crunch seeks to improve the experience of golfers across all skill levels. It allows people to compile their stats and score from a round of golf, track them, and see how they measure up to others, all through a mobile app. It's a place for people to see where specifically in their golf game they need to spend time practicing, and translate that information to lower scores.

## Wireframes
![img](https://i.imgur.com/Kkm29oA.png) ![img](https://i.imgur.com/eMaTr45.png)

![img](https://i.imgur.com/rageGpq.png) ![img](https://i.imgur.com/yZZqW20.png)

![img](https://i.imgur.com/bvVAV33.png)

![img](https://i.imgur.com/h2oX7C6.png) ![img](https://i.imgur.com/R52o8oJ.png)
 

## Component Hierarchy
![img](https://i.imgur.com/9Bxyx2g.png)


## API and Data Sample
```json
records: [
  {
    id: "rec3dO5cqe6VDxJF4",
    fields: {
         greens: "9",
         player: "Tim Supranowitz",
         score: "86",
         possible_fairways: "14",
         possible_up_and_downs: "9",
         putts: "36",
         holes: "18",
         fairways_hit: "7",
         course: "Torrey Pines",
         up_and_downs: "3"
    },
  createdTime: "2021-02-13T20:17:17.000Z"
  },
```

#### MVP 
- Home page with buttons that route user to each page
- Render form to create new airtable Golf data through post request in "enter round"
- Render previously submitted rounds from airtable data through get reqeust in "view scores"
- Render mission statement in "mission statement"

#### PostMVP  
- create a detail expand for viewing rounds to limit new pages user has to navigate
- create an analysis of a submitted round by returning a one page message to the user based upon their subimtted statistics.
- create animation for "analyzing your round"

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Feb. 13-16| project planning/preparation/approval | Incomplete
|Feb. 16| App.js layout, Nav Bar, get request to render all rounds | Incomplete
|Feb. 17|  Form to post rounds, render mission statement | Incomplete
|Feb. 18| Style with Grid/flexbox and basic CSS | Incomplete
|Feb. 19| Media queries, responsive design , Finish MVP | Incomplete
|Feb. 20-22| Tackle Post MVP items | Incomplete
|Feb. 23| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| planning/prep and creating readme | H | 8hrs| 8hrs | 8hrs |
| .services for hiding/securing API information | H | 1hr|  |  |
| App.js/index.js structure for rendering and Linking/Routing | H | 1.5hr|  |  |
| component basic creation/organization/imports | H | 2hr|  |  |
| Homepage button creation/routing | H | 2hr|  |  |
| Basic Nav Bar | H | 1hr|  |  | 
| conditionally render Home Button utilizing Link | H | 1.5hr|  |  |
| Render API data in view scores | H | 2hr|  |  |
| Structure API data via Grid/flexbox | H | 2hr|  |  |
| convert iso8601 to local date in view scores | H | 2hr|  |  |
| Render form via Post request in enter round| H | 2hr|  |  |
| Structure form via GRID/flexbox | H | 4hr|  |  |
| Render mission statement in mission statement | H | 1.5hr|  |  |
| CSS styling for each component | H | 4hr|  |  |
| Media Queries/responsive design | H | 4hr|  |  |
| Total | H | 38.5hrs|  |  |

## SWOT Analysis

### Strengths:
Planning and visualization. I know exactly what I need, where I need it, in what order to do it, and how to acheive it as shown above in my timeframes. The key for the MVP is div-ing/classing things appropriately in order to display them in the exact maner that I need to. 

### Weaknesses:
Memory. I know i'll need to reference back to certain code-snippets/labs/homeworks to remember exactly how to do somemthing. I'll have these ready to rock prior to approval. 

### Opportunities:
Show that while i'm by no means the fastest/best learner, my ability to apply and execute knowledge is Top-Notch. 

### Threats:
The form is going to be very time consuming in getting it's actual layout to match my WireFrames. Stick with it. 
