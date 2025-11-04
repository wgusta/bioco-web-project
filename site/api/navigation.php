<?php namespace ProcessWire;

/**
 * ProcessWire API Endpoint - Navigation
 * Returns navigation items as JSON
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

$pages = wire('pages');
$home = $pages->get('/');

$navigation = [];

if($home->children->count()) {
    foreach($home->children as $child) {
        $navigation[] = [
            'id' => $child->id,
            'title' => $child->title,
            'url' => $child->url,
        ];
    }
}

echo json_encode($navigation);
