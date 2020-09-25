<?php
foreach (glob(__DIR__ . '/../www/data/book-*') as $book) {
    if (!is_dir($book)) continue;
    $bookIndex = [];
    foreach (glob("$book/*.json") as $file) {
        if (basename($file) === 'index.json') continue;
        $contents = file_get_contents($file);
        $oldHash = md5($contents);
        $contents = preg_replace('@(\\\\n| ){2,}@', ' ', $contents);
        $contents = preg_replace('@\\\\"@', "'", $contents);
        $contents = preg_replace('@<\\\\@', '</', $contents);
        $contents = preg_replace('@//+@', '/', $contents);
        $newHash = md5($contents);
        
        $object = json_decode($contents);
        file_put_contents($file, json_encode($object, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
    }
}
