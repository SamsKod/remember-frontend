# remember-frontend


### Small screens (iPhone 4)
![Screenshot](assets/images/screenshot_iphone4.png)

### Middle large screens (iPad Air)
![Screenshot](assets/images/screenshot_air.png)


### Large screens (Desktop)
![HomeScreenshot](assets/images/screenshot_home.png)


# Features

## Existing Features
* Home page
  * Navigation Bar
* About page
  * Short description for my family members.
* Profile link
  * If signed in a link to the profile form.
* Sign In link
  * Link to sign in form.
* Sign out link
  * If signed in a link to sign out.

### Navigation Bar
![navbarscreenshot](assets/images/screenshot_navbar1.png)

- Featured on all pages, the full responsive navigation bar includes links to the Logo, Home page, About, Calendar and Sign in page and is identical in each page to allow for easy navigation.
- When signed in there are more links in the navigation bar, Profile and Sign Out.

![navbarscreenshot](assets/images/screenshot_navbar2.png)


### Landing page
![HomeScreenshot](assets/images/screenshot_home.png)

### About page
![Screenshot](assets/images/screenshot_about.png)

The about page gives information about our wonderful summerplace. 

### 

### Sign in page
![Screenshot](assets/images/screenshot_signin.png)

![Screenshot](assets/images/screenshot_signin_wrong.png)

### Signed out page
![Screenshot](assets/images/screenshot_signout.png)

### 
### Profile page
![HomeScreenshot](assets/images/screenshot_profile.png)

### Update profile page
![HomeScreenshot](assets/images/screenshot_accountupdate.png)

### Admin page
![HomeScreenshot](assets/images/screenshot_admin.png)

## Starting point



## Features left to implement
- 


# Testing


# Validator Testing

### HTML
No errors were returned when passing through the official W3C validator.
### CSS
No errors were found when passing through the official (Jigsaw) validator. Although there are still some css issues to handle because different browsers render css in different ways. Chrome works best for this application. 
### Accessibility
The Lighthouse test tool show good result in accesibility
![Screenshot](assets/images/screenshot_lighthouse.png)

# Bugs
 * 
# Deployment
This site is deployed on Heroku cloud service both the django-api and the react app. A Postgres database on ElephantSQL cloud service is used and static files is handled by cloud service Cloudinary.

Steps för deployment:

* Accounts was setup at Heroku, ElephantSQL and Cloudinary.
* After Django app with Django REST Framework is setup a connection to Cloudinary is configured for storage of media files. Connection to Postgres SQL database att ElephantSQL is setup for database storage.
* Code is commited to Git and then push top Github.
* On Heroku a new app is created    
* Under settings in Heroku config vars is set for connection to the Elephant and Cloudinary. Port and Django secret key is also set.
* In deploy section in Heroku choose branch main to deploy and press button "Deploy Branch". Look in the log that everything is installed correct.

The live link can be found here - 

# Credits
Example code and design is used from:
- 

# Media
My photos.
