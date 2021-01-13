#!/bin/bash
cd $(dirname $0)
ls -1 ../www/data/book-*.json | xargs -I % sh -c 'jq . % >/dev/null || echo "% Contains Invalid JSON"'
