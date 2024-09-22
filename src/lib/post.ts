import type { JsonValue, Node } from "@/types";

export const isValidNode = (node: JsonValue): node is Node => {
  if (typeof node !== "object" || node === null || !("type" in node)) {
    return false;
  }

  const nodeType = (node as { type: string }).type;

  return (
    nodeType === "doc" ||
    nodeType === "paragraph" ||
    nodeType === "blockquote" ||
    nodeType === "text" ||
    nodeType === "codeBlock"
  );
};

export function parseTiptapJsonToHtml(node: Node | undefined): string {
  if (!node) return "";

  switch (node.type) {
    case "doc":
      return node.content.map(parseTiptapJsonToHtml).join("");

    case "blockquote":
      return `<blockquote>${node.content ? node.content.map(parseTiptapJsonToHtml).join("") : ""}</blockquote>`;

    case "codeBlock":
      const languageClass = node.attrs.language
        ? ` class="language-${node.attrs.language}"`
        : "";
      return `<pre${languageClass}><code>${node.content.map(parseTiptapJsonToHtml).join("")}</code></pre>`;

    case "orderedList":
      return `<ol>${node.content ? node.content.map(parseTiptapJsonToHtml).join("") : ""}</ol>`;

    case "image":
      return `<img src="${node.attrs.src}" alt="${node.attrs.alt}" />`;

    case "listItem":
      return `<li>${node.content ? node.content.map(parseTiptapJsonToHtml).join("") : ""}</li>`;

    case "paragraph":
      const content = node.content
        ? node.content.map(parseTiptapJsonToHtml).join("")
        : "";
      const classAttr = content.trim() === "" ? ' class="empty-paragraph"' : "";
      return `<p${classAttr}>${content}</p>`;

    case "text":
      const marks = node.marks ?? [];

      if (marks[0]?.type == "bold") {
        return `<strong>${node.text}</strong>`;
      }

      if (marks[0]?.type == "highlight") {
        return `<mark>${node.text}</mark>`;
      }

      return node.text;
    default:
      return "";
  }
}
