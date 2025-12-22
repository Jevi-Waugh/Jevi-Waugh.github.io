---
title: "Fine-Tuning FLAN-T5 for Biomedical Lay Summarisation (BioLaySumm 2025)"
authors:
- admin
date: "2025-01-01T00:00:00Z"

publishDate: "2025-01-01T00:00:00Z"
publication_types: ["Transformers"]



abstract: >
  This project investigates full fine-tuning and parameter-efficient adaptation
  of FLAN-T5 models for translating expert radiology reports into layperson-friendly
  summaries. Using the BioLaySumm 2025 dataset, we compare full fine-tuning,
  Low-Rank Adaptation (LoRA), and a gradient-free Evolution Strategies approach,
  analysing trade-offs between performance, compute cost, and parameter efficiency.

summary: >
  FLAN-T5 fine-tuning and LoRA for biomedical lay summarisation. Full implementation on GitHub.

tags:
- Natural Language Processing
- Large Language Models
- Parameter-Efficient Fine-Tuning
- Summarisation

featured: true

url_code: "https://github.com/Jevi-Waugh/BioLaySumm-Flan-T5/tree/topic-recognition/recognition/FLAN-T5-Jevi-Waugh"
url_pdf: "https://github.com/Jevi-Waugh/BioLaySumm-Flan-T5/tree/topic-recognition/recognition/FLAN-T5-Jevi-Waugh"

image:
  caption: "FLAN-T5 architecture, LoRA adapters, and training results."
  focal_point: ""
  preview_only: false

projects: []
---

{{% callout note %}}
This page provides a **high-level overview** only.  
For full methodology, experiments, training scripts, and results, see the **GitHub repository**.
{{% /callout %}}

## Overview

This project focuses on **biomedical lay summarisation**, translating expert-level
radiology reports into language accessible to non-experts. The work fine-tunes
instruction-tuned **FLAN-T5** models on the **BioLaySumm 2025** dataset and
systematically evaluates different adaptation strategies.

## Methods

Three optimisation strategies are explored:

- **Full Fine-Tuning (FFT)**: updates all model parameters.
- **LoRA (PEFT)**: updates a small set of low-rank adapter weights
  (~2–3% of parameters).
- **Evolution Strategies (ES)**: gradient-free optimisation via population-based
  parameter perturbations.

Performance is evaluated using **ROUGE-1/2/L/Lsum**, with analysis of compute cost,
convergence behaviour, and parameter efficiency.

## Key Findings

- **LoRA achieves comparable or slightly higher ROUGE scores** than full fine-tuning
  while training only ~2–3% of parameters.
- **FLAN-T5-Base + LoRA** provides the best balance of quality and efficiency.
- Evolution Strategies offer fast iteration but underperform gradient-based methods
  for this task.

## Example Visuals

<!-- Replace with actual images if desired -->
![FLAN-T5 encoder-decoder architecture](T5.jpg)
![LoRA adapter integration](lora.png)
![Training curves comparison](lora_vs_fft_comparison_3epochs.png)

## Reproducibility & Code

All experiments were run on **NVIDIA A100 GPUs** using PyTorch and Hugging Face
Transformers. Training scripts, hyperparameters, datasets, and seeds are fully
documented in the repository.

👉 **Full code and documentation:**  
https://github.com/Jevi-Waugh/BioLaySumm-Flan-T5/tree/topic-recognition/recognition/FLAN-T5-Jevi-Waugh
