<?php
// Function to recursively scan a directory for images
function getImagesFromFolder($folder) {
    $images = [];
    $files = scandir($folder);

    foreach ($files as $file) {
        if ($file === '.' || $file === '..') {
            continue; // Skip current and parent directory markers
        }

        $filePath = $folder . DIRECTORY_SEPARATOR . $file;

        if (is_dir($filePath)) {
            // Recursively scan subdirectories
            $images = array_merge($images, getImagesFromFolder($filePath));
        } elseif (preg_match('/\.(jpg|jpeg|png|gif)$/i', $file)) {
            // Add image file paths to the list
            $images[] = $filePath;
        }
    }

    return $images;
}

// Define the root folder containing images
$rootFolder = __DIR__ .'img'; // Adjust this path if necessary

// Get all images recursively
$imageList = getImagesFromFolder($rootFolder);

// Return the image list as JSON
header('Content-Type: application/json');
echo json_encode($imageList);
?>

