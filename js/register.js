const client = new Appwrite.Client();
const account = new Appwrite.Account(client);
const databases = new Appwrite.Databases(client);

client
    .setEndpoint('YOUR_APPWRITE_ENDPOINT')
    .setProject('YOUR_PROJECT_ID');

const DATABASE_ID = "YOUR_DATABASE_ID";
const COLLECTION_ID = "YOUR_COLLECTION_ID";

const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    message.textContent = "";

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!name || !email || !password) {
        message.style.color = "red";
        message.textContent = "All fields are required";
        return;
    }

    if (password.length < 6) {
        message.style.color = "red";
        message.textContent = "Password must be at least 6 characters";
        return;
    }

    try {
        // 🔹 0️⃣ Delete any active session first
        try {
            await account.deleteSession('current');
        } catch(err) {
            // ignore if no session exists
        }

        // 🔹 1️⃣ Create new user
        await account.create(Appwrite.ID.unique(), email, password, name);

        // 🔹 2️⃣ Auto-login
        await account.createEmailSession(email, password);

        // 🔹 3️⃣ Get user info
        const user = await account.get();

        // 🔹 4️⃣ Store in DB
        await databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
            Appwrite.ID.unique(),
            {
                userId: user.$id,
                name: name,
                email: email,
                createdAt: new Date().toISOString()
            }
        );

        message.style.color = "green";
        message.textContent = "Registration successful";

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);

    } catch (err) {
        message.style.color = "red";
        message.textContent = err.message;
        console.error(err);
    }
});
