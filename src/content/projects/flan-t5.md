---
title: "FLAN-T5 for Biomedical Lay Summarisation"
summary: "A comparison of full fine-tuning, LoRA, and evolution strategies for translating specialist biomedical reports into accessible summaries."
date: 2025-10-01
featured: true
order: 4
kind: "NLP"
metric: ">70% ROUGE · 2–3% trainable parameters with LoRA"
tags: ["Transformers", "LoRA", "Biomedical NLP"]
imageKey: "flan-t5"
links:
  - label: "View code"
    href: "https://github.com/Jevi-Waugh/BioLaySumm-Flan-T5/tree/topic-recognition/recognition/FLAN-T5-Jevi-Waugh"
---

## Making specialist language accessible

This project fine-tunes instruction-tuned FLAN-T5 models on the BioLaySumm 2025 dataset to translate expert biomedical reports into summaries that non-specialists can understand.

I compared three adaptation strategies:

- **Full fine-tuning**, updating every model parameter.
- **Low-Rank Adaptation**, training approximately 2–3% of model parameters.
- **Evolution Strategies**, using gradient-free population-based optimisation.

## Findings

Models were evaluated with ROUGE-1, ROUGE-2, ROUGE-L, and ROUGE-Lsum. The experiments achieved more than **70% ROUGE performance** across held-out evaluation metrics.

FLAN-T5 Base with LoRA provided the strongest balance between output quality and compute efficiency, matching or slightly exceeding full fine-tuning while updating only a small fraction of the model.

Experiments were implemented with PyTorch and Hugging Face Transformers and run with mixed precision on NVIDIA A100 GPUs.
