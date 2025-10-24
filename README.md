## `grrwi`

**Disclaimer:** This project is not affiliated with Amazon or Goodreads, and it is not endorsed by either. Use responsibly in accordance with the [Goodreads Terms of Service](https://www.goodreads.com/about/terms).

An extension to solve a gripe of mine whenever I'm writing a review on [Goodreads](https://goodreads.com): the non‑autocompleted HTML tags for formatting your review. This extension adds autocomplete for those tags.

In the **textarea** for writing your review, type `<` followed by one of the special letters ([default](#lookup)) and the program will complete the tag for you.

#### Default Character‑to‑Tag Lookup Table {#lookup}

| Character | Full tag      | Rendered as |
|-----------|---------------|-------------|
| `t` | `<s></s>` | ~~Strikethrough~~ |
| `i` | `<i></i>` | *Italic* |
| `b` | `<b></b>` | **Bold** |
| `u` | `<u></u>` | <u>Underline</u> |
| `q` | `<blockquote><blockquote>` | > blockquote |
| `e` | `<pre></pre>` | <pre>Exact Spacing</pre> |
| `p` | `<p></p>` | <p>Paragraph</p> |