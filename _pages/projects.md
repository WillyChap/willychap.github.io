---
layout: archive
title: "Current Projects"
permalink: /projects/
author_profile: true
header:
  overlay_image: "mtn.jpg"
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

<!-- To do:
1) d4pdf noise change project
2) Cody CCA static teleconnection
3) mike climate reservoir operations

 -->

## Leveraging DART/Nudging Increments to Correct Model Bias in the Community Atmosphere Model

Due to physics-based and numerical deficiencies (e.g., subgrid parameterization approximations) climate model simulations contain innate biases and uncertainties which can ultimately hamper decision making. A measure of the quality of a modeling system is the analysis increment from a data assimilation system, or the augmentation applied to the initial state of the atmosphere to determine the analysis state. In a perfect model with perfect observations the analysis increment will always be zero. However, a clear indication of bias in the forward model is the presence of systematic features in the analysis increments, such as persistent values in the increment mean (after appropriate temporal averaging) or regularly recurring/flow-dependent spatial patterns (Dee, 2005). In this work we develop and compare model-error representation schemes derived from data assimilation increments and nudging tendencies in multi-decadal simulations of the community atmosphere model, version 6. Each scheme applies a bias correction during simulation run-time to the zonal and meridional winds. We quantify to which extent such online adjustment schemes improve the model climatology and variability on daily to seasonal timescales. Generally, we observe a ca. 30% improvement to annual upper-level zonal winds, with largest improvements in boreal spring (ca. 35%) and winter (ca. 47%). Despite only adjusting the wind fields, we additionally observe a ca. 20% improvement to annual precipitation over land, with the largest improvements in boreal fall (ca. 36%) and winter (ca. 25%), and a ca. 50% improvement to annual sea level pressure, globally. With mean state adjustments alone, the dominant pattern of boreal low-frequency variability over the Atlantic (the North Atlantic Oscillation) is significantly improved. Additional stochasticity further increases the modal explained variances, which brings it closer to the observed value. A streamfunction tendency decomposition reveals that the improvement is due to an adjustment to the high- and low-frequency eddy-eddy interaction terms. In the Pacific, the mean state adjustment alone led to an erroneous deepening of the Aleutian low, but this was remedied with the addition of stochastically selected tendencies. Finally, from a practical standpoint, we discuss the performance of using data assimilation increments versus nudging tendencies for an online model-error representation.
[link to paper](https://arxiv.org/abs/2308.15295)

**Project Lead:** Will Chapman<br/>
<img src="http://willychap.github.io/images/william_chapman_square.jpg" alt="Me" width="100"/><br/>

**Collaborators:** Judith Berner <br/>
<a href="https://staff.ucar.edu/users/berner"><img src="http://willychap.github.io/images/Berner.jpg" alt="LDM" width="100"/></a>

*****
*****
*****

## Exploring the Relative and Combined Contribution of the MJO and ENSO to Midlatitude Subseasonal Predictability with an Interpretable Neural Network

Forecasting on subseasonal to seasonal (S2S; 2 weeks to 2 months) timescales in the Northern Hemisphere remains a formidable challenge, despite the ongoing development of targeted modeling approaches—both numerical and empirical—over the past decade. The literature has recognized prominent modes of S2S variability, with special emphasis on the Madden-Julian Oscillation (MJO) as a potential stronghold for forecast skill. Recently, there has been a resurgence in literature investigating the subseasonal variability of the El Niño Southern Oscillation (ENSO) teleconnection, highlighting its significant impact in the Northern Hemisphere within the boreal winter season. In this study, our goal is to disentangle midlatitude subseasonal predictive skill that arises from the MJO and ENSO  using an inherently interpretable machine learning model applied to pre-industrial control runs of the Community Earth System Model version 2. This machine learning technique allows us to assess the individual and combined contribution of MJO and ENSO teleconnections to the predictive skill of upper atmospheric circulation over the North Pacific at various forecasting lead times. The aim of this study is not to develop a state-of-the-art forecasting system, but rather to harness a simple, interpretable framework to separate skill from specific sources of predictability within defined forecasting leads and averaging windows. Our initial results show that the machine learning technique generally favors the state of ENSO, rather than the MJO, to make correct predictions on longer subseasonal lead times. Continued analysis will further reveal the relative contributions of these phenomena to midlatitude subseasonal predictability at a range of forecast horizons.
[link to paper in progress](https://arxiv.org/abs/2308.15295)

**Project Leads:** Will Chapman, Kirsten Mayer<br/>
<a href="http://willychap.github.io"><img src="http://willychap.github.io/images/william_chapman_square.jpg" alt="LDM" width="100"/></a> <a href="https://www.colorado.edu/atoc/aneesh-subramanian-hehimhis"><img src="http://willychap.github.io/images/kjmayer.jpeg" alt="KJM" width="100"/></a>


*****
*****
*****

## Distilling Systematic Model Error from DA/Nudging Tendencies Using Machine Learning

Due to physics-based and numerical deficiencies (e.g., subgrid parameterization approximations) climate model simulations contain innate biases and uncertainties which can ultimately hamper decision making. A measure of the quality of a modeling system is the analysis increment from a data assimilation system, or the augmentation applied to the initial state of the atmosphere to determine the analysis state. In a perfect model with perfect observations the analysis increment will always be zero. However, a clear indication of bias in the forward model is the presence of systematic features in the analysis increments, such as persistent values in the increment mean (after appropriate temporal averaging) or regularly recurring/flow-dependent spatial patterns (Dee, 2005). In this work we leverage a perfect modeling framework to distill true model error from systematic DA and Linear relaxation analysis increments. A machine learning based equation discovery method (via the PYSR python package) is used to seperate tendencies not associated with model error from those which represent a sysematic model drift. 

**Project Lead:** Will Chapman<br/>
<img src="http://willychap.github.io/images/william_chapman_square.jpg" alt="Me" width="100"/><br/>

**Collaborators:** Judith Berner <br/>
<a href="https://staff.ucar.edu/users/berner"><img src="http://willychap.github.io/images/Berner.jpg" alt="LDM" width="100"/></a>

*****
*****
*****

## Probabilistic Weather Prediction With Neural Networks<br/>
Most dynamic ensembles are underdispersive on synoptic time scales, meaning that they are giving us less reliable probabilistic information than we hope for. Modern post-processing methods have been developed to address this issue and calibrate models. However, dynamically generated ensembles are extremely computationally expensive. Using integrated vapor transport as the variable of interests, we show here that on weather time scales, we can use deep learning to generate probabilistic models from deterministic systems, that either outperform or compete with modern ensemble methods (even when they have been calibrated). [link to paper](https://journals.ametsoc.org/view/journals/mwre/150/1/MWR-D-21-0106.1.xml?tab_body=pdf)

<img src="http://willychap.github.io/images/Brier_percy95.png" alt="Brier" width="900"/>

**Project Lead:** Will Chapman<br/>
<img src="http://willychap.github.io/images/william_chapman_square.jpg" alt="Me" width="100"/><br/>
**Collaborators:** Luca Delle Monache, Aneesh Subramanian, Stefano Alessandrini, Negin Hayatbini, Shang-Ping Xie, Marty Ralph<br/>
<a href="https://ldellemonache.scrippsprofiles.ucsd.edu/"><img src="http://willychap.github.io/images/LDM.jpg" alt="LDM" width="100"/></a> <a href="https://www.colorado.edu/atoc/aneesh-subramanian-hehimhis"><img src="http://willychap.github.io/images/ACS.jpg" alt="ACS" width="100"/></a> <a href="https://staff.ucar.edu/users/alessand"><img src="http://willychap.github.io/images/SA.jpg" alt="SA" width="100"/></a> <a href="https://scholar.google.com/citations?user=A8u_ovwAAAAJ&hl=en"> <img src="http://willychap.github.io/images/NH.jpeg" alt="NH" width="100"/></a> <a href="https://sxie.scrippsprofiles.ucsd.edu/"><img src="http://willychap.github.io/images/SPX.jpg" alt="SPX" width="100"/></a> <a href="https://mralph.scrippsprofiles.ucsd.edu/"><img src="http://willychap.github.io/images/FMR.jpg" alt="FMR" width="100"/></a>

*****
*****
*****
## Phase-Dependent Forecast Skill of the Madden Julian Oscillation (MJO) Teleconnection in Early and Late Winter.

Using a coupled ensemble hindcast of the 20th century (period 1901–2010), the phase-dependent Madden Julian Oscillation (MJO) teleconnection variability in the midlatitudes was investigated with November and February model initializations. The February initialized hindcasts show enhanced teleconnection anomalies and forecast accuracy when compared with their November counterparts.

The phase-dependent forecast skill of the MJO teleconnection was examined by partitioning ensemble members initialized during active MJO phases 3 and 4 (MJO34) and during active MJO phases 7 and 8 (MJO78). We show that MJO78 forecasts have significantly higher forecast skill over the Pacific for the February initializations when compared with their MJO34 counterparts. The potential role of transient eddies was assessed, which supported the evidence that the transient eddies in MJO38 (MJO78) forecasts act to diminish (maintain) the midlatitude circulation anomalies.

Finally, we investigated the spatiotemporal evolution of MJO forced geopotential height anomalies in the ensemble spread with week-reliant singular-value decomposition. Significant phase-dependent differences in the forecast uncertainty of the late-season MJO34 and MJO78 teleconnections exist. The uncertainty growth is linked to two sources 1) chaotic growth of the uncertainty in the midlatitude atmosphere due to internal variability 2) tropically derived uncertainty owed to the growth of the leading mode in the ensemble spread of upper-level tropical divergence, which manifests as independent realizations of the MJO itself. The MJO78 forecast teleconnections are shown to be inherently more predictable than MJO34 forecasts by ~5 forecast days.

**Project Lead:** Will Chapman<br/>
<img src="http://willychap.github.io/images/william_chapman_square.jpg" alt="Me" width="100"/><br/>

**Collaborators:** Aneesh Subramanian, Shang-Ping Xie, Antje Weisheimer<br/>
<a href="https://www.colorado.edu/atoc/aneesh-subramanian-hehimhis"><img src="http://willychap.github.io/images/ACS.jpg" alt="ACS" width="100"/></a> <a href="https://sxie.scrippsprofiles.ucsd.edu/"><img src="http://willychap.github.io/images/SPX.jpg" alt="SPX" width="100"/></a>  <a href="https://www.physics.ox.ac.uk/our-people/weisheimer/"><img src="http://willychap.github.io/images/AnWe.jpeg" alt="Antje" width="100"/></a>

*****
*****
*****
## Assessing the Potential Predictability of North Pacific Winter IVT and Precipitation Extremes in Subseasonal to Seasonal Forecasts

Chaos within the atmosphere causes the predictability of weather at a single instant in time to range from a few days to a few weeks depending on existing circulation patterns (Lorenz 1965). However, recent studies have shown that there are “windows of opportunity” that allow skillful forecasts to be extended into the subseasonal to seasonal (S2S) range (Robertson et al. 2015, Vitart et al. 2017, White et al. 2017, Mariotti 2020). Despite the limit of predictability at singular moments, some processes can create signals in the predictability of broader windows of time that are stronger than the noise of uncertainty caused by chaos. There is still considerable uncertainty over the differences in predictability amongst the characteristics that describe our atmosphere. Lavers et al. (2016) demonstrated that integrated vapor transport (IVT), which plays a key role in driving atmospheric rivers (ARs) (Shields et al. 2018, Ralph et al. 2019) and severe US west coast precipitation (Waliser and Guan 2017, Ricciotti and Cordeira 2022), has potential predictive skill at longer lead times than precipitation itself in medium-range forecasts. Determining what useful information can be extracted from S2S forecasts can have meaningful impacts on water management decisions on the US west coast, a region that is prone to drought and flooding (Das et al. 2013, Mann and Gleick 2015, Williams et al. 2015, Corringham et al. 2019). There is still little known of the discrepancies between the predictability of IVT compared to predictability of precipitation at S2S lead times. In this study, we explore the differences between the potential predictability of IVT and precipitation in S2S forecasts.
We will present results showing that the overall significant skill for both precipitation and IVT drops below an Anomaly Correlation Coefficient (ACC) value of 0.6 in almost all spatial locations after 2 weeks. The Pacific North America pattern (PNA) has been shown to be associated with forecast skill in S2S forecasts and can have serious implications on US west coast precipitation (Baxter and Nigam 2013). We will show that there is an area of persistent skill within a region that experiences frequent impactful AR genesis activity (Prince et al. 2021) when forecasts are conditioned the PNA and various weather regimes.

**Project Lead:** Tim Higgins <br/>
<img src="http://willychap.github.io/images/Tim.jpeg" alt="Tim" width="100"/><br/>

**Collaborators:** Aneesh Subramanian, Will Chapman, Andrew Winters, David Lavers <br/>
<a href="https://www.colorado.edu/atoc/aneesh-subramanian-hehimhis"><img src="http://willychap.github.io/images/ACS.jpg" alt="ACS" width="100"/></a> <a href="https://scholar.google.com/citations?user=C1ox2CEAAAAJ&hl=en"><img src="http://willychap.github.io/images/william_chapman_square.jpg" alt="Me" width="100"/></a> <a href="https://scholar.google.com/citations?user=fNJBJWcAAAAJ&hl=en&oi=sra"> <img src="http://willychap.github.io/images/Awint.jpeg" alt="Andrew" width="100"/></a> <a href="https://www.ecmwf.int/en/about/who-we-are/staff-profiles/david-lavers"><img src="http://willychap.github.io/images/Lavers.jpeg" alt="David" width="100"/></a>

*****
*****
*****

## Interpretable Machine Learning applied to Seasonal Forecasting of Western US Precipitation

Seasonal forecasting of precipitation across the Western United States remains a major scientific challenge. Improvements to the existing forecast skill would be highly valuable for stakeholders and decision makers for planning around drought and floods. Relatively little research has been directed towards testing machine learning for seasonal forecasting. A major barrier is the limited amount of data to train machine learning models at the seasonal time resolution. To address this issue, we test the feasibility of training machine learning on large initial condition climate model simulations. These simulations span several thousand years, providing a large amount of data to train on. [link to paper](https://doi.org/10.1038/s43247-021-00225-4)

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


## Potential Increase in MJO Predictability Due to Global Warming

The Madden-Julian Oscillation (MJO) is the leading source of predictability in our climate system on the subseasonal time scale. In this study, we explore and explain the increasing MJO predictability during the past century. We use RMMI to represent MJO.
First, we will show the increasing MJO predictability trend we observed from model ensemble forecasts and reanalysis data. Following the traditional method of using model ensemble forecasts and evaluating with the bivariate anomaly correlation coefficient, we obtained a significant positive trend in MJO predictability for the past century. We then analyzed the MJO in ECMWF coupled climate reanalysis for the 20th century (CERA-20C) using the Weighted Permutation Entropy (WPE) method, which has been proven as a useful tool in analyzing predictability. The higher the WPE, the lower the predictability. We witnessed a consistent decreasing trend in WPE among all 10 CERA-20C ensemble members, which reflects a robust, increasing trend in the MJO predictability.

Then, we will present the MJO predictability change in CESM2 and CESM2-WACCM historical runs using the WPE method. Most historical runs are with a WPE changing trend within the spread of the trends estimated from the control run; however, the distribution of the WPE trends in historical runs shifts to the negative side compared to the distribution calculated from the control run. This suggests that the increasing MJO predictability we observed in the past century is likely caused by the internal climate variability and the external forcing (the global warming).

Next, we will present the MJO predictability change in CESM2 and CESM2-WACCM future projections under the ssp585 scenario. With a much stronger global warming forcing, the distribution of the WPE trends shifts even more to the negative side than the distribution calculated from the historical runs, which further supports the assumption that global warming can increase the MJO predictability.

Finally, we will explain why there is such an increase in MJO predictability. In both reanalysis data and CESM2/CESM2-WACCM ssp585 future projection, we noticed that, within a range of 10 days, the sequential amplifying/weakening of RMM1, RMM2 and MJO amplitude, and the organized eastward propagation occur more and more frequently. These regular patterns make the MJO more predictable.

**Project Lead:** Danni Du <br/>
<img src="http://willychap.github.io/images/Du2.jpeg" alt="Danni" width="100"/><br/>

**Collaborators:** Aneesh Subramanian, Will Chapman, Weiqing Han <br/>
<a href="https://www.colorado.edu/atoc/aneesh-subramanian-hehimhis"><img src="http://willychap.github.io/images/ACS.jpg" alt="ACS" width="100"/></a> <a href="https://scholar.google.com/citations?user=C1ox2CEAAAAJ&hl=en"><img src="http://willychap.github.io/images/william_chapman_square.jpg" alt="Me" width="100"/></a> <a href="https://scholar.google.com/citations?user=fNJBJWcAAAAJ&hl=en&oi=sra"> <img src="http://willychap.github.io/images/WHan.jpeg" alt="Weiqing" width="100"/></a>

*****
*****
*****

## Monthly Modulation of ENSO Teleconnections: Implications for North American Potential Predictability <br/>

Using a high-resolution atmospheric general circulation model simulation of unprecedented ensemble size, we examine potential predictability of monthly anomalies under El Niño Southern Oscillation (ENSO) forcing and background internal variability. This study reveals the pronounced month-to-month evolution of both the ENSO forcing signal and internal variability. Internal variance in upper-level geopotential height decreases ($\sim10\%$) over the North Pacific during El Niño as the westerly jet extends eastward, allowing forced signals to account for a greater fraction of the total variability, and leading to increased potential predictability. We identify March of El Niño years as the most predictable month followed closely by February using a signal-to-noise anaylsis. In contrast, December, a month typically included in teleconnection studies, shows little-to-no potential predictability.  We show that the seasonal evolution of SST forcing and variability leads to significant signal-to-noise relationships that can be directly linked to both upper-level and surface variable predictability for a given month. The stark changes in forced response, internal variability, and thus signal-to-noise across an ENSO season indicate that subseasonal fields should be used to diagnose potential predictability over North America associated with ENSO teleconnections. Using surface air temperature and precipitation as examples, this study provides motivation to pursue ‘windows of forecast opportunity’, in which statistical skill can be developed, tested, and leveraged to determine times and regions in which this skill may be elevated. [link to paper](https://doi.org/10.1175/JCLI-D-20-0391.1)

<img src="http://willychap.github.io/images/Fig_09_high.png" alt="ELNINO" width="900"/>


**Project Lead:** Will Chapman<br/>
<a href="http://sites.google.com"><img src="http://willychap.github.io/images/william_chapman_square.jpg" alt="Me" width="100"/></a><br/>
**Collaborators:** Aneesh Subramanian, Mike Sierks, Shang-Ping Xie, Marty Ralph, Youichi Kamae <br/> <a href="https://www.colorado.edu/atoc/aneesh-subramanian-hehimhis"><img src="http://willychap.github.io/images/ACS.jpg" alt="ACS" width="100"/></a> <a href="https://scholar.google.com/citations?user=or6mIK0AAAAJ&hl=en"><img src="http://willychap.github.io/images/MDS.jpg" alt="MDS" width="100"/></a> <a href="https://sxie.scrippsprofiles.ucsd.edu/"><img src="http://willychap.github.io/images/SPX.jpg" alt="SPX" width="100"/></a> <a href="https://mralph.scrippsprofiles.ucsd.edu/"><img src="http://willychap.github.io/images/FMR.jpg" alt="FMR" width="100"/></a> <a href="https://sites.google.com/site/00youichikamae/"><img src="http://willychap.github.io/images/YK.jpg" alt="YK" width="100"/></a>

*****
*****
*****

## Assessing Vulnerability and Adaptive Management Under Climate Change Scenarios: Lessons from California's Largest Reservoir

Climate change is exacerbating the long-standing tensions between water supply and flood-risk mitigation across the Western US and beyond. As springtime snowmelt declines in the face of warming trends, reducing opportunities to refill reservoirs after wintertime flood risks subside, water managers face the decision whether to continue operations designed for a bygone era or to pursue adaptation measures. Differences in factors such as climate, hydrology, and reservoir operations between basins require that impacts of climate change and proposed adaptation strategies be examined on a case-by-case basis. This study investigates projected climate change impacts on California’s Lake Shasta and identifies specific variables that govern its vulnerability. Using a newly developed, highly flexible model, we analyze coming threats to water supply and flood risk under existing operations and several forms of adaptive responses to climate change. Compared to the historical period, we simulate 27% declines in carryover storage at the end of the 21st century, under the more severe of two warming scenarios, if operations are left unchanged. Compounding the direct impacts due to decreased snowpack, we find existing reservoir operating procedures are responsible for one-third of average losses. Both operational and infrastructural adaptive measures were explored by altering rule curve and increasing reservoir storage capacity. Despite many interventions favoring water supply over flood risk, historical levels of carryover storage were irretrievable at the end of the century under the warmer of the two warming scenarios examined in this study. [link to paper](https://www.essoar.org/doi/abs/10.1002/essoar.10512497.1)


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
