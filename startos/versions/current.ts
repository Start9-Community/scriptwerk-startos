import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

const notes = {
  en_US: [
    'Since 0.1.33.',
    '',
    '- The Web UI asks for a username and password before it starts. Run Set Web UI Password and save what it shows. The username is admin. This blocks start on a fresh install and on an update from 0.1.33. The password is backed up with the service; designs are not.',
    '- Transactions: build a payment from scanned coins, or one recovery transaction per coin whose timelock has opened. Finalize exports the PSBT as a file or a static QR, and imports it as a file or a QR video; USB signs and tells a Ledger from a BitBox. Signatures for the same transaction stay together, and a device signature is shown on the signed transaction. Send the finished transaction to the node, or save it as a file.',
    '- The fee is sat/vB or absolute sats, and the other value is calculated. Change in the dust range warns and still builds. The chosen spend path is written into nSequence and nLockTime.',
    '- The wallet scans receive and change through Electrum without Bitcoin Core, on the production server as well as in dev: derivation and grouped spent history. Loading or importing a policy clears the previous coin list. Open and locked paths can be colored in the policy tree.',
    '- Amounts show only the unit icon. Icon buttons have a tooltip. Ledger connects in the browser again.',
    '- One key and no timelock is native SegWit singlesig (wpkh). An imported wsh(pk) stays that descriptor. Finalize can delete the loaded PSBT. Electrum and RPC may be a remote server; the dialog warns that you have to trust it.',
    '- BSMS export matches Nunchuk: the path stays in the descriptor, the next line is "No path restrictions", and the last line is the first receive address. Key names stay in the keys file and wallet.json. Coin tags are in that file and in the labels file; import asks before replacing a tag. Ledger and BitBox JSON files are no longer downloaded.',
  ].join('\n'),
  de_DE: [
    'Seit 0.1.33.',
    '',
    '- Die Web-UI verlangt vor dem Start Benutzername und Passwort. Set Web UI Password ausführen und das Gezeigte speichern. Der Benutzername ist admin. Das blockiert den Start bei einer Neuinstallation und beim Update von 0.1.33. Das Passwort liegt im Backup, die Entwürfe nicht.',
    '- Transaktionen: eine Zahlung aus gescannten Coins bauen, oder je Coin mit offenem Timelock eine Recovery-Transaktion. Finalisieren exportiert die PSBT als Datei oder statischen QR-Code und importiert sie als Datei oder QR-Video; USB signiert und erkennt Ledger und BitBox selbst. Signaturen derselben Transaktion bleiben zusammen, und eine Gerätesignatur steht an der signierten Transaktion. Abschicken sendet sie an die Node oder speichert sie als Datei.',
    '- Die Gebühr ist sat/vB oder absolute sats; der andere Wert wird ausgerechnet. Wechselgeld im Dust-Bereich warnt und baut trotzdem. Der gewählte Ausgabepfad steht in nSequence und nLockTime.',
    '- Die Wallet scannt Empfang und Wechsel über Electrum auch ohne Bitcoin Core, auf dem Produktions-Server genauso wie in der Entwicklung: Ableitung und gruppierte History verbrauchter Adressen. Laden oder Import einer Policy leert die vorherige Coin-Liste. Offene und gesperrte Pfade lassen sich im Baum einfärben.',
    '- Beträge zeigen nur das Einheiten-Icon. Icon-Buttons haben einen Tooltip. Ledger verbindet sich im Browser wieder.',
    '- Ein Key ohne Timelock ist natives SegWit-Singlesig (wpkh). Ein importiertes wsh(pk) bleibt dieser Descriptor. Finalisieren kann die geladene PSBT löschen. Electrum und RPC dürfen ein Remote-Server sein; der Dialog warnt, dass du ihm vertrauen musst.',
    '- BSMS-Export wie Nunchuk: der Pfad bleibt im Descriptor, danach „No path restrictions“, zuletzt die erste Empfangsadresse. Key-Namen nur in der Keys-Datei und in wallet.json. Coin-Tags stehen dort und in der Labels-Datei; der Import fragt, bevor ein Tag überschrieben wird. Ledger- und BitBox-JSON-Dateien entfallen.',
  ].join('\n'),
  es_ES: [
    'Desde 0.1.33.',
    '',
    '- La interfaz web pide usuario y contraseña antes de arrancar. Ejecuta Set Web UI Password y guarda lo que muestra. El usuario es admin. Esto bloquea el arranque en una instalación nueva y al actualizar desde 0.1.33. La contraseña se incluye en la copia de seguridad; los diseños no.',
    '- Transacciones: construye un pago con las monedas escaneadas, o una transacción de recuperación por moneda cuyo bloqueo temporal ya abrió. Finalizar exporta la PSBT como archivo o QR estático y la importa como archivo o vídeo QR; USB firma y distingue un Ledger de un BitBox. Las firmas de la misma transacción se quedan juntas, y una firma del dispositivo aparece en la transacción firmada. Enviar la manda al nodo o la guarda como archivo.',
    '- La comisión es sat/vB o sats absolutos; el otro valor se calcula. El cambio en el rango de dust avisa y aun así construye. La ruta de gasto elegida se escribe en nSequence y nLockTime.',
    '- La cartera escanea recepción y cambio por Electrum sin Bitcoin Core, en el servidor de producción igual que en desarrollo: derivación e historial gastado agrupado. Cargar o importar una policy borra la lista de monedas anterior. Los caminos abiertos y bloqueados se pueden colorear en el árbol.',
    '- Los importes muestran solo el icono de unidad. Los botones de icono tienen un tooltip. Ledger vuelve a conectarse en el navegador.',
    '- Una clave sin bloqueo temporal es singlesig SegWit nativo (wpkh). Un wsh(pk) importado se conserva. Finalizar puede borrar la PSBT cargada. Electrum y RPC pueden ser un servidor remoto; el diálogo avisa de que hay que confiar en él.',
    '- La exportación BSMS sigue a Nunchuk: la ruta queda en el descriptor, la línea siguiente es "No path restrictions" y la última es la primera dirección de recepción. Los nombres de las claves solo van en el archivo de claves y en wallet.json. Las etiquetas de monedas van ahí y en el archivo de etiquetas; la importación pregunta antes de sustituir una etiqueta. Ya no se descargan JSON de Ledger ni BitBox.',
  ].join('\n'),
  pl_PL: [
    'Od 0.1.33.',
    '',
    '- Interfejs WWW pyta o nazwę użytkownika i hasło, zanim wystartuje. Uruchom Set Web UI Password i zapisz to, co pokaże. Nazwa użytkownika to admin. To blokuje start przy świeżej instalacji i przy aktualizacji z 0.1.33. Hasło jest w kopii zapasowej; projekty nie.',
    '- Transakcje: zbuduj płatność ze zeskanowanych monet albo jedną transakcję odzyskiwania na monetę, której blokada czasowa już minęła. Finalizacja eksportuje PSBT jako plik albo statyczny kod QR i importuje je jako plik albo wideo QR; USB podpisuje i odróżnia Ledgera od BitBoxa. Podpisy tej samej transakcji zostają razem, a podpis z urządzenia widać przy podpisanej transakcji. Wyślij gotową transakcję do węzła albo zapisz ją jako plik.',
    '- Opłata to sat/vB albo sats absolutne; druga wartość jest liczona. Reszta w zakresie dust ostrzega i i tak buduje. Wybrana ścieżka wydania trafia do nSequence i nLockTime.',
    '- Portfel skanuje odbiór i resztę przez Electrum bez Bitcoin Core, na serwerze produkcyjnym tak samo jak w trybie deweloperskim: wyprowadzanie adresów i pogrupowana historia wydanych. Wczytanie lub import policy czyści poprzednią listę monet. Otwarte i zablokowane ścieżki można pokolorować na drzewie.',
    '- Kwoty pokazują tylko ikonę jednostki. Przyciski z ikonami mają podpowiedź. Ledger znów łączy się w przeglądarce.',
    '- Jeden klucz bez blokady czasowej to natywny singlesig SegWit (wpkh). Zaimportowane wsh(pk) zostaje tym deskryptorem. Finalizacja może usunąć wczytane PSBT. Electrum i RPC mogą być zdalnym serwerem; okno ostrzega, że trzeba mu ufać.',
    '- Eksport BSMS jak w Nunchuk: ścieżka zostaje w deskryptorze, następna linia to „No path restrictions”, ostatnia to pierwszy adres odbioru. Nazwy kluczy tylko w pliku kluczy i w wallet.json. Tagi monet są tam i w pliku etykiet; import pyta, zanim nadpisze tag. Pliki JSON Ledger i BitBox nie są już pobierane.',
  ].join('\n'),
  fr_FR: [
    'Depuis 0.1.33.',
    '',
    '- L’interface web demande un nom d’utilisateur et un mot de passe avant de démarrer. Lancez Set Web UI Password et enregistrez ce qu’il affiche. Le nom d’utilisateur est admin. Cela bloque le démarrage à la première installation et lors d’une mise à jour depuis 0.1.33. Le mot de passe est dans la sauvegarde ; les projets ne le sont pas.',
    '- Transactions : construire un paiement à partir des pièces scannées, ou une transaction de récupération par pièce dont le verrou temporel est ouvert. Finaliser exporte la PSBT en fichier ou en QR statique et l’importe en fichier ou en vidéo QR ; l’USB signe et distingue un Ledger d’un BitBox. Les signatures d’une même transaction restent ensemble, et une signature de l’appareil apparaît sur la transaction signée. Envoyer la transmet au nœud ou l’enregistre dans un fichier.',
    '- Les frais sont en sat/vB ou en sats absolus ; l’autre valeur est calculée. La monnaie en zone dust avertit et construit quand même. Le chemin de dépense choisi est écrit dans nSequence et nLockTime.',
    '- Le portefeuille scanne réception et monnaie via Electrum sans Bitcoin Core, sur le serveur de production comme en développement : dérivation et historique dépensé regroupé. Charger ou importer une policy vide la liste de pièces précédente. Les chemins ouverts et verrouillés peuvent être colorés dans l’arbre.',
    '- Les montants n’affichent que l’icône d’unité. Les boutons icône ont une infobulle. Ledger se reconnecte dans le navigateur.',
    '- Une clé sans verrou temporel est un singlesig SegWit natif (wpkh). Un wsh(pk) importé reste ce descripteur. Finaliser peut effacer la PSBT chargée. Electrum et RPC peuvent être un serveur distant ; le dialogue avertit qu’il faut lui faire confiance.',
    '- L’export BSMS suit Nunchuk : le chemin reste dans le descripteur, la ligne suivante est « No path restrictions » et la dernière est la première adresse de réception. Les noms de clés ne sont que dans le fichier de clés et wallet.json. Les tags de pièces y sont et dans le fichier d’étiquettes ; l’import demande avant de remplacer un tag. Les fichiers JSON Ledger et BitBox ne sont plus téléchargés.',
  ].join('\n'),
}

export const current = VersionInfo.of({
  version: '0.1.58:0',
  releaseNotes: notes,
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
