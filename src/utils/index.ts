export type ISnippet = {
  lines?: string;
  lang?: string;
  code: string;
}

export const getMarkdownCode = (snippet: ISnippet): string => {
  return "```py " + [snippet.lines, snippet.code].filter(s => !!s).join(' ') + "\n```"
}