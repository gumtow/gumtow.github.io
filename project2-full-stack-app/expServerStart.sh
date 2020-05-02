#!/bin/sh  
touch server.js
mkdir views public models controllers
mkdir public/css
mkdir public/img
touch public/css/style.css
touch views/Index.jsx
touch views/Show.jsx
touch views/New.jsx 
touch views/Edit.jsx
touch views/Default.jsx
touch models/portfolio.js
touch controllers/portfolio.js
npm init -y
npm i express express-react-views react-dom react method-override mongoose
git add .
git commit -m "file structure and dependencies installed."
