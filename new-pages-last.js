jQuery(window).load(function() {
  
  function __new_pages_last(parent_elem, order_elem) {
    var parent = jQuery('option', parent_elem).eq(parent_elem.selectedIndex);
        
    // Page has no parent, put after all pages with no parent
    if (!jQuery(parent).attr('class')) {
      jQuery(order_elem).val(jQuery('.level-0', parent_elem).length + 1);
    }
    
    // Page has parent, put after its siblings
    else {
      var this_level = parseInt(jQuery(parent).attr('class').split('-')[1]);
      var prev_level = this_level == 0 ? 0 : this_level - 1;
      var siblings   = jQuery(parent).nextUntil('.level-' + prev_level).filter('.level-' + (this_level + 1));
      jQuery(order_elem).val(siblings.length + 1);
    }
  }
  
  // Is this a hierarchical post type with page attributes?
  if (jQuery('#parent_id').length > 0) {
    
    jQuery('#parent_id')
      .bind('change input keypress', function() {
        __new_pages_last(this, '#menu_order');
      });
      
    // Page needs its order updated
    if (jQuery('#menu_order').val() == '0' && jQuery('body').hasClass('post-new-php')) {
      jQuery('#parent_id').trigger('change');
    }
  }
  
  // This is the first page of this type
  else if (jQuery('#menu_order').length > 0) {
    jQuery('#menu_order').val(1);
  }
});