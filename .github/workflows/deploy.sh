
docker pull dongzhiqin/future-telling:latest
docker stop future-telling
docker rm future-telling
docker run --name future-telling -d -p 8081:80 dongzhiqin/future-telling:latest


