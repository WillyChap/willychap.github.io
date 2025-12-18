---
layout: page
title: "People"
permalink: /people/
---

<div class="people__section">
  <h2 class="people__heading">Principal Investigator</h2>

  <div class="person person--pi">
    <img src="{{ site.data.members.pi.photo }}" alt="{{ site.data.members.pi.name }}" class="person__photo">

    <div class="person__info">
      <h3 class="person__name">{{ site.data.members.pi.name }}</h3>
      <p class="person__title">{{ site.data.members.pi.title }}</p>
      <p class="person__department">{{ site.data.members.pi.department }}</p>
      <p class="person__department">{{ site.data.members.pi.institution }}</p>

      <div class="person__links">
        <a href="mailto:{{ site.data.members.pi.email }}">Email</a>
        <a href="{{ site.data.members.pi.scholar }}">Google Scholar</a>
        <a href="{{ site.data.members.pi.github }}">GitHub</a>
        <a href="{{ site.data.members.pi.orcid }}">ORCID</a>
      </div>

      <div class="person__bio">
        {{ site.data.members.pi.bio | markdownify }}
      </div>
    </div>
  </div>
</div>

<div class="people__section">
  <h2 class="people__heading">Graduate Students</h2>

  <div class="people__grid">
    {% for student in site.data.members.students %}
      <div class="person person--student">
        <img src="{{ student.photo }}" alt="{{ student.name }}" class="person__photo">
        <h3 class="person__name">{{ student.name }}</h3>
        <p class="person__year">{{ student.year }}</p>
        {% if student.research %}
        <p class="person__research">{{ student.research }}</p>
        {% endif %}
        {% if student.email %}
        <div class="person__links">
          <a href="mailto:{{ student.email }}">Email</a>
        </div>
        {% endif %}
      </div>
    {% endfor %}
  </div>
</div>

## Join Us

We are always looking for motivated graduate students interested in atmospheric science, machine learning, and climate modeling. If you're passionate about advancing weather and climate predictability, please reach out via the [contact page](/contact/).
