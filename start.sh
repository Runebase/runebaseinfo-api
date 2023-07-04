#!/bin/bash -l

cd /home/bago/runebaseinfo-api
/usr/bin/screen -X -S api quit
/usr/bin/screen -dmS api
/usr/bin/screen -S api -p 0 -X stuff "bash $(printf \\r)"
sleep 10
/usr/bin/screen -S api -p 0 -X stuff "nvm use 12 $(printf \\r)"
sleep 10
/usr/bin/screen -S api -p 0 -X stuff "npm start $(printf \\r)"
