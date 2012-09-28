<?php
/* Plugin Name: New Pages Last
 * Description: Automatically sets the order of new pages so that they appear last.
 * Author: Ashworth Creative
 * Author URI: http://ashworthcreative.com/
 * Version: 1.0
 */

function __new_pages_last() {
  wp_enqueue_script("new-pages-last", plugins_url('', __FILE__) . '/new-pages-last.js');
}

add_action('admin_init', '__new_pages_last');
?>