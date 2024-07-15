<?php
// "db.php" is database connection file
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'blogdatabase';

//creating connection of php with mysql
$conn = new mysqli($servername, $username, $password, $dbname);


//check connection
if ($conn->connect_error) {
    die("Connection failed" . $conn->connect_error);
}
