To run React

1. Clone the Repository: Navigate to the directory where you want to store your React project and run the following command in your terminal or command prompt:
   	git clone https://github.com/premkumarspk/Curd_in_React.git

2. Navigate to the Project Directory: After cloning the repository, navigate into the project directory using:
	
	cd <project-directory>/curd

3. Install Dependencies: Use npm to install the required dependencies for the project. In the project directory, run:
	
		npm install

4. Run the Development Server: Most React projects come with a built-in development server. You can start it using:

		npm start

5. above 2,3 same process for backend

change directory to server 
		
		cd:<project-directory>/server &

		npm install	

6. create Mango DB account create Database

7. Set Up Environment Variables: Backend applications often require configuration through environment variables. You may need to create a .env file in the root directory of the backend project to store sensitive information like database connection strings. Make sure to fill in the necessary variables, including MongoDB connection details.

To change this in .env file
	
MONGODB_URI=mongodb://<username>:<password>@<hostname>:<port>/<database-name> 

8. Run the Backend Server: Once the dependencies are installed and environment variables are set up, you can run the backend server.

	npm start

9. Verify Backend Connectivity: Once the backend server is running, you can test its connectivity by sending requests to the defined endpoints using tools like Postman or by integrating it with a frontend application.

You can see  “Server is running on port 8000”
and 	“DB connected ….”

10 Monitor Logs: Keep an eye on the terminal or command prompt where the backend server is running. It will display logs that can help you troubleshoot any issues that arise.
