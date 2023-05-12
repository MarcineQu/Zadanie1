# Zadanie1
**Plik  index.js:**
![image](https://github.com/MarcineQu/Zadanie1/assets/83167368/8fa4cac5-cdfc-4745-8618-4220c9527398)
**Plik Dockerfile:**
![image](https://github.com/MarcineQu/Zadanie1/assets/83167368/668bdbcd-afa2-4d80-93cc-3947bdbabf58)
Polecenie do zbudowania:
docker build -t zadanie1 . // będąc w katalogu z plikiem Dockerfile, index.js i package.json

Uruchomienie kontenera na podstawie obrazu zadanie1:
docker run -d -p 8080:3000 --name zadanie zadanie1

W konsoli podczas włączenia kontenera pokazuję się komunikat:
![image](https://github.com/MarcineQu/Zadanie1/assets/83167368/3438aafe-839c-41df-a4f3-aa985e9cc58e)

Sprawdzenie ile obraz ma warstw:
docker history zadanie1
![image](https://github.com/MarcineQu/Zadanie1/assets/83167368/af0f40d7-e804-4bc3-8ff0-5871a0a02875)

Screen z przeglądarki:
![image](https://github.com/MarcineQu/Zadanie1/assets/83167368/93edecc9-ba21-4328-8c5f-eeae8df617a2)
