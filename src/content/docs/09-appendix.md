---
title: "Quick Command Templates for Claude Cowork"
description: "Copy-and-paste prompt templates for common Claude Cowork tasks including file organization, document processing, data analysis, and content creation workflows."
keywords: ["Claude Cowork templates", "prompt templates", "task automation templates", "file organization prompts", "data analysis prompts"]
slug: "appendix"
order: 9
---

# Quick Command Templates

Copy and customize these prompt templates for common Cowork tasks.

## File Organization

### Sort by File Type
```
Organize all files in [FOLDER] by file type. Create subfolders for
images, documents, videos, and archives. Move each file to its
appropriate folder.
```

### Sort by Date
```
Organize files in [FOLDER] by creation date. Create year/month
subfolders (e.g., 2024/January) and move files accordingly.
```

### Cleanup Old Files
```
Find all files in [FOLDER] older than [X] months. List them for
review, then move to a "To Delete" folder.
```

### Remove Duplicates
```
Scan [FOLDER] for duplicate files based on content (not just name).
Keep the oldest version and move duplicates to a "Duplicates" folder.
```

### Flatten Nested Folders
```
Move all files from nested subfolders in [FOLDER] to the root level.
Add the original folder name as a prefix to avoid naming conflicts.
```

## Document Processing

### PDF to Spreadsheet
```
Extract all tabular data from the PDF files in [FOLDER] and create
a consolidated Excel spreadsheet with one sheet per PDF.
```

### Meeting Notes Summary
```
Read [FILE] and create a professional meeting summary with:
attendees, key discussion points, decisions made, and action items
with owners.
```

### Document Merge
```
Combine all Word documents in [FOLDER] into a single document,
maintaining formatting and adding a table of contents.
```

### Batch Convert to PDF
```
Convert all Word documents and text files in [FOLDER] to PDF format.
Save them in a new "PDFs" subfolder.
```

### Extract Text from Images
```
Use OCR to extract text from all images in [FOLDER]. Save the
extracted text as individual .txt files with matching names.
```

## Data Analysis

### Sales Report
```
Analyze the CSV files in [FOLDER] and create an Excel report
showing: monthly totals, top products, trends, and visualizations.
```

### Comparison Analysis
```
Compare data in [FILE1] and [FILE2]. Identify differences,
similarities, and create a summary report highlighting key findings.
```

### Data Cleanup
```
Clean the data in [FILE]: remove duplicates, standardize formats,
fix common errors, and export as a new clean CSV file.
```

### Statistical Summary
```
Analyze [FILE] and provide: mean, median, mode, standard deviation,
and quartiles for all numeric columns. Include visualizations.
```

## Content Creation

### Presentation from Document
```
Create a PowerPoint presentation based on [FILE]. Include: title
slide, key points as bullet slides, and a summary slide with
professional formatting.
```

### Report from Multiple Sources
```
Read all files in [FOLDER] and synthesize into a comprehensive
report. Include an executive summary, detailed findings, and
recommendations.
```

### Newsletter Draft
```
Create a newsletter draft using content from [FOLDER]. Include
sections for: highlights, updates, upcoming events, and call to action.
```

### Social Media Posts
```
Based on [FILE], create 5 social media posts optimized for
[PLATFORM]. Include relevant hashtags and call to action.
```

## Workflow Automation

### Daily Cleanup
```
Run daily cleanup on [FOLDER]: organize new files by type, archive
files older than 30 days, and generate a summary of changes.
```

### Weekly Report Generation
```
Generate weekly report from files modified in [FOLDER] during the
past 7 days. Summarize changes and highlight important updates.
```

### Inbox Processing
```
Process email exports in [FOLDER]: categorize by sender/topic,
extract action items, and create a prioritized task list.
```

### Backup Organization
```
Organize [FOLDER] as a backup archive: compress old files, create
date-based folders, and generate an index of contents.
```

## Tips for Effective Prompts

### Be Specific About Locations
- Always specify exact folder paths
- Indicate where output should be saved
- Mention if subfolders should be included

### Define Success Criteria
- What should the final result look like?
- What format do you need?
- Any specific requirements?

### Include Constraints
- File types to include/exclude
- Date ranges to consider
- Size limits if relevant

### Provide Context
- Why are you doing this task?
- How will the output be used?
- Any preferences or standards to follow?

### Example: Weak vs. Strong Prompt

**Weak:**
```
Organize my files.
```

**Strong:**
```
Organize all files in ~/Downloads that were created in the last 30
days. Sort them into subfolders by file type (Images, Documents,
Videos, Other). Rename files to include their creation date as
prefix (YYYY-MM-DD_filename). Generate a summary report listing
all changes made.
```
