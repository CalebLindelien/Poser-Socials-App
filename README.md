# Poser Social Media App

This project is a MERN stack social media platform for people who like to fake their lives on the internet, hence "Poser"!


## Tech Stack

**Client:** React, Redux, React Router, Formik & yup, MaterialUI

**Server:** Node, Express, Mongoose, JSON Web token, Multer


## Screenshots
Dark Mode Home Page
<img width="1422" alt="DarkUI" src="https://user-images.githubusercontent.com/98850200/222643376-a7531c78-c3e7-4f6c-82dd-f7c2668ef3cf.png">
___
Light Mode Home Page
<img width="1427" alt="LightUI" src="https://user-images.githubusercontent.com/98850200/222643414-cbc2e1a5-a43b-42de-8daf-66db6361b354.png">
___
Log In View
<img width="1434" alt="LogIn" src="https://user-images.githubusercontent.com/98850200/222643423-2af1155f-b662-42bc-a704-1fc91fb6607d.png">
___
Mobile View
<img width="332" alt="MobileView" src="https://user-images.githubusercontent.com/98850200/222643435-3ece895f-a704-4e13-ad25-c527821e16bb.png">



## Run Locally

Clone the project

```bash
  git clone https://github.com/CalebLindelien/Poser-Socials-App.git
```

Go to the project directory

```bash
  cd Poser-Socials-App
```

Install client dependencies

```bash
  cd client
  npm install
```

Install server dependencies
```bash
  cd server
  npm install
```

Create a .env file
```bash
  cd server
  touch .env
```

Start the server
```bash
  cd server
  npm run start
```

Start the client
```bash
  cd client
  npm run start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URL`

`JWT_SECRET`

`PORT`

&nbsp; 
1. Go to [mongodb](https://www.mongodb.com/) to register and log in to create MongoDB database.
2. After the last step, copy your MongoDB link address and replace the `.env` file `MONGO_URL` field, please replace `<password>` with the correct password you set.
3. Then set your own `JWT_SECRET` String.
4. Then set `PORT=3001`
