# Poser Social Media App

This project is a MERN stack social media platform for people who like to fake their lives on the internet, hence "Poser"!


## Tech Stack

**Client:** React, Redux, React Router, Formik & yup, MaterialUI

**Server:** Node, Express, Mongoose, JSON Web token, Multer


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


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