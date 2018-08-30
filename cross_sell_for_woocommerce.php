<?php
/*
* Script to display cross sell products for single product.
* It's made for Wordpress with Woocommerce dedicated project.
* Author: Krzysztof Malec
* Email: max@bluestudio.pl
*/


// display crosssell products
function display_cross_sell_products(){
  // get post meta with cross sell products id'
  $crosssell_ids = get_post_meta( get_the_ID(), '_crosssell_ids' )[0];

  // if have ids go forward
  if($crosssell_ids){
    // set up list for display
    foreach($crosssell_ids as $crosssell_single){
      $productsCrossell .= ",".$crosssell_single;
    }

    // set up WooCommerce shortcode
    $productShortcode = do_shortcode('[products ids="'.ltrim($productsCrossell, ",").'"]');

    // set up replacement for WooCommerce component
    $toReplace = array(' medium-6 xmedium-4 large-4 xlarge-3', 'woocommerce columns-4 ');
    $replacement = array('','product-cross-sell__carusel');
    
    // replace 
    $crossSellDisplay = str_replace($toReplace, $replacement ,$productShortcode);

    // print resoults
    echo "
      <section class='product-cross-sell'>
        <h2 class='style-02'>".__('Meer deals','like')."</h2>
        ".$crossSellDisplay."
      </section>
    ";
  }

}