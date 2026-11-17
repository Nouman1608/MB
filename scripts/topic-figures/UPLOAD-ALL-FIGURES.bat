@echo off
rem Uploads all topic figures in this folder to img.marlbridge.com (Cloudflare R2 bucket marlbridge-figures).
rem Put this file and upload-figures.mjs together in: D:\OneDrive - Learners Academy\Claud projects\images
rem Missing images are downloaded from GitHub first. Safe to run again: images already online are skipped.
setlocal
cd /d "%~dp0"
where node >nul 2>nul || (echo Node.js is not installed. Install it from https://nodejs.org then run this again. & pause & exit /b 1)
if not exist "%~dp0upload-figures.mjs" (echo upload-figures.mjs must be in the same folder as this file. & pause & exit /b 1)
echo.
echo Uploading topic figures to img.marlbridge.com ...
echo.
node "%~dp0upload-figures.mjs"
echo.
echo A log is saved in upload-log.txt in this folder.
pause
