Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead((Resolve-Path '.\Resume-new.docx').ProviderPath)
$entry = $zip.GetEntry('word/document.xml')
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$xmlString = $reader.ReadToEnd()
$reader.Close()
$zip.Dispose()

$text = $xmlString -replace '<[^>]+>', ' ' -replace '\s+', ' '
$text | Out-File -FilePath 'resume_text.txt' -Encoding utf8
