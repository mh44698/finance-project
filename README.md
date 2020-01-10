# Stocks Project

<!-- ![](https://media.giphy.com/media/R6xi8dXsRhIjK/giphy.gif)
<--- me coding this app! -->

## Project Description

This is a Go to Webpage to learn whats Hot and whats Not on Wall Street.  It shows Gainers and Loosers along with Major Indexes.

## Project Links

- [github repo](https://github.com/mh44698/finance-project)
- [You Tube Demo](https://youtu.be/gci8QnW6HQo)
- [LiveVersion](https://cocky-allen-0b444a.netlify.com/)
<!-- - [deployment]() -->

## Wireframes

- [Initial Wireframe](https://res.cloudinary.com/dvadpca5q/image/upload/v1578346949/SEI/Wireframe-Fianance_wrk9id.jpg)
- [react architecture](https://res.cloudinary.com/dvadpca5q/image/upload/v1578413390/SEI/0198092a-e5cb-4081-9b0d-824bb0b381ab_zzoem6.pdf)

	- Rough Draft of how I want this to work.

Define the the React components and the architectural design of your app.

### MVP/PostMVP

#### MVP
- Use API's to display Financial data to the end user.
- Develop an app that uses react router and dom to display end user data.
- Create a Navigation that allows the user to switch between Indexs and Stocks


#### PostMVP EXAMPLE
- Show Gainers and looser stocks on the same page.
- Add a detail page that can graph historicals
- This will be directed by a link

## Components

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| StockWinners | This will render the 10 best stocks for the day | 
| StockLosers | This will render the StockLosers for the day | 
| Indexes | This will render the Indexes Performances | 


## Time Frames

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Planning 											| H | 4hrs | 2hrs | 2hrs |
| Create all initial files and initial React setup 	| H | 3hrs | 3hrs | 4hrs |
| Connect to API and show it responding 			| H | 8hrs | 4hrs | 6hrs |
| Develop code for App 								| H | 16hrs | 3hrs | 9hrs |
| Develop code for Header and Main 					| H | 2hrs | 2hrs | 6hrs |
| Stylize the app 									| H | 4hrs | 8hrs | 8hrs |
| Work on final documentation						| H | 5hrs | 3hrs | 3hrs |
| Prepare Video Presentation 						| H | 3hrs | 2hrs | 2hrs |
| Debugging 										| H | 8hrs | 2hrs | 2hrs |
| Total 											| H | 53hrs | 29hrs | 42hrs |

## Additional Libraries
 <!-- Use this section to list all supporting libraries and their role in the project such as Axios, ReactStrap, D3, etc.  -->
npm install react-financial-charts

## Code Snippet

	<tbody>
     {items.map(item => (
        <tr key={item.ticker}>
        <td className="table-cell"><Link to={`/StockDetail/${item.ticker}`}>{item.ticker}</Link></td>
        <td className="table-cell">{item.companyName}</td>
        <td className="table-cell">$ {item.price}</td>
        <td className="financial-winner-table-change table-cell">$ {item.changes}</td>
        </tr>
     ))}
	 </tbody>



## Issues and Resolutions
 <!-- Use this section to list of all major issues encountered and their resolution. -->
 Line 9:5:  React Hook useEffect has a missing dependency: 'fetchItem'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
<!-- #### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object -->

## Future Enhancements
1. Include a chart on StockDetails page.
2. Resolve small warning on the react hook.
3. Add more availabel api's to the page.
	a. Market Segment performance
		1.  This could include a heat map of the data.
