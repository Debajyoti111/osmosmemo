/** Parse a markdown string for all words prefixed by hashtag(#). Ignore words that are inside parentheses and brackets */
export async function getUniqueTagsFromMarkdownString(markdownString: string) {
  // negative look ahead to rule out any hashtags inside parenthesis
  const hashTags = markdownString.match(/(?!.*(?:\)|]))#([a-z0-9_-]+)/g) || [];
  const textTags = hashTags.map((tag) => tag.split("#")[1]);
  const uniqueTags = [...new Set(textTags)].sort();

  return uniqueTags;
}
