# Budget Tracker
Budget Tracker is a web application designed to help users manage their finances efficiently. This project leverages **JavaScript**, **HTML**, **CSS**, and **DOM manipulation** to provide a seamless user experience. It uses **JSON handling** for storing and retrieving financial data.

---
## Table of Contents
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Notes](#notes)
- [Future Enhancements](#future-enhancements)
- [Licence](#license)
- [Contact Information](#contact-information)
---
## Features
- Add income and expense records
- Categorize transactions
- View total income, expenses, and balance
- Persistent data storage using JSON
---
## Setup Instructions

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)
- JSON Server

### Steps to Run the Application

1. Clone this repository to your local machine.
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory.
   ```bash
   cd budget-tracker
   ```

3. Install JSON Server globally (if not already installed).
   ```bash
   npm install -g json-server
   ```

4. Start the JSON Server with the specified port.
   ```bash
   json-server --watch db.json --port 3001
   ```

5. Open `index.html` in your browser to view the application.
---
## Project Structure
```
.
├── index.html
├── styles.css
├── script.js
├── db.json
├── README.md
```
- **index.html**: The main HTML file.
- **styles.css**: Contains styles for the application.
- **script.js**: JavaScript file for DOM manipulation and functionality.
- **db.json**: JSON file for data storage.
- **README.md**: Project documentation.
---
## Usage
1. Open the application in a browser.
2. Use the input fields to add income or expense records.
3. Transactions will be displayed in a list.
4. The total balance, income, and expenses will be updated dynamically.
---
## Technologies Used
- **HTML** for structuring the application.
- **CSS** for styling the user interface.
- **JavaScript** for logic and DOM manipulation.
- **JSON Server** for managing data storage.
---
## Notes
- The JSON Server runs on `http://localhost:3001`.
- Make sure the `db.json` file is in the root directory before starting the server.
---
## Future Enhancements
- Add user authentication.
- Enable data export and import features.
- Introduce charts for better financial visualization.
---
## License
This project is licensed under the MIT License. See the LICENSE file for details.

---
 If you have any feedback or questions, feel free to contribute or reach out.
## Contact Information

- *Name*: Phoebe Velma Awuor
- *Email*: [awuorphoebi@gmail.com]
- *LinkedIn*: [https://www.linkedin.com/in/phoebe-velma-awuor/](#)
- *GitHub*: [https://github.com/Velma96](#)

---



