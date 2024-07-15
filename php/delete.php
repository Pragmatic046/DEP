<?
include 'db.php';
$id = $_POST['id'];
$sql = "delete from blogs where id=$id";

if ($conn->query($sql) === true) {
    echo "Blog deleted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
