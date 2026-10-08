export const short = {
  en_US: 'Design Bitcoin miniscript policies, then build and send',
  es_ES: 'Diseña políticas miniscript de Bitcoin, luego construye y envía',
  de_DE: 'Bitcoin-Miniscript-Policies entwerfen, dann bauen und senden',
  pl_PL: 'Projektuj polityki miniscript Bitcoina, potem buduj i wysyłaj',
  fr_FR:
    'Concevez des politiques miniscript Bitcoin, puis construisez et envoyez',
}

export const long = {
  en_US:
    'Scriptwerk is a studio for Bitcoin miniscript wallets. Build a spending policy in stages, inspect the descriptor and its checksum, assign keys, print a recovery sheet, and register the policy on a Ledger or BitBox. With Bitcoin on this server it checks descriptors against your own node, and with Fulcrum or Electrs it can list the coins a watch-only version of the policy holds. From those coins you can build a transaction, sign it on the device, and send it. No seed is stored.',
  es_ES:
    'Scriptwerk es un estudio para monederos miniscript de Bitcoin. Construye una política de gasto por etapas, inspecciona el descriptor y su suma de verificación, asigna claves, imprime una hoja de recuperación y registra la política en un Ledger o BitBox. Con Bitcoin en este servidor comprueba los descriptores con tu propio nodo, y con Fulcrum o Electrs puede listar las monedas que posee una versión de solo lectura de la política. Con esas monedas puedes construir una transacción, firmarla en el dispositivo y enviarla. No guarda ninguna semilla.',
  de_DE:
    'Scriptwerk ist ein Studio für Bitcoin-Miniscript-Wallets. Baue eine Ausgaberegel in Stufen, prüfe den Deskriptor und seine Prüfsumme, weise Schlüssel zu, drucke ein Wiederherstellungsblatt und registriere die Policy auf einem Ledger oder BitBox. Mit Bitcoin auf diesem Server prüft es Deskriptoren gegen den eigenen Node, und mit Fulcrum oder Electrs kann es die Coins einer Watch-only-Version der Policy auflisten. Aus diesen Coins lässt sich eine Transaktion bauen, auf dem Gerät signieren und abschicken. Kein Seed.',
  pl_PL:
    'Scriptwerk to studio dla portfeli miniscript Bitcoina. Buduj politykę wydawania etapami, sprawdzaj deskryptor i jego sumę kontrolną, przypisuj klucze, drukuj arkusz odzyskiwania i rejestruj politykę na Ledgerze lub BitBoxie. Z Bitcoinem na tym serwerze sprawdza deskryptory na własnym węźle, a z Fulcrum lub Electrs może wypisać monety posiadane przez wersję polityki tylko do odczytu. Z tych monet można zbudować transakcję, podpisać ją na urządzeniu i wysłać. Nie przechowuje seeda.',
  fr_FR:
    'Scriptwerk est un studio pour les portefeuilles miniscript Bitcoin. Construisez une politique de dépense par étapes, inspectez le descripteur et sa somme de contrôle, attribuez des clés, imprimez une fiche de récupération et enregistrez la politique sur un Ledger ou un BitBox. Avec Bitcoin sur ce serveur, il vérifie les descripteurs auprès de votre propre nœud, et avec Fulcrum ou Electrs il peut lister les pièces détenues par une version en lecture seule de la politique. À partir de ces pièces vous pouvez construire une transaction, la signer sur l’appareil et l’envoyer. Aucune seed n’est stockée.',
}

export const bitcoindDescription = {
  en_US:
    'Checks descriptors and derives addresses on your own node instead of a remote one.',
  es_ES:
    'Comprueba descriptores y deriva direcciones en tu propio nodo en lugar de uno remoto.',
  de_DE:
    'Prüft Deskriptoren und leitet Adressen auf dem eigenen Node statt auf einem entfernten ab.',
  pl_PL:
    'Sprawdza deskryptory i wyprowadza adresy na własnym węźle zamiast na zdalnym.',
  fr_FR:
    'Vérifie les descripteurs et dérive les adresses sur votre propre nœud plutôt que sur un nœud distant.',
}

export const fulcrumDescription = {
  en_US:
    'Lists the coins a watch-only policy holds. Preferred over Electrs when both are installed.',
  es_ES:
    'Lista las monedas que posee una política de solo lectura. Se prefiere a Electrs cuando ambos están instalados.',
  de_DE:
    'Listet die Coins einer Watch-only-Policy auf. Wird Electrs vorgezogen, wenn beide installiert sind.',
  pl_PL:
    'Wypisuje monety posiadane przez politykę tylko do odczytu. Preferowany nad Electrs, gdy oba są zainstalowane.',
  fr_FR:
    'Liste les pièces détenues par une politique en lecture seule. Préféré à Electrs lorsque les deux sont installés.',
}

export const electrsDescription = {
  en_US:
    'Lists the coins a watch-only policy holds when Fulcrum is not installed.',
  es_ES:
    'Lista las monedas que posee una política de solo lectura cuando Fulcrum no está instalado.',
  de_DE:
    'Listet die Coins einer Watch-only-Policy auf, wenn Fulcrum nicht installiert ist.',
  pl_PL:
    'Wypisuje monety posiadane przez politykę tylko do odczytu, gdy Fulcrum nie jest zainstalowany.',
  fr_FR:
    "Liste les pièces détenues par une politique en lecture seule lorsque Fulcrum n'est pas installé.",
}
