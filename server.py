from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
import os
from dotenv import load_dotenv
import sqlite3
from datetime import datetime
from zoneinfo import ZoneInfo
import re

load_dotenv()

app = Flask(__name__)
CORS(app)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('EMAIL_USER')
app.config['MAIL_PASSWORD'] = os.getenv('EMAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('EMAIL_USER')


if not app.config['MAIL_USERNAME'] or not app.config['MAIL_PASSWORD']:
    raise ValueError("EMAIL_USER or EMAIL_PASSWORD not set in .env file")

mail = Mail(app)

DB_FILE = 'contacts.db'

def init_db():
    with sqlite3.connect(DB_FILE) as conn:
        c = conn.cursor()
        c.execute('''
            CREATE TABLE IF NOT EXISTS contacts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                email TEXT,
                subject TEXT,
                message TEXT,
                timestamp TIMESTAMP
            )
        ''')
        conn.commit()

init_db()


def current_ist_time():
    return datetime.now(ZoneInfo("Asia/Kolkata")).strftime('%Y-%m-%d %H:%M:%S')

def is_valid_email(email):
    return re.match(r"[^@]+@[^@]+\.[^@]+", email)

@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        data = request.json
        name = data.get('name')
        email = data.get('email')
        subject = data.get('subject')
        message = data.get('message')

        if not all([name, email, subject, message]):
            return jsonify({
                'status': 'error',
                'message': 'All fields are required.'
            }), 400

        if not is_valid_email(email):
            return jsonify({
                'status': 'error',
                'message': 'Please enter a valid email address.'
            }), 400

        timestamp = current_ist_time()

        with sqlite3.connect(DB_FILE) as conn:
            c = conn.cursor()
            c.execute('''
                INSERT INTO contacts (name, email, subject, message, timestamp)
                VALUES (?, ?, ?, ?, ?)
            ''', (name, email, subject, message, timestamp))
            conn.commit()

        msg = Message(
            subject=f"New Contact Form Submission: {subject}",
            recipients=[app.config['MAIL_USERNAME']],
            body=f"""
New message from your portfolio website:

Time (IST): {timestamp}
Name: {name}
Email: {email}
Subject: {subject}

Message:
{message}
            """
        )
        mail.send(msg)

        return jsonify({
            'status': 'success',
            'message': 'Thank you for your message! I will get back to you soon.'
        })

    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({
            'status': 'error',
            'message': 'Failed to send message. Please try again later.'
        }), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'healthy',
        'message': 'Flask server is running'
    })

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)