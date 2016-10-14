#!/bin/bash

echo "Diary.sh Script"

read diaryLine

echo $( date ) $diaryLine >> Diary.txt
#echo alternative 'date' $diaryLine >> Diary.txt
