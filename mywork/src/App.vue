<script setup lang="ts">
import { renderMarkdown } from './untils/markdown'

const markdownText = `
当 $Q_{\\mathrm{B}}=Q_{\\mathrm{S}}$ 即 $t=t_{3}$ 时，器件进人放大模式，之后集电极电流将以指数衰减到零

好的，这是从之前的回复中提取的所有数学公式示例，只包含 Markdown/LaTeX 格式的公式本身，您可以直接复制用于测试。

**行内公式 (Inline Math):**

$x^2 + 2x + 1 = 0$
$E = mc^2$
$\\sum_{i=1}^n i$
$\\int_a^b f(x) dx$
$\\alpha, \\beta, \\gamma, \\delta, \\epsilon, \\theta, \\lambda, \\mu, \\pi, \\rho, \\sigma, \\tau, \\phi, \\psi, \\omega, \\Gamma, \\Delta, \\Theta, \\Lambda, \\Xi, \\Pi, \\Sigma, \\Upsilon, \\Phi, \\Psi, \\Omega$
$Q_{\\mathrm{B}}=Q_{\\mathrm{S}}$
$v_{avg} = a_1 t^2 + a_2 t^3$
$a \\times b \\div c = a \\cdot b / c$
$x \\pm y$
$a < b, a > b, a \\le b, a \\ge b, a \\ne b$
$A \\cup B, C \\cap D, x \\in S, y \\notin T, P \\subset Q, R \\supset U$
$A \\to B, C \\leftarrow D, X \\implies Y, Z \\iff W$
$\\frac{a+b}{c+d}$
$\\dfrac{a+b}{c+d}$
$\\frac{1}{\\frac{a}{b} + c}$
$\\sqrt{x^2 + y^2}$
$\\sqrt[3]{8} = 2$
$\\sqrt[n]{a^n} = |a|$
$x_1^2$
$y^i_j$
$z^{a_{ij}}_{k_l}$
$e^{i\\pi} + 1 = 0$
$\\sum_{i=1}^n i = \\frac{n(n+1)}{2}$
$\\sum_{j=0}^\\infty x^j = \\frac{1}{1-x}$
$\\int_0^1 x^2 dx = \\left[ \\frac{x^3}{3} \\right]_0^1 = \\frac{1}{3}$
$\\iint_D dx dy$
$\\prod_{k=1}^m a_k$
$\\lim_{x \\to \\infty} \\frac{1}{x} = 0$
$\\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} = f'(x)$
$\\left( \\frac{a}{b} \\right)$
$\\left[ \\sum_{i=1}^n i \\right]$
$\\left\\{ x \\mid x > 0 \\right\\}$
$( )$
$[ ]$
$\\{\\}$ (注意：花括号 {} 在 LaTeX 中通常需要转义 \\{ \\} 或使用 \\left\\{ \\right\\} 等命令)
$\\langle \\rangle$
$| |$
$\\| \\|$
$\\lfloor \\rfloor$
$\\lceil \\rceil$
$\\mathrm{sin}(x)$
$\\mathrm{H}_2\\mathrm{O}$
$\\mathbf{v}$
$\\mathbf{F} = m\\mathbf{a}$
$\\mathit{ABC}$
$\\mathbb{R}$
$\\mathbb{C}$
$\\mathbb{Z}$
$\\mathcal{L}$
$\\mathcal{H}$
$\\mathfrak{g}$
$\\text{if } x > 0$
$\\overline{z}$
$\\overline{AB}$
$\\underline{v}$
$\\vec{a}$
$\\overrightarrow{AB}$
$a_1 + a_2 + \\cdots + a_n$
$a_1, a_2, \\ldots, a_n$
$\\infty$
$\\frac{\\partial f}{\\partial x}$
$\\nabla f$
$a \\cdot b$
$a \\times b$
$(f * g)(t)$
$a \\pmod m$
$\\emptyset$
$\\varnothing$
$\\forall$
$\\exists$
$\\neg$
$\\wedge$
$\\vee$
$\\oint$
$a\\,b$
$a\\;b$
$a\\ b$
$a\\quad b$
$a\\qquad b$
$a\\!b$

**块级公式 (Display Math):**


$$
x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}
$$



$$
\\mathcal{F}(\\omega) = \\int_{-\\infty}^{\\infty} f(t) e^{-i\\omega t} dt
$$



$$
\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}
$$



$$
\\begin{bmatrix}
1 & 0 & 0 \\\\
0 & 1 & 0 \\\\
0 & 0 & 1
\\end{bmatrix}
$$



$$
\\begin{pmatrix}
a & b \\\\
c & d
\\end{pmatrix}
$$



$$
\\begin{vmatrix}
a & b \\\\
c & d
\\end{vmatrix} = ad - bc
$$



$$
\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}
\\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix} =
\\begin{pmatrix} 1 \\cdot 5 + 2 \\cdot 7 & 1 \\cdot 6 + 2 \\cdot 8 \\\\ 3 \\cdot 5 + 4 \\cdot 7 & 3 \\cdot 6 + 4 \\cdot 8 \\end{pmatrix} =
\\begin{pmatrix} 19 & 22 \\\\ 43 & 50 \\end{pmatrix}
$$



$$
\\begin{align}
(a+b)^2 &= a^2 + 2ab + b^2 \\\\
(a-b)^2 &= a^2 - 2ab + b^2 \\\\
a^2 - b^2 &= (a+b)(a-b)
\\end{align}
$$



$$
f(x) = \\begin{cases}
x^2 & \\text{if } x \\ge 0 \\\\
-x^2 & \\text{if } x < 0
\\end{cases}
$$



$$
\\begin{pmatrix}
1 \\\\
\\vdots \\\\
n
\\end{pmatrix}
$$



$$
\\begin{pmatrix}
1 & \\cdots & 0 \\\\
\\vdots & \\ddots & \\vdots \\\\
0 & \\cdots & 1
\\end{pmatrix}
$$
`;


const htmlContent = renderMarkdown(markdownText);

</script>

<template>
  <div class="container">
    <h1 class="one">123</h1>
  <div>
    <div v-html="htmlContent"></div>
  </div>
  </div>
</template>

<style scoped>
.container {
  --text-color: red;
}
.one{
 color: var(--text-color);
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
