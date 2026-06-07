Git & GitHub

📌 Description

This section contains all theory answers and practical implementations for Git and GitHub fundamentals.


Q1. What is Version Control?

Version control is a system that tracks changes in files over time. It allows me to revert to previous versions, collaborate with others, and manage code efficiently.

---

Q2. Centralised vs Distributed Version Control

- Centralised → one main server (e.g., SVN)
- Distributed → every user has a full copy (e.g., Git)

Git is more flexible and works offline.

---

Q3. Git vs GitHub

- Git → local version control tool
- GitHub → online platform for hosting repositories

---

Q4. Why Use Version Control as a Single Developer?

- Tracks progress
- Allows undoing mistakes
- Provides backup of work

---

Q5. Git Analogy

- Commit → saving a file
- Branch → creating a new version
- Merge → combining changes

---

Q6. Git Snapshots

Git stores snapshots of the entire project instead of just tracking changes.

---

Q7. Other Git Platforms

- GitLab
- Bitbucket
- Azure DevOps

---

Q8. Verify Git Installation

git --version

---

Q9. Configure Git

git config --global user.name "Your Name"
git config --global user.email "your@email.com"

---

Q10. Global vs Local Configuration

- Global → applies to all repositories
- Local → applies to one repository

---

Q11. Matching GitHub Email

If the email does not match GitHub, commits will not link to the user profile.

---

Q12. Git Areas

- Working Directory → where files are edited
- Staging Area → prepared changes
- Repository → committed changes

---

Q13. HEAD

HEAD points to the latest commit. A detached HEAD means not currently on a branch.

---

Q14. Making Commits

Steps:

1. Initialize repository → "git init"
2. Add files → "git add ."
3. Commit → "git commit -m "message""

---

Q15. git diff

Shows differences between files and changes.

---

Q16. Commit Messages

Good commit messages are short, clear, and descriptive.

---

Q17. git log

Displays commit history.

---

Q18. reset vs revert vs restore

- reset → removes commits (dangerous)
- revert → undoes safely
- restore → discards changes

---

Q19. Creating a Repository

A repository is created on GitHub and can be cloned locally.

---

Q20. clone vs fetch vs pull

- clone → copies repo
- fetch → gets updates
- pull → fetch + merge

---

Q21. Upstream

Refers to the original repository being tracked.

---

Q22. Remote Tracking Branch

Tracks the state of branches on GitHub.

---

Q23. Push Commits

git push origin main

---

Q24. README File

A README file documents the project and explains its purpose and usage.

---

Q25. Branch

A branch is a pointer to a commit, allowing parallel development.

---

Q26. Branch Workflow

- Create branch
- Make changes
- Merge back

---

Q27. Merge Conflicts

Occurs when changes overlap in the same file.

---

Q28. merge vs rebase

- merge → keeps history
- rebase → cleaner history

---

Q29. Rebase

Reapplies commits on top of another branch.

---

Q30. Branching Strategies

- Git Flow
- GitHub Flow
- Trunk-based development

---

Q31. GitHub Flow

- Create branch
- Commit changes
- Push to GitHub
- Open pull request
- Merge

---

Q32. Fork & Pull Request

- Fork → copy repository
- Pull request → propose changes

---

Q33. Pull Request Lifecycle

- Create
- Review
- Approve
- Merge

---

Q34. Reviewing Pull Requests

Reviewing involves checking code, suggesting improvements, and approving changes.

---

PRACTICAL IMPLEMENTATION

Repository Setup

git init

---

Adding Files

git add .

---

Commit Changes

git commit -m "Initial commit"

---

Create Branch

git checkout -b feature-branch

---

Merge Branch

git checkout main
git merge feature-branch

---

Push to GitHub

git push origin main
