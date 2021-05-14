---
title: CSS animation-fill-mode Property
excerpt: Learning CSS animation-fill-mode Property
image: css-anim-part1.jpg
date: '2021-05-15'
isFeatured: true
---

![CSS photo](/images/posts/css-anim-part1.jpg)

Example

Let the **div** element retain the style values from the last keyframe when the animation ends:

```css
div {
  animation-fill-mode: forwards;
}
```

## Definition and Usage
The **animation-fill-mode property specifies** a style for the element when the animation is not playing (before it starts, after it ends, or both).

CSS animations do not affect the element before the first keyframe is played or after the last keyframe is played. The animation-fill-mode property can override this behavior.

