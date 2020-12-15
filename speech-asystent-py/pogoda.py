import requests
from bs4 import BeautifulSoup

com = []
dni = []


def parse():
    URL = 'https://pogoda.interia.pl/prognoza-szczegolowa-szczecin,cId,34668'
    HEADERS = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:81.0) Gecko/20100101 Firefox/81.0'
    }
    response = requests.get(URL, headers=HEADERS)
    soup = BeautifulSoup(response.content, 'html.parser')
    items = soup.find_all('div', class_='weather-currently-middle')
    itemss = soup.find_all('div', class_='weather-forecast-hbh-main-list')

    for item in items:
        com.append({
            'day': item.find('span', class_='weather-currently-info-item-date-label', ).get_text(strip=True),
            'time': item.find('span', class_='weather-currently-info-item-time', ).get_text(strip=True),
            'city': item.find('li', class_='weather-currently-icon-description').get_text(strip=True),
            'title': item.find('div', class_='weather-currently-temp-strict').get_text(strip=True),
        })

    for ite in itemss:
        dni.append({
            'dis': ite.find('span', class_='weather-forecast-hbh-day-labelRight').get_text(strip=True),
            'godzina': ite.find('span', class_='hour').get_text(strip=True),
            'minute': ite.find('span', class_='minutes').get_text(strip=True),
            'po': ite.find('span', class_='forecast-phrase').get_text(strip=True),
            'c': ite.find('span', class_='forecast-temp').get_text(strip=True),
            'ad': ite.find('span', class_='forecast-feeltemp').get_text(strip=True),
        })


parse()
