# Hive-Hut
It is a Full-stack Social Media website that has authentication(login/signup) functionality, 
upon registration a user profile is created and the user is taken to the home page of the application.
JWT Authentication has been used to authenticate the user in this app.<br>
In the home page there is an option to post something (image or text), the image posted are stored in 
the local storage. Rest API is used to handle the posts and the users. 
<br>In the left side of the page, the user profile picture and cover picture is shown 
in a card and below that the followers list is shown(The other people who have registered).<br>
Upon going to "My Profile", user profile is shown where the user can fill in information about them
and they can also update/change their cover picture and profile picture.<br>
The app also supports dark and light mode.
Users can follow and unfollow other users and it will render across the entire app.

## Dependencies
[![dependency - Node.js](https://img.shields.io/static/v1?label=dependency&message=Node.js&color=%23F7E152)](https://nodejs.org/en/)        
[![library - React.js](https://img.shields.io/static/v1?label=library&message=React.js&color=%2352F7BA)](https://reactjs.org/)    
[![icons - react unicons](https://img.shields.io/static/v1?label=icons&message=react+unicons&color=%2352C2F7)](https://iconscout.com/icons?gclid=CjwKCAiAwc-dBhA7EiwAxPRylPC3t-9e5BD0qGYYpi6p8e1Ub8JHd18hqx4h0iwB_KswYTnXbAj2iRoCLboQAvD_BwE)      
[![language - javascript](https://img.shields.io/static/v1?label=language&message=javascript&color=%23EEF752)](https://www.javascript.com/)
[![modal - mantime-modal](https://img.shields.io/static/v1?label=modal&message=mantime-modal&color=%23F76F52)](https://mantine.dev/core/modal/)       
[![authentication - JWT](https://img.shields.io/static/v1?label=authentication&message=JWT&color=%23F7525B)](https://jwt.io/introduction)       
[![database - mongoDB](https://img.shields.io/static/v1?label=database&message=mongoDB&color=%23F7525B)](https://www.mongodb.com/home)        
[![API - Rest API](https://img.shields.io/static/v1?label=API&message=Rest+API&color=%237DCEA0)](https://restfulapi.net/)
[![Dependency - Express](https://img.shields.io/static/v1?label=Dependency&message=Express&color=%23F39C12)](https://expressjs.com/)
[![Library - Mongoose](https://img.shields.io/static/v1?label=Library&message=Mongoose&color=%233498DB+)](https://mongoosejs.com/)
[![Encryption - bcrypt](https://img.shields.io/static/v1?label=Encryption&message=bcrypt&color=%235DADE2)](https://www.npmjs.com/package/bcrypt)


## Demo

https://hivehutfrontend.onrender.com


### Sign up page - 

![hive6](https://user-images.githubusercontent.com/86125077/210492718-aa9ead82-9693-4d5a-9a1f-a5a2b89fa0f2.png)


### Login Page - 

![hive7](https://user-images.githubusercontent.com/86125077/210492780-4f8a368f-9047-4f3b-a7b6-7f0cc2189e39.png)

### Home Page - 

![hive1](https://user-images.githubusercontent.com/86125077/210492995-067e315b-d391-4e6d-b300-88289137e452.png)

### Profile Page -

![hive2](https://user-images.githubusercontent.com/86125077/210493022-0f43a019-2051-4473-8f7f-8b02659302ab.png)

### Share function - 

![hive3](https://user-images.githubusercontent.com/86125077/210493093-504af069-35aa-41a2-ac6a-6ae798045ae4.png)

### Information update -

![hive4](https://user-images.githubusercontent.com/86125077/210493142-3575f0a0-a803-4068-9c3c-8c9b69750127.png)

### Dark Mode - 

![hive5](https://user-images.githubusercontent.com/86125077/210493174-780e596f-d305-4566-a191-2b87b1d91dfe.png)



## Deployment

This project has been deployed using Render.com
#### For Backend/server
* Web Service App
   
Branch
```bash
  main
```
Root directory

```bash
  server
```
Build command
```bash
  npm install
```
Start command
```bash
  npm run start
```
After this add .env variables to render and update the IP
addresses in MongoDB.
Deploy Server!

#### For Frontend/client
* Static site
Branch
```bash
  main
```
Root directory

```bash
  client
```
Build command
```bash
  yarn run build
```
Start command
```bash
  build
```

After this add .env variables to render.
Change the instances of backend link from client to the 
new provided link from deployed site from backend.
Deploy client!
