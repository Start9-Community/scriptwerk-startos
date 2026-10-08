import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

const notes = {
  en_US: [
    'Since 0.1.33.',
    '',
    '- Transactions: build a payment from scanned coins, or one recovery transaction per coin whose timelock has opened. Finalize exports the PSBT as a file or a static QR, and imports it as a file or a QR video; USB signs and tells a Ledger from a BitBox. Signatures for the same transaction stay together, and a device signature is shown on the signed transaction. Send the finished transaction to the node, or save it as a file.',
    '- The fee is sat/vB or absolute sats, and the other value is calculated. Change in the dust range warns and still builds. The chosen spend path is written into nSequence and nLockTime.',
    '- The wallet scans receive and change through Electrum without Bitcoin Core, on the production server as well as in dev: derivation and grouped spent history. Loading or importing a policy clears the previous coin list. Open and locked paths can be colored in the policy tree.',
    '- Amounts show only the unit icon. Icon buttons have a tooltip. Ledger connects in the browser again.',
  ].join('\n'),
  de_DE: [
    'Seit 0.1.33.',
    '',
    '- Transaktionen: eine Zahlung aus gescannten Coins bauen, oder je Coin mit offenem Timelock eine Recovery-Transaktion. Finalisieren exportiert die PSBT als Datei oder statischen QR-Code und importiert sie als Datei oder QR-Video; USB signiert und erkennt Ledger und BitBox selbst. Signaturen derselben Transaktion bleiben zusammen, und eine Gerätesignatur steht an der signierten Transaktion. Abschicken sendet sie an die Node oder speichert sie als Datei.',
    '- Die Gebühr ist sat/vB oder absolute sats; der andere Wert wird ausgerechnet. Wechselgeld im Dust-Bereich warnt und baut trotzdem. Der gewählte Ausgabepfad steht in nSequence und nLockTime.',
    '- Die Wallet scannt Empfang und Wechsel über Electrum auch ohne Bitcoin Core, auf dem Produktions-Server genauso wie in der Entwicklung: Ableitung und gruppierte History verbrauchter Adressen. Laden oder Import einer Policy leert die vorherige Coin-Liste. Offene und gesperrte Pfade lassen sich im Baum einfärben.',
    '- Beträge zeigen nur das Einheiten-Icon. Icon-Buttons haben einen Tooltip. Ledger verbindet sich im Browser wieder.',
  ].join('\n'),
  es_ES: [
    'Desde 0.1.33.',
    '',
    '- Transacciones: construye un pago con las monedas escaneadas, o una transacción de recuperación por moneda cuyo bloqueo temporal ya abrió. Finalizar exporta la PSBT como archivo o QR estático y la importa como archivo o vídeo QR; USB firma y distingue un Ledger de un BitBox. Las firmas de la misma transacción se quedan juntas, y una firma del dispositivo aparece en la transacción firmada. Enviar la manda al nodo o la guarda como archivo.',
    '- La comisión es sat/vB o sats absolutos; el otro valor se calcula. El cambio en el rango de dust avisa y aun así construye. La ruta de gasto elegida se escribe en nSequence y nLockTime.',
    '- La cartera escanea recepción y cambio por Electrum sin Bitcoin Core, en el servidor de producción igual que en desarrollo: derivación e historial gastado agrupado. Cargar o importar una policy borra la lista de monedas anterior. Los caminos abiertos y bloqueados se pueden colorear en el árbol.',
    '- Los importes muestran solo el icono de unidad. Los botones de icono tienen un tooltip. Ledger vuelve a conectarse en el navegador.',
  ].join('\n'),
  pl_PL: [
    'Od 0.1.33.',
    '',
    '- Transakcje: zbuduj płatność ze zeskanowanych monet albo jedną transakcję odzyskiwania na monetę, której blokada czasowa już minęła. Finalizacja eksportuje PSBT jako plik albo statyczny kod QR i importuje je jako plik albo wideo QR; USB podpisuje i odróżnia Ledgera od BitBoxa. Podpisy tej samej transakcji zostają razem, a podpis z urządzenia widać przy podpisanej transakcji. Wyślij gotową transakcję do węzła albo zapisz ją jako plik.',
    '- Opłata to sat/vB albo sats absolutne; druga wartość jest liczona. Reszta w zakresie dust ostrzega i i tak buduje. Wybrana ścieżka wydania trafia do nSequence i nLockTime.',
    '- Portfel skanuje odbiór i resztę przez Electrum bez Bitcoin Core, na serwerze produkcyjnym tak samo jak w trybie deweloperskim: wyprowadzanie adresów i pogrupowana historia wydanych. Wczytanie lub import policy czyści poprzednią listę monet. Otwarte i zablokowane ścieżki można pokolorować na drzewie.',
    '- Kwoty pokazują tylko ikonę jednostki. Przyciski z ikonami mają podpowiedź. Ledger znów łączy się w przeglądarce.',
  ].join('\n'),
  fr_FR: [
    'Depuis 0.1.33.',
    '',
    '- Transactions : construire un paiement à partir des pièces scannées, ou une transaction de récupération par pièce dont le verrou temporel est ouvert. Finaliser exporte la PSBT en fichier ou en QR statique et l’importe en fichier ou en vidéo QR ; l’USB signe et distingue un Ledger d’un BitBox. Les signatures d’une même transaction restent ensemble, et une signature de l’appareil apparaît sur la transaction signée. Envoyer la transmet au nœud ou l’enregistre dans un fichier.',
    '- Les frais sont en sat/vB ou en sats absolus ; l’autre valeur est calculée. La monnaie en zone dust avertit et construit quand même. Le chemin de dépense choisi est écrit dans nSequence et nLockTime.',
    '- Le portefeuille scanne réception et monnaie via Electrum sans Bitcoin Core, sur le serveur de production comme en développement : dérivation et historique dépensé regroupé. Charger ou importer une policy vide la liste de pièces précédente. Les chemins ouverts et verrouillés peuvent être colorés dans l’arbre.',
    '- Les montants n’affichent que l’icône d’unité. Les boutons icône ont une infobulle. Ledger se reconnecte dans le navigateur.',
  ].join('\n'),
}

export const current = VersionInfo.of({
  version: '0.1.56:0',
  releaseNotes: notes,
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
