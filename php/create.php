<?
// handling the creation of a new blog
include 'db.php';
$title = $_POST['title'];
$content = $_POST['content'];

$sql = "inser into blogs (title, content) values ('$title',$content)";

if ($conn->query($sql) === true) {
    echo "New blog created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
