<?
// fetching all blogs from the databse

include "db.php";

$sql = 'select * from blogs';
$result = $conn->query($sql);

$blogs = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $blogs[] = $row;
    }
}
echo json_encode($blogs);

$conn->close();
