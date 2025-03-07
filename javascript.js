// Navbar Toggle (Mobile Menu)
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.style.display = navLinks.style.display === "block" ? "none" : "block";
});

// Image Slider
let currentIndex = 0;
const slides = document.querySelectorAll(".slides img");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}, 3000);

const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.querySelector("header").classList.toggle("dark-mode");
    document.querySelectorAll(".blog").forEach(blog => blog.classList.toggle("dark-mode"));
});

const searchBar = document.getElementById("search-bar");
const blogPosts = document.querySelectorAll(".blog");

searchBar.addEventListener("keyup", (e) => {
    const searchText = e.target.value.toLowerCase();
    blogPosts.forEach(post => {
        const title = post.querySelector("h3").textContent.toLowerCase();
        post.style.display = title.includes(searchText) ? "block" : "none";
    });
});

const commentBox = document.getElementById("comment");
const postCommentBtn = document.getElementById("post-comment");
const commentsList = document.getElementById("comments-list");

postCommentBtn.addEventListener("click", () => {
    const commentText = commentBox.value.trim();
    if (commentText) {
        const newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.textContent = commentText;
        commentsList.appendChild(newComment);
        
        let comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.push(commentText);
        localStorage.setItem("comments", JSON.stringify(comments));

        commentBox.value = "";
    }
});

// Load Comments on Page Load
document.addEventListener("DOMContentLoaded", () => {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.forEach(comment => {
        const newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.textContent = comment;
        commentsList.appendChild(newComment);
    });
});

document.querySelectorAll(".like-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.textContent = "❤️ Liked!";
    });
});

document.querySelectorAll(".share-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        navigator.clipboard.writeText(window.location.href);
        alert("Blog link copied to clipboard!");
    });
});

const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const inputBox = document.getElementById("inputt");
const searchtBtn = document.getElementById("Search");
