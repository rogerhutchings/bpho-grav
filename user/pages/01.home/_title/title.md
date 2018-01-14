---
twig_first: true
jump:
  enabled: true
  target: _intro
date: '10:56 28-09-2017'
title: Title
process:
  twig: true
  markdown: false
---

<h1 class="fw1 mb4">
  <div class="f5 mb2">Welcome to the</div>
  {% include 'svgs/bpho-logo.svg.twig' with { classes: 'pr3 h2' } %}
  <span class="fw4 f4 f3-ns">British Physics Olympiad</span>
</h1>

<p class="f5 mb4 measure center">
  We work to encourage the study of physics and recognise excellence in young physicists through four annual physics competitions. Why not take the challenge!
</p>

<div class="pt2 mb3">
  {% set competitionDates = {
    url: '#_competition-dates',
    text: 'Competition Dates',
    hoverColor: 'dark-blue'
  } %}
  {% set pastPapers = {
    url: '/past-papers',
    text: 'Past Papers'
  } %}

  {% include 'partials/button.twig.html' with competitionDates %}
  {% include 'partials/button.twig.html' with pastPapers %}
</div>
