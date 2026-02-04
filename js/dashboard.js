 const client = new Appwrite.Client();
        const account = new Appwrite.Account(client);
        const databases = new Appwrite.Databases(client);

        client
            .setEndpoint('YOUR_APPWRITE_ENDPOINT')
            .setProject('YOUR_PROJECT_ID');

        const DATABASE_ID = "YOUR_DATABASE_ID";
        const COLLECTION_ID = "YOUR_COLLECTION_ID";

        const userNameSpan = document.getElementById("userName");
        const userEmailSpan = document.getElementById("userEmail");
        const createdAtSpan = document.getElementById("createdAt");
        const logoutBtn = document.getElementById("logoutBtn");

        async function loadDashboard() {
            try {
                // 1️⃣ Check if user is logged in
                const user = await account.get();

                // 2️⃣ Fetch profile from DB
                const result = await databases.listDocuments(
                    DATABASE_ID,
                    COLLECTION_ID,
                    [Appwrite.Query.equal('userId', user.$id)]
                );

                if (result.documents.length === 0) {
                    userNameSpan.textContent = "Unknown";
                    userEmailSpan.textContent = "Unknown";
                    createdAtSpan.textContent = "Unknown";
                    return;
                }

                const profile = result.documents[0];

                // 3️⃣ Display profile
                userNameSpan.textContent = profile.name;
                userEmailSpan.textContent = profile.email;
                createdAtSpan.textContent = new Date(profile.createdAt).toLocaleDateString();

            } catch (err) {
                console.error(err);
                // Only redirect if user is not logged in
                try { await account.get(); } catch { window.location.href = "login.html"; }
            }
        }

        // 🔹 Logout
        logoutBtn.addEventListener("click", async () => {
            try {
                await account.deleteSession('current');
                window.location.href = "login.html";
            } catch (err) {
                console.error(err);
            }
        });

        // 🔹 Load dashboard on page load
        loadDashboard();
