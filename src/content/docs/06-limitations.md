---
title: "Limitations & Risks of Claude Cowork"
description: "Understand the security considerations, platform limitations, and best practices for safely using Claude Cowork. Learn when to use and when to avoid AI task automation."
keywords: ["Claude Cowork limitations", "AI security risks", "file access security", "macOS only", "best practices"]
slug: "limitations"
order: 6
---

# Limitations & Risks

## Risks of Granting File Access

### Important Security Considerations

Granting Cowork access to your file system gives it significant power. While operations run in a sandbox, you should understand the implications:

#### What Cowork Can Do
- **Read files** - Access content of any file in permitted folders
- **Modify files** - Change, rename, or update existing files
- **Delete files** - Remove files permanently
- **Create files** - Generate new documents, spreadsheets, etc.
- **Execute code** - Run scripts and programs in sandboxed environment

#### Potential Risks
- Mistakes in task descriptions could lead to unintended file changes
- Overly broad folder permissions may expose sensitive data
- Internet access means potential exposure to external resources
- Long-running tasks may make unexpected changes while unmonitored

## Preview Status & Limitations

### Platform Restrictions

| Limitation | Details |
|------------|---------|
| **macOS Only** | Currently unavailable on Windows or Linux |
| **Max Plan Required** | Not available on free or lower-tier plans |
| **Desktop App Only** | No web or mobile version |
| **Session Dependency** | Closing the app stops running tasks |

### Usage Quotas
Cowork tasks consume more of your usage quota compared to standard chat:
- Multi-step tasks use more compute
- Sub-agent coordination adds overhead
- Complex workflows may hit limits faster

### Feature Limitations
- No real-time collaboration with other users
- Limited integration with third-party apps
- Cannot access files outside permitted folders
- No scheduled or automated task runs

## When NOT to Use Cowork

### Highly Sensitive Data
- Financial records with personal information
- Medical or health records
- Legal documents under confidentiality
- Passwords, credentials, or secrets

### Irreversible Operations
- Tasks where mistakes cannot be undone
- Operations on production systems
- Changes to critical business files
- Anything without proper backups

### Real-time Human Judgment Required
- Decisions requiring nuanced context
- Tasks needing approval at each step
- Situations where errors have serious consequences
- Work requiring domain expertise verification

### Simple Queries
- Questions better suited to standard Chat
- Quick one-off requests
- Information lookups
- General conversation

## Best Practices to Mitigate Risks

### 1. Use Dedicated Workspace Folders

Never grant access to your entire home directory. Create isolated folders specifically for Cowork:

```
~/CoworkSpace/
├── Input/       # Files to process
├── Output/      # Generated results
├── Archive/     # Completed work
└── Temp/        # Temporary files
```

### 2. Review Before Executing

Always review Cowork's proposed plan before clicking Run:
- Understand what files will be affected
- Check for any unintended operations
- Verify the output location
- Confirm the scope matches your intention

### 3. Backup Important Files

Before running tasks that modify existing files:
- Create manual backups of critical data
- Use version control for important documents
- Enable Time Machine or similar backup systems
- Keep originals in a separate, unshared folder

### 4. Start with Low-Risk Tasks

Begin with simple, reversible tasks to understand Cowork's behavior:
- File organization (non-destructive)
- Report generation (creates new files)
- Data extraction (read-only source)
- Document formatting (copy then modify)

### 5. Monitor Long-Running Tasks

Periodically check on tasks that take extended time:
- Review progress indicators
- Watch for unexpected behavior
- Be ready to intervene if needed
- Check output quality incrementally

### 6. Limit Folder Scope

Grant access only to folders needed for the specific task:
- Don't give access to entire Documents folder
- Create project-specific workspaces
- Revoke permissions when tasks complete
- Regularly audit folder access settings

## Recovery Options

### If Something Goes Wrong

1. **Stop the task immediately** - Click cancel/stop in the interface
2. **Check the activity log** - See exactly what was changed
3. **Use Time Machine** - Restore files from backup
4. **Review the output folder** - Some operations may be partially complete
5. **Contact support** - Report bugs or unexpected behavior

### Preventing Data Loss

- Enable macOS Time Machine backups
- Use cloud storage with version history
- Create manual snapshots before major operations
- Keep critical files in non-Cowork folders
