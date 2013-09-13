jQuery.jQTheme
==============

Append, detach, and replace CSS!
(Sidenote: I literally made this waiting inbetween classes)

## Usage

    t=$.theme([options], [name]);
    
jQTheme must store its data within a variable, in this case **t**. The parameters **options** and **name** are optional.

**name** is a string or integer to use as a shorthand for a set of themes. Use this if you have multiple jQTheme variables running on a page. This way, jQTheme will not get confused.

**options** must either be an object of the following sort or an array of such objects:

    options={
     name:'Green',
     src:'green.css',
     style:'div#red { color:red; }'
    }
    
* **name** - Names the theme. This will be useful as it is what you will use to call the theme to append, detach, or replace. Should be a string or integer.
* **src** - A URL to load the theme from. This is optional.
* **style** - Additional CSS to add to the page. This is optional (it does not have to be used with src and vice versa).

## Main functions
These are the main functions that will be returned by **$.theme**.

    t.append('Green');
    t.append(['Green', 'Background Image']);
    
* **append** - Creates the CSS and puts it on the page. Use the themes' names to call them. You can also use an array of names to append multiple elements.


    t.detach('Green');
    t.detach(['Green', 'Background Image']);
    
* **detach** - Destroys CSS associated with the name(s) given.


    t.replace('Green', 'Pink');
    t.replace(['Green', 'BG Image - Green'], ['Pink', 'BG Image - Pink']);
    t.replace('Green', ['Pink', 'Background Image']);
    
* **replace** - Detaches the first parameter and appends the second.


    t.addTheme({name:'Pink', style:'body{background-color:#cc0055}'});
    t.addTheme([{name:'Pink', style:'body{background-color:#cc0055}'}, {name:'Blue', src:'blue.css'}]);
    
* **addTheme** - Add themes to your existing repertoire.

## Behind the scenes functions and variables
These are functions and variables that I don't suggest you use, but, if you decide to edit jQTheme, you should understand what they do and how to do it.

* **ids** - This is an array of integers. The integers correspond to active CSS. Each CSS has a data-identification defined with its ID number.
* **themes** - Array of your theme objects.
* **name** - The name of the theme set. If a name was not chosen, it returns undefined.


    t.construct({name:'Pink', style:'body{background-color:#cc0055}'});

* **construct** - Constucts the CSS elements based on the theme element. Do not use this indepently from **append** as it will become difficult to **detach** and **replace**.


    t.retThNa('Pink');
    
* **retThNa** - Searches for a registered theme object based on its name and returns the theme object. The name is from "**ret**urn **Th**rough **Na**me."

## License: Public Domain
Please don't rename it or change credit away from me, James Anthony Bruno, because that would make me sad. It is fine, however, to make changes to jQAV's core to suit your needs for use in your products (whether commercial, personal, or non-profit). If you believe you've found a better way for jQAV to work, go ahead and message me and let me know! I would love to implement your fix.
