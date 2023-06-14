from telebot import TeleBot
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)
bot_token = '6231927872:AAEJP7VLniSrRUJHA9g1U9deqxSkDJNUDzk'  # Замените на ваш токен бота
bot = TeleBot(bot_token)

def send_message_to_telegram(name, phone, email, message):
    chat_id = '599486116'  # Замените на ваш Chat ID
    text = f'Имя: {name}\nТелефон: {phone}\nEmail: {email}\nСообщение: {message}'
    bot.send_message(chat_id, text)


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/contact', methods=['POST'])
def contact():
    name = request.form.get('name')
    phone = request.form.get('phone')
    email = request.form.get('email')
    message = request.form.get('message')


    send_message_to_telegram(name, phone, email, message)

    return jsonify({'success': True})

if __name__ == '__main__':
    bot.remove_webhook()
    bot.polling()