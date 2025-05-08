import MarkdownIt from 'markdown-it';
import mk from '@iktakahiro/markdown-it-katex';
import 'katex/dist/katex.min.css'; // 引入 KaTeX 的 CSS 样式
// 创建并配置 markdown-it 实例
const md = new MarkdownIt({
    html: true, // 允许 HTML 标签
    breaks: true, // 将换行符转换为 <br>
    linkify: true, // 自动将 URL 转换为链接
    typographer: true, // 启用一些语言中性的替换和引号美化
});

// 注册 KaTeX 插件
md.use(mk, {
    throwOnError: false, // KaTeX 渲染错误时不抛出异常
    errorColor: "red", // 渲染错误时显示的颜色
});

// 添加简单的缓存机制
const cache = new Map<string, string>();

/**
 * 预处理 Markdown 文本，去除 KaTeX 定界符内侧的空格
 * @param text 原始 Markdown 文本
 * @returns 处理后的文本
 */
function preprocessKatexSpacing(text: string): string {
    if (!text) return "";
    // 处理行内公式 $...$
    text = text.replace(/\$([\s\S]*?)\$/g, (match, formula) => {
        return `$${formula.trim()}$`; // 去除公式前后空格
    });
    // 处理块级公式 $$...$$
    text = text.replace(/\$\$([\s\S]*?)\$\$/g, (match, formula) => {
        return `$$${formula.trim()}$$`; // 去除公式前后空格
    });
    return text;
}

/**
 * 渲染 Markdown 和 KaTeX 内容
 * @param text Markdown 格式的文本
 * @returns 渲染后的 HTML
 */
export function renderMarkdown(text: string): string {
    if (!text) return "";

    // 先对文本进行预处理，去除 KaTeX 公式内侧空格
    const preprocessedText = preprocessKatexSpacing(text);

    // 检查缓存 (使用预处理后的文本作为 key)
    if (cache.has(preprocessedText)) {
        return cache.get(preprocessedText)!;
    }

    // 渲染并缓存
    const result = md.render(preprocessedText); // 使用预处理后的文本进行渲染
    cache.set(preprocessedText, result);
    return result;
}

/**
 * 安全渲染 Markdown 和 KaTeX 内容（移除潜在危险的 HTML 标签）
 * 如果需要更安全的渲染方式，可以使用此函数
 * @param text Markdown 格式的文本
 * @returns 渲染后的 HTML
 */
export function renderMarkdownSafe(text: string): string {
    if (!text) return "";
    // 创建一个新的 markdown-it 实例，禁用 HTML
    const safemd = new MarkdownIt({
        html: false,
        breaks: true,
        linkify: true,
        typographer: true,
    }).use(mk, { throwOnError: false, errorColor: "#cc0000" });

    return safemd.render(text);
}

