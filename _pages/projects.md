---
layout: archive
title: "Current Projects"
permalink: /projects/
author_profile: true
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

To do: 
1) d4pdf noise change project 
2) Cody CCA static teleconnection 
3) mike climate reservoir operations



## Probabilistic Weather Prediction With Neural Networks<br/>
Most dynamic ensembles are underdispersive on synoptic time scales, meaning that they are giving us less reliable probabilistic information than we hope for. Modern post-processing methods have been developed to address this issue and calibrate models. However, dynamically generated ensembles are extremely computationally expensive. Using integrated vapor transport as the variable of interests, we show here that on weather time scales, we can use deep learning to generate probabilistic models from deterministic systems, that either outperform or compete with modern ensemble methods (even when they have been calibrated). [link to talk](https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/2019GL083662)

<img src="http://willychap.github.io/images/Brier_percy95.png" alt="Brier" width="900"/>

**Project Lead:** Will Chapman<br/>
<img src="http://willychap.github.io/images/william_chapman_square.jpg" alt="Me" width="100"/><br/>
**Collaborators:** Luca Delle Monache, Aneesh Subramanian, Stefano Alessandrini, Negin Hayatbini, Shang-Ping Xie, Marty Ralph<br/>
<a href="https://ldellemonache.scrippsprofiles.ucsd.edu/"><img src="http://willychap.github.io/images/LDM.jpg" alt="LDM" width="100"/></a> <a href="https://www.colorado.edu/atoc/aneesh-subramanian-hehimhis"><img src="http://willychap.github.io/images/ACS.jpg" alt="ACS" width="100"/></a> <a href="https://staff.ucar.edu/users/alessand"><img src="http://willychap.github.io/images/SA.jpg" alt="SA" width="100"/></a> <a href="https://scholar.google.com/citations?user=A8u_ovwAAAAJ&hl=en"> <img src="http://willychap.github.io/images/NH.jpeg" alt="NH" width="100"/></a> <a href="https://sxie.scrippsprofiles.ucsd.edu/"><img src="http://willychap.github.io/images/SPX.jpg" alt="SPX" width="100"/></a> <a href="https://mralph.scrippsprofiles.ucsd.edu/"><img src="http://willychap.github.io/images/FMR.jpg" alt="FMR" width="100"/></a>

*****
*****
*****

## Interpretable Machine Learning applied to Seasonal Forecasting of Western US Precipitation 

Seasonal forecasting of precipitation across the Western United States remains a major scientific challenge. Improvements to the existing forecast skill would be highly valuable for stakeholders and decision makers for planning around drought and floods. Relatively little research has been directed towards testing machine learning for seasonal forecasting. A major barrier is the limited amount of data to train machine learning models at the seasonal time resolution. To address this issue, we test the feasibility of training machine learning on large initial condition climate model simulations. These simulations span several thousand years, providing a large amount of data to train on.  

<img src="http://willychap.github.io/images/Seasonal_Forecast.png" alt="Seasonal" width="900"/>

**Project Lead:** Peter Gibson<br/>
<a href="https://scholar.google.com.au/citations?user=Ay4oTRcAAAAJ&hl=en"> <img src="http://willychap.github.io/images/PG.jpg" alt="Me" width="100"/><br/></a>
**Collaborators:** Will Chapman, Alphan Altinok, Mike Deflorio, Luca Delle Monche, Duane Waliser<br/>
<img src="http://willychap.github.io/images/william_chapman_square.jpg" alt="WC" width="100"/> <a href="https://ml.jpl.nasa.gov/alumni/altinok/altinok.html"><img src="http://willychap.github.io/images/AA.jpeg" alt="AA" width="100"/></a> <a href="https://sites.google.com/site/mikedeflorio/"><img src="http://willychap.github.io/images/MD.jpg" alt="MDF" width="100"/></a> <a href="https://ldellemonache.scrippsprofiles.ucsd.edu/"><img src="http://willychap.github.io/images/LDM.jpg" alt="LDM" width="100"/></a> <a href="https://science.jpl.nasa.gov/people/Waliser/"><img src="http://willychap.github.io/images/DW.jpeg" alt="DW" width="100"/></a>

*****
*****
*****


## Parameterizing subgrid-scale eddy effects using deep learning 

Most eddy-permitting models presently employ some kind of hyper-viscosity, which is shown to cause a significant amount of energy dissipation. However, comparison to higher resolution simulations shows that only enstrophy, but almost no energy, should be dissipated below the grid-scale. As a result of the artificial energy sink associated with viscous parameterizations, the eddy fields in eddy permitting models are generally not energetic enough. - Jansen and Held, 2014 

