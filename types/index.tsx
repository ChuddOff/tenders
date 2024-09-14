
export type JsonObject = { [Key in string]?: JsonValue };
type JsonArray = JsonValue[];
export type JsonValue =
  | string
  | number
  | boolean
  | JsonObject
  | JsonArray
  | null
  | Node;

interface TextNode {
  type: "text";
  text: string;
  marks: { type: string }[];
}

interface ParagraphNode {
  type: "paragraph";
  content?: Array<Node>;
}

interface BlockquoteNode {
  type: "blockquote";
  content?: Array<Node>;
}

interface DocumentNode {
  type: "doc";
  content: Array<Node>;
}

interface CodeNode {
  type: "codeBlock";
  attrs: {
    language: string | null;
  };
  content: Array<TextNode>;
}

interface listItem {
  type: "listItem";
  content: Array<Node>;
}

interface orderedList {
  type: "orderedList";
  attrs: {
    start: number;
  };
  content: Array<Node>;
}

interface img {
  type: "image";
  attrs: {
    alt: string;
    src: string;
    title: string;
  };
}

export type Node =
  | TextNode
  | ParagraphNode
  | BlockquoteNode
  | DocumentNode
  | CodeNode
  | orderedList
  | listItem
  | img;