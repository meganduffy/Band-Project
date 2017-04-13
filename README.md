# The Monkees

## Overview

### What is this website for?

This is a simple band website for 'The Monkees' promoting their music and availability for gigs.

### What does it do?

This website showcases the music of 'The Monkees' and publicises their availability for gigs. Users can use the website
to view, hear and purchase 'The Monkees' music, videos and photographs, as well as check out their upcoming tour dates. Users can
also sign up to their Mail List, subscribe to their Newsletter and are provided with all Social Media links so as to follow
them on different platforms. Event Managers can also use the website to book the 'The Monkees' for corporate and wedding events.

### How does it work?

This website uses the AngularJS Framework to bind data to the view and control behaviour behind the DOM.
It it styled using a mixture of Bootstrap and Flexbox.

## Features

### Existing Features

-Users can:
    - Listen to music
    - Watch videos
    - View photos
    - Sample and purchase music via iTunes
    - Join Mail List
    - Subscribe to Newsletter
    - View upcoming gigs
    - Book 'The Monkees'
    - Access 'The Monkees' Social Media accounts
    - Contact them directly via phone, email and Skype
    - Responsive design with mobile use in mind

### Features Left to Implement

1. An iTunes Search Bar that allows Users to input specific songs by 'The Monkees' and sample and purchase them.

2. 'Previous Image' and 'Next Image' links on 'image.html' that Users can use to navigate through the Photo section easier.


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

- Bootstrap

- Flexbox

- Media Queries

### Testing

I used a variety of methods to test the responsiveness of my website. These included:

- Firefox Responsive Design Mode

- [Blisk] (https://blisk.io/)

- Testing In Different Environments

## Contributing

### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
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
