---
layout: post
title: How to setup a LAMP stack on Ubuntu 14.04 and above for local development
---

Setting up a LAMP(Linux Apache MySQL PHP) stack on Ubuntu for development purposes was maybe a little harder than I thought.In Windows you can use the WampServer installer but in Ubuntu it was a different story.I ran into lots of permission issues and couldnt get the server up.I couldn't find up to date information on the internet.So I decided to blog about it.

The first step is to make sure that our Ubuntu machine is upto date.

So open up the terminal(Ctrl+Alt+t) and run

```
sudo apt-get update
```

Now to install LAMP Server , run

```
sudo apt-get install lamp-server^
```

Type the root password wherever required.

This will install all of the packages and modules required for a local web server.

Setup a password for the root MySQL user.

Test your installation by going to [http://localhost/](http://localhost/).You should get an Apache success screen.

To test PHP , execute

```
sudo touch /var/www/html/info.php
```

```
sudo nano /var/www/html/info.php
```

If you are not familiar with nano,you can replace it gedit.

Type

```
<?php phpinfo(); ?>
```

and save the file.Then navigate to http://localhost/info.php .You should see the phpinfo screen.Now execute

```
sudo /usr/bin/mysql_secure_installation
```

You already set up a password for MySQL , so there no need to change it.Select yes for the rest.

Now comes the interesting part , dealing with permissions.

In earlier versions of Apache the files had to be placed in `/var/www/` but in the new version the files for the server have to be placed in `/var/www/html`.

To grant Apache access to the html directory:

```
sudo chown -R www-data:www-data /var/www/.
```

Then we need to add ourselves to apache's group.

```
sudo usermod -a -G www-data YOURUSERNAME
```

You should use your user name.You can use `whoami` command to find your username.

In order for the previous command to take effect , you need to **log in and log out**.

To grant read/write/execute permissions for the apache group:

```
sudo chmod -R 775 /var/www/.
```

If you still face permission issues:

```
sudo chown -R www-data:www-data /var/www/.
```

