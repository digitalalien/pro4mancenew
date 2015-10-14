<?php
defined('C5_EXECUTE') or die("Access Denied.");
$this->inc('elements/header.php'); ?>

<main>
<?php
$a = new Area('Main');
$a->enableGridContainer();
$a->display($c);
?>
<span class="anchor" id="aboutus"></span>
<div class="bg-primary">
<?php
$a = new Area('Intro');
$a->enableGridContainer();
$a->display($c);
?>
</div>

<span class="anchor" id="services"></span>
<div class="bg-secondary">
<?php
$a = new Area('Services');
$a->enableGridContainer();
$a->display($c);
?>
</div>

<span class="anchor" id="testimonials"></span>
<div class="testimonials">
<?php
$a = new Area('testimonials');
$a->enableGridContainer();
$a->display($c);
?>
</div>
    
<span class="anchor" id="contact"></span>
<div class="bg-secondary contact">
<?php
$a = new Area('contact');
$a->enableGridContainer();
$a->display($c);
?>
</div>
    
<?php
$a = new Area('Page Footer');
$a->enableGridContainer();
$a->display($c);
?>

</main>

<?php  $this->inc('elements/footer.php'); ?>
