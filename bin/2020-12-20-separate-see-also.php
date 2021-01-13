<?php
/**
 * This should only be run once. It is kept for historical purposes.
 */
die('This script was already run.');

$bookList = glob(__DIR__ . '/../www/data' . '/book-*.json');
foreach ($bookList as $bookPath) {
    if (!$index = json_decode(file_get_contents($bookPath))) {
        throw new Exception("JSON parse failed for book $bookPath: " . json_last_error_msg());
    }

    $bookName = basename($bookPath);

    // loop through each character and each of their chapters
    foreach ($index as $characterId => &$characterInfo) {
        foreach ($characterInfo->chapters as &$chapter) {

            // 1. Trim "<a>Character Name</a> p.123#x2014;" off beginning
            // This is tricky, because sometimes the '#x2014;' dash character occurs 
            // further down in the description, and sometimes the description is very short.
            $dashOffset = strpos($chapter->info, '#x2014;');
            $offsetDiff = ($dashOffset - (strlen($characterId) + strlen($characterInfo->name)));
            
            // only trim if the info matches the pattern
            // "<a class='name' name='Aledrin'>Aledrin</a>, p. 396&#x2014;
            $shouldTrim = strpos($chapter->info, ' p.') < $dashOffset
                && $offsetDiff > 0 
                && $offsetDiff < 50;

            if ($shouldTrim) {
                $chapter->info = substr($chapter->info, $dashOffset + 7);
            }

            // 2. Break "See Also" into separate property
            $parts = preg_split('@<i>See( also)?</i>@', $chapter->info, 2);
            $chapter->info = trim($parts[0]);
            $chapter->seeAlso = trim($parts[1] ?? null);
            
            // 2.1. convert "<a>name</a>; <a>name</a>" list into formatted json object
            $chapter->seeAlso = array_filter(explode('; ', $chapter->seeAlso));
            $chapter->seeAlso = array_map(function($aTag) {
                preg_match('@#[^"\']+@', $aTag, $hrefResults);
                $href = ltrim($hrefResults[0] ?? null, '#');
                $name = rtrim(trim(strip_tags(str_replace('\\', '', $aTag))), '.');

                if (strpos($name, ',')) {
                    [$lastName, $firstName] = explode(',', $name, 2);
                    $name = trim("$firstName $lastName");
                }
                return [
                    'id'   => $href ?: $name,
                    'name' => $name,
                ];
            }, $chapter->seeAlso);

        }
    }

    echo "Saving $bookName\n";
    file_put_contents($bookPath, json_encode($index, JSON_PRETTY_PRINT));
}

echo "Done! ☯";