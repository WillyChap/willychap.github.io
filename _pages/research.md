---
layout: page
title: "Research"
permalink: /research/
---

Our research advances atmospheric science through innovative applications of machine learning, data assimilation, and hybrid modeling approaches. We develop methods to improve weather and climate prediction from subseasonal to climate timescales.

---

## Current Research Areas

### CAMulator + WxFormer: Weather-to-Climate Scale Atmosphere Emulation

WxFormer is a weather-to-climate scale UNET crossformer model used to autoregressively predict the next state of the atmosphere at hourly time resolution. Developed within our Community Runnable Earth Digital Intelligence Twin (CREDIT) framework at NCAR, we stress test NCAR's Derecho supercomputer using Full Sharded Data Parallel (FSDP) training across 64 GPUs.

Our aim with CREDIT is to democratize access to the weather emulation space, enabling the broader community to engage with and contribute to advanced atmospheric modeling. This open and collaborative approach drives significant advancements in climate and weather prediction.

**Key Publications**:
- [CAMulator Preprint](/files/CAMulator___Arxiv.pdf)
- [CREDIT Paper](/files/CREDIT.pdf)
- [CREDIT with Physics Constraints](/files/CREDIT_Phys.pdf)

---

### Leveraging Machine Learning and Data Assimilation for Model Improvement

We integrate machine learning corrections into online climate model simulations by leveraging tendencies learned from data assimilation systems. Analysis increments from systems like ERA5 reanalysis reveal systematic model biases. Our machine learning frameworks learn state-dependent corrections, significantly improving climate model performance.

This work represents a major technological advancement, merging cutting-edge ML techniques with traditional numerical weather prediction through FTORCH and Forpy integration. We focus on improving representation of the Madden-Julian Oscillation (MJO) and other modes of variability in CESM/CAM.

**Related Work**: [Benefits of Deterministic and Stochastic Tendency Adjustments](https://arxiv.org/abs/2308.15295)

---

### Supermodeling Framework for CAM

Our supermodeling framework introduces the first atmosphere-connected supermodel using versions of the Community Atmosphere Model (CAM) 5 and 6. Unlike traditional multimodel ensembles, supermodeling allows individual models to exchange state information in real-time, influencing each other's behavior during simulations.

The models successfully synchronize in storm track regions across multiple time scales and variables. This innovative approach significantly enhances weather forecasts and climate predictions by reducing errors early in simulations.

**Publication**: [Supermodeling Paper](https://journals.ametsoc.org/view/journals/mwre/150/1/MWR-D-21-0106.1.xml) | [GitHub Repository](https://github.com/WillyChap/SuperModel_CAM)

<img src="/images/SUMO_WF.png" alt="Supermodeling Workflow" width="100%" style="max-width: 900px; margin: 2rem 0;">

---

### MJO and ENSO Subseasonal Predictability

We explore the relative contribution of the Madden-Julian Oscillation (MJO) and El Niño Southern Oscillation (ENSO) to midlatitude subseasonal predictive skill using interpretable neural networks. Our findings indicate that ENSO state generally provides more predictive information than MJO phase, though MJO contributes meaningfully when ENSO is in a neutral state.

This research identifies opportune forecasting windows for MJO teleconnections and advances our understanding of subseasonal predictability sources.

**Preprint**: [MJO/ENSO Predictability Study](https://essopenarchive.org/doi/full/10.22541/essoar.171322682.29656429)

<img src="/images/ENSO_MJO.png" alt="MJO and ENSO Analysis" width="100%" style="max-width: 900px; margin: 2rem 0;">

---

### Probabilistic Weather Prediction with Deep Learning

We demonstrate that deep learning can generate probabilistic forecasts from deterministic systems that compete with or outperform traditional dynamically generated ensembles. Using integrated vapor transport as the variable of interest, our convolutional neural networks reduce forecast error by 9-17% at leads from 3 hours to seven days.

This represents approximately a one- to two-day improvement in forecast lead time and demonstrates the potential of neural networks for improving precipitation event forecasts.

**Publications**:
- [Probabilistic Predictions from Deterministic Forecasts](https://doi.org/10.1175/JCLI-D-20-0391.1)
- [Improving AR Forecasts with ML](https://doi.org/10.1029/2019GL083662)

<img src="/images/Brier_percy95.png" alt="Brier Score Analysis" width="100%" style="max-width: 900px; margin: 2rem 0;">

---

### ENSO Teleconnection Predictability

Using high-resolution atmospheric model simulations, we examine month-to-month evolution of ENSO forcing signals and internal variability. We identify March of El Niño years as the most predictable month, with significant implications for subseasonal forecasting of North American weather patterns.

This work reveals pronounced monthly modulation of ENSO teleconnections and provides motivation for pursuing "windows of forecast opportunity" for improved seasonal predictions.

**Publication**: [Monthly Modulation of ENSO Teleconnections](https://doi.org/10.1175/JCLI-D-20-0391.1)

<img src="/images/Fig_09_high.png" alt="ENSO Teleconnections" width="100%" style="max-width: 900px; margin: 2rem 0;">

---

## Collaborative Research

We collaborate extensively with researchers at NCAR, Scripps Institution of Oceanography, JPL, ECMWF, and other leading institutions worldwide. Our work is supported by NSF, DOE, and other federal agencies.

For more details on specific projects or potential collaborations, please [contact us](/contact/).
