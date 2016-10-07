#/bin/bash

echo "This is a simple script to create directories"

# delete the directory first
rmdir Week2
# throws an exception if week 2 already exists
mkdir Week2

cd Week2
mkdir subdir1 subdir2 subdir3

#a alternatively
mkdir Week2/subdir1 Week2/subdir2 Week2/subdir3
