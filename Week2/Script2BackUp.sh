#/bin/bash

echo "Backup Script"
echo "$date"
# delete the directory first if it exists
rmdir /home/eaauser/Backup_$date
# throws an exception if Backup already exists
mkdir /home/eaauser/Backup_$date

cp -avr /home/eaauser/Documents /home/eaauser/Backup_$date

echo "Documents are now backed up"