Here a new approach for sub-grid eddy parameterization in eddy-permitting ocean models is explored by using deep learning. We test this in idealized QG models and show substantial improvements in coarse models. 


**Project Leads:** Will Chapman, Nick Lutsko, and Tom Beucler <br/>
<img src="http://willychap.github.io/images/william_chapman_square.jpg" alt="Me" width="100"/> <a href="https://nicklutsko.github.io/"><img src="http://willychap.github.io/images/NL.jpg" alt="Nick" width="100"/></a> <a href="http://tbeucler.scripts.mit.edu/tbeucler/"><img src="http://willychap.github.io/images/TB.jpg" alt="Tom" width="100"/></a>

*****
*****
*****
## Monthly Modulation of ENSO Teleconnections: Implications for North American Potential Predictability <br/>

Using a high-resolution atmospheric general circulation model simulation of unprecedented ensemble size, we examine potential predictability of monthly anomalies under El Niño Southern Oscillation (ENSO) forcing and background internal variability. This study reveals the pronounced month-to-month evolution of both the ENSO forcing signal and internal variability. Internal variance in upper-level geopotential height decreases ($\sim10\%$) over the North Pacific during El Niño as the westerly jet extends eastward, allowing forced signals to account for a greater fraction of the total variability, and leading to increased potential predictability. We identify March of El Niño years as the most predictable month followed closely by February using a signal-to-noise anaylsis. In contrast, December, a month typically included in teleconnection studies, shows little-to-no potential predictability.  We show that the seasonal evolution of SST forcing and variability leads to significant signal-to-noise relationships that can be directly linked to both upper-level and surface variable predictability for a given month. The stark changes in forced response, internal variability, and thus signal-to-noise across an ENSO season indicate that subseasonal fields should be used to diagnose potential predictability over North America associated with ENSO teleconnections. Using surface air temperature and precipitation as examples, this study provides motivation to pursue ‘windows of forecast opportunity’, in which statistical skill can be developed, tested, and leveraged to determine times and regions in which this skill may be elevated. [link to paper](https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/2019GL083662)

<img src="http://willychap.github.io/images/Fig_09_high.png" alt="ELNINO" width="900"/>


**Project Lead:** Will Chapman<br/>
<a href="http://sites.google.com"><img src="http://willychap.github.io/images/william_chapman_square.jpg" alt="Me" width="100"/></a><br/>
**Collaborators:** Aneesh Subramanian, Mike Sierks, Shang-Ping Xie, Marty Ralph, Youichi Kamae <br/> <a href="https://www.colorado.edu/atoc/aneesh-subramanian-hehimhis"><img src="http://willychap.github.io/images/ACS.jpg" alt="ACS" width="100"/></a> <a href="https://scholar.google.com/citations?user=or6mIK0AAAAJ&hl=en"><img src="http://willychap.github.io/images/MDS.jpg" alt="MDS" width="100"/></a> <a href="https://sxie.scrippsprofiles.ucsd.edu/"><img src="http://willychap.github.io/images/SPX.jpg" alt="SPX" width="100"/></a> <a href="https://mralph.scrippsprofiles.ucsd.edu/"><img src="http://willychap.github.io/images/FMR.jpg" alt="FMR" width="100"/></a> <a href="https://sites.google.com/site/00youichikamae/"><img src="http://willychap.github.io/images/YK.jpg" alt="YK" width="100"/></a>

*****
*****
*****

## Assessing Vulnerability and Adaptive Management Under Climate Change Scenarios: Lessons from California's Largest Reservoir 

With the arrival of increasing droughts and floods, declining snowpacks, increasing temperatures, and increasing evapotranspiration, the ways in which the West has managed water for the past 75 years increasingly appear to be insufficient in sustaining projected demand. However, individual river basins, watersheds, and reservoir drainage areas will not be impacted uniformly. As a result, the potential impacts of climate change on water management and any associated mitigation or adaptation strategies must be examined on a case-by-case basis. 

The primary objective of this work is to investigate the impacts of climate change on rule-curve based reservoir operations for low-elevation historically rain-and-snow driven basins by using the Shasta reservoir in the Trinity Alps of northwestern California as a case study. 

<img src="http://willychap.github.io/images/Sierks_FIRO.gif" alt="ELNINO" width="900"/>

**Project Lead:** Mike Sierks<br/>
<a href="https://scholar.google.com/citations?user=or6mIK0AAAAJ&hl=en"><img src="http://willychap.github.io/images/MDS.jpg" alt="MDS" width="100"/></a> 

