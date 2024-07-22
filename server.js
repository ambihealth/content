const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, "public")));

// Shuffle word function
function shuffleWord(word) {
  const arr = word.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
}

// Generate shuffled versions of "Password"
const generateShuffledPasswords = () => {
  let shuffledPasswords = [];
  for (let i = 0; i < 10; i++) {
    shuffledPasswords.push(shuffleWord("Password"));
  }
  return shuffledPasswords;
};

// Testimonials data
const testimonials = [
  {
    name: "John Doe",
    title: "Software Engineer",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel orci eget quam aliquet cursus ut sed sapien.",
  },
  {
    name: "Jane Smith",
    title: "Product Manager",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel orci eget quam aliquet cursus ut sed sapien.",
  },
  {
    name: "Michael Brown",
    title: "UX Designer",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel orci eget quam aliquet cursus ut sed sapien.",
  },
  {
    name: "Neel Raval",
    title: "SDE 1 @ Ankr",
    content: "Ankr Health",
  },
];

// Slider data with hover effects
const sliderItems = [
  { text: "Onboarding Day 1", hover: "1️⃣ Onboarding Day 1" },
  { text: "Payment Confirmation", hover: "Payment Confirmation" },
  { text: "Onboarding Day 2", hover: "2️⃣ Onboarding Day 2" },
  { text: "Forgot Password", hover: generateShuffledPasswords() }, // Array of shuffled passwords
  { text: "Invite Team", hover: "👋 Invite Team" },
  {
    text: "Changelog Updates",
    hover: 'Changelog Updates <span class="pill">NEW</span>',
  },
  { text: "Newsletter", hover: "Newsletter" },
  { text: "Upgrade Confirmation", hover: "✅ Upgrade Confirmation" },
  { text: "Account Confirmation", hover: "Account Confirmation 🎉" },
];

// Serve index.html and inject testimonials
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// API to get testimonials
app.get("/api/testimonials", (req, res) => {
  res.json(testimonials);
});

// API to get slider items
app.get("/api/slider", (req, res) => {
  res.json(sliderItems);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
