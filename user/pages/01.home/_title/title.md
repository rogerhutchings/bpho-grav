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

<h1 class="fw1 f3 f2-ns">
  {% include 'svgs/bpho-logo.svg.twig' with { classes: 'pr3 h3' } %}
  The <span class="fw4">British Physics Olympiad</span>
</h1>

<p class="f4 mb4">
  This is where the tag line goes
</p>

<div class="pt2 mb3">
  {% set competitionDates = {
    url: '#_competition-dates',
    text: 'Competition Dates'
  } %}
  {% set pastPapers = {
    url: '/past-papers',
    text: 'Past Papers'
  } %}

  {% include 'partials/button.twig.html' with competitionDates %}
  {% include 'partials/button.twig.html' with pastPapers %}
</div>
