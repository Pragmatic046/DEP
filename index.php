<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Posting Website</title>
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
    <div class="container">
        <h1>Simple Blog</h1>

        <!-- Blog Form -->
        <form id="blogForm">
            <input type="hidden" id="blogId">
            <div>
                <label for="title">Title</label>
                <input type="text" id="title" required>
            </div>
            <div>
                <label for="">Content</label>
                <textarea id="content" required></textarea>
            </div>
            <button type="submit">Save</button>
            <button type="button" id="cancelUpdate" style="display:none">Cancel</button>
        </form>
        <!-- Blog List -->
        <div id="blogList">

        </div>
    </div>
    <script src="./js/script.js"></script>
</body>

</html>