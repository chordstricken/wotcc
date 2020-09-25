#!/bin/bash

cd $(dirname $0)/../;
aws-sm s3 sync --delete ./www s3://wheeloftime.silvermast.io/

PATHS_TO_INVALIDATE='/index.html /res/* /data/*'

# E1IQN1E4JD6ZW1
aws-sm cloudfront create-invalidation --distribution-id E1IQN1E4JD6ZW1 --paths "$PATHS_TO_INVALIDATE"
