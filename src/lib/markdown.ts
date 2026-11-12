import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";

const docsDirectory = path.join(process.cwd(), "src/content/docs");

export interface DocMetadata {
  title: string;
  answer: string;
  description: string;
  keywords: string[];
  slug: string;
  order: number;
}

export interface DocSource extends DocMetadata {
  content: string;
}

export interface DocData extends DocSource {
  htmlContent: string;
}

export function getDocSlugs(): string[] {
  const fileNames = fs.readdirSync(docsDirectory);
  return fileNames
    .filter((name) => name.endsWith(".md"))
    .map((name) => {
      const fullPath = path.join(docsDirectory, name);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return data.slug as string;
    });
}

export function getAllDocs(): DocMetadata[] {
  const fileNames = fs.readdirSync(docsDirectory);
  const allDocs = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((name) => {
      const fullPath = path.join(docsDirectory, name);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        title: data.title,
        answer: data.answer || data.description,
        description: data.description,
        keywords: data.keywords || [],
        slug: data.slug,
        order: data.order,
      } as DocMetadata;
    });

  return allDocs.sort((a, b) => a.order - b.order);
}

export function getDocSource(slug: string): DocSource | null {
  const fileNames = fs.readdirSync(docsDirectory);

  for (const fileName of fileNames) {
    if (!fileName.endsWith(".md")) continue;

    const fullPath = path.join(docsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    if (data.slug === slug) {
      return {
        title: data.title,
        answer: data.answer || data.description,
        description: data.description,
        keywords: data.keywords || [],
        slug: data.slug,
        order: data.order,
        content,
      };
    }
  }

  return null;
}

export async function getDocBySlug(slug: string): Promise<DocData | null> {
  const doc = getDocSource(slug);
  if (!doc) return null;
  const htmlContent = (await remark().use(remarkGfm).use(html, { sanitize: false }).process(doc.content)).toString();
  return { ...doc, htmlContent };
}
