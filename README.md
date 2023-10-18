MovieApiClient

Overview

MovieApiClient is a Java application that fetches upcoming movie data from The Movie Database (TMDb) API using OkHttp and Gson libraries. The application has been packaged into a standalone JAR file for easy execution without the need for compiling or managing dependencies. This guide outlines the steps to run the MovieApiClient JAR on your local machine.

Prerequisites

Java Runtime Environment (JRE): Ensure you have Java installed. You can download it from java.com.
MovieApiClient JAR File: Download the MovieApiClient-1.0-SNAPSHOT-jar-with-dependencies.jar file from the repository.
Steps to Run MovieApiClient JAR

Download the JAR File:

Go to the repository on GitHub.
Navigate to the "Releases" section or find the JAR file in the repository's file list.
Download the MovieApiClient-1.0-SNAPSHOT-jar-with-dependencies.jar file to your local machine.
Open Terminal/Command Prompt:

Open your terminal or command prompt application.
Navigate to the Directory Containing the JAR:

Use the cd command to navigate to the directory where you downloaded the JAR file.
Example (on Windows):

bash
Copy code
cd path/to/your/directory
Run the JAR File:

Use the following command to run the MovieApiClient JAR:
bash
Copy code
java -jar MovieApiClient-1.0-SNAPSHOT-jar-with-dependencies.jar
View the Output:

The application will fetch data from The Movie Database (TMDb) API.
You will see the movie details including original_title, overview, release_date, and vote_average printed in the terminal.
Example Output

less
Copy code
Original Title: [Movie Title]
Overview: [Movie Overview]
Release Date: [Release Date]
Vote Average: [Vote Average]
Notes

Ensure you have an active internet connection while running the application, as it fetches data from an online API.
Make sure your system's firewall allows Java to access the internet, especially if you encounter connection issues.
License

This project is licensed under the MIT License. Feel free to use, modify, and distribute the code as per the terms of the license.

Enjoy using MovieApiClient to explore upcoming movies! If you encounter any issues or have questions, feel free to reach out on the repository's issues page.

Happy movie exploring!
