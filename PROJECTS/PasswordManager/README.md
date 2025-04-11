---
```markdown
# 🔐 Passure – Java Password Manager  
![Java](https://img.shields.io/badge/Java-8%2B-blue.svg)  
![License](https://img.shields.io/badge/license-MIT-green.svg)  
![Build](https://img.shields.io/badge/build-passing-brightgreen)  
![Platform](https://img.shields.io/badge/platform-desktop-lightgrey)

**Passure** is a secure, standalone desktop application written in Java that allows users to generate strong passwords and manage their credentials safely. The app stores passwords locally using an encrypted SQL database and provides a user-friendly interface built with Swing.

---

## ✨ Features

- ✅ Strong password generator with customizable settings
- 🔐 Encrypted password storage using SQL + JDBC
- 🧠 Local-first privacy — no internet or cloud required
- 🧪 Unit-tested components using JUnit
- 🖥️ Java Swing-based graphical interface
- 📦 Clean modular structure (MVC pattern)

---

## 📁 Project Structure

```
PasswordManager/
├── bin/                          # Compiled class files
├── lib/                          # External libraries (if any)
├── resources/styles/             # CSS or styles for GUI
├── src/
│   └── main/java/com/passwordmanager/
│       ├── controller/           # Logic handling
│       ├── model/                # Data structure (User, Credential)
│       ├── util/                 # Helpers (encryption, validation)
│       ├── view/                 # GUI layout
│       ├── App.java              # Entry support
│       └── PasswordManagerApp.java  # Main launcher
├── test/java/com/
│   ├── AuthControllerTest.java
│   └── PasswordControllerTest.java
└── README.md
```

---

## ⚙️ Technologies Used

- Java 8+
- Swing (UI)
- JDBC (SQL Connectivity)
- MySQL or SQLite (Local DB)
- JUnit (Unit Testing)
- Custom Encryption Utility (e.g., AES or Base64)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Passure.git
cd Passure
```

### 2. Set Up the Database

Create tables for storing users and credentials:

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

Update your DB credentials in `DatabaseManager.java`.

---

### 3. Build & Run the App

Compile:
```bash
javac -d bin src/main/java/com/passwordmanager/**/*.java
```

Run:
```bash
java -cp bin com.passwordmanager.PasswordManagerApp
```

---

### 🧪 Run Tests

```bash
javac -cp .:lib/junit-4.13.2.jar test/java/com/*.java
java -cp .:lib/junit-4.13.2.jar org.junit.runner.JUnitCore com.AuthControllerTest
```

> Update the JUnit jar version if needed.

---

## 🧠 Future Enhancements

- Cloud sync with encryption
- Biometric login
- Dark mode UI
- Password breach checker (via HaveIBeenPwned API)

---

## 🙋‍♂️ Author

Bhavin Joshi
[LinkedIn](https://linkedin.com/in/yourusername) | [GitHub](https://github.com/your-username)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

```
