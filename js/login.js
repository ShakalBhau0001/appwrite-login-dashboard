const client = new Appwrite.Client();
const account = new Appwrite.Account(client);

// 🔥 SET YOUR PROJECT DETAILS
client
    .setEndpoint('https://YOUR_APPWRITE_ENDPOINT/v1')
    .setProject('YOUR_PROJECT_ID');

const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    message.textContent = "";

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        message.style.color = "red";
        message.textContent = "All fields are required";
        return;
    }

    try {
        // 🔹 Required fix: delete any active session first
        try {
            await account.deleteSession('current');
        } catch (err) {
            // ignore if no session exists
        }

        // 🔹 Now create new session
        await account.createEmailSession(email, password);

        message.style.color = "green";
        message.textContent = "Login successful";

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);

    } catch (err) {
        message.style.color = "red";
        message.textContent = "Invalid email or password";
    }
});
