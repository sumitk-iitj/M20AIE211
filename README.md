Maintained By Amar Kumar(M20AIE211)

1) Setup CE Docker in ubuntu 18.04:


	-sudo apt-get update
	-curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
	-sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
	-sudo apt-get install docker-ce
2) Once docker is installed we can user basic commands like , docker ps (shows running container), docker images (shows build images) docker run ( to run the container from image)
3) Build the nodejs app image using the below command.
   docker build -t webappimg:1.0 .
4) Run the docker image using below command:

   docker run --name webapp -p 2000:2000 webappimg

This will run the nodejs app inside the container webapp on port 2000. If host is communication with vm then we have to run below command to access the app.


http://<vm1_IP(where container is running)>:2000/

e.g http://192.168.56.101:2000/

this will popup the main static page which having the docker setup details for ubuntu 18.04.


