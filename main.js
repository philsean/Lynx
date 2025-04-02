$jsonParse[$getVar[blacklist;$authorID]]
$if[$getVar[blacklist;$authorID]!={}]
  $if[$json[time]>=$getTimestamp]
    $reply
( 🛡️ ) › Você foi banido de usar meu sistema, caso ache que seu banimento foi injusto, contate `$username[$botOwnerID]`.
>>> **Motivo:** `$unescape[$json[reason]]`
**Tempo:**$try <t:$json[time]:R> $c[$sub[$json[time];1]] $catch `Indeterminado.` $endtry
    $stop
  $endif
$endif

$httpGet[$getVar[bot.tr]]
