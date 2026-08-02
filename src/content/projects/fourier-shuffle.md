---
title: "Fourier Shuffle for Semantic Vision"
summary: "A frequency–spatial upsampling method for medical image segmentation that improves validation performance while reducing memory use."
date: 2026-03-01
featured: true
order: 1
kind: "Research"
metric: "+1.77% validation · −13.8% GPU memory"
tags: ["Computer Vision", "Fourier Analysis", "PyTorch"]
imageKey: "research"
links:
  - label: "Research code"
    href: "https://github.com/imwendi/psycho_summer_proj/tree/jevi/segmentation/simpleae3/fourier_shuffle"
  - label: "Talk slides"
    href: "/uploads/psycho.pdf"
---

## Reconstructing detail differently

Standard segmentation decoders rebuild spatial detail through conventional upsampling operations. This research asks whether that reconstruction can instead be learned and organised in the frequency domain.

I designed and implemented a PsychoNet-based decoder and derived **Fourier Shuffle**, a frequency–spatial upsampling operation for medical image segmentation. The architecture was implemented in PyTorch and evaluated with custom training scripts on GPU compute nodes.

## Results

Against a state-of-the-art U-Net baseline on the Synapse dataset, the final model achieved a **1.77% improvement in validation performance** while using **13.8% less GPU memory**.

The project began during my UQ Summer Research Scholarship and led to a separate Research Assistant role. I am now extending the mathematical ideas through a Generalised Kaleidoscope transform for frequency-based autoencoders.

## Collaboration

This work was supervised by Shekhar Chandra and Wendi Ma, with research collaboration from Youssef Hassan. The broader work contributes to ongoing research in frequency-domain methods for semantic vision.
