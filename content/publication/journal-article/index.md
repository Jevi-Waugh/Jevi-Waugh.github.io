---
title: "Leveraging Persistent Homology for Topological Feature Extraction in Machine Learning: The PH-AML Pipeline"
authors:
- admin
# author_notes:
# - "Equal contribution"
# - "Equal contribution"
date: "2025-04-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "*Journal of Source Themes, 1*(1)"
publication_short: ""

abstract: Conventional Machine learning models often rely on purely statistical data while overlooking the rich global structure of complex datasets. In this paper, we propose PHAML (Persistent Homology-Augmented Machine Learning), a pipeline designed to address this shortcoming by effectively extracting topological descriptors from high-dimensional data and inserting them into standard supervised models. Specifically, we construct simplicial complexes through the Vietoris–Rips filtrations over the input data, compute persistent homology to obtain persistent landscapes and barcodes and convert this data into quantitative feature vectors to feed to ML models such as Support Vector Machine and Logistic Regression. Those topological features are integrated with traditional inputs, yielding an augmented representation of the data featuring global shape and general variations. PHAML is assessed on synthetic and real-world datasets, demonstrating improvements in classification performance, accuracy, and noise robustness and leveraging topological invariants' stability under perturbations. We also compare a baseline model with conventional features with a PHAML model to quantify the performance improvements attributable to persistent homology. Our results underscore the benefit of combining topological descriptors with classical features, highlighting the promise of persistent homology-based machine learning models in which global structure is preserved.

# Summary. An optional shortened abstract.
summary: PHAML enhances machine learning by integrating topological features from persistent homology with traditional data inputs, capturing global structure through Vietoris–Rips filtrations. This approach improves classification accuracy and robustness compared to baseline models using only conventional features.

tags:
- Machine learning & Topological Data analysis
featured: true

# links:
# - name: ""
#   url: ""
url_pdf: http://arxiv.org/pdf/1512.04133v1
url_code: 'https://github.com/Jevi-Waugh/PH-AML'


# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

{{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/).
