---
title: 'Animeo'
description: 'A stremio addon that allows users to sync their progress to Anilist'
image: 'https://source.unsplash.com/3iTRMP8Uq2k'
technologies: ['node', 'other']
repo: 'https://github.com/Jenrykster/animeo'
link: https://7a625ac658ec-animeo.baby-beamup.club/configure
layout: '../../layouts/ProjectLayout.astro'
---

## An addon for [stremio](www.stremio.com)
I've been using stremio for some years now and I've been pretty much completely satisfied by it's set of features. But still, something was lacking... and I knew exactly what it was.

**anime tracking**

Don't you guys love seeing how much time you've wasted in your lives ? Up to the time of this writing I've spent an equivalent of 41.9 days watching anime.

But to keep this data accurate I need to keep updating the tracker service somehow. Doing it manually is way too tedious and error-prone. That's why I prefer automating stuff.

## But how ?

Well, seeing how there wasn't any similar project on the addon catalog I knew there wasn't an obvious way of achieving my objective. By that I mean that the stremio addon toolkit doesn't provide any kind of API that allows you to manipulate the users watchlist. 

But even so, after hacking my way through the documentation I discovered that I could pretty much do the same using the API calls related to subtitles.

## Did it work ?

Yes, kind of and not really. 

I've been using it for almost a month now and while it's been working as intended it's still somewhat unreliable and may add random stuff on your profile sometimes.

If you want to know more about this problems and the code itself here's the [repo](https://github.com/Jenrykster/animeo).

Thanks for reading, and have a nice day.