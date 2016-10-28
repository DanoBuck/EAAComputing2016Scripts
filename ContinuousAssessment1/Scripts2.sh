#!/bin/bash 

s= ps -ef | grep $1 | wc -l 

echo $( date ) "Process " $1 %s >> /home/eaauser/log.txt 
