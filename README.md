# OST FINDER APP

This is a school project for the 3rd year React course at the ESGI.<br>
The purpose of this application is to exploit 2 APIs:<br>
-   [AniList API](https://anilist.gitbook.io/anilist-apiv2-docs)
-   [Shazam](https://rapidapi.com/apidojo/api/shazam)

Also, CSS is definitely not my specialty, should my button styling, color scheme, etc. make your eyes bleed, I apologize in advance.
<br><br>

## Page 1

This page uses the AniList API.<br>
The left part is a search component that fetches anime with a matching title.<br>
Each member in the list (if not empty) can be clicked, which will display the details of the corresponding anime.
<br><br>

## Page 2

This page exploits the Shazam API, beware as it requires a Rapid API key with a limited number of request.<br>
It is a simple search component with a button to confirm the search criteria (it prevents the app from requesting the API too much by not making suggestions as the user writes in the input field).<br>
A loader should appear as the Shazam API takes some time to fetch data.
<br><br>

## Page 3

This page combines both APIs.<br>
The left part of the page is the same component as in the first page.<br>
However, clicking on an element will now display music titles with a matching name.<br>
<br><br>

### NOTA BENE

As mentioned above the OST Finder actually matches an anime title with a song and may not actually fetch soundtracks used in said anime.<br>
Here are some series that should return OSTs and/or Opening/Ending songs:
<ul>
    <li>Fate/Zero</li>
    <li>Fate/Apocrypha</li>
    <li>Naruto</li>
</ul>