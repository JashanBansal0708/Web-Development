# HTML cheatsheet
>Basic Format of page
```
<!DOCTYPE html>
<html>
  <head>
    <!-- metadata elements -->
  </head>
  <body>
    <!-- page contents -->
  </body>
</html>
```

> <h1>Jashan</h1>

> <h2>Jashan</h1>

> <p>Jashan</p>

> <!--      -->

> header, footer, nav, video, article, section
  These are more descriptive tags. Good for SEO. Easier to read

> <img src="https://www.your-image-source.com/your-image.jpg" alt="Author standing on a beach with two thumbs up.">

> <a href="https://jashanbansal.org">this links to jashanbansal.org</a>
  target= "_blank"

> <a href="#contacts-header">Contacts</a> <>and <h2 id="contacts-header">Contacts</h2>

> <p>Here's a <a target="_blank" href="http://hello.org"> link to hello.org</a> for you to follow.</p>

> <a href="#">Dead Link, to our site before we know where it actually links </a>

> <a href="#"><img src="https://bit.ly/fcc-running-cats" alt="Three kittens running towards the camera."></a>
  Image as a link

> Unordered bulleted list
```
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

>Ordered List
```
<ol>
  <li>Garfield</li>
  <li>Sylvester</li>
</ol>
```

>Form:
```
<form action="/url-where-you-want-to-submit-form-data">
    <input type="text" placeholder="this is placeholder text" required >
    <label for="indoor"> <input id="indoor" type="radio" name="indoor-outdoor" checked>Indoor </label>
    <label for="indoor"> <input id="outdoor" type="radio" name="indoor-outdoor">Outdoor </label>
    <button type="submit">this button submits the form</button>
</form>

> <div> ........ </div>

