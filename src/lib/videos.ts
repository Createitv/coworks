export const videoSections = [
  {
    "id": "official",
    "label": "Official Claude videos",
    "description": "Product announcements and demos from Anthropic and Claude."
  },
  {
    "id": "setup",
    "label": "Setup and first tasks",
    "description": "Install or open Cowork, grant access, and check your first deliverable."
  },
  {
    "id": "workflows",
    "label": "Practical workflows",
    "description": "Work through real examples with files, receipts, reports, and meetings."
  },
  {
    "id": "integrations",
    "label": "Plugins and connectors",
    "description": "Connect the right tools and review what each integration can access."
  },
  {
    "id": "compare",
    "label": "Comparisons and explainers",
    "description": "See where Cowork differs from chat, other tools, and early computer use."
  },
  {
    "id": "advanced",
    "label": "Advanced techniques",
    "description": "Build reusable skills, create custom plugins, and automate repeated work."
  }
] as const;

type VideoGuide = {
  slug: string;
  title: string;
  originalTitle: string;
  id: string;
  publisher: string;
  kind: "official" | "community";
  duration: number;
  language?: "pt";
  published: string;
  section: (typeof videoSections)[number]["id"];
  description: string;
  takeaways: readonly string[];
  exercise: string;
  docs: readonly { label: string; href: string }[];
};

