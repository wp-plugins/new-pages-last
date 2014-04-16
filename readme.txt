=== New Pages Last ===
Contributors: Ashworth Creative
Tags: admin, hierarchical, manage, menu_order, order, ordering, page, pages, page order, increment, re-order, reorder, order posts, reorder posts
Requires at least: 3.4.2
Tested up to: 3.9
Stable tag: 1.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Automatically sets the order of new pages so that they appear last.

== Description ==

This plugin will automatically increment the order of new pages and hierarchical post types so that they appear after their siblings in menu order. A page's order is also reset if its parent is changed.

To function with custom post types, you must have page attributes enabled, even if the Attributes box is not displayed. Javascript must be enabled for this plugin to work.

== Installation ==

1. Install through the plugins page or upload the contents of `new-pages-last.zip` to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress
1. Add a new page, or edit an existing page and change its parent

== Frequently Asked Questions ==

= Will this plugin affect the order of my existing posts/pages or navigation menus? =

No, saved pages will not have their order changed unless their parent is changed on the edit page. This plugin does not affect navigation menu items.

= Will deleting pages affect page order? =

No, if a page is moved to trash or deleted this plugin will not automatically change the order of its children or siblings. Page order will need to be updated manually or by another plugin.

= Does this plugin work with the "Quick Edit" function? =

No, this plugin does not support inline editing or bulk editing. Changing a page's parent through Quick Edit will not automatically update its order.

= Why won't this plugin work with my custom post type? =

Your post type needs to be hierarchical, and support `page-attributes`. The Attributes box does not need to be displayed, but must be enabled. Javascript must also be enabled for this plugin to work.

== Changelog ==

= 1.0 =
* Initial version