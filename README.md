<h1 align ="center" > 🏆 EcommerElectronic  </h1>
<h5  align ="center"> 
Fullstack open source Ecommerce application made with MongoDB, Express, React & Nodejs (MERN) </h5>
<br>
<br>

  * [Configuration and Setup](#configuration-and-setup)
  * [Key Features](#key-features)
  * [Technologies used](#technologies-used)
      - [Frontend](#frontend)
      - [Backend](#backend)
      - [Database](#database)
      - [API](#api)
  * [📸 Screenshots](#screenshots)
  * [Author](#author)
  * <br>
  * ## Configuration and Setup

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the client on one terminal and the server on the other terminal)

In the first terminal

```
$ cd client
$ npm install (to install client-side dependencies)
$ npm run  start (to start the client)
```

In the second terminal

- cd server and Set environment variables in .env
- Create your mongoDB connection url, which you'll use as your MONGO_URL
- Supply the following credentials

```
#  --- .env  ---

MONGO_URI:
PORT:9000
JWT_SECRET: ''
STRIPE_SECRET_KEY:''
```

```
# --- Terminal ---

$ npm install (to install server-side dependencies)
$ npm start (to start the server)
```
![Static Badge](https://img.shields.io/badge/build-3.15%20mb%20-brightgreen?style=for-the-badge&label=GitHub%20repo%20size&color=brown)
![Status project](https://img.shields.io/badge/STATUS-Finished-GREEN?style=for-the-badge)

## ✔️ Tecnologias Utilizadas:
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Static Badge](https://img.shields.io/badge/Redux%20Toolkit-yellow?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/axios-black?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/React%20Bootstrap-lightblue?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/redux%20persist-aqua?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/mongoose-purple?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/Express-navy?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/multer-teal?style=for-the-badge)

<br>
##  Screenshots:
## Projects Images:
<br>
<img src="./FRONTEND/src/assets/systempictures/searchPage.jpg" alt="project screenshot02" />
<img src="./FRONTEND/src/assets/systempictures/Userprofile.jpg" alt="project screenshot03" />
<img src="./FRONTEND/src/assets/systempictures/home.jpg" alt="screenshot del proyecto" />
<br>
```
##  Key Features:

- User registration and login
- Authentication using JWT Tokens
- Add, edit, delete Products
 - Leave a Reviews
- Delete Reviews
- Password Update
- Search Live
- 404 Page and many more
- Responsive Design
```
