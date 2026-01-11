#!/bin/bash
# Push script for react-impac repository
# Usage: ./push.sh YOUR_GITHUB_TOKEN

TOKEN=$1
if [ -z "$TOKEN" ]; then
    echo "Usage: ./push.sh YOUR_GITHUB_TOKEN"
    echo "Or: ./push.sh USERNAME TOKEN"
    exit 1
fi

if [ -z "$2" ]; then
    # Token only - use syed-ashraf123 as username
    git push --force https://${TOKEN}@github.com/syed-ashraf123/react-impac.git main:master
else
    # Username and token
    USERNAME=$1
    TOKEN=$2
    git push --force https://${USERNAME}:${TOKEN}@github.com/syed-ashraf123/react-impac.git main:master
fi

