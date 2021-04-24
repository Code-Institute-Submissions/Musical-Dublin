# Musical Dublin (Milestone Project 2 by Aaron Harbourne)
This site is intended as a source for music fans to get a comprehensive list of musical venues, education facilities and music shops in the Irish capital. It is intended also to let users know of upcoming events in the city. The site accepts entries from users to have their venue, school or shops listed for other users to see.

The deployed site is available [here]( https://aaronh1986.github.io/Musical-Dublin/)

Wireframes pdf available in github repository above.

Below are images of the three pages of the website accross four different screen sizes
![index-page-markup](./assets/images/screenshot-1.jpg.png)

![events-page-markup](./assets/images/screenshot-2.jpg.png)

![contact-page-markup](./assets/images/screenshot-3.jpg.png)

# User Stories
As a first time user of the site, I want to:
1. Find a list of music venues, education facilities and shops in the Dublin area.
2. Find the addresses of these businesses as well as find their locations on a Google map.
3. Find out about upcoming events in the city.
4. Have a way to submit my business information to the owners of the site for their consideration to include it.

As a returning user I want to:
1. See any updated venue, education facility or shop information that may have been added to the site since my last visit.
2. Get any address or map information contained on the site that I may want to access at any particular time.
3. See the regularly updated event listing on the site.
4. See the status of upcoming events, that is whether the event is on sale and happening, or cancelled. 

## Design
* Font Type:
1. The font chosen for the headings on the site is the 'Permanent Marker' font from Google fonts. This was chosen as it has a playful 
and non-formal look to it, suitable for a site dedicated to music. I felt it would be welcoming to the diverse usership that this site
is aimed at, more so than a typical font for an Irish traditional website for example, like [ITMA](https://www.itma.ie/). A fallback font of sans-serif is included in case a browser cannot load the Permanent Marker font. 
2. The font chosen for all other text on the site is 'Alegreya' from Google Fonts with a fallback font of sans-serif. This was chosen for 
its easy readability.
* Colour Scheme:
1. As this is a site focusing on musical activity within the Dublin area, I decided on a combination of blue colours similar to the Dublin county flag. Five blue variants are used, these are Oxford Blue(#0A1128), Royal Blue(#001F54), Indigo Dye(#034078), Twitter Blue(#1da1f2) and Celadon Blue(#1282A2). White (#fefcfb) and (#fff) are also used to contrast these blue colours.
2. The colours were generated on an app called [Coolors](https://www.coolors.co) which gives five-colour lists of colours
that compliment each other well. I had the above reasons in mind when I decided on the particular list that I used. Twitter blue was added to the list as it was not in the coolors list.
* Images:
1. The images used all portray either concert venues, education facilities, music shops or nightlife in the city in accordance with the purpose of the site.

## Technologies used
1. HTML - This forms the basic architecture of the site and provides a number of empty elements with which I executed javascript.
2. CSS - This provides the styling of the site.
3. JAVASCRIPT - This provides interactivity on the site and allows the site user to initiate actions, uncover hidden elements of the page etc.
4. BOOTSTRAP - This CSS library provides ready-made elements with css styling on the site.
5. JQUERY - This javascript library is used in conjunction with standard javascript code to generate the javascript element of the project.
6. BALSAMIQ - This site was used to create the wireframes with.
7. GOOGLE FONTS - This site provided the two font types used in the project
8. FONT AWESOME - This website provided the social media icons in the footer of my page.
9. COOLORS - This app provided a list of complimentary colours to work with.
10. GITHUB - This site was used as a repository for updates to the progress of the site.
11. GIT - This was used to record progress on the site via commits. These commits were then pushed to Github for a more concrete repository of the work.
12. GITPOD - This is the editor I used to code the project with. 
13. GOOGLE MAPS API - This site provided documentation necessary to implement the google map in my project.
14. EMAIL JS - An api used to send an email to my gmail account with user information when a user fills out the contact form.
15. TICKETMASTER API - An api used to get event information into the project

## Debugging
1. I could not get the Google map to render on the screen. After exhausting options including re-writing the code to make sure I had it correct, and checking against the documentation on the Google maps website, I finally decided to comment out an asterisk in the css file
which changed the background-color of the entire site to #fefcfb, a variant of white. This worked and the map while using the same code, rendered on the site. 
2. I tried a number of different ways of connecting the map markers on the map to the image clicked, i.e the Venues, Education or Shops
images. I wanted only the shop markers to show when the shop image was clicked and the same for the other two images. My first attempt was
to add 'marker.setMap(null);' in the jQuery image click event before where I invoked the function to set the markers on the map, i.e venuesLocations() etc. in the maps.js file. That only cleared all the markers so next I added an empty array to each function (venuesLocations etc.) . Finally I decided to add all the markers in each funtion to the empty array 'businessCoords' then loop through them in the function clearCoords. After that I invoked the clearCoords function before the venuesLocations etc., functions and that worked
to match the images to the specific markers on the map.


## Features
1. The map is responsive across different screen sizes.
2. The site features a Google map which shows the locations of the businesses listed on the site.
3. The site incorporates information from the Ticketmaster api on events in the city.
4. The site features a form that the user can fill in to submit information for their business.
5. The site has an intuitive navigation bar at the top of the screen that the user can easily use to navigate through the site. 
6. The site features a footer with links to all social media pages fot the site. 

## Deployment

1. I first created a repository on Github using the code institute template.
2. Then I used Github to access Gitpod and used this as my code editor for the project.
3. When I was saving my work I commited it to Git using the 'git add .' and then 'git commit -m "commit message" to commit it.
4. After this I saved the work to Github using the 'git push' command.
5. The site was then accessed using Github pages by going into settings, scrolling down to Github Pages and then following instructions to deploy an accessible version of the site.

## Testing
1. I frequently accessed my site on numerous different mobile phones and desktop screen sizes to make sure that the site was rendering correctly and was displaying as intended.
2. I used these different screen sizes and different web browsers i.e Google Chrome and Firefox to make sure that the three api's that I used in the site rendered correctly and were functional.
3. I checked Google Chrome's developer tools regularly throughout development to make sure the site was responsive across screen sizes whenever I implemented a new feature.
4. I inspected the Navigiation bar on each page it was implemented on to make sure that all links were functioning correctly. Also I checked the mobile screen to be certain that the Bootstrap JavaScript was functioning correctly for the toggler drop down menu. I did this on each page also to make sure that the correct script tags were in each html file.
5. I used the Markup Validation Service, W3C to make sure that my html and css was validated.
6. I used jshint to make check my javascript code was written correctly.
7. I filled out the form on my contact.html page to make sure that I was receiving an email into my gmail account when the form was filled out.
8. The contact form on the contact.html page must have every input filled in. Both the name and email inputs use a Bootsrap inbuilt way to inform the user that an input is not filled in. I then used code borrowed from a Web Dev Simplified tutorial to make sure the user fills in the textarea and inform them if they have not.
9. I used the console in Google Chrome developer tools to make sure that there were no issues with the javascript employed in the site. 
10. When opening the site on my mobile phone the hero image was not rendering. After trying numerous things to make it render I asked my mentor who tried opening the page on his mobile phone. The hero image rendered correctly on his phone. Unfortunately I still have not been able to get it working on my own which is an Iphone 7. 
11. All links on the site have been tested to make sure there are no broken links on the site.
12. All Google map markers on the map have been tested to make sure that the correct markers display when either the Venues, Education or Shops images are clicked. This was done simply by clicking on each one to make sure the information in the info window and the location on the map matched the image clicked.

 

## Credits
### Photos:

index.html:
1. Photo of National Concert Hall, Dublin, taken from https://www.nch.ie/Online/default.asp?doWork::WScontent::loadArticle=Load&BOparam::WScontent::loadArticle::article_id=DF4276C8-2BDE-4A58-953B-ADA2B834B5D4&menu_id=C68E7F69-4217-4DD5-A722-0E4F6E2DC69E
2. Photo of woman playing at rehearsal room piano taken from https://www.wiseconstruction.com/sites/default/files/berklee_college_of_music_1108_boylston_street_011_ckeitaro_yoshioka_1800x738.jpg
3. Photo of music shop taken from https://images.squarespace-cdn.com/content/v1/5ce84ef9f379570001144980/1560799028729-C36BGFIDTBOXI5XVN5VA/ke17ZwdGBToddI8pDm48kPz4GSabjt6xK7IFghwST4x7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQNE0iH87QGLOJwWexrKNi0zdFqueJ9KwEmmSZ7pLhJL5493rW--ufOFWzf0YhzNVw/Shop%252BUkues.jpg
4. Photo on background of jumbotron taken from finneganmenton.ie http://www.finneganmenton.ie/wp-content/uploads/2016/07/13-Temple-Bar-at-Night.jpg

contact.html:
1. Photo of Vicar Street taken from http://www.dublinconcerts.ie/dropkick-murphys-vicar-street-review-photos/
2. Photo of Croke Park taken from https://crokepark.ie/BlankSite/media/One-Direction/One_Direction-20.jpg?ext=.jpg
3. Photo of Three Arena taken from https://extra.ie/2017/06/10/entertainment/entertainment-news/dublins-3-arena-security
4. Photo of Slane music festival taken from https://www.slanecastle.ie/wordpress/wp-content/uploads/2017/02/Slane-Castle-Guns-n-Roses-_G6U7085.jpg
5. Photo of piano bar/jazz club taken from https://www.enjoyillinois.com/assets/Tourism-Operators/images/itims/25125_andys-jazz-club-AndysJazz19.jpg
6. Photo of Tool band performing live taken from http://plsn.com/site/wp-content/uploads/16/02/current/tool/6.jpg















