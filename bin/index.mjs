import fs from 'node:fs/promises';
import path from 'node:path';

function cleanContent(s) {
  return s.replace(/\(images\//g, '(/images/');
 }

async function splitMarkdownByHeading(mdString) {
  const sections = mdString.split(/^#\s+(Lesson.+)/m);
  if (sections.length <= 1) {
    console.log("No level 2 headings found.");
    return;
  }

  const outputDir = 'output';
  await fs.mkdir(outputDir, { recursive: true });

  for (let i = 1; i < sections.length; i += 2) {
    const heading = sections[i].trim();
    const content = sections[i + 1] ? sections[i + 1].trim() : '';
    const filename = `${heading.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]+/g, '_')}.md`; // Replace non-alphanumeric characters with underscores
    const filepath = path.join(outputDir, filename);
    await fs.writeFile(filepath, `## ${heading}\n\n${cleanContent(content)}\n`);
    console.log(`Created file: ${filepath}`);
  }
}


async function TextDecoderStream() {
  // Example usage (for testing, you can replace this with reading from a file later)
  const mdContent = `# Top level content ignored

## Section 1 Title
This is the content of section 1.

## Section 2 Title with special characters !@#$%^&
This is the content of section 2.

## 章节标题
这是第三章节的内容。
`;

  splitMarkdownByHeading(mdContent).catch(console.error);
}

async function main() {
  const string = await fs.readFile('./bin/4.md', 'utf-8');
  await splitMarkdownByHeading(string);
}

main().catch(console.error);