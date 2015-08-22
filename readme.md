# Andrew Smith's devtools
## Installing Workbench
Installs software onto supported platforms.

```shell
npm install
npm run installation
```

## Configuring Settings
Configures settings for supported software. Settings are created as symlinks to their counterparts in this repository . This is to aid in updating workbench settings and then easily commit these changes back to the repository.

```shell
npm install
npm run settings
```

## Running Installation and Settings

```shell
npm install
npm start
```

## Supported Software
### OSX

Software      | Installable | Auto-Configure Settings | Has Settings
:------------ | :---------- | :---------------------- | :-----------
alfred        | yes         | no                      | no
atom          | yes         | yes                     | yes
bash          | yes         | yes                     | yes
chrome        | yes         | yes                     | no
git           | yes         | yes                     | yes
python 2.7    | no          | N/A                     | N/A
ruby          | no          | N/A                     | N/A
slack         | yes         | no                      | no
visual studio | no          | N/A                     | N/A
webstorm      | yes         | no                      | yes

### Windows

Software      | Installable | Auto-Configure Settings | Has Settings
:------------ | :---------- | :---------------------- | :-----------
alfred        | no          | N/A                     | N/A
atom          | yes         | yes                     | yes
bash          | yes         | yes                     | yes
chrome        | yes         | no                      | no
git           | yes         | yes                     | yes
python 2.7    | yes         | no                      | no
ruby          | yes         | no                      | no
slack         | yes         | no                      | no
visual studio | no          | N/A                     | N/A
webstorm      | yes         | no                      | yes
