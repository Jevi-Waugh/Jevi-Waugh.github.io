---
title: "PHAML"
summary: "A pipeline that augments conventional machine-learning models with topological descriptors extracted through persistent homology."
date: 2025-04-01
featured: false
order: 5
kind: "Machine Learning"
tags: ["Topological Data Analysis", "Persistent Homology", "Classification"]
imageKey: "phaml"
links:
  - label: "View code"
    href: "https://github.com/Jevi-Waugh/PH-AML"
---

## Adding global shape to conventional features

Conventional machine-learning models often rely on statistical features while overlooking the global shape of complex datasets. PHAML—Persistent Homology-Augmented Machine Learning—explores how topological descriptors can complement those inputs.

The pipeline builds Vietoris–Rips filtrations, computes persistent homology, and converts persistence landscapes and barcodes into quantitative feature vectors. Those vectors are combined with conventional inputs for supervised models such as support-vector machines and logistic regression.

## Evaluation

PHAML compares baseline models using conventional features with models augmented by topological information. The experiments investigate changes in classification behaviour and robustness under noise, with particular attention to the stability of topological invariants under perturbation.
