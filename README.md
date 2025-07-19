Number Guessing Game Web Application

Introduction

The Number Guessing Game is an interactive web application developed as a Python mini project using Flask for the backend and HTML, CSS, and JavaScript for the frontend. The goal of the game is to let users guess a randomly generated number between 1 and 100. The system provides contextual feedback based on how close the guess is to the correct number, along with a real-time timer, input validation, and manual game reset functionality.

Objective

The objective of this mini project is to demonstrate the integration of backend logic with an interactive and styled frontend. The project aims to improve understanding of web development, input validation, real-time feedback mechanisms, and user interface design using modern technologies.

Features
- Random number generation (1 to 100)
- Real-time feedback: Too far, Getting warmer, Close, Very close, and Correct
- Input validation: restricts alphabets, special characters, and out-of-range numbers
- Responsive timer that starts on page load and stops on game completion
- Manual game restart using a dedicated 'Start New Game' button
- Enhanced user interface with gradient background, modern fonts, and clean layout

Technologies Used

Frontend:
- HTML5 for structure
- CSS3 for styling (using Google Fonts for diverse typography)
- JavaScript for dynamic behavior (timer, input submission, DOM updates)

Backend:
- Python 3.x
- Flask micro web framework

Project Structure

number_guessing_game/
├── app.py                  # Flask server and core game logic
├── templates/
│   └── index.html          # Web page with input, feedback, and buttons
├── static/
│   ├── style.css           # Styling: layout, colors, fonts
│   └── script.js           # Timer, fetch requests, user interaction

Implementation Details

Backend (Flask)
- Handles the logic of the number guessing game.
- Initializes a random number, processes POST requests from frontend.
- Validates input and returns contextual JSON responses.
- Separate route to reset the game.

Frontend
- Styled HTML page with a clean card layout.
- Input captured through a text box and dynamically updated using JavaScript fetch requests.
- Timer implemented with JavaScript setInterval(), stops when correct number is guessed.

Styling
- Light blue background gradient.
- Diverse typography using fonts such as Bree Serif, Poppins, Roboto Mono, and Open Sans.
- Smooth button styles, responsive layout, and clean card design.

How to Run the Project

1. Ensure Python 3.x is installed.

2. Create a virtual environment:

Linux/macOS:
python3 -m venv venv
source venv/bin/activate

Windows:
python -m venv venv
venv\Scripts ctivate

3. Install Flask:
pip install flask

4. Run the app:
python app.py

5. Open your browser and go to:
http://127.0.0.1:5000

Future Enhancements
- Add scoreboard or attempt counter
- Include user authentication to save scores
- Add difficulty levels (easy, medium, hard)
- Integrate sound or animation for feedback

Conclusion
This Number Guessing Game mini project demonstrates core concepts of full-stack web development. It effectively combines logic, interactivity, and styling in a lightweight and engaging application. It serves as a great learning tool and a solid foundation for more advanced projects.
