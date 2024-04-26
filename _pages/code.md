---
layout: archive
title: "Code"
permalink: /code/
author_profile: true
header:
  overlay_image: "mtn.jpg"
  # overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
---
<!--
{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

 -->

## Stream Function Tendency Decompositions

This code computes the stream-function-tendency equation, as conceptualized by Cai and van den Dool (1994) and refined by Feldstein (1998). This approach dissects the dynamic processes in atmospheric flow, capturing various terms contributing to the evolution of the stream-function. I was frustrated that this code was not publically available in python. So I wrote it myself. Here is a notebook to compute the stream function tendency. I hope it can be used because it was a pain to create. It was used in [our paper](https://rmets.onlinelibrary.wiley.com/doi/abs/10.1002/qj.4652). This methodology provides a granular view of atmospheric dynamics, enhancing our understanding of the large-scale circulation's behavior and its tendencies over time.

**Citations:**
- Cai, Ming, and Huug M. Van Den Dool. "Dynamical decomposition of low-frequency tendencies." Journal of Atmospheric Sciences 51.14 (1994): 2086-2100.
- Feldstein, Steven B. "Fundamental mechanisms of the growth and decay of the PNA teleconnection pattern." Quarterly Journal of the Royal Meteorological Society: A journal of the atmospheric sciences, applied meteorology and physical oceanography 128.581 (2002): 775-796.

[Link to notebook](https://github.com/WillyChap/MITA_SITA_CAM6/tree/main/figure_notebooks/Stream_Function_Tendency_Fig10_11_12)

## MJOcast automated MJO detection and forecast skill software

MJOcast provides you with tools to compute the Madden-Julian Oscillation (MJO) index, with a specific focus on the respected Wheeler and Hendon Real-Time Multivariate MJO Index (RMM). Additionally, it simplifies the generation of compiled netcdf variables and facilitates accurate forecasts of the MJO, and provides essential skill metrics. Particularly noteworthy is its ability to efficiently transform forecasted hindcast ensembles into MJO indices, making this often-complex task as straightforward as pointing the package at your model runs (with the appropriate model variables) and generating the ensemble of forecasts. Refer to the included examples to prepare your data. We've put considerable effort into ensuring compatibility with multiple common file formats from major modeling centers.

[MJOcast github repo](https://github.com/WillyChap/MJOcast)
[MJOcast docs site](https://willychap.github.io/MJOcast/)

## A CAM5/6 Supermodel

The modeling of weather and climate has been a success story. The skill of forecasts continues to improve and model biases continue to decrease. Combining the output of multiple models has further improved forecast skill and reduced biases. But are we exploiting the full capacity of state-of-the-art models in making forecasts and projections? Supermodeling is a recent step forward in the multi-model ensemble approach. Instead of combining model output after the simulations are completed, in a supermodel individual models exchange state information as they run, influencing each other’s behavior. By learning the optimal parameters that determine how models influence each other based on past observations, model errors are reduced at an early stage before they propagate into larger scales and affect other regions and variables. The models synchronize on a common solution that through learning remains closer to the observed evolution. Effectively a new dynamical system has been created, a supermodel, that optimally combines the strengths of the constituent models. The supermodel approach has the potential to rapidly improve current state-of-the-art weather forecasts and climate predictions. [See our paper](https://journals.ametsoc.org/view/journals/bams/104/9/BAMS-D-22-0070.1.xml)

This is the github repo: [Our Supermodel](https://github.com/WillyChap/SuperModel_CAM)


## Simple Explanation of 4dvar Data Assimilation

With examples for data assimilation in logistic growth and Lorenz '63.
This tutorial is meant for graduate students struggling with the idea of 4dvar data assimiliation.
It walks through the math and concepts in simple models that are easily decomposed to show the intricacies.
see [this notebook](https://github.com/WillyChap/Toy_DataAssimilation/blob/master/Adjoint%20Model%20for%20Data%20Assimilation%20.ipynb)

or this github repo: [4dvar assimilation](https://github.com/WillyChap/Toy_DataAssimilation)

___

## Linear Inverse Modeling

Code is based on the linear inverse model (LIM) described by Penland & Sardeshmukh (1995).
We walk through an instructive fabricated example and an example of prediction for tropical SSTs.
See [this notebook](https://github.com/WillyChap/LIM/blob/main/LIM.ipynb)

or this github repo: [Linear Inverse Modeling](https://github.com/WillyChap/LIM)
