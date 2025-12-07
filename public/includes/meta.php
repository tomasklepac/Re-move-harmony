<!-- includes/meta.php -->
<?php
function rh_esc($value): string
{
    return htmlspecialchars($value ?? '', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

$defaultTitle = 'Re-Move Harmony | Masáže, relaxační a pohybové terapie Plzeň';
$defaultDescription = 'Re-Move Harmony - masáže, relaxační a pohybové terapie v Plzni. Pomůžeme vám vrátit tělu i mysli lehkost a rovnováhu.';

$scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
$host = $_SERVER['HTTP_HOST'] ?? 'localhost';
$baseUrl = $baseUrl ?? ($scheme . '://' . $host);
$scriptDir = rtrim(dirname($_SERVER['SCRIPT_NAME'] ?? ''), '/\\');
$pathPrefix = ($scriptDir === '' || $scriptDir === '/') ? '' : ltrim($scriptDir, '/');
$assetPrefix = $pathPrefix === '' ? '' : $pathPrefix . '/';
$siteUrl = rtrim($baseUrl . ($pathPrefix === '' ? '' : '/' . $pathPrefix), '/');
$requestUri = $_SERVER['REQUEST_URI'] ?? '/';
$currentUrl = $currentUrl ?? ($baseUrl . $requestUri);
$currentUrlNoQuery = strtok($currentUrl, '?');
$ogImage = $ogImage ?? rtrim($baseUrl, '/') . '/' . $assetPrefix . 'assets/img/team/maseri_sirka.jpeg';
if (!preg_match('#^https?://#', $ogImage)) {
    $ogImage = rtrim($baseUrl, '/') . '/' . $assetPrefix . ltrim($ogImage, '/');
}

$pageTitle = $pageTitle ?? $defaultTitle;
$pageDescription = $pageDescription ?? $defaultDescription;
?>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="<?php echo rh_esc($pageDescription); ?>">
<meta name="author" content="Tomáš Klepač">
<meta name="theme-color" content="#3D7077">
<meta name="robots" content="index,follow">
<link rel="canonical" href="<?php echo rh_esc($currentUrlNoQuery); ?>">
<title><?php echo rh_esc($pageTitle); ?></title>

<meta property="og:title" content="<?php echo rh_esc($pageTitle); ?>">
<meta property="og:description" content="<?php echo rh_esc($pageDescription); ?>">
<meta property="og:type" content="website">
<meta property="og:url" content="<?php echo rh_esc($currentUrlNoQuery); ?>">
<meta property="og:image" content="<?php echo rh_esc($ogImage); ?>">
<meta property="og:site_name" content="Re-Move Harmony">
<meta property="og:locale" content="cs_CZ">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="<?php echo rh_esc($pageTitle); ?>">
<meta name="twitter:description" content="<?php echo rh_esc($pageDescription); ?>">
<meta name="twitter:image" content="<?php echo rh_esc($ogImage); ?>">

<link rel="icon" type="image/png" sizes="32x32" href="<?php echo rh_esc($assetPrefix); ?>assets/img/logo/favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="<?php echo rh_esc($assetPrefix); ?>assets/img/logo/apple-touch-icon.png">
<link rel="manifest" href="<?php echo rh_esc($assetPrefix); ?>site.webmanifest">
<link rel="shortcut icon" href="<?php echo rh_esc($assetPrefix); ?>favicon.ico">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>
<link rel="preload" href="<?php echo rh_esc($assetPrefix); ?>assets/css/style.css" as="style">
<link rel="preload" href="<?php echo rh_esc($assetPrefix); ?>assets/css/responsive.css" as="style" onload="this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="<?php echo rh_esc($assetPrefix); ?>assets/css/responsive.css"></noscript>
<link rel="preload" as="image" href="<?php echo rh_esc($assetPrefix); ?>assets/img/hero/interier_1.jpeg" imagesrcset="<?php echo rh_esc($assetPrefix); ?>assets/img/hero/interier_1.jpeg">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Libre+Baskerville:wght@400;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">

<!-- Font Awesome (non-blocking load) -->
<link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" as="style" crossorigin onload="this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"></noscript>

<!-- Styles -->
<link rel="stylesheet" href="assets/css/style.css">
<link rel="stylesheet" href="assets/css/responsive.css" media="(max-width: 1024px)">

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Re-Move Harmony",
  "image": "<?php echo rh_esc($ogImage); ?>",
  "url": "<?php echo rh_esc($siteUrl); ?>",
  "telephone": "+420 732 912 705",
  "email": "info@re-moveharmony.cz",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Tylova 2814/68",
    "addressLocality": "Plzeň",
    "postalCode": "301 00",
    "addressCountry": "CZ"
  },
  "priceRange": "$$",
  "openingHoursSpecification": [
    {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday"], "opens": "08:00", "closes": "15:30"},
    {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday"], "opens": "10:00", "closes": "18:00"},
    {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Wednesday"], "opens": "17:00", "closes": "20:00"},
    {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Thursday"], "opens": "08:00", "closes": "14:30"},
    {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Friday"], "opens": "08:00", "closes": "18:00"},
    {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday", "Sunday"], "opens": "00:00", "closes": "00:00", "description": "Zavřeno"}
  ],
  "sameAs": [
    "https://www.instagram.com/re_move_harmony/",
    "https://www.reservio.cz/b/re-move-harmony"
  ]
}
</script>
