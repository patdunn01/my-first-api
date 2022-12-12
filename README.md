# My House of Games API

The original .env.test directory and .env.development directory are both added to the .gitignore file and therefore will not be included in the project when you have cloned it down from github. This means that you will need to create these files yourself. 

Once you have created .env.test and .env.development files, you will need to confirm which database you are using. Adding PGDATABASE=nc_games in the .env.development file will make sure that the database nc_games is accessed when the script is run and adding PGDATABASE=nc_games_test will ensure the test database is accessed when the script is run.

# Further instructions

From here, you will then need to run the following commands to run the application successfully on your local machine:

        npm install
        npm install express
        npm install supertest 
