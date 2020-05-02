#!/bin/sh  
touch server.js
mkdir views public models controllers
mkdir models/css
mkdir models/img
touch models/css/style.css
touch views/Index.jsx
touch views/Show.jsx
touch views/New.jsx 
touch views/Edit.jsx
touch views/Default.jsx
touch models/portfolio.js
touch controllers/portfolio.js
npm init -y
npm i express express-react-views react-dom react method-override mongoose
code package.json server.js Index.jsx Show.jsx New.jsx
git add .
git commit -m "file structure and dependencies installed."
