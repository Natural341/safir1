# Helper script to run SSH commands
param(
    [string]$Command
)

$env:SSH_ASKPASS = ""
# Use plink or ssh with password via stdin
$result = echo "212121q1q" | ssh -o StrictHostKeyChecking=no -o BatchMode=no halime@194.110.169.55 $Command 2>&1
Write-Output $result
