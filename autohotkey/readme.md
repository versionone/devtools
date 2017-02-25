# AutoHotKey
Executables in `./autohotkey/dist`:

* BDD Test Naming Mode: toggle a mode to replace ` ` with `_` (spaces) to make writing BDD nUnit specs easier.

## BDD Test Naming Mode Usage
Run the executable `./autohotkey/dist/bdd_test_naming_mode.exe` as administrator (assuming Visual Studio is run as administrator also). This will show a new icon in your Windows tray. To turn on, press `Ctrl-Alt-t`. Any ` ` will now be repalced with a `_`; allowing you to type your specs like a sentence. To turn off, press `Enter` or `Esc`. You will notice the icon in the tray turn black when in this mode and gray out when disabled, so it is worth settting the icon to always appear in the Windows Tray for easy idenfication.

**Note**, setup a Windows Scheduled Task to automatically run this exe when logging in. Be sure to run the exe as administrator (otherwise it will not be able to interact with Visual Studio).
