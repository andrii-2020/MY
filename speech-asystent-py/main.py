import time
import speech_recognition as sr
from datetime import datetime
import webbrowser
import os
import pyttsx3

now = datetime.now()
d = str(now.strftime("%H:%M:%S"))
data = []
data.append({'data': d})

hi = "Привет чем могу помочь"
s = "Скажите вашу команду: "


def listen_command():
    r = sr.Recognizer()
    m = sr.Microphone(device_index=1)
    with m as source:
        r.adjust_for_ambient_noise(source)
        say_message(hi)
        time.sleep(0.1)
        # say_message(s)
        audio = r.listen(source)

    try:
        our_speech = r.recognize_google(audio, language="ru-RU")
        print("Вы сказали: " + our_speech)
        return our_speech
    except sr.UnknownValueError:
        return "ошыбка"
    except sr.RequestError:
        return "ошыбка"


def do_this_command(message):
    message = message.lower()
    if "привет" in message:
        say_message("Привет чо нада!")
    elif "папа" in message:
        say_message("Пака!")
        exit()
    elif "какой час" in message:
        for t in data:
            print(f'{t["data"]}')
            say_message(f'{t["data"]}!')
    elif "интернет" in message:
        say_message("ван моменто")
        webbrowser.open("http://google.com", new=1)
    elif "открой" in message:
        say_message("Будемо кодыти!")
        os.startfile(r'"D:\idea\ideaIU-2020.1.windows\bin\idea64.exe"')

    else:
        say_message("Я такого не знаю!")


def say_message(message):
    speak_engine.say(message)
    speak_engine.runAndWait()
    print("Голосовой ассистент: " + message)


speak_engine = pyttsx3.init()

voices = speak_engine.getProperty('voices')
speak_engine.setProperty('voice', voices[0].id)

if __name__ == '__main__':
    while True:
        command = listen_command()
        do_this_command(command)
