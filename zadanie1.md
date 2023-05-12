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
![image](https://github.com/MarcineQu/Zadanie1/assets/83167368/c5fd24dc-6aa5-4d31-be93-d0bdd8f20246)

Sprawdzenie ile obraz ma warstw:
docker history e90f7ffaacfb  // to u mnie było id mojego obrazu
![image](https://github.com/MarcineQu/Zadanie1/assets/83167368/f195ab54-4fa6-48e7-a7c3-2e4e87e87e9d)


Screen z przeglądarki:

![image](https://github.com/MarcineQu/Zadanie1/assets/83167368/93edecc9-ba21-4328-8c5f-eeae8df617a2)
