#!/bin/bash

git log --pretty=format:"update: %ar%n note: %s" > update_history_commits.txt 

echo "commit history fetched!"