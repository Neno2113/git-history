# Github - History

1. First you'll need to setup the backend which is in this repository as a submodule 
   - ```git-history-backend @ 6980c5f```.
   - Click on and follow the step from the README.MD to setu the backend and then comeback to finish setting the FrontEnd.

2. clone the project with the following command:
   - ```git clone https://github.com/Neno2113/git-history.git```

3. Go to the project folder and run the  ``` yarn install``` to install all the node_modules required to run the project.

4. Clone the file ```.env.example``` and name the clone ```.env``` then fill the ```VITE_BASEURL``` variable 
   with the url of the API:
   - ```http://localhost:PORT/api/github/```: 
   - ```PORT``` is the port the backend is running in your local computer.

5. Run the command ```yarn dev``` to start the app in development mode.