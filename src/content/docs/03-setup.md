---
title: "Setting Up Claude Cowork"
description: "Complete setup guide for Claude Cowork including requirements, folder access configuration, and step-by-step instructions for switching to Cowork mode on macOS."
keywords: ["Claude Cowork setup", "macOS setup", "folder access", "Claude Max subscription", "workspace configuration"]
slug: "setup"
order: 3
---

# Setting Up Claude Cowork

## Requirements

Before you can start using Cowork, ensure you have the following:

### macOS
Currently, Cowork is available exclusively on macOS through the Claude Desktop application. Windows and Linux support may be added in future releases.

### Max Subscription
Cowork requires an active Claude Max plan subscription. This ensures you have access to the compute resources needed for complex agentic tasks. Non-Max users can join the waitlist to request access in the future.

### Internet Connection
A stable internet connection is required for API communication and task execution.

## Granting Folder Access

Cowork requires explicit permission to access folders on your system. This permission model ensures your files remain secure while enabling powerful automation.

### Step 1: Create a Dedicated Workspace

Create a specific folder for Cowork to access, for example:
- `~/CoworkSpace`
- `~/Documents/CoworkProjects`

**Important**: Keep sensitive files outside this folder. Only grant access to folders containing files you want Cowork to work with.

### Step 2: Grant Access When Prompted

When you first use Cowork with a new folder:
1. You'll see a macOS security dialog
2. Click "Allow" to grant folder access
3. Cowork will confirm the permission was granted

### Step 3: Manage Permissions in Settings

You can revoke or modify folder access anytime:
1. Open Claude Desktop
2. Go to Settings → Cowork → Folder Access
3. Add or remove folder permissions as needed

## Switching to Cowork Mode

### Step-by-Step Guide

1. **Open Claude Desktop** - Launch the application on your Mac
2. **Find the Mode Selector** - Look at the top of the interface
3. **Locate the Tabs** - You'll see "Chat" and "Cowork" options
4. **Click Cowork** - Switch to Tasks mode
5. **Enter Your Task** - Type a description of what you want to accomplish
6. **Review the Plan** - Cowork will show its proposed approach
7. **Click Run** - Execute the task

### Important Notes

- The Claude Desktop app must remain open during task execution
- Closing the app will end your session and stop any running tasks
- You can switch back to Chat mode anytime without losing Cowork progress

## Tips for Managing Workspace Folders

### Use Dedicated Folders
Create separate folders for different project types to keep things organized:
- `~/CoworkSpace/Reports`
- `~/CoworkSpace/FileOrganization`
- `~/CoworkSpace/DataAnalysis`

### Isolate Sensitive Data
Never grant Cowork access to folders containing:
- Financial records
- Personal identification documents
- Passwords or credentials
- Confidential work materials

### Organize Input Files
Place files you want Cowork to process in clearly labeled subfolders:
- `~/CoworkSpace/Input` - Files to be processed
- `~/CoworkSpace/Output` - Where results should go

### Review Output Location
Before running tasks, understand where Cowork will save generated files. You can specify output locations in your task description.

## Troubleshooting Common Issues

### "Folder Access Denied"
- Check System Preferences → Security & Privacy → Files and Folders
- Ensure Claude Desktop has permission for your workspace

### "Task Won't Start"
- Verify your Max subscription is active
- Check your internet connection
- Try restarting Claude Desktop

### "Slow Performance"
- Close unnecessary applications
- Ensure sufficient disk space
- Check for large files in the workspace that may slow scanning
