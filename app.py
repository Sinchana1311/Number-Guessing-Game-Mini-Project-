from flask import Flask, render_template, request, jsonify
import random

app = Flask(__name__)
number_to_guess = random.randint(1, 100)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/guess', methods=['POST'])
def guess():
    global number_to_guess
    user_input = request.form['guess']

    if not user_input.isdigit():
        return jsonify({'message': 'Invalid input! Please enter an integer between 1 and 100.', 'status': 'invalid'})

    user_guess = int(user_input)

    if user_guess < 1 or user_guess > 100:
        return jsonify({'message': 'Guess must be between 1 and 100.', 'status': 'invalid'})

    diff = abs(user_guess - number_to_guess)

    if user_guess == number_to_guess:
        return jsonify({'message': 'Correct! You guessed the number.', 'status': 'correct'})

    if diff <= 5:
        return jsonify({'message': 'Very close! Try again.', 'status': 'very_close'})
    elif diff <= 10:
        return jsonify({'message': 'Close! You\'re within 10.', 'status': 'close'})
    elif diff <= 20:
        return jsonify({'message': 'Getting warmer. Keep trying.', 'status': 'warm'})
    else:
        return jsonify({'message': 'Too far! Try a different range.', 'status': 'far'})

@app.route('/reset', methods=['POST'])
def reset():
    global number_to_guess
    number_to_guess = random.randint(1, 100)
    return jsonify({'message': 'New game started.'})

if __name__ == '__main__':
    app.run(debug=True)
