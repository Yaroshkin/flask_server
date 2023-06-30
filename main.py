import requests
from telebot import TeleBot
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)
bot_token = '6231927872:AAEJP7VLniSrRUJHA9g1U9deqxSkDJNUDzk'  # Замените на ваш токен бота
bot = TeleBot(bot_token)

visits = set()  # Множество для хранения уникальных IP-адресов посетителей

def send_message_to_telegram(name, phone, email, message):
    chat_id = '-901537214'  # Замените на ваш Chat ID
    text = f'Имя: {name}\nТелефон: {phone}\nEmail: {email}\nСообщение: {message}'
    bot.send_message(chat_id, text)

def get_external_ip():
    try:
        response = requests.get('https://api.ipify.org?format=json')
        if response.status_code == 200:
            data = response.json()
            external_ip = data['ip']
            return external_ip
        else:
            print('Failed to retrieve external IP')
    except requests.exceptions.RequestException as e:
        print('Error: ', e)

@app.route('/')
def home():
    global visits
    ip_address = get_external_ip()  # Получаем внешний IP-адрес текущего посетителя

    if ip_address not in visits:
        visits.add(ip_address)  # Добавляем нового посетителя в множество

        with open('ip_addresses.txt', 'a') as file:
            file.write(ip_address + '\n')  # Сохраняем IP-адрес в файл

    return render_template('index.html', visits=len(visits))

@app.route('/contact', methods=['POST'])
def contact():
    name = request.form.get('name')
    phone = request.form.get('phone')
    email = request.form.get('email')
    message = request.form.get('message')

    send_message_to_telegram(name, phone, email, message)

    return jsonify({'success': True})

@app.route('/get_ip_addresses')
def get_ip_addresses():
    with open('ip_addresses.txt', 'r') as file:
        ip_addresses = file.read()
    return ip_addresses


if __name__ == '__main__':
    bot.remove_webhook()
    app.run()
