# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Run in Docker

### Localhost

#### Build Image
```docker build -t task_manager_ui_image D:/projects/oracle-interview/ui/react-frontend```

#### Run Container
```docker run -it -d -p 3000:3000 -e REACT_APP_SERVER_URL='localhost:8080' --name task_manager_ui task_manager_ui_image```
We exposed port 3000  
REACT_APP_SERVER_URL is the URL that points to the TaskManagerAPI

#### To run this as part of bigger application:
This will run both the task_manager_api and task_manager_ui
```
cd /home/opc
sudo docker compose up -d
```

#### To run the application:  
```http://localhost:3000/tasks```  

### Oracle Cloud:

#### To push images to container registry:  
```docker push sin.ocir.io/axxinayytj1b/task_manager_ui_image:latest```

#### Connect to instance in oracle cloud:  
```ssh -i D:/projects/oracle-interview/ssh-key-2022-07-22.key opc@138.2.89.23```

#### Pull image to oracle instance:  
```sudo docker pull sin.ocir.io/axxinayytj1b/task_manager_ui_image:latest```

#### Run Container:  
```sudo docker run -it -d -p 3000:3000 --name task_manager_ui sin.ocir.io/axxinayytj1b/task_manager_ui_image:latest```  

#### To run this as part of bigger application:
This will run both the task_manager_api and task_manager_ui
```
cd /home/opc
sudo docker compose up -d
```

#### To run the application:  
```138.2.89.23:3000/tasks```

---
