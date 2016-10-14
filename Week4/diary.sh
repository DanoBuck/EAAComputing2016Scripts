#!/bin/bash

diaryFile=Diary.txt
echo "Diary.sh Script"

read diaryLine

echo $( date ) $diaryLine >> $diaryFile

#echo alternative 'date' $diaryLine >> Diary.txt
