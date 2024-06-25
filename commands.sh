#!/bin/bash

# Check if the correct number of arguments are provided
if [ "$#" -ne 2 ]; then
  echo "Usage: $0 <file_name> <commit_message>"
  exit 1
fi

# Assign arguments to variables
FILE_NAME=$1
COMMIT_MESSAGE=$2

# Add the file to the staging area
git add "$FILE_NAME"

# Check if the git add was successful
if [ $? -ne 0 ]; then
  echo "Error: Failed to add file $FILE_NAME"
  exit 1
fi

# Commit the file with the provided commit message
git commit -m "$COMMIT_MESSAGE"

# Check if the git commit was successful
if [ $? -ne 0 ]; then
  echo "Error: Failed to commit changes"
  exit 1
fi

# Push the changes to the remote repository
git push

# Check if the git push was successful
if [ $? -ne 0 ]; then
  echo "Error: Failed to push changes"
  exit 1
fi

echo "File $FILE_NAME successfully added, committed, and pushed."
