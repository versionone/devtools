# Bash

## Installation
First, ensure your settings are correct by editing `/bash/_devtools.sh`. You may want to adjust the HOME directories for the various aspects of your development workbench there.

Next, source the `_devtools.sh` file from your `.bashrc` and `.bash_profile` files located in your User directory. This can be done by adding this line (replace `${devtools_directory}` with the directory where you cloned this repository): `source ${devtools_directory}/bash/_devtools.sh`.

## Feature Highlights
### SSH Environment
Remove the need to enter SSH key credentials for every git push/pull and instead enter them once at the start of a shell instance.

### Git Specific
**Reset Hard**: hard reset and a clean; removes all uncommitted changes and any untracked files. Can optionally provide a branch or origin and branch in which to reset your current working branch `HEAD`.
```bash
rh
rh branch_name
rh remote_name branch_name
```

**Reset Soft**: soft reset of uncommitted files, but omits untracked files. Can optionally provide a branch or origin and branch in which to reset your current working branch `HEAD`.
```bash
rs # effectively a `git checkout .`
rs branch_name
rs remote_name branch_name
```

**List Branches**: search local and remote branches by name via a grep pattern.
```bash
lb # list all (remote and local)
lb search_term
```

**New Branch**: creates a new branch and will automatically push to remote (origin), then set local branch's upstream to the newly pushed remote branch. If a `base_branch` is provided, then it will automatically stash your changes and pull the latest of the `base_branch` before creating your new branch from it.
```bash
nb new_branch_name
nb base_branch new_branch_name
```

**Delete Branch**: deletes a branch locally and remotely.
```bash
db branch_name
```

**Pull**: pull via a rebase
```bash
pull
pull branch_name
pull remtoe_name branch_name
```

**Set Branch**: sets a local branch's upstream to a remote branch of the same name. If called with no parameters, will the current working branch name and the origin remote.
```bash
sb
sb branch_name
sb remote_name branch_name
```

**Git Log**: output commit history tree in shell
```bash
glg
```

### Hub integration
If installed, it will alias [hub](https://github.com/github/hub) to `git` on OSX and Windows.
