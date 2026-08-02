---
title: "BlackBox Labs — TraceForest"
summary: "An explainable detector for AI-generated code, combining stylometric AST features, random forests, SHAP, and developer tooling."
date: 2025-12-01
featured: true
order: 2
kind: "Developer Tool"
metric: "94% accuracy · 1.5K+ extension downloads"
tags: ["Explainable AI", "Random Forests", "Developer Tools"]
links:
  - label: "View VS Code extension"
    href: "https://marketplace.visualstudio.com/items?itemName=BlackBoxLabs.blackbox-labs"
---

## Detecting generated code through style

TraceForest explores code provenance through stylometric and abstract syntax tree features. I developed an explainable random-forest classifier that distinguishes AI-generated code from human-written code with **94% accuracy**.

Instead of returning only a label, the system uses SHAP explanations to identify which features influenced an individual prediction. This makes the result more useful in review and governance settings where a model’s reasoning matters.

## From model to developer workflow

I built Python and Java adapters that return classification probabilities for automated pull-request review workflows. I also extended CodeGPTSensor through encoder fine-tuning with stylometric features, raising accuracy beyond **95%**.

The model was packaged as a VS Code extension and has received more than **1,500 downloads**, turning an experimental classifier into a tool developers can use in their normal workflow.
