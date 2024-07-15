<!-- Handling the updating of blog posts -->
<?
include 'db.php';

$id = $_POST['id'];
$title = $_POST['title'];
$content = $_POST['content'];

$sql = "update blogs set title='$title', content='$content' where id=$id";

if ($conn->query($sql) === true) {
    echo "Blog updated Successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>