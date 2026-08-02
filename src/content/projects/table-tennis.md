---
title: "Classifying Table-Tennis Swings"
summary: "A supervised-learning study using racket kinematics to classify combined demographic labels across several model families."
date: 2025-05-07
featured: false
order: 6
kind: "Applied ML"
tags: ["KNN", "Support Vector Machines", "Logistic Regression"]
imageKey: "table-tennis"
links:
  - label: "Read report"
    href: "/uploads/ML_Table_tennis_paper.pdf"
  - label: "View dataset"
    href: "https://datadryad.org/dataset/doi:10.5061/dryad.0zpc8677f"
---

## Motion as a classification signal

This report investigates whether racket kinematics captured during table-tennis swings contain enough signal to classify a combined age and gender label.

Using a modified version of a dataset published on Dryad, I compared three supervised approaches: k-nearest neighbours, support-vector machines, and one-vs-rest logistic regression.

The study examines how racket-motion features contribute to classification and how models with different decision boundaries behave on a real-world, multivariate dataset.
