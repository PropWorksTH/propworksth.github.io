# PropWorks – Deployment Guard

## Canonical Setup (DO NOT CHANGE)
- GitHub Pages: Deploy from a branch
- Branch: main
- Folder: / (root)
- Site type: Pure static HTML
- `.nojekyll` is REQUIRED

## Known Failure Mode
- Browser renders HTML that ≠ repo source
- Images/text appear that do not exist in `index.html`
- Pages shows 404 or stale layout

## Recovery Checklist (DO THIS IN ORDER)
1. GitHub → Settings → Pages
   - Re-select: main / root
2. Wait for status:
   - “Your site is being built” → “published”
3. Check Actions:
   - `Pages build and deployment` must be ✅ success
4. If stuck:
   - Trigger force rebuild (behavioral hard reset)

## Notes
- Do NOT enable Jekyll
- Do NOT change Pages source unless necessary
- If behavior is strange, assume GitHub Pages cache/state first
