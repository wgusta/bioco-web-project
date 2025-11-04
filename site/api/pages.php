<?php namespace ProcessWire;

/**
 * ProcessWire API Endpoint - Pages
 * Returns page data as JSON for headless CMS
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

$input = wire('input');
$pages = wire('pages');

$path = $input->get('path', '/');
if($path === '/') {
    $page = $pages->get('/');
} else {
    $page = $pages->get($path);
}

if(!$page->id) {
    http_response_code(404);
    echo json_encode(['error' => 'Page not found']);
    exit;
}

// Build page data
$pageData = [
    'id' => $page->id,
    'title' => $page->title,
    'url' => $page->url,
    'body' => $page->body ? $page->body : '',
];

// Add optional fields
if($page->logo_image) {
    $pageData['logo_image'] = [
        'url' => $page->logo_image->url,
        'description' => $page->logo_image->description,
    ];
}

if($page->hero_image) {
    $pageData['hero_image'] = [
        'url' => $page->hero_image->url,
        'description' => $page->hero_image->description,
    ];
}

if($page->hero_subtitle) {
    $pageData['hero_subtitle'] = $page->hero_subtitle;
}

if($page->sidebar_content) {
    $pageData['sidebar_content'] = $page->sidebar_content;
}

if($page->gallery_images && $page->gallery_images->count()) {
    $pageData['gallery_images'] = [];
    foreach($page->gallery_images as $img) {
        $pageData['gallery_images'][] = [
            'url' => $img->url,
            'description' => $img->description,
        ];
    }
}

if($page->footer_content) {
    $pageData['footer_content'] = $page->footer_content;
}

if($page->css_variant) {
    $pageData['css_variant'] = $page->css_variant;
}

echo json_encode($pageData);
