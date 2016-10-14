#!/bin/bash

# Piping | the most powerful linux command - takes input from one command and gives it to another linux command
ps -ef | grep mySql

# What this command achieves: 
	# ps displays information about a selection of the active process i.e. mySql
	# grep is like seraching for a string
	# all running processes
	# grep mySql - seraches for word macthing mySql
	# Togeteher: lists all the running processes and searches for the process that 		contains mySql string
	# Useful to see what process is running

# Output: eaauser   3082  3050  0 10:15 pts/1    00:00:00 grep --color=auto mySql

# e.g. ls | more - shows files 
