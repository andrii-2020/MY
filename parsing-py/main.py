import requests
from bs4 import BeautifulSoup


def parse():
    URL = 'https://pogoda.interia.pl/prognoza-szczegolowa-szczecin,cId,34668'
    HEADERS = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:81.0) Gecko/20100101 Firefox/81.0'
    }
    response = requests.get(URL, headers=HEADERS)
    soup = BeautifulSoup(response.content, 'html.parser')
    items = soup.find_all('div', class_='weather-currently-middle')
    com = []

    for item in items:
        com.append({
            'day': item.find('span', class_='weather-currently-info-item-date-label', ).get_text(strip=True),
            'time': item.find('span', class_='weather-currently-info-item-time', ).get_text(strip=True),
            'city': item.find('li', class_='weather-currently-icon-description').get_text(strip=True),
            'title': item.find('div', class_='weather-currently-temp-strict').get_text(strip=True),
        })
        for comp in com:
            print(f'{comp["day"]}: {comp["time"]} -- {comp["city"]} -- Stopni: {comp["title"]}')


parse()

