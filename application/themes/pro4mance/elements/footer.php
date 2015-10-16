<?php defined('C5_EXECUTE') or die("Access Denied.");

$footerSiteTitle = new GlobalArea('Footer Site Title');
$footerSocial = new GlobalArea('Footer Social');
$footerSiteTitleBlocks = $footerSiteTitle->getTotalBlocksInArea();
$footerSocialBlocks = $footerSocial->getTotalBlocksInArea();
$displayFirstSection = $footerSiteTitleBlocks > 0 || $footerSocialBlocks > 0 || $c->isEditMode();

?>

<footer id="footer-theme">
    <section>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <?php
                $a = new GlobalArea('Footer Legal');
                $a->display();
                ?>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3">
            <?php
            $a = new GlobalArea('Footer Main Navigation');
            $a->display();
            ?>
            </div>
            <div class="col-sm-3">
                <?php
                $a = new GlobalArea('Footer Sub Navigation');
                $a->display();
                ?>
                <?php echo Core::make('helper/navigation')->getLogInOutLink()?>
            </div>
            <div class="col-sm-6">
                <?php
                $a = new GlobalArea('Footer Social');
                $a->display();
                ?>
            </div>
        </div>
    </div>
    </section>
</footer>


<?php $this->inc('elements/footer_bottom.php');?>