**Collaborators:** Mike Dettinger, Will Chapman, Marty Ralph <br/> <a href="https://scholar.google.com/citations?user=JbFKaYUAAAAJ&hl=en"><img src="http://willychap.github.io/images/MDet.jpg" alt="ACS" width="100"/></a>  <img src="http://willychap.github.io/images/william_chapman_square.jpg" alt="Me" width="100"/> <a href="https://mralph.scrippsprofiles.ucsd.edu/"><img src="http://willychap.github.io/images/FMR.jpg" alt="FMR" width="100"/></a> 

*****
*****
*****

## Hawaii Lee Wind Reconstruction Using Deep Learning for Satellite Ambiguity Selection

Satellite scatterometer retrievals provide the only regular vector wind observations over vast swaths of the global oceans and are therefore vital for climate study (Chelton & Xie, 2010; Xie, 2004) and forecasting applications (Atlas et al., 2001; Chelton et al., 2006). However, satellite scatterometer winds have been identified as often errant in regions where coastal orography interacts with oceanic surface winds (Kilpatrick et al 2019). These errors are especially prevalent in Hawaii’s lee wake in the summertime easterly trade wind regime, where upstream winds force two orographically tied vortices which have been well documented (Patzert 1969; Nickerson and Dias, 1981; Smith and Grubišic´ 1993) and affect local precipitation patterns and mesoscale ocean circulation (Yang et al. 2008). Here we test comparitive empirical methods for spatial reconstruction of satellite wind for correcting inaccuracies in Hawaii's Lee Wind Wake. Methods: Convolutional Neural Networks "inpainting", Maximum Covariance Analysis, and Canonical Correlates. 

<img src="http://willychap.github.io/images/Hawaii_Recon.png" alt="ELNINO" width="900"/>

**Project Lead:** Will Chapman<br/>
<img src="http://willychap.github.io/images/william_chapman_square.jpg" alt="Me" width="100"/><br/>
**Collaborators:** Tom Kilpatrick, Shang-Ping Xie, David John Gagne<br/> <a href="https://tomkilpatrick.github.io/"><img src="http://willychap.github.io/images/TK.jpeg" alt="TK" width="100"/></a> <a href="https://sxie.scrippsprofiles.ucsd.edu/"><img src="http://willychap.github.io/images/SPX.jpg" alt="SPX" width="100"/></a> <a href="https://djgagne.github.io/"><img src="http://willychap.github.io/images/DJG.jpg" alt="DJG" width="100"/></a>


*****
*****
*****

## Improving Atmospheric River Prediction with Machine Learning

This study tests the utility of convolutional neural networks as a postprocessing framework for improving the National Center for Environmental Prediction's Global Forecast System's integrated vapor transport forecast field in the Eastern Pacific and western United States. Integrated vapor transport is the characteristic field of atmospheric rivers, which provide over 65% of yearly precipitation at some western U.S. locations. The method reduces full‐field root‐mean‐square error (RMSE) at forecast leads from 3 hours to seven days (9–17% reduction), while increasing correlation between observations and predictions (0.5–12% increase). This represents an an approximately one‐ to two‐day lead time improvement in RMSE. Decomposing RMSE shows that random error and conditional biases are predominantly reduced. Systematic error is reduced up to five‐day forecast lead, but accounts for a smaller portion of RMSE. This work demonstrates convolutional neural network's potential to improve forecast skill out to seven days for precipitation events affecting the western United States. [link to paper](https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/2019GL083662)

<img src="http://willychap.github.io/images/ARcnnForecast_LowRes.png" alt="AR" width="900"/>

**Project Lead:** Will Chapman<br/>
<img src="http://willychap.github.io/images/william_chapman_square.jpg" alt="Me" width="100"/><br/>
**Collaborators:** Aneesh Subramanian, Luca Delle Monache, Shang-Ping Xie, Marty Ralph<br/> <a href="https://www.colorado.edu/atoc/aneesh-subramanian-hehimhis"><img src="http://willychap.github.io/images/ACS.jpg" alt="ACS" width="100"/></a> <a href="https://ldellemonache.scrippsprofiles.ucsd.edu/"><img src="http://willychap.github.io/images/LDM.jpg" alt="LDM" width="100"/></a> <a href="https://sxie.scrippsprofiles.ucsd.edu/"><img src="http://willychap.github.io/images/SPX.jpg" alt="SPX" width="100"/></a> <a href="https://mralph.scrippsprofiles.ucsd.edu/"><img src="http://willychap.github.io/images/FMR.jpg" alt="FMR" width="100"/></a>



