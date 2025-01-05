<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>Honey  | Turk Fatih Tutak</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="description" content="" />
    <meta name="keywords" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link href="" rel="canonical" />
    <link href="https://turkft.com/public/images/favicon.ico" rel="shortcut icon" type="image/ico" />
    <link href="https://turkft.com/public/images/default-banner.jpg" rel="thumbnail" type="image/jpeg" />
    <meta property="og:site_name" content="" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="" />
    <meta property="og:url" content="" />
    <meta property="og:image" content="https://turkft.com/public/images/default-banner.jpg" />
    <meta property="og:description" content="" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:url" content="" />
    <meta name="twitter:title" content="" />
    <meta name="twitter:description" content="" />
    <meta name="twitter:image" content="https://turkft.com/public/images/default-banner.jpg" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />

    <!-- Link Swiper's CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

    <link rel="stylesheet" href="./dist/css/shop.css" />

</head>

<body>
    <!-- menu start -->
    <?php include 'header.php' ?>
    <!-- menu end -->

    <section class="shop-detail-section">
        <div class="container d-flex flex-row flex-wrap">
            <div class="w-100">
                <a href="./shop" class="d-flex flex-row align-items-center l5 h51 mb-lg-8 mb-4 text-white text-decoration-none">
                    <img src="./dist/img/icon-keyboard-arrow-left-white.svg" class="mr-3" loading="lazy" alt="arrow icon">
                    <span class="h51 text-white"></span>
                    Back to the Shop
                </a>
            </div>
            <div class="left-side">
                <div class="swiper image-swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="w-100">
                                <img src="./dist/img/shop-item-11.jpg" class="w-100" loading="lazy" alt="shop-item">
                            <!--    <div class="swiper-lazy-preloader"></div> -->
                            </div>
                        </div>

                    </div>
                    <div class="d-none d-lg-flex swiper-button swiper-button-prev"><img loading="lazy" src="./dist/img/icon-arrow-left-white.svg" alt="slider-arrow-icon"></div>
                    <div class="d-none d-lg-flex swiper-button swiper-button-next"><img loading="lazy" src="./dist/img/icon-arrow-right-white.svg" alt="slider-arrow-icon"></div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <div class="right-side">
                <div class="d-flex flex-column">
                    <div class="d-flex flex-row justify-content-between align-items-center mb-6 mb-lg-0 mt-5">
                        <p class="h3 font-500 l20 mb-lg-8 mb-0">HONEY (500grams)</p>
                        <p class="d-flex d-lg-none h31 font-500 l10 mb-0">₺1.900</p>
                    </div>
                    <div class="d-flex flex-column mb-8">
                        <p class="h51 font-500 l5 mb-5">Explanation</p>
                        <p class="text-gray l5">From the high altitudes and clean air of Erzincan to the tables of TURK, Karakovan honey... Each plate embodies the freshness and abundance of nature.</p>
                    </div>
                    <div class="d-flex flex-row justify-content-between align-items-center">
                        <p class="d-none d-lg-flex h3 font-500 l10 mb-0">₺1.900</p>
                        <a href="https://iyzi.link/AJsSHA" target="_blank" class="btn btn-small btn-brown px-8 d-flex flex-row align-items-center justify-content-center"><img class="mr-3" src="./dist/img/icon-card-white.svg" loading="lazy" alt=""> Buy Now</a>
                    </div>
                </div>
            </div>
            <div class="more-side d-flex flex-row flex-wrap">
                <p class="h3 l5">EXPLORE MORE PRODUCTS</p>
                <div class="d-flex flex-row flex-wrap mt-4 mt-lg-6 w-100">

                    <!-- item exam -->
                    <div class="shop-item">
                        <div class="content-box d-flex flex-column justify-content-between">
                            <p class="h5 font-500">KNIFE</p>
                            <div class="d-flex flex-row justify-content-between align-items-center">
                                <p class="h31 font-500">₺24.900</p>
                                <a href="https://iyzi.link/AJsSHg" target="_blank" class="add-card"><img src="./dist/img/icon-card-white.svg" alt="add-card"></a>
                            </div>
                        </div>
                        <div class="background-holder opacity-b opacity-b-40">
                            <img src="./dist/img/shop-item-33.jpg" loading="lazy" alt="add-card">
                        </div>
                        <a href="./knife" class="item-link"></a>
                    </div>
                    <div class="shop-item">
                        <div class="content-box d-flex flex-column justify-content-between">
                            <p class="h5 font-500">OLIVE OIL (500ml)</p>
                            <div class="d-flex flex-row justify-content-between align-items-center">
                                <p class="h31 font-500">₺1.490</p>
                                <a href="https://iyzi.link/AJsSHw" target="_blank" class="add-card"><img src="./dist/img/icon-card-white.svg" alt="add-card"></a>
                            </div>
                        </div>
                        <div class="background-holder opacity-b opacity-b-40">
                            <img src="./dist/img/shop-item-22.jpg" loading="lazy" alt="add-card">
                        </div>
                        <a href="./olive-oil" class="item-link"></a>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <div class="footer w-100">
      <?php include "footer.php"; ?>
    </div>

    <!-- Swiper JS -->
    <script id="swiper-js" src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="./src/js/index.min.js"></script>

</body>

</html>
