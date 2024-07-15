document.addEventListener('DOMContentLoaded', () => {
    const blogForm = document.getElementById('blogForm');
    const blogList = document.getElementById('blogList');
    const cancelUpdate = document.getElementById('cancelUpdate');
    const blogId = document.getElementById('blogId');

    // function to get blogs form the server
    function fetchBlogs() {
        fetch('fetch.php')
            .then(response => response.json())
            .then(data => {
                blogList.innerHTML = '';
                data.forEach(blog => {
                    const blogItem = document.createElement('div');
                    blogItem.classList.add('blog-item');
                    blogItem.innerHTML = ` <h2>${blog.title}</h2>
                                <p>{blog.content}</p>
                                <button onclick="editBlog(${blog.id}), '${blog.title}', '${blog.content}'">Edit</button>
                                <button onclick="deleteBlog(${blog.id})">Delete</button>
            `;
                    blogList.appendChild(blogItem);
                });
            });
    }
    // function to handle blog form submissionn
    blogForm.addEventListener('submit', function (e) {
        e.preventDefault();
    })


})