export const videoGuides: readonly VideoGuide[] = [
  {
    slug: "introducing-claude-cowork",
    title: "What Claude Cowork does: Anthropic’s introduction",
    originalTitle: "Introducing Cowork: Claude Code for the rest of your work",
    id: "UAmKyyZ-b9E",
    publisher: "Anthropic",
    kind: "official",
    published: "2026-01-12T12:02:22-08:00",
    duration: 69,
    section: "official",
    description: "See how Cowork turns a task brief and source files into finished documents, spreadsheets, and presentations.",
    takeaways: [
      "Notice the difference between asking for advice in chat and specifying a deliverable Cowork can produce.",
      "Look at the inputs as well as the outputs: a useful task names the source material and the finished file.",
      "This launch video shows the original interface. For current access and setup, use the written guide below.",
    ],
    exercise: "Put three sample notes in a test folder and ask for a one-page brief that cites each source by file name. Open the brief and verify each citation before using it.",
    docs: [{ label: "What is Claude Cowork?", href: "/docs/introduction" }, { label: "How Cowork works", href: "/docs/how-it-works" }],
  },
  {
    slug: "getting-started-with-claude-cowork",
    title: "How to get started with Claude Cowork",
    originalTitle: "Getting started with Claude Cowork",
    id: "Lbml7IuGJYw",
    publisher: "Claude",
    kind: "official",
    published: "2026-05-08T07:43:26-07:00",
    duration: 256,
    section: "setup",
    description: "Watch the official walkthrough for opening Cowork and giving it a first task using your files and connected tools.",
    takeaways: [
      "Start with a bounded task that has a clear input, output, and finish line.",
      "Use a sample folder for your first run. Decide which inputs Cowork should be able to read before granting access.",
      "Read the plan before accepting changes and inspect the delivered file against your original brief.",
    ],
    exercise: "Give Cowork a folder of sample receipts. Ask it for a table with date, merchant, amount, and a flag for missing fields. Compare three rows with the originals.",
    docs: [{ label: "Cowork setup and access guide", href: "/docs/setup" }, { label: "Receipt audit with sample data", href: "/docs/receipt-audit" }],
  },
  {
    slug: "delegate-tasks-in-claude-cowork",
    title: "How to delegate a multi-step task in Claude Cowork",
    originalTitle: "Delegate and schedule tasks in Claude Cowork",
    id: "tYOI-WoLS_o",
    publisher: "Claude",
    kind: "official",
    published: "2026-06-21T06:00:25-07:00",
    duration: 257,
    section: "workflows",
    description: "Follow a meeting-prep example that brings context from calendars, email, team chat, and previous notes into one brief.",
    takeaways: [
      "Define the decision or meeting the brief should help with before listing sources.",
      "Have Cowork point to the original message or note for material claims so you can check context quickly.",
      "Run the brief once by hand and review the result before deciding whether the same task should run again.",
    ],
    exercise: "Use a test calendar event and two sample notes. Ask for agenda items, unresolved questions, and a link or file reference for each item.",
    docs: [{ label: "Check connector access", href: "/docs/connector-checklist" }, { label: "Copy a meeting-notes template", href: "/docs/templates" }],
  },
  {
    slug: "claude-cowork-scheduled-tasks",
    title: "How to set up scheduled tasks in Claude Cowork",
    originalTitle: "Scheduled Tasks in Cowork: Set it once, Claude handles the rest",
    id: "b-ntWZqHF78",
    publisher: "Claude",
    kind: "official",
    published: "2026-03-18T18:15:09-07:00",
    duration: 25,
    section: "advanced",
    description: "See how to schedule recurring work in Cowork, then use the checklist below to verify the first run and its output.",
    takeaways: [
      "Choose a cadence and time zone that match when someone will read the output.",
      "Write down the date window and what to do when a source is unavailable or has no updates.",
      "Check run history and open the deliverable. A completed run still needs a check for missing sources or wrong dates.",
    ],
    exercise: "Schedule a test weekly digest from a low-risk source. After the first run, compare the stated reporting window, source links, and run time with the schedule.",
    docs: [{ label: "Scheduled tasks guide and checks", href: "/docs/scheduled-tasks" }, { label: "Reusable workspace instructions", href: "/docs/workspace-instructions" }],
  },
  {
    "slug": "claude-cowork-financial-services-plugins",
    "title": "Claude Cowork financial services plugins explained",
    "id": "foxeK2AXfHQ",
    "originalTitle": "New agents for financial services | Claude Cowork + Claude Managed Agents",
    "publisher": "Claude",
    "published": "2026-05-05T07:51:34-07:00",
    "duration": 64,
    "kind": "official",
    "section": "official",
    "description": "Anthropic’s launch video introduces finance templates for research, risk, client operations, and other controlled workflows.",
    "takeaways": [
      "Separate a Cowork plugin used by a person from a Managed Agent deployed for an organization.",
      "Identify which source systems and data permissions the example would need before trying it.",
      "Treat a generated analysis as a draft; trace figures to their source and keep the usual signoff."
    ],
    "exercise": "With a synthetic company report, write a brief that cites the page and table for each extracted figure. Check every number manually.",
    "docs": [
      {
        "label": "Plugins and connectors",
        "href": "/docs/plugins-and-connectors"
      },
      {
        "label": "Permissions and safety",
        "href": "/docs/limitations"
      }
    ]
  },
  {
    "slug": "claude-cowork-dispatch-from-phone",
    "title": "Dispatch Claude Cowork tasks from your phone",
    "id": "fVIV-L49eBs",
    "originalTitle": "Dispatch tasks to Claude Cowork from anywhere",
    "publisher": "Claude",
    "published": "2026-03-17T14:32:11-07:00",
    "duration": 40,
    "kind": "official",
    "section": "official",
    "description": "See Claude’s Dispatch introduction and how handing off a task from a phone differs from working through it at a desk.",
    "takeaways": [
      "The phone is the handoff point. Decide where the files or connected sources actually live.",
      "Include a deliverable and a clear stop condition in a remote brief so you can review the outcome later.",
      "This launch demo shows an earlier setup flow. Dispatch is now a limited beta for existing users; consult the current guide before trying to pair."
    ],
    "exercise": "If Dispatch is already available to you, send a low-risk note summarization task and verify you can open the result. Otherwise try the same brief in cloud Cowork.",
    "docs": [
      {
        "label": "Dispatch availability and alternatives",
        "href": "/docs/dispatch"
      },
      {
        "label": "How Cowork works",
        "href": "/docs/how-it-works"
      }
    ]
  },
  {
    "slug": "claude-cowork-computer-use",
    "title": "Claude Cowork computer use and desktop controls",
    "id": "NAauIR6JFps",
    "originalTitle": "Put Claude to work on your computer, from anywhere",
    "publisher": "Claude",
    "published": "2026-03-23T14:30:07-07:00",
    "duration": 73,
    "kind": "official",
    "section": "official",
    "description": "Anthropic demonstrates how Claude can interact with desktop software and accept a task from a phone.",
    "takeaways": [
      "Look for places where Claude operates the screen rather than reading a file or calling a connector.",
      "Use an isolated sample workflow so a mistaken click is easy to recover from.",
      "Specify which operations require your approval, especially sends, uploads, and irreversible changes."
    ],
    "exercise": "Ask Claude to inspect a disposable spreadsheet without editing it. Confirm that its report matches the visible rows and the file remains untouched.",
    "docs": [
      {
        "label": "Permissions and safety",
        "href": "/docs/limitations"
      },
      {
        "label": "Troubleshooting",
        "href": "/docs/troubleshooting"
      }
    ]
  },
  {
    "slug": "claude-cowork-beginner-walkthrough",
    "title": "Claude Cowork beginner tutorial: from setup to a first deliverable",
    "id": "vv09DHej6gg",
    "originalTitle": "Claude Cowork for Beginners - Complete Step-by-Step Tutorial",
    "publisher": "Teacher's Tech",
    "published": "2026-03-02T04:01:36-08:00",
    "duration": 1236,
    "kind": "community",
    "section": "setup",
    "description": "Teacher’s Tech walks through getting started and shows how a brief can turn into files such as spreadsheets and presentations.",
    "takeaways": [
      "Follow the setup steps that match your own interface; entry points have changed since this tutorial.",
      "Pick a single deliverable for the first run so you can tell what success looks like.",
      "Compare the finished file against the instructions, including any missing or invented fields."
    ],
    "exercise": "Put two sample documents in a test folder, then request a short summary saved as a separate file. Open it and check both documents were represented.",
    "docs": [
      {
        "label": "Dispatch availability and alternatives",
        "href": "/docs/setup"
      },
      {
        "label": "What is Claude Cowork?",
        "href": "/docs/introduction"
      }
    ]
  },
  {
    "slug": "claude-cowork-settings-and-permissions",
    "title": "Claude Cowork settings: permissions, files, and instructions",
    "id": "1Ikq6VWEOqg",
    "originalTitle": "Claude Cowork Setup — Every Setting Explained",
    "publisher": "Dr Jim Kennedy",
    "published": "2026-05-22T03:10:01-07:00",
    "duration": 362,
    "kind": "community",
    "section": "setup",
    "description": "A guided tour of Cowork settings, covering permission modes, folder access, standing instructions, and connected tools.",
    "takeaways": [
      "Decide how much autonomy the task needs before choosing a permission mode.",
      "Use global instructions for habits that apply everywhere and folder instructions for local constraints.",
      "Start with the smallest useful scope and expand access only when a step actually requires it."
    ],
    "exercise": "In a sample workspace, add a standing rule to save drafts separately. Run a short task and verify the original file was not overwritten.",
    "docs": [
      {
        "label": "Workspace instructions",
        "href": "/docs/workspace-instructions"
      },
      {
        "label": "Permissions and safety",
        "href": "/docs/limitations"
      },
      {
        "label": "Setup and first task",
        "href": "/docs/setup"
      }
    ]
  },
  {
    "slug": "claude-cowork-sales-dashboard",
    "title": "Build a sales dashboard from mixed files with Claude Cowork",
    "id": "YYr7hw5EAtk",
    "originalTitle": "How to Use Claude Cowork (Step-by-Step Tutorial)",
    "publisher": "Kevin Stratvert",
    "published": "2026-08-17T00:00:06-07:00",
    "duration": 581,
    "kind": "community",
    "section": "workflows",
    "description": "Kevin Stratvert combines sales information from PDFs, spreadsheets, and text files into a dashboard, then extends the workflow with Google Drive.",
    "takeaways": [
      "List the fields that must line up across documents before joining them.",
      "Ask for an intermediate table so totals can be checked before the dashboard is styled.",
      "Mark the date range and data sources on the dashboard so readers can tell what is included."
    ],
    "exercise": "Make a miniature dataset with the same account in two sources. Verify the dashboard combines those records once and the total matches the source data.",
    "docs": [
      {
        "label": "Practical use cases",
        "href": "/docs/use-cases"
      },
      {
        "label": "Connector setup checklist",
        "href": "/docs/connector-checklist"
      }
    ]
  },
  {
    "slug": "claude-cowork-organize-notes-and-screenshots",
    "title": "Organize notes and screenshots with Claude Cowork",
    "id": "u4SqXQ-bMIg",
    "originalTitle": "Claude Cowork Tutorial: Organize Files, Notes, and Screenshots Automatically",
    "publisher": "MLTut",
    "published": "2026-01-21T02:32:00-08:00",
    "duration": 447,
    "kind": "community",
    "section": "workflows",
    "description": "A hands-on tutorial shows how Cowork can sort local files, read screenshots, and turn rough notes into structured documents.",
    "takeaways": [
      "Decide whether the task is to classify existing files or create a new summary from their contents.",
      "Give the workspace an explicit destination for generated files so originals stay easy to find.",
      "Mark unreadable screenshot text as uncertain and check it before using it in a summary."
    ],
    "exercise": "Create a sample folder with two notes and one screenshot. Ask for an index and a separate summary, then confirm that the index links back to the original files.",
    "docs": [
      {
        "label": "Safe file organization",
        "href": "/docs/file-organization"
      },
      {
        "label": "Practical use cases",
        "href": "/docs/use-cases"
      }
    ]
  },
  {
    "slug": "claude-cowork-clean-messy-folder",
    "title": "Clean a messy folder with a Cowork sorting plan",
    "id": "K9hriEVdgrQ",
    "originalTitle": "Claude Cowork — How to Organize a Messy Folder with Claude AI",
    "publisher": "HardReset_Pro",
    "published": "2026-05-08T05:31:14-07:00",
    "duration": 384,
    "kind": "community",
    "section": "workflows",
    "description": "This walkthrough demonstrates sorting a mixed local folder, grouping files by type, and applying consistent names.",
    "takeaways": [
      "Start with a proposed move list so you can review the folder structure before changes are made.",
      "Keep duplicate names and ambiguous files in a review queue.",
      "Test rename and move rules on copies. Keep deletion out of the first run."
    ],
    "exercise": "Copy six mixed files into a scratch folder. Ask for old and new paths, then check that the plan includes every file exactly once.",
    "docs": [
      {
        "label": "Safe file organization",
        "href": "/docs/file-organization"
      },
      {
        "label": "Permissions and safety",
        "href": "/docs/limitations"
      }
    ]
  },
  {
    "slug": "claude-cowork-receipts-to-expense-spreadsheet",
    "title": "Turn receipts into an expense spreadsheet with Claude Cowork",
    "id": "J-6FRXt2h3g",
    "originalTitle": "How to Automate Receipt Tracking & Expense Reports Using Claude CoWork (AI Spreadsheet Tutorial)",
    "publisher": "Jerad Larkin, Chicago Title",
    "published": "2026-03-26T12:34:51-07:00",
    "duration": 353,
    "kind": "community",
    "section": "workflows",
    "description": "See a receipt-to-spreadsheet workflow for capturing expense details from receipt files and preparing a reviewable report.",
    "takeaways": [
      "Include a reference to the original file on each expense row.",
      "Keep currency, tax, and total in separate columns and leave illegible fields blank for review.",
      "Flag possible duplicates and compare the total with a hand-checked sample before using the sheet."
    ],
    "exercise": "Use the sample receipt pack in our guide. Seed one duplicate and one unclear total, then check that the resulting sheet flags both.",
    "docs": [
      {
        "label": "Receipt audit with sample files",
        "href": "/docs/receipt-audit"
      },
      {
        "label": "Copy a workflow template",
        "href": "/docs/templates"
      }
    ]
  },
  {
    "slug": "claude-cowork-excel-to-powerpoint",
    "title": "Create report slides from Excel with Claude Cowork and Python",
    "id": "NGlqEHO7uLY",
    "originalTitle": "AUTOMAÇÃO com CLAUDE COWORK + PYTHON: Como usar IA para fazer slides de apresentação de relatório",
    "publisher": "Alura",
    "published": "2026-06-11T11:45:41-07:00",
    "duration": 1278,
    "kind": "community",
    "section": "workflows",
    "description": "A Portuguese-language Alura demo shows how Excel metrics can be turned into a PowerPoint report with a reusable presentation template.",
    "takeaways": [
      "Preserve the source period and units in the slide labels.",
      "Check that percentage changes use the intended baseline, including zero or missing values.",
      "Keep the calculation step separate from styling so a reviewer can audit it."
    ],
    "exercise": "Use two months of synthetic metrics to build a three-slide deck. Recalculate two changes in the workbook and match them against the slides.",
    "docs": [
      {
        "label": "Practical use cases",
        "href": "/docs/use-cases"
      },
      {
        "label": "Measure time and review effort",
        "href": "/docs/productivity"
      }
    ],
    "language": "pt"
  },
  {
    "slug": "claude-cowork-daily-meeting-brief",
    "title": "Create a daily meeting brief with Claude Cowork",
    "id": "KWtE9Kz5DqU",
    "originalTitle": "Use Claude Cowork to Prep for Every Meeting",
    "publisher": "StormWind Studios",
    "published": "2026-06-03T10:05:47-07:00",
    "duration": 195,
    "kind": "community",
    "section": "workflows",
    "description": "StormWind Studios shows how calendar events and Gmail context can become a short briefing for upcoming meetings.",
    "takeaways": [
      "Decide which meetings need preparation instead of treating every calendar entry equally.",
      "Limit the search to a specific time window and request links to the messages used.",
      "Ask for a few decision points per meeting so the brief stays useful at a glance."
    ],
    "exercise": "Choose one sample meeting and two mock email threads. Request an agenda and two open questions, each tied to a source.",
    "docs": [
      {
        "label": "Connector setup checklist",
        "href": "/docs/connector-checklist"
      },
      {
        "label": "Copy a workflow template",
        "href": "/docs/templates"
      }
    ]
  },
  {
    "slug": "claude-cowork-install-and-use-plugins",
    "title": "How to install and use Claude Cowork plugins",
    "id": "rxInH0bQdG8",
    "originalTitle": "How to Use Claude Cowork Plugins (Step-by-Step Tutorial)",
    "publisher": "Ryan & Matt Data Science",
    "published": "2026-03-03T05:38:38-08:00",
    "duration": 868,
    "kind": "community",
    "section": "integrations",
    "description": "A step-by-step community guide introduces using a plugin to add reusable capabilities for a particular type of work.",
    "takeaways": [
      "Check what comes with the plugin before running it: commands, instructions, and optional tool connections can differ.",
      "Review source, access requirements, and which actions change external systems.",
      "Test one simple command and compare its output with the same task run without the plugin."
    ],
    "exercise": "Select a plugin relevant to a sample document task. Run it without customer data and write down the inputs and permissions it requests.",
    "docs": [
      {
        "label": "Plugins and connectors",
        "href": "/docs/plugins-and-connectors"
      },
      {
        "label": "Permissions and safety",
        "href": "/docs/limitations"
      }
    ]
  },
  {
    "slug": "claude-cowork-connectors-guide",
    "title": "Connect Claude Cowork to your apps and verify access",
    "id": "bdZ7KHx0WpU",
    "originalTitle": "How to Use Claude Cowork Connectors (Step-by-Step Tutorial)",
    "publisher": "Ryan & Matt Data Science",
    "published": "2026-03-28T12:21:43-07:00",
    "duration": 767,
    "kind": "community",
    "section": "integrations",
    "description": "This tutorial shows why app connectors matter and how to give Cowork access to sources beyond local files.",
    "takeaways": [
      "Connect only the app the task actually needs.",
      "Confirm the connector can read a known record before giving it a larger search task.",
      "Distinguish source access from write actions such as posting or changing a calendar event."
    ],
    "exercise": "Choose a test document with a unique sentence. Ask Cowork to locate it and cite the source, then compare its answer with the original.",
    "docs": [
      {
        "label": "Connector setup checklist",
        "href": "/docs/connector-checklist"
      },
      {
        "label": "Plugins and connectors",
        "href": "/docs/plugins-and-connectors"
      }
    ]
  },
  {
    "slug": "claude-cowork-gmail-outlook-connectors",
    "title": "Use Gmail and Outlook with Claude Cowork",
    "id": "k4DdS73TP5o",
    "originalTitle": "Claude Cowork Tutorial: How to Connect Claude to Gmail, Outlook | Cowork Monday Week 3",
    "publisher": "Scott Monday",
    "published": "2026-06-01T06:00:34-07:00",
    "duration": 996,
    "kind": "community",
    "section": "integrations",
    "description": "A community walkthrough connects email and calendar tools, then demonstrates inbox search and calendar actions.",
    "takeaways": [
      "Use the account and mailbox your organization has approved for the workflow.",
      "Start with read-only inbox search and check that the result cites the correct message.",
      "Have Cowork propose calendar changes for review before creating or editing events."
    ],
    "exercise": "Make a mock meeting request. Ask Cowork to draft a reply and list a proposed calendar entry without sending or creating either item.",
    "docs": [
      {
        "label": "Connector setup checklist",
        "href": "/docs/connector-checklist"
      },
      {
        "label": "Permissions and safety",
        "href": "/docs/limitations"
      },
      {
        "label": "Copy a workflow template",
        "href": "/docs/templates"
      }
    ]
  },
  {
    "slug": "claude-cowork-vs-chatgpt-work",
    "title": "Claude Cowork vs ChatGPT Work: a side-by-side comparison",
    "id": "cVHqpZpbG-s",
    "originalTitle": "Claude COWORK vs ChatGPT WORK: Which should you use?",
    "publisher": "Eliot Prince",
    "published": "2026-09-15T03:51:01-07:00",
    "duration": 3024,
    "kind": "community",
    "section": "compare",
    "description": "Eliot Prince compares the two work modes, customization, skills, and sample tasks. Use the examples to design your own comparison.",
    "takeaways": [
      "Write the same brief for both tools and provide the same inputs.",
      "Score correctness, citations, and edits needed. A polished answer can still be wrong.",
      "Treat the creator’s result as one benchmark with particular accounts, tools, and data."
    ],
    "exercise": "Try the same synthetic meeting brief in both tools. Count correct sources and record how long you spend checking each output.",
    "docs": [
      {
        "label": "Compare Cowork with other tools",
        "href": "/docs/comparison"
      },
      {
        "label": "Measure time and review effort",
        "href": "/docs/productivity"
      }
    ]
  },
  {
    "slug": "claude-cowork-vs-chat-for-files",
    "title": "When to use Claude Cowork instead of chat",
    "id": "_42sUaf037k",
    "originalTitle": "What Claude Cowork Actually Does (And Why It's Different)",
    "publisher": "Tiago Forte",
    "published": "2026-02-17T09:00:07-08:00",
    "duration": 962,
    "kind": "community",
    "section": "compare",
    "description": "Tiago Forte explains how working with a shared set of files changes the way you delegate research and document tasks.",
    "takeaways": [
      "Use chat when you want to reason through one question; consider Cowork when the task calls for working across files and delivering a result.",
      "Define which files are in scope and what the output should look like.",
      "Check whether delegating saves review time once the work is complete."
    ],
    "exercise": "Turn three sample notes into a decision memo. Compare a normal chat draft with the Cowork output for file references and missing context.",
    "docs": [
      {
        "label": "What is Claude Cowork?",
        "href": "/docs/introduction"
      },
      {
        "label": "Compare Cowork with other tools",
        "href": "/docs/comparison"
      },
      {
        "label": "Practical use cases",
        "href": "/docs/use-cases"
      }
    ]
  },
  {
    "slug": "claude-computer-use-origins",
    "title": "How Claude Computer Use works: the pre-Cowork demo",
    "id": "VDmU0jjklBo",
    "originalTitle": "Anthropic’s Claude Computer Use Is A Game Changer | YC Decoded",
    "publisher": "Y Combinator",
    "published": "2024-12-06T07:00:41-08:00",
    "duration": 474,
    "kind": "community",
    "section": "compare",
    "description": "The direct video from the reference library is a 2024 Y Combinator discussion of Anthropic’s early computer use feature. It gives historical context for later desktop automation.",
    "takeaways": [
      "The video predates Cowork; treat the examples as computer-use history rather than current installation instructions.",
      "Distinguish screen interaction from direct file and connector access.",
      "Compare the proposed desktop task with a narrower API or connector route when available."
    ],
    "exercise": "Pick one spreadsheet task and describe how you would carry it out with screen clicks, a local file, or a connector. Note which route is easiest to verify.",
    "docs": [
      {
        "label": "How Cowork works",
        "href": "/docs/how-it-works"
      },
      {
        "label": "Permissions and safety",
        "href": "/docs/limitations"
      }
    ]
  },
  {
    "slug": "claude-cowork-skills-and-automation",
    "title": "Build a reusable Cowork skill and automate a workflow",
    "id": "YGP706Fcggo",
    "originalTitle": "Claude Cowork Tutorial - Skills, Tasks & Automation",
    "publisher": "Leon van Zyl",
    "published": "2026-04-07T06:01:04-07:00",
    "duration": 1394,
    "kind": "community",
    "section": "advanced",
    "description": "Leon van Zyl demonstrates connecting Gmail, creating a custom skill for inquiries, scheduling tasks, and assigning work through Dispatch.",
    "takeaways": [
      "Keep the reusable policy in the skill and supply the situation-specific details with each run.",
      "Test the workflow once on synthetic inquiries before setting a schedule.",
      "Start by producing drafts. Review edge cases before enabling any external action."
    ],
    "exercise": "Make a sample skill for classifying three fictional requests. Compare its classifications with a prepared answer key and refine the instructions.",
    "docs": [
      {
        "label": "Workspace instructions",
        "href": "/docs/workspace-instructions"
      },
      {
        "label": "Scheduled tasks",
        "href": "/docs/scheduled-tasks"
      },
      {
        "label": "Copy a workflow template",
        "href": "/docs/templates"
      }
    ]
  },
  {
    "slug": "build-claude-cowork-custom-plugin",
    "title": "Build a custom plugin for Claude Cowork",
    "id": "WtI6P1jum_o",
    "originalTitle": "How to Build a Custom Plugin for Claude Cowork from Scratch",
    "publisher": "SH AI Academy",
    "published": "2026-05-14T19:30:15-07:00",
    "duration": 677,
    "kind": "community",
    "section": "advanced",
    "description": "A community walkthrough introduces building a Cowork plugin that calls external tools through MCP.",
    "takeaways": [
      "Choose a single use case and write down the inputs and output the plugin should accept.",
      "Test external tools independently with minimal permissions and known sample data.",
      "Keep credentials outside prompts and files you might share, and validate error handling before wider use."
    ],
    "exercise": "Prototype a plugin that only reads one test record. Verify what it returns for a missing ID and for access denied.",
    "docs": [
      {
        "label": "Plugins and connectors",
        "href": "/docs/plugins-and-connectors"
      },
      {
        "label": "Connector setup checklist",
        "href": "/docs/connector-checklist"
      },
      {
        "label": "Permissions and safety",
        "href": "/docs/limitations"
      }
    ]
  },
  {
    "slug": "claude-cowork-cash-flow-forecast",
    "title": "Build a 13-week cash forecast with Claude Cowork",
    "id": "jniC3qf_5oE",
    "originalTitle": "How I Built a 13-Week Cash Forecast in 20 Minutes with Claude Cowork (Full Tutorial)",
    "publisher": "Sunny Israni",
    "published": "2026-06-11T11:01:13-07:00",
    "duration": 1284,
    "kind": "community",
    "section": "advanced",
    "description": "Sunny Israni walks through using Cowork to build a cash forecast. The exercise below uses synthetic numbers for workbook review.",
    "takeaways": [
      "Separate input assumptions, formulas, and output schedules so each is auditable.",
      "Check that weekly opening cash equals the previous week’s closing balance.",
      "Run a changed payment-date scenario and trace the difference through the workbook."
    ],
    "exercise": "Use a synthetic opening balance and a few inflows and outflows. Check the first three weeks and one delayed-payment scenario by hand.",
    "docs": [
      {
        "label": "Practical use cases",
        "href": "/docs/use-cases"
      },
      {
        "label": "Receipt audit with sample files",
        "href": "/docs/receipt-audit"
      },
      {
        "label": "Permissions and safety",
        "href": "/docs/limitations"
      }
    ]
  },
];

export const videoPath = (video: VideoGuide) => `/videos/${video.slug}`;
export const videoThumbnail = (video: VideoGuide) => `https://i.ytimg.com/vi_webp/${video.id}/hqdefault.webp`;
export const videoPlayer = (video: VideoGuide) => `https://www.youtube-nocookie.com/embed/${video.id}`;
export const videoSource = (video: VideoGuide) => `https://www.youtube.com/watch?v=${video.id}`;

export function videoRuntime(seconds: number) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}
