# 🦊 GamerFox – Online Shop

Ein React-basierter Online-Shop für Videospiele, gestaltet als kinderfreundlicher Gaming-Store der "Gebrüder Fuchs". Mit Nutzer-Login, Warenkorb und echter Stripe-Zahlungsanbindung.

## Live-Demo

🔗 [Hier ansehen](https://fox-online-shop.netlify.app/)

![GamerFox Screenshot](DEIN-DATEINAME.png)

## Features

- 🎮 Produktkatalog mit Kategorie-Filter (PlayStation, X-Box, Nintendo)
- 🔐 Nutzer-Login via Auth0 (E-Mail/Passwort oder Google)
- 🛒 Warenkorb mit Mengenanpassung
- 💳 Echte Zahlungsabwicklung über Stripe (Test-Modus)
- 🔒 Serverseitige Preisvalidierung gegen Manipulation
- 📱 Responsives Design für Smartphones, Tablets und Desktop

## Verwendete Technologien

**Frontend:**
- React 18
- Redux Toolkit
- React Router
- React Bootstrap
- Auth0 (React SDK)
- Stripe (React SDK)

**Backend:**
- Node.js / Express
- Stripe API (serverseitige Zahlungsabwicklung & Preisvalidierung)

## Projektstruktur
```
├── public/                  # Statische Assets (Bilder, Icons)
├── src/
│   ├── assets/               # Hintergrundvideo
│   ├── Components/
│   │   ├── Cart/              # Warenkorb-Komponenten
│   │   ├── Filter/             # Kategorie-Filter
│   │   └── GameComponents/      # Produktkarten
│   ├── data/                 # Produktdaten
│   ├── pics/                 # UI-Icons
│   ├── redux/                # State Management (Cart, Filter)
│   ├── Stripe/                # Checkout-Formular
│   ├── App.js
│   ├── Shop.js
│   ├── Login.js
│   └── Logout.js
└── stripe-server/            # Node/Express-Server für Zahlungsabwicklung
├── data/                   # Serverseitige Produktdaten (Preisvalidierung)
└── index.js
```

## Hinweis

Dieses Projekt läuft aktuell im Stripe-Testmodus. Das Backend (`stripe-server`) ist für den lokalen Betrieb ausgelegt; für den produktiven Einsatz müsste es zusätzlich gehostet werden.

Alle Bilder / KI-Bilder wurden aus offenen Informationsquellen (pinterest.com, freepik.com) zitiert und werden hier ausschließlich zu Informationszwecken präsentiert.

## Contact

Feel free to reach out via GitHub or Instagram:
- GitHub: [@VampireNoob](https://github.com/VampireNoob)
- Instagram: [@vampirenoob](https://www.instagram.com/vampirenoob/)
