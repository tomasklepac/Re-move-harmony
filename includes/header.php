<!-- includes/header.php -->
<!DOCTYPE html>
<html lang="cs">
<head>
    <?php include 'includes/meta.php'; ?>
</head>
<body>
<?php $currentPage = basename($_SERVER['PHP_SELF'], '.php'); ?>
<header class="navbar" role="banner">
    <div class="container nav-container">
        <a href="index.php" class="logo" aria-label="Re-Move Harmony logo">
            <img src="assets/img/logo/logo_clear_modre.png" alt="Re-Move Harmony Logo" width="1408" height="736" loading="eager" decoding="async" fetchpriority="high">
        </a>
        <nav class="nav-menu" aria-label="Hlavní navigace">
            <a href="index.php" class="<?php echo $currentPage === 'index' ? 'active' : ''; ?>">Domů</a>
            <a href="services.php" class="<?php echo $currentPage === 'services' ? 'active' : ''; ?>">Služby</a>
            <a href="team.php" class="<?php echo $currentPage === 'team' ? 'active' : ''; ?>">Tým</a>
            <a href="gallery.php" class="<?php echo $currentPage === 'gallery' ? 'active' : ''; ?>">Fotogalerie</a>
            <a href="reservation.php" class="<?php echo $currentPage === 'reservation' ? 'active' : ''; ?>">Rezervace</a>
            <a href="contact.php" class="<?php echo $currentPage === 'contact' ? 'active' : ''; ?>">Kontakt</a>
        </nav>
        <button class="burger" id="burger" aria-label="Menu" type="button" aria-expanded="false">
            <span></span><span></span><span></span>
        </button>
    </div>
</header>
<main id="main-content" role="main">
