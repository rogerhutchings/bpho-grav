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
  {% include 'partials/button.twig.html' with {
    url: '#_competition-dates',
    text: 'Competition Dates',
    icon: 'fa-calendar-alt'
  } %}

  {% include 'partials/button.twig.html' with {
    url: '/past-papers',
    text: 'Past Papers',
    icon: 'fa-file-alt'
  } %}

  {% include 'partials/button.twig.html' with {
    url: '/enter-online',
    text: 'Enter Online',
    icon: 'fa-trophy',
    inverse: true
  } %}
</div>
