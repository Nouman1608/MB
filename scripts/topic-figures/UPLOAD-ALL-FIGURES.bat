@echo off
rem Uploads new topic figures to img.marlbridge.com (Cloudflare R2 bucket marlbridge-figures).
rem Put this file in: D:\OneDrive - Learners Academy\Claud projects\images
rem Each run first fetches the latest upload-figures.mjs from GitHub, so this file never needs replacing.
rem Normal run: uploads only the images listed as new on GitHub (quick).
rem Full check of every image: run  UPLOAD-ALL-FIGURES.bat all
setlocal
cd /d "%~dp0"
where node >nul 2>nul || (echo Node.js is not installed. Install it from https://nodejs.org then run this again. & pause & exit /b 1)
echo Getting the latest uploader from GitHub ...
curl.exe -fsSL -o "%~dp0upload-figures.new" "https://raw.githubusercontent.com/Nouman1608/MB/claude/festive-mendel-avo9ej/scripts/topic-figures/upload-figures.mjs" && move /y "%~dp0upload-figures.new" "%~dp0upload-figures.mjs" >nul
if exist "%~dp0upload-figures.new" del "%~dp0upload-figures.new"
if not exist "%~dp0upload-figures.mjs" (echo Could not get upload-figures.mjs. Check the internet connection and run this again. & pause & exit /b 1)
echo.
echo Uploading topic figures to img.marlbridge.com ...
echo.
if /i "%~1"=="all" (node "%~dp0upload-figures.mjs" --all) else (node "%~dp0upload-figures.mjs")
echo.
echo A log is saved in upload-log.txt in this folder.
pause
