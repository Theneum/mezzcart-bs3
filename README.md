## About
This is a skin or theme for Mezzanine + Cartridge that uses Bootstrap 3.0. I created this because I wanted a simple base BS3 template to build new sites off of. I've tried to remove as much extraneous markup in the templates as possible and to make use of the built in bootstap tags and components where possible. As a result most of the old mezzanine.css overrides are no longer used. There is still many overrides for Cartridge, during checkout especially.

This is currently only Mezzanine pages, product categories and Cartridge product pages and checkout. I haven't dealt with the blog or gallery templates yet.

### Installation

1. Clone this repository in your project path.
2. Add the theme to your settings, making sure it is **before** all Mezzanine / Cartridge apps.

```
	INSTALLED_APPS = (
	    "mezzcart-bs3",
	    "cartridge.shop",
	    "mezzanine.boot",
		...
	)
```
	
3. Customize the theme as desired.