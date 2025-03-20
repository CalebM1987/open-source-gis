export type ISnippet = {
  lines?: string;
  lang?: string;
  code: string;
}

export const getMarkdownCode = (snippet: ISnippet): string => {
  return "```py " + [snippet.lines, snippet.code].filter(s => !!s).join(' ') + "\n```"
}

const publicPath = import.meta.env.VITE_PUBLIC_PATH ?? ''
export const getAssetPath = (path: string) => new URL(path.startsWith('../') ? path: `../assets/${path}`, import.meta.url).href