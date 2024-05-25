
let btn = document.querySelector('.read');
let dis = document.querySelector('.banner__description');

btn.addEventListener("click", function(e) {
    dis.append("MY videos cover a range of topics, from programming languages to problem-solving techniques. Through my channel, I aim to inspire and empower others to pursue their interests in technology.");
    btn.style.display = "none"; // Hide the button after click
});
