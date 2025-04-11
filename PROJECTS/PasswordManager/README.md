
```markdown
# 🔐 Passure – Java Password Manager

**Passure** is a secure and user-friendly password manager built entirely in Java. Designed as a standalone desktop application, it allows users to generate strong passwords and safely store login credentials using local SQL-based storage and encryption. The project follows a clean MVC architecture with modular components for scalability and maintenance.

---

## 🧩 Features

- 🔑 **Strong Password Generator**  
  Automatically generate secure, complex passwords.

- 🔐 **Secure Password Storage**  
  Encrypted local storage using SQL database (JDBC integrated).

- 🧭 **Simple Desktop UI**  
  Built with Java Swing and custom-styled using external resources.

- 🧪 **JUnit-Based Testing**  
  Includes unit tests for controllers and logic components.

- 🧰 **Modular Codebase**  
  Clean separation using `controller`, `model`, `util`, and `view` packages.

---

## 📁 Project Structure

```
PasswordManager/
├── bin/                          # Compiled class files
├── lib/                          # External libraries (if any)
├── resources/styles/            # CSS or styling files for GUI
├── src/
│   └── main/
│       └── java/com/passwordmanager/
│           ├── controller/      # UI + business logic controllers
│           │   ├── AuthController.java
│           │   └── PasswordController.java
│           ├── model/           # Data models (User, Credential)
│           ├── util/            # Utility classes (Encryption, Validator)
│           ├── view/            # GUI layout and components
│           ├── PasswordManagerApp.java  # Main launcher class
│           └── App.java         # Supporting class (if applicable)
├── test/
│   └── java/com/
│       ├── AuthControllerTest.java
│       └── PasswordControllerTest.java
├── README.md
```

---

## ⚙️ Technologies Used

- **Java 8+**
- **Swing (GUI)**
- **JDBC (SQL Integration)**
- **MySQL / SQLite** (as DB)
- **JUnit** (for unit testing)
- **Basic Encryption** (e.g., AES or Base64)

---

## 🚀 How to Run

1. **Clone the repo**  
   ```bash
   git clone https://github.com/your-username/Passure.git
   cd Passure
   ```

2. **Set up the database**  
   Create a database and update connection credentials in `DatabaseManager.java`.

3. **Compile the source files**  
   ```bash
   javac -d bin src/main/java/com/passwordmanager/**/*.java
   ```

4. **Run the application**  
   ```bash
   java -cp bin com.passwordmanager.PasswordManagerApp
   ```

---

## 🔐 Example SQL Setup

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100),
    password TEXT
);

CREATE TABLE credentials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    service VARCHAR(100),
    login VARCHAR(100),
    encrypted_password TEXT
);
```

---

## 🧪 Running Tests

```bash
javac -cp .:lib/junit-4.12.jar test/java/com/*.java
java -cp .:lib/junit-4.12.jar org.junit.runner.JUnitCore com.AuthControllerTest
```

---

## 🙌 Author

- **Your Name**  
  Add more contributors if any.

---

## 📌 License

This project is open for educational and personal use. Feel free to modify.

---

```
