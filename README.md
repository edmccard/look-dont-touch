# Look, Don't Touch

### What

Makes the active editor read-only if it is editing a file outside the current workspace.

- Global userdata files (for example, settings.json or keybindings.json)
  are not affected.
- If you make an editor writable, and modify its contents, it will stay writable until
  it is no longer dirty.
- _This extension never automatically makes an editor writable._

### Why

If you modify a file from another workspace, and its relevant extensions
are disabled in the current workspace, it may not be correctly linted or
formatted.

This extension occupies the middle ground between "never do that" and "YOLO".

### Known Issues

- `files.readOnlyExclude` is ignored.
- If a file outside the workspace is opened, and its folder is then added to the workspace,
  its editor is not automatically made writable.