**Docker scount:**
![image](https://github.com/MarcineQu/Zadanie1/assets/83167368/33437333-6a96-4ed6-b8f4-3c2dc9af7024)

**3.Zbudowałem mój obraz na 2 architektury, bo na trzecią coś nie działało, bardzo długo ładowało, poniżej wklejam zrzut ekranu:**
Polecenie budowania: docker buildx build -t docker.io/marcinequ/lab:zadanie1 --platform linux/amd64,linux/arm64/v8 --push . 
![image](https://github.com/MarcineQu/Zadanie1/assets/83167368/50308ddf-05f7-47cc-820f-7ecdb056f4a5)

**Z 3cią archtekturą:**
![image](https://github.com/MarcineQu/Zadanie1/assets/83167368/d5757475-cd57-4383-9e95-792947e47e69)

**Uruchomienie obrazu z repo dockerhub:**
![image](https://github.com/MarcineQu/Zadanie1/assets/83167368/ccd4a480-e985-4444-8263-fc3d1ba5b757)
