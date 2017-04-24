# The Monkees

## Overview

### What is this website for?

This is a simple band website for 'The Monkees' promoting their music and availability for gigs. You can view the website here at [**project1-themonkees.firebaseapp.com**](https://project1-themonkees.firebaseapp.com/#/).

### What does it do?

This website showcases the music of 'The Monkees' and publicises their availability for gigs. Users can use the website to view, hear and purchase 'The Monkees' music, videos and photographs, as well as check out their upcoming tour dates.
Users can also sign up to their Mail List, subscribe to their Newsletter and are provided with all Social Media links so as to follow them on different platforms. Event Managers can also use the website to book the 'The Monkees' for corporate and wedding events.

### How does it work?

This website uses the AngularJS Framework to bind data to the view and control behaviour behind the DOM. It it styled using a mixture of Bootstrap and Flexbox.

## Features

### Existing Features

**Users can:**
- Listen to music
- Watch videos
- View photos
- Sample and purchase music via iTunes
- Join Mail List
- Subscribe to Newsletter
- View upcoming gigs
- Book 'The Monkees' for commerical gigs
- Connect with 'The Monkees' Social Media presence
- Contact them directly via phone, email and Skype
- View the site easily from any device due to the responsive design with mobile use in mind

### Features Left to Implement

- An iTunes Search Bar that allows Users to input specific songs by 'The Monkees' and sample and purchase them.

- 'Previous Image' and 'Next Image' links on 'image.html' that Users can use to navigate through the Photo section easier.


## Tech Used

- [AngularJS](https://angularjs.org/)
    - I used **AngularJS** to bind data to the view, handle page routing, create directives and use services to organize code and share it accross the website
- [Bootstrap](http://getbootstrap.com/)
    - I used **Bootstrap** to give my project a simple, responsive layout
- [npm](https://www.npmjs.com/)
    - I used **npm** to help manage some of the dependencies in my website
- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of libraries and frameworks

## Responsive Web Design

I used a variety of methods to ensure the responsiveness of my website. These included:
- **Mobile First Design**
    - **Mobile First Design** is a fundamental part of designing for a multi screen world. I build this website with mobile space, functionality and utility as first priority.

- [**Bootstrap**](http://getbootstrap.com/)
    - I used the **Bootstrap** Framework to create tried and trusted sleek, responsive elements. For example, Bootstrap makes it simple to implement stylish a collapsible navbar which responds to screen size:
        </br></br>**_Uncollapsed navabr on large screen_**</br>
        ![Uncollapsed Navbar](/screenshots/Project1-bootstrap-fullnav.png?raw=true "Uncollapsed Navbar")
        </br></br>**_Collapsed navbar on small screen_**</br>
        ![Collapsed Navbar](/screenshots/Project1-bootstrap-collapsednav.png?raw=true "Collapsed Navbar")

- **Flexbox**
    - I used **Flexbox** display for simple yet powerful design layouts that ensure responsiveness. **Flexbox** can come in very handy when you need to devise seemingly straight-forward designs (which easily become tricky using more traditional methods) with just a few lines of code. For example, in this project I utilized **Flexbox** to create a calendar using a gird of date 'notes'. Each section is held together and resizes with screen size thanks to **Flexbox**:
        </br></br>**_Both Calendar Grid and Calendar Date Notes Created with Flexbox_**</br>
        ![Flex Calendar Display](/screenshots/Project1-flexbox-calendar.png?raw=true "Vertical Flex Display")

- **Media Queries**
    - I spent a lot of time writing and re-writing **Media Queries** to optimize the responsiveness of my website based on screen size. It can be a meticulous and tiring process, but is more than worth it to have that perfect resize. Font sizes, relatively positioned elements, margins, heights and text alignments all caused trouble in keeping the flow of the website consistent on resizes and required **Media Queries** to iron out the kinnks.
        </br></br>**_Media Page with a width of 1366px_**</br></br>
        ![Media Width 1366](/screenshots/Project1-mediaqueries-1366px.png?raw=true "Media Width 1366")
        </br></br>**_Media Page with a width of 390px_**</br></br>
        ![Media Width 390](/screenshots/Project1-mediaqueries-390px.png?raw=true "Media Width 390")

### Testing

I used a variety of methods to test the responsiveness of my website. These included:

- [Firefox Responsive Design Mode](https://developer.mozilla.org/en-US/docs/Tools/Responsive_Design_Mode)
    - This was an essential tool to testing the responsiveness of my website, **Firefox Responsive Design Mode** makes it fast and effortless to switch between screen sizes and devices.
        </br></br>**_Firefox Responsive Design Mode simulating an Apple iPhone 6s_**</br>
        ![Firefox RDM](/screenshots/Project1-RDM.png?raw=true "FirefoxRDM")

- [Blisk](https://blisk.io/)
    - A browser for web developers, **Blisk**, comes prepacked with fully emulated phones and tablets. It shows real time changes to files so I could see exactly how the changes to my code were affecting my site.
        </br></br>**_Blisk simulating an iPad Air Retina_**</br></br>
        ![Blisk](/screenshots/Project1-blisk-ipadairretina.png?raw=true "Blisk")

- **Testing In Different Environments**
    - There is no simulator that could replace simply testing my website in as many environments as possible. Using as many different browsers and devices as I could get my hands on was key to weening out design flaws. **Testing in Different Environments** was a integral part of guaranteeing my website functions correctly for every User.

## Contributing

### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone https://github.com/meganduffy/Band-Project.git``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install

  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request
