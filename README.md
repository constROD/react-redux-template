# React Redux Template
This repo is build with webpack

# Installation
```
git clone https://github.com/constROD/react-redux-template
cd react-redux-template
npm install or yarn
```

# Usage
#### For development run client to watch when changes occur. ####
```
npm run client:start or yarn client:start
```

#### For production it will build client first then deploy it. ####
1. `dev:deploy` - it uses node to run. I used this in my local for testing if the build is success 
2. `prod:deploy`- it uses node also but with pm2 to run. I used this on my server if no errors occur.
```
npm run dev:deploy or yarn dev:deploy
```
```
npm run prod:deploy or yarn prod:deploy
```
