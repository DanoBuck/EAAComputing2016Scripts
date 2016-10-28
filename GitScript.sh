#!/bin/bash

git status

git add -A

git commit -m "$1 $2 $3"

git push origin master
