# Industry Officer report page images

`page-*.png` are rendered from `static/uploads/uqcs-industry-officer-report.pdf`
and drive the page previewer on `/industry-officer/`. They are picked up by a
glob, so adding or removing pages needs no code change: just re-render.

Whenever the PDF changes, regenerate them (requires PyMuPDF, `pip install pymupdf`):

```sh
python -c "
import fitz
d = fitz.open('static/uploads/uqcs-industry-officer-report.pdf')
for i, p in enumerate(d, 1):
    p.get_pixmap(dpi=144).save(f'src/assets/report/page-{i}.png')
"
```

Delete any leftover `page-N.png` beyond the new page count first.
