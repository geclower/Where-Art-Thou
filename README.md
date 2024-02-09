Title: Where Art Thou, Media

Description: Based on a filter of 4 options (country, streaming service, genre, and movie/series/both) provide a list of currently available media to stream.

Wireframes: 

API: https://streaming-availability.p.rapidapi.com

MVP: 
    - have a form with 4 drop downs: country, service, genre, and media type - done
    - based on those provide a list of available media to watch - done
    - have the available dropdowns be affected by the preceeding choices (postmvp?) -done
    
Post MVP:
    - add a search function for specific media
    - link the provided options to their imdb and streaming urls - streaming urls, imbd link not available 
    - have results appear another html

Results:

Created 4 dropdowns with the content being pulled from the API so they are updated when the api changes. The countries and genres are individual pulls. The streaming service is pulled based on which country you select. When you click the submit button the first 25 medias are pulled and added as a list item with the link to the page of the streaming service attached. If there are more than 25 options a next button appears and if you click it the next 25 options are added to the list.

Didn't create a search bar because the API I was working with had limited pulls per day and i was already reaching my max within 2-3 hoursof testing the content I currently had

Would still like to figure outhow to auto-open and display results on second html page

PS: for a fun bonus, click on the pawprint!