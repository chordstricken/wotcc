<?php
foreach (glob(__DIR__ . '/../www/data/book-*') as $book) {
    if (!is_dir($book)) continue;
    $bookIndex = [];
    foreach (glob("$book/*.json") as $file) {
        if (basename($file) === 'index.json') continue;
        $contents = file_get_contents($file);
        $object = json_decode($contents);
        $bookIndex[$object->id] = $object;
    }
    file_put_contents("{$book}.json", json_encode($bookIndex, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
}